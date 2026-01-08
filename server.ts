import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import bootstrap from './src/main.server';
import nodemailer from 'nodemailer';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(serverDistFolder, 'index.server.html');

  const commonEngine = new CommonEngine();

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  // JSON Body Parser für API-Endpunkte
  server.use(express.json());

  // E-Mail API Endpunkt
  server.post('/api/send-mail', async (req, res): Promise<void> => {
    const { name, email, message } = req.body;

    // Validierung
    if (!name || name.length < 3) {
      res.status(400).json({ success: false, error: 'Name muss mindestens 3 Zeichen haben' });
      return;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      res.status(400).json({ success: false, error: 'Ungültige E-Mail-Adresse' });
      return;
    }
    if (!message || message.length < 10) {
      res.status(400).json({ success: false, error: 'Nachricht muss mindestens 10 Zeichen haben' });
      return;
    }

    try {
      // Gmail SMTP Transporter
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'thieletim15@gmail.com',
          pass: 'jlrb maoq iwaz aceq'
        }
      });

      const mailOptions = {
        from: `"Portfolio Kontakt" <thieletim15@gmail.com>`,
        to: 'message@tim-thiele.de',
        replyTo: email,
        subject: `Neue Kontaktanfrage von ${name}`,
        text: `
===========================================
NEUE KONTAKTANFRAGE VON DEINER WEBSITE
===========================================

Name: ${name}
E-Mail: ${email}

Nachricht:
-------------------------------------------
${message}
-------------------------------------------

Gesendet am: ${new Date().toLocaleString('de-DE')}
        `,
        html: `
          <h2>Neue Kontaktanfrage von deiner Website</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>E-Mail:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Nachricht:</strong></p>
          <p style="background: #f5f5f5; padding: 15px; border-radius: 5px;">${message.replace(/\n/g, '<br>')}</p>
          <hr>
          <small>Gesendet am: ${new Date().toLocaleString('de-DE')}</small>
        `
      };

      await transporter.sendMail(mailOptions);
      res.json({ success: true, message: 'E-Mail erfolgreich gesendet' });
    } catch (error) {
      console.error('E-Mail Fehler:', error);
      res.status(500).json({ success: false, error: 'E-Mail konnte nicht gesendet werden' });
    }
  });

  // Serve static files from /browser
  server.get('*.*', express.static(browserDistFolder, {
    maxAge: '1y'
  }));

  // All regular routes use the Angular engine
  server.get('*', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;

    commonEngine
      .render({
        bootstrap,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: browserDistFolder,
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
      })
      .then((html) => res.send(html))
      .catch((err) => next(err));
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
