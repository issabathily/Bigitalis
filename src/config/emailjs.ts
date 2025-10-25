// Configuration EmailJS
// Remplacez ces valeurs par vos vraies clés EmailJS

export const EMAILJS_CONFIG = {
  // Vos clés EmailJS (à obtenir sur https://www.emailjs.com/)
  SERVICE_ID: 'service_drfi1z4', // Remplacez par votre Service ID
  TEMPLATE_ID: 'template_h9ksw9a', // Remplacez par votre Template ID
  PUBLIC_KEY: 's-HLVhaHoQsYYiGRk', // Remplacez par votre Public Key
  
  // Email de réception (changez par votre vrai email de réception)
  TO_EMAIL: 'bigitalis05@gmail.com', // Votre email de réception
};

// Template d'email (exemple de structure)
export const EMAIL_TEMPLATE = {
  subject: 'Nouveau message de contact - Bigitalis',
  body: `
    Nouveau message reçu via le formulaire de contact :
    
    Nom: {{from_name}}
    Email: {{from_email}}
    Entreprise: {{company}}
    Téléphone: {{phone}}
    Service: {{subject}}
    Budget: {{budget}}
    Délai: {{timeline}}
    
    Message:
    {{message}}
    
    ---
    Envoyé depuis le site Bigitalis
  `
};
