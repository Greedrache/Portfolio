import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

export type Language = 'en' | 'de';

export interface Translations {
  [key: string]: {
    en: string;
    de: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLang = new BehaviorSubject<Language>('en');
  currentLang$ = this.currentLang.asObservable();

  private translations: Translations = {
    // Header
    'nav.whyMe': { en: 'Why me', de: 'Warum ich' },
    'nav.skills': { en: 'Skills', de: 'Fähigkeiten' },
    'nav.projects': { en: 'Projects', de: 'Projekte' },
    'nav.contact': { en: 'Contact', de: 'Kontakt' },

    // Start Section
    'start.title': { en: 'FRONTEND DEVELOPER', de: 'FRONTEND ENTWICKLER' },

    // Why Me Section
    'whyMe.title': { en: 'Why me', de: 'Warum ich' },
    'whyMe.location.first': { en: 'I am', de: 'Ich wohne' },
    'whyMe.location.second': { en: 'located in Montabaur..|', de: 'in Montabaur..|' },
    'whyMe.text': { 
      en: 'What I love about programming is that I can create websites and small games and present them to others. I especially enjoy working on layouts, design, and user interfaces in the frontend. When code doesn\'t work, I remain patient and often work intensively through problems until I find a solution. My goal is to start my career as a frontend developer with a long-term perspective as a full-stack developer.',
      de: 'Was ich am Programmieren liebe, ist, dass ich Websites und kleine Spiele erstellen und sie anderen präsentieren kann. Besonders gerne arbeite ich an Layouts, Design und Benutzeroberflächen im Frontend. Wenn Code nicht funktioniert, bleibe ich geduldig und arbeite oft intensiv an Problemen, bis ich eine Lösung finde. Mein Ziel ist es, meine Karriere als Frontend-Entwickler zu starten, mit einer langfristigen Perspektive als Full-Stack-Entwickler.'
    },
    'whyMe.contact': { en: 'Let\'s talk', de: 'Lass uns reden' },

    // Skills Section
    'skills.title': { en: 'My Skills', de: 'Meine Fähigkeiten' },
    'skills.learning': { en: 'I am currently learning', de: 'Ich lerne gerade' },
    'skills.motivation': { 
      en: 'I\'m motivated by continuously improving my skills and understanding how frontend and backend work together. While my focus is frontend, I learn Python as a complementary skill for more holistic development.',
      de: 'Mich motiviert es, meine Fähigkeiten kontinuierlich zu verbessern und zu verstehen, wie Frontend und Backend zusammenarbeiten. Während mein Fokus auf Frontend liegt, lerne ich Python als ergänzende Fähigkeit für eine ganzheitlichere Entwicklung.'
    },

    // Projects Section
    'projects.title': { en: 'My Projects', de: 'Meine Projekte' },
    'projects.about': { en: 'About the project', de: 'Über das Projekt' },
    'projects.process': { en: 'How I have organised my work process', de: 'Wie ich meinen Arbeitsprozess organisiert habe' },
    'projects.learned': { en: 'What I have learnt', de: 'Was ich gelernt habe' },
    'projects.technologies': { en: 'Technologies', de: 'Technologien' },
    'projects.liveTest': { en: 'Live Test', de: 'Live Test' },
    'projects.duration.2months': { en: '2 Months', de: '2 Monate' },
    'projects.duration.2weeks': { en: '2 Weeks', de: '2 Wochen' },

    // Project 1: Join
    'projects.join.description': { 
      en: 'Join is a web app that lets you sign up and create tasks. You can manage your tasks by "To Do," "In Progress," and "Done," set priorities, and enter deadlines. You can also add contacts to stay organized together.',
      de: 'Join ist eine Web-App, mit der du dich registrieren und Aufgaben erstellen kannst. Du kannst deine Aufgaben nach "To Do", "In Progress" und "Done" verwalten, Prioritäten setzen und Deadlines eingeben. Du kannst auch Kontakte hinzufügen, um gemeinsam organisiert zu bleiben.'
    },
    'projects.join.learned': { 
      en: 'In this team project, I gained experience working collaboratively with others. I learned how to structure tasks, communicate effectively within a team, and use Git in a shared workflow.',
      de: 'In diesem Teamprojekt habe ich Erfahrung in der Zusammenarbeit mit anderen gesammelt. Ich habe gelernt, wie man Aufgaben strukturiert, effektiv im Team kommuniziert und Git in einem gemeinsamen Workflow nutzt.'
    },
    'projects.join.process': { 
      en: 'I kept the code clean by structuring the project into reusable components, using clear naming conventions, and adding comments where necessary to support teamwork.',
      de: 'Ich habe den Code sauber gehalten, indem ich das Projekt in wiederverwendbare Komponenten strukturiert, klare Namenskonventionen verwendet und bei Bedarf Kommentare hinzugefügt habe, um die Teamarbeit zu unterstützen.'
    },

    // Project 2: El Pollo Loco
    'projects.pollo.description': { 
      en: 'El Pollo Loco is a fun jump-and-run game where you jump on chickens and overcome obstacles. At the end of each round, a giant boss chicken awaits that you must defeat. Speed, timing, and a little strategy are the keys to victory.',
      de: 'El Pollo Loco ist ein lustiges Jump-and-Run-Spiel, bei dem du auf Hühner springst und Hindernisse überwindest. Am Ende jeder Runde wartet ein riesiges Boss-Huhn, das du besiegen musst. Geschwindigkeit, Timing und ein wenig Strategie sind der Schlüssel zum Sieg.'
    },
    'projects.pollo.learned': { 
      en: 'Through this project, I learned how JavaScript classes and modules work together to build structured applications. I also gained a better understanding of game logic and clean code organization.',
      de: 'Durch dieses Projekt habe ich gelernt, wie JavaScript-Klassen und -Module zusammenarbeiten, um strukturierte Anwendungen zu erstellen. Ich habe auch ein besseres Verständnis für Spiellogik und saubere Code-Organisation gewonnen.'
    },
    'projects.pollo.process': { 
      en: 'I organized the project using JavaScript classes and modules, with clear file and variable naming to keep the code maintainable.',
      de: 'Ich habe das Projekt mit JavaScript-Klassen und -Modulen organisiert, mit klaren Datei- und Variablennamen, um den Code wartbar zu halten.'
    },

    // Project 3: Pokedex
    'projects.pokedex.description': { 
      en: 'Pokedex is an interactive website that introduces all Pokémon and loads their information via an API. Here you can discover the characteristics, types, and abilities of each Pokémon. Perfect for expanding your Pokémon knowledge and learning new things about the world of pocket monsters.',
      de: 'Pokedex ist eine interaktive Website, die alle Pokémon vorstellt und ihre Informationen über eine API lädt. Hier kannst du die Eigenschaften, Typen und Fähigkeiten jedes Pokémon entdecken. Perfekt, um dein Pokémon-Wissen zu erweitern und Neues über die Welt der Taschenmonster zu lernen.'
    },
    'projects.pokedex.learned': { 
      en: 'In this project, I learned how to work with APIs and handle asynchronous data. It also helped me understand how to use frameworks and structure applications more efficiently.',
      de: 'In diesem Projekt habe ich gelernt, wie man mit APIs arbeitet und asynchrone Daten handhabt. Es hat mir auch geholfen zu verstehen, wie man Frameworks nutzt und Anwendungen effizienter strukturiert.'
    },
    'projects.pokedex.process': { 
      en: 'The project is structured into reusable components with clear naming and readable code to ensure easy maintenance and scalability.',
      de: 'Das Projekt ist in wiederverwendbare Komponenten mit klarer Benennung und lesbarem Code strukturiert, um einfache Wartung und Skalierbarkeit zu gewährleisten.'
    },

    // Contact Section
    'contact.title': { en: 'Contact me', de: 'Kontaktiere mich' },
    'contact.intro': { 
      en: 'Feel free to contact me if you are interested in collaborating or working as a frontend developer. I support projects with a strong focus on modern UI, clean styling, and user-friendly web interfaces. Together, we can transform ideas into functional and appealing web solutions.',
      de: 'Kontaktiere mich gerne, wenn du an einer Zusammenarbeit interessiert bist oder einen Frontend-Entwickler suchst. Ich unterstütze Projekte mit starkem Fokus auf modernes UI, sauberes Styling und benutzerfreundliche Web-Oberflächen. Gemeinsam können wir Ideen in funktionale und ansprechende Web-Lösungen verwandeln.'
    },
    'contact.yourName': { en: 'Your name', de: 'Dein Name' },
    'contact.yourEmail': { en: 'Your Email', de: 'Deine E-Mail' },
    'contact.yourMessage': { en: 'Your Message', de: 'Deine Nachricht' },
    'contact.privacy': { en: 'I have read the', de: 'Ich habe die' },
    'contact.privacyPolicy': { en: 'privacy policy', de: 'Datenschutzerklärung' },
    'contact.privacyAgree': { en: 'and agree to the processing of my data as outlined.', de: 'gelesen und stimme der Verarbeitung meiner Daten wie beschrieben zu.' },
    'contact.send': { en: 'Send', de: 'Senden' },
    'contact.errorNameShort': { en: 'Name must be at least 3 characters', de: 'Name muss mindestens 3 Zeichen lang sein' },
    'contact.errorEmail': { en: 'Please enter a valid email', de: 'Bitte gib eine gültige E-Mail ein' },
    'contact.errorMessage': { en: 'Message must be at least 10 characters', de: 'Nachricht muss mindestens 10 Zeichen lang sein' },
    'contact.errorPrivacy': { en: 'You must agree to the privacy policy', de: 'Du musst der Datenschutzerklärung zustimmen' },
    'contact.successMessage': { en: 'Thank you! I will get back to you soon.', de: 'Vielen Dank! Ich melde mich bald bei Ihnen.' },

    // Footer
    'footer.legalNotice': { en: 'Legal Notice', de: 'Impressum' },

    // Legal Notice Page
    'legal.back': { en: '← Back', de: '← Zurück' },
    'legal.title': { en: 'Legal Notice', de: 'Impressum' },
    'legal.impressum': { en: 'Imprint', de: 'Impressum' },
    'legal.according': { en: 'Information according to § 5 TMG', de: 'Angaben gemäß § 5 TMG' },
    'legal.contact': { en: 'Contact', de: 'Kontakt' },
    'legal.phone': { en: 'Phone', de: 'Telefon' },
    'legal.email': { en: 'Email', de: 'E-Mail' },
    'legal.liabilityContent.title': { en: 'Liability for Content', de: 'Haftung für Inhalte' },
    'legal.liabilityContent.text1': { 
      en: 'As a service provider, I am responsible for my own content on these pages according to general laws pursuant to § 7 para. 1 TMG. According to §§ 8 to 10 TMG, however, I am not obligated as a service provider to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.',
      de: 'Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.'
    },
    'legal.liabilityContent.text2': { 
      en: 'Liability is only possible from the point in time at which a concrete legal violation becomes known. Upon becoming aware of corresponding legal violations, I will remove this content immediately.',
      de: 'Eine Haftung ist erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.'
    },
    'legal.liabilityLinks.title': { en: 'Liability for Links', de: 'Haftung für Links' },
    'legal.liabilityLinks.text1': { 
      en: 'This website contains links to external websites of third parties, over whose content I have no influence. The respective provider or operator of the pages is always responsible for the content of the linked pages.',
      de: 'Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.'
    },
    'legal.liabilityLinks.text2': { 
      en: 'Upon becoming aware of legal violations, I will remove such links immediately.',
      de: 'Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend entfernen.'
    },
    'legal.copyright.title': { en: 'Copyright', de: 'Urheberrecht' },
    'legal.copyright.text': { 
      en: 'The content and works created by the site operator on these pages are subject to German copyright law.',
      de: 'Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.'
    },
    'legal.privacy.title': { en: 'Privacy Policy', de: 'Datenschutzerklärung' },
    'legal.privacy.general.title': { en: 'General Information', de: 'Allgemeiner Hinweis' },
    'legal.privacy.general.text': { 
      en: 'The protection of your personal data is of particular concern to me. Your data will be treated confidentially and in accordance with legal data protection regulations and this privacy policy.',
      de: 'Der Schutz Ihrer persönlichen Daten ist mir ein besonderes Anliegen. Ihre Daten werden vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung behandelt.'
    },
    'legal.privacy.collection.title': { en: 'Collection and Processing of Personal Data', de: 'Erhebung und Verarbeitung personenbezogener Daten' },
    'legal.privacy.collection.text': { 
      en: 'This website can generally be visited without providing personal data. Personal data is only collected when you voluntarily provide it to me, e.g., via the contact form.',
      de: 'Diese Website kann grundsätzlich ohne Angabe personenbezogener Daten besucht werden. Personenbezogene Daten werden nur erhoben, wenn Sie mir diese freiwillig mitteilen, z. B. über das Kontaktformular.'
    },
    'legal.privacy.contactForm.title': { en: 'Contact Form', de: 'Kontaktformular' },
    'legal.privacy.contactForm.text1': { 
      en: 'When you send me inquiries via the contact form, your information from the form, including the contact data you provide, will be transmitted to me by email and stored for the purpose of processing the inquiry.',
      de: 'Wenn Sie mir per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Formular inklusive der von Ihnen angegebenen Kontaktdaten per E-Mail an mich übermittelt und zum Zweck der Bearbeitung der Anfrage gespeichert.'
    },
    'legal.privacy.contactForm.text2': { 
      en: 'This data will not be passed on without your consent and is used exclusively to process your inquiry.',
      de: 'Diese Daten werden nicht ohne Ihre Einwilligung weitergegeben und ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.'
    },
    'legal.privacy.rights.title': { en: 'Your Rights', de: 'Ihre Rechte' },
    'legal.privacy.rights.intro': { en: 'You have the right at any time to:', de: 'Sie haben jederzeit das Recht auf:' },
    'legal.privacy.rights.info': { en: 'Information about your stored data', de: 'Auskunft über Ihre gespeicherten Daten' },
    'legal.privacy.rights.correction': { en: 'Correction or deletion', de: 'Berichtigung oder Löschung' },
    'legal.privacy.rights.restriction': { en: 'Restriction of processing', de: 'Einschränkung der Verarbeitung' },
    'legal.privacy.rights.contact': { 
      en: 'You can contact me at any time at the email address provided above.',
      de: 'Hierzu können Sie mich jederzeit unter der oben angegebenen E-Mail-Adresse kontaktieren.'
    },
  };

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const savedLang = localStorage.getItem('language') as Language;
      if (savedLang && (savedLang === 'en' || savedLang === 'de')) {
        this.currentLang.next(savedLang);
      }
    }
  }

  setLanguage(lang: Language) {
    this.currentLang.next(lang);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('language', lang);
    }
  }

  get lang(): Language {
    return this.currentLang.value;
  }

  getLanguage(): Language {
    return this.currentLang.value;
  }

  translate(key: string): string {
    const translation = this.translations[key];
    if (translation) {
      return translation[this.currentLang.value];
    }
    return key;
  }
}
