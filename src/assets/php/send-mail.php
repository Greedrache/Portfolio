<?php
// CORS Headers für Angular
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=UTF-8');

// Preflight Request behandeln
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Nur POST-Requests erlauben
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// JSON-Daten empfangen
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Fallback für FormData
if (empty($data)) {
    $data = [
        'name' => $_POST['name'] ?? '',
        'email' => $_POST['email'] ?? '',
        'message' => $_POST['message'] ?? ''
    ];
}

// Validierung
$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$message = trim($data['message'] ?? '');

$errors = [];

if (strlen($name) < 3) {
    $errors[] = 'Name muss mindestens 3 Zeichen haben';
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Ungültige E-Mail-Adresse';
}

if (strlen($message) < 10) {
    $errors[] = 'Nachricht muss mindestens 10 Zeichen haben';
}

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'errors' => $errors]);
    exit();
}

// E-Mail-Konfiguration
$to = 'message@tim-thiele.de';
$subject = 'Neue Kontaktanfrage von ' . $name;

// E-Mail-Body erstellen
$emailBody = "
===========================================
NEUE KONTAKTANFRAGE VON DEINER WEBSITE
===========================================

Name: $name
E-Mail: $email

Nachricht:
-------------------------------------------
$message
-------------------------------------------

Gesendet am: " . date('d.m.Y H:i:s') . "
";

// E-Mail-Header
$headers = [
    'From' => $email,
    'Reply-To' => $email,
    'X-Mailer' => 'PHP/' . phpversion(),
    'Content-Type' => 'text/plain; charset=UTF-8'
];

$headerString = '';
foreach ($headers as $key => $value) {
    $headerString .= "$key: $value\r\n";
}

// E-Mail senden
$mailSent = mail($to, $subject, $emailBody, $headerString);

if ($mailSent) {
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'E-Mail erfolgreich gesendet']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'E-Mail konnte nicht gesendet werden']);
}
?>
