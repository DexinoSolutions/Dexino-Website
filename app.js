const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
const year = document.querySelector('#year');
const langToggle = document.querySelector('[data-lang-toggle]');

year.textContent = new Date().getFullYear();

const translations = {
  en: {
    'meta.title': 'Dexino Cloud & AI Solutions | Microsoft Cloud, Security & AI',
    'meta.description': 'Dexino Cloud & AI Solutions helps Swiss SMEs with Microsoft Azure, Microsoft 365, IT operations, security and practical AI solutions.',
    'nav.services': 'Services', 'nav.approach': 'Approach', 'nav.clients': 'Clients', 'nav.contact': 'Contact',
    'hero.eyebrow': 'Zurich Region · Microsoft Cloud · AI Infrastructure',
    'hero.title': 'Microsoft Cloud, Security & AI for Swiss businesses.',
    'hero.lead': 'Dexino helps small and medium-sized organisations use Microsoft 365, Azure and practical AI solutions securely, reliably and without unnecessary complexity.',
    'hero.cta1': 'Request an initial consultation', 'hero.cta2': 'View services',
    'trust.secure.title': 'Secure', 'trust.secure.text': 'Your data and identities protected.',
    'trust.reliable.title': 'Reliable', 'trust.reliable.text': 'Cloud operations with clear documentation.',
    'trust.personal.title': 'Personal', 'trust.personal.text': 'Direct support from a local Swiss partner.',
    'problems.eyebrow': 'What we solve', 'problems.title': 'Clear IT support for real business problems.',
    'problems.card1.title': 'Microsoft 365 feels messy', 'problems.card1.text': 'We clean up users, groups, Teams, mailboxes, permissions and security settings.',
    'problems.card2.title': 'Azure needs structure', 'problems.card2.text': 'We help design subscriptions, resource groups, backup, monitoring and governance.',
    'problems.card3.title': 'AI sounds risky', 'problems.card3.text': 'We introduce practical AI carefully, with privacy, access control and clear business value.',
    'services.eyebrow': 'Our services', 'services.title': 'Cloud, operations and AI under one roof.',
    'services.azure.title': 'Microsoft Azure Services', 'services.azure.1': 'Azure architecture and planning', 'services.azure.2': 'Cloud migration support', 'services.azure.3': 'Monitoring and optimisation', 'services.azure.4': 'Backup and disaster recovery',
    'services.m365.title': 'Microsoft 365 Management', 'services.m365.1': 'Users, groups and roles', 'services.m365.2': 'Exchange, Teams and SharePoint', 'services.m365.3': 'Entra ID and MFA', 'services.m365.4': 'Support and staff guidance',
    'services.ops.title': 'IT Operations', 'services.ops.1': 'Proactive administration', 'services.ops.2': 'Maintenance and updates', 'services.ops.3': 'Documentation and reporting', 'services.ops.4': 'Monthly support packages',
    'services.ai.title': 'AI Solutions', 'services.ai.1': 'Private company assistants', 'services.ai.2': 'Document search and knowledge bases', 'services.ai.3': 'Workflow automation', 'services.ai.4': 'Integration with existing systems',
    'services.security.title': 'Security & Compliance', 'services.security.1': 'Security reviews', 'services.security.2': 'Identity and access management', 'services.security.3': 'Microsoft Defender guidance', 'services.security.4': 'Recovery and continuity planning',
    'approach.eyebrow': 'Our approach', 'approach.title': 'Conservative where it matters. Innovative where it helps.',
    'approach.text': 'Swiss organisations need IT that is dependable, understandable and secure. Dexino focuses first on the fundamentals: identity, backup, permissions, documentation and operational stability. AI is then introduced carefully, where it genuinely saves time or improves service quality.',
    'approach.check1': '✓ Microsoft-first architecture', 'approach.check2': '✓ Least-privilege access and MFA', 'approach.check3': '✓ Practical automation, not hype', 'approach.check4': '✓ Clear handover and documentation', 'approach.check5': '✓ Local Swiss support mindset',
    'clients.eyebrow': 'Who we support', 'clients.title': 'Built for SMEs and professional organisations.',
    'clients.1': 'SMEs', 'clients.2': 'Medical practices', 'clients.3': 'Law firms', 'clients.4': 'Schools', 'clients.5': 'Associations', 'clients.6': 'Trade & services',
    'statement.title': 'Your IT partner for the future.',
    'statement.text': 'Whether you need classic IT administration, Microsoft Cloud support or a secure path into AI, Dexino helps you work more securely, efficiently and confidently.',
    'statement.strong': 'Reliable. Competent. Personal.',
    'contact.eyebrow': 'Contact', 'contact.title': 'Let us simplify your IT.',
    'contact.text': 'Send a message for an initial conversation about Microsoft 365, Azure, security or AI solutions for your organisation.',
    'contact.addressLabel': 'Address:', 'contact.emailLabel': 'Business email', 'contact.emailValue': 'Contact us by email', 'contact.websiteLabel': 'Website:',
    'contact.note': 'Initial consultations by email. Responses usually within 1–2 business days.',
    'footer.rights': 'All rights reserved.'
  },
  de: {
    'meta.title': 'Dexino Cloud & AI Solutions | Microsoft Cloud, Sicherheit & KI',
    'meta.description': 'Dexino Cloud & AI Solutions unterstützt Schweizer KMU mit Microsoft Azure, Microsoft 365, IT-Betrieb, Sicherheit und praktischen KI-Lösungen.',
    'nav.services': 'Leistungen', 'nav.approach': 'Ansatz', 'nav.clients': 'Kunden', 'nav.contact': 'Kontakt',
    'hero.eyebrow': 'Region Zürich · Microsoft Cloud · KI-Infrastruktur',
    'hero.title': 'Microsoft Cloud, Sicherheit & KI für Schweizer Unternehmen.',
    'hero.lead': 'Dexino unterstützt kleine und mittlere Organisationen dabei, Microsoft 365, Azure und praktische KI-Lösungen sicher, zuverlässig und ohne unnötige Komplexität einzusetzen.',
    'hero.cta1': 'Erstgespräch anfragen', 'hero.cta2': 'Leistungen ansehen',
    'trust.secure.title': 'Sicher', 'trust.secure.text': 'Ihre Daten und Identitäten geschützt.',
    'trust.reliable.title': 'Zuverlässig', 'trust.reliable.text': 'Cloud-Betrieb mit klarer Dokumentation.',
    'trust.personal.title': 'Persönlich', 'trust.personal.text': 'Direkte Betreuung durch einen lokalen Schweizer Partner.',
    'problems.eyebrow': 'Was wir lösen', 'problems.title': 'Klare IT-Unterstützung für echte Geschäftsprobleme.',
    'problems.card1.title': 'Microsoft 365 ist unübersichtlich', 'problems.card1.text': 'Wir bereinigen Benutzer, Gruppen, Teams, Postfächer, Berechtigungen und Sicherheitseinstellungen.',
    'problems.card2.title': 'Azure braucht Struktur', 'problems.card2.text': 'Wir helfen bei Abonnements, Ressourcengruppen, Backup, Monitoring und Governance.',
    'problems.card3.title': 'KI wirkt riskant', 'problems.card3.text': 'Wir führen praktische KI sorgfältig ein – mit Datenschutz, Zugriffskontrolle und klarem Geschäftsnutzen.',
    'services.eyebrow': 'Unsere Leistungen', 'services.title': 'Cloud, Betrieb und KI aus einer Hand.',
    'services.azure.title': 'Microsoft Azure Services', 'services.azure.1': 'Azure-Architektur und Planung', 'services.azure.2': 'Unterstützung bei Cloud-Migrationen', 'services.azure.3': 'Monitoring und Optimierung', 'services.azure.4': 'Backup und Notfallwiederherstellung',
    'services.m365.title': 'Microsoft 365 Management', 'services.m365.1': 'Benutzer, Gruppen und Rollen', 'services.m365.2': 'Exchange, Teams und SharePoint', 'services.m365.3': 'Entra ID und MFA', 'services.m365.4': 'Support und Mitarbeiterschulung',
    'services.ops.title': 'IT-Betrieb', 'services.ops.1': 'Proaktive Administration', 'services.ops.2': 'Wartung und Updates', 'services.ops.3': 'Dokumentation und Reporting', 'services.ops.4': 'Monatliche Support-Pakete',
    'services.ai.title': 'KI-Lösungen', 'services.ai.1': 'Private Unternehmensassistenten', 'services.ai.2': 'Dokumentensuche und Wissensdatenbanken', 'services.ai.3': 'Workflow-Automatisierung', 'services.ai.4': 'Integration in bestehende Systeme',
    'services.security.title': 'Sicherheit & Compliance', 'services.security.1': 'Sicherheitsüberprüfungen', 'services.security.2': 'Identitäts- und Zugriffsmanagement', 'services.security.3': 'Microsoft Defender Beratung', 'services.security.4': 'Wiederherstellung und Business Continuity',
    'approach.eyebrow': 'Unser Ansatz', 'approach.title': 'Konservativ, wo es zählt. Innovativ, wo es hilft.',
    'approach.text': 'Schweizer Organisationen brauchen IT, die zuverlässig, verständlich und sicher ist. Dexino konzentriert sich zuerst auf die Grundlagen: Identität, Backup, Berechtigungen, Dokumentation und Betriebsstabilität. KI wird danach gezielt eingeführt, wo sie wirklich Zeit spart oder die Servicequalität verbessert.',
    'approach.check1': '✓ Microsoft-first Architektur', 'approach.check2': '✓ Least-Privilege-Zugriff und MFA', 'approach.check3': '✓ Praktische Automatisierung statt Hype', 'approach.check4': '✓ Klare Übergabe und Dokumentation', 'approach.check5': '✓ Lokaler Schweizer Support-Ansatz',
    'clients.eyebrow': 'Wen wir unterstützen', 'clients.title': 'Für KMU und professionelle Organisationen.',
    'clients.1': 'KMU', 'clients.2': 'Arztpraxen', 'clients.3': 'Anwaltskanzleien', 'clients.4': 'Schulen', 'clients.5': 'Vereine', 'clients.6': 'Handel & Dienstleistungen',
    'statement.title': 'Ihr IT-Partner für die Zukunft.',
    'statement.text': 'Ob klassische IT-Administration, Microsoft Cloud Support oder ein sicherer Weg in die KI: Dexino hilft Ihnen, sicherer, effizienter und souveräner zu arbeiten.',
    'statement.strong': 'Zuverlässig. Kompetent. Persönlich.',
    'contact.eyebrow': 'Kontakt', 'contact.title': 'Lassen Sie uns Ihre IT vereinfachen.',
    'contact.text': 'Senden Sie eine Nachricht für ein erstes Gespräch über Microsoft 365, Azure, Sicherheit oder KI-Lösungen für Ihre Organisation.',
    'contact.addressLabel': 'Adresse:', 'contact.emailLabel': 'Geschäftliche Anfrage', 'contact.emailValue': 'E-Mail schreiben', 'contact.websiteLabel': 'Website:',
    'contact.note': 'Erstgespräche per E-Mail. Antworten in der Regel innerhalb von 1–2 Arbeitstagen.',
    'footer.rights': 'Alle Rechte vorbehalten.'
  }
};

function applyLanguage(lang) {
  const dict = translations[lang] || translations.en;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-content]').forEach(el => {
    const key = el.getAttribute('data-i18n-content');
    if (dict[key]) el.setAttribute('content', dict[key]);
  });
  document.title = dict['meta.title'];
  localStorage.setItem('dexino-language', lang);
  langToggle.textContent = lang === 'en' ? 'DE' : 'EN';
  langToggle.setAttribute('aria-label', lang === 'en' ? 'Switch to German' : 'Switch to English');
}

const savedLanguage = localStorage.getItem('dexino-language') || 'en';
applyLanguage(savedLanguage);

langToggle.addEventListener('click', () => {
  const nextLanguage = document.documentElement.lang === 'en' ? 'de' : 'en';
  applyLanguage(nextLanguage);
});

toggle.addEventListener('click', () => {
  const isOpen = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});

links.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});
