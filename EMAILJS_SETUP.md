# 📧 Configuration EmailJS pour l'envoi automatique d'emails

## 🚀 Étapes de configuration

### 1. Créer un compte EmailJS
1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Créez un compte gratuit
3. Connectez-vous à votre tableau de bord

### 2. Configurer un service email
1. Dans le tableau de bord, allez dans **"Email Services"**
2. Cliquez sur **"Add New Service"**
3. Choisissez votre fournisseur email (Gmail, Outlook, etc.)
4. Suivez les instructions pour connecter votre compte email
5. **Copiez le Service ID** (ex: `service_xxxxxxx`)

### 3. Créer un template d'email
1. Allez dans **"Email Templates"**
2. Cliquez sur **"Create New Template"**
3. Utilisez ce template :

```html
Sujet: Nouveau message de contact - Bigitalis

Contenu:
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
```

4. **Copiez le Template ID** (ex: `template_xxxxxxx`)

### 4. Obtenir la clé publique
1. Allez dans **"Account"** > **"General"**
2. **Copiez la Public Key** (ex: `xxxxxxxxxxxxxxxx`)

### 5. Configurer le fichier de configuration
1. Ouvrez `src/config/emailjs.ts`
2. Remplacez les valeurs :

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'votre_service_id_ici',
  TEMPLATE_ID: 'votre_template_id_ici', 
  PUBLIC_KEY: 'votre_public_key_ici',
  TO_EMAIL: 'votre-email@exemple.com',
};
```

## ✅ Test de fonctionnement

1. Lancez votre application : `npm run dev`
2. Allez sur la page Contact
3. Remplissez le formulaire
4. Cliquez sur "Envoyer ma demande"
5. Vérifiez que vous recevez l'email

## 🔧 Alternatives

### Option 2 : Netlify Forms (si hébergé sur Netlify)
```html
<form name="contact" method="POST" data-netlify="true">
  <!-- Vos champs ici -->
</form>
```

### Option 3 : Formspree
1. Allez sur [https://formspree.io/](https://formspree.io/)
2. Créez un formulaire
3. Remplacez l'action du formulaire par l'URL Formspree

## 📝 Notes importantes

- **Gratuit** : EmailJS permet 200 emails/mois gratuitement
- **Sécurisé** : Les clés sont côté client mais limitées
- **Simple** : Pas besoin de serveur backend
- **Fiable** : Service professionnel et stable

## 🆘 Dépannage

### Erreur "Invalid service ID"
- Vérifiez que le Service ID est correct
- Assurez-vous que le service est bien configuré

### Erreur "Invalid template ID"  
- Vérifiez que le Template ID est correct
- Vérifiez que le template existe et est publié

### Erreur "Invalid public key"
- Vérifiez que la Public Key est correcte
- Vérifiez que votre compte EmailJS est actif

### Pas d'email reçu
- Vérifiez vos spams
- Vérifiez que l'email de réception est correct
- Vérifiez les logs dans la console du navigateur
