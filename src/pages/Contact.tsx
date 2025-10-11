import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  Calendar
} from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  subject: string;
  message: string;
  budget: string;
  timeline: string;
}

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    detail: 'contact@bigitalis.com',
    description: 'Réponse sous 24h garantie',
  },
  {
    icon: Phone,
    title: 'Téléphone',
    detail: '+33 1 23 45 67 89',
    description: 'Lun-Ven, 9h-18h',
  },
  {
    icon: MapPin,
    title: 'Adresse',
    detail: '123 Avenue de la République',
    description: '75011 Paris, France',
  },
  {
    icon: Clock,
    title: 'Horaires',
    detail: 'Lun-Ven 9h-18h',
    description: 'Support 24/7 disponible',
  },
];

const services = [
  'Création de site web',
  'Application mobile',
  'Logiciel sur mesure',
  'Intelligence artificielle',
  'Analyse de données',
  'Consulting IT',
  'Autre',
];

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    budget: '',
    timeline: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white dark:bg-dark-950 pt-20 transition-colors duration-300">
      {/* Hero Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              <span className="text-gray-900 dark:text-white">Contactez-</span><span className="text-orange-500">nous</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Prêt à transformer votre vision en réalité digitale ? Nos experts sont là pour vous accompagner. 
              Obtenez votre devis personnalisé gratuit sous 24h.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-24 bg-gray-50 dark:bg-dark-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Information */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Informations de Contact
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    className="flex items-start space-x-4 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg group-hover:bg-orange-500 transition-colors duration-300">
                      <info.icon className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{info.title}</h3>
                      <p className="text-gray-900 dark:text-white font-medium">{info.detail}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-12 p-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <MessageSquare className="w-8 h-8 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Consultation Gratuite</h3>
                <p className="text-orange-100">
                  Planifiez un appel de 30 minutes pour discuter de votre projet 
                  sans engagement.
                </p>
                <button className="mt-4 bg-white text-orange-500 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Réserver un créneau
                </button>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white dark:bg-dark-950 border border-orange-500/20 dark:border-orange-500/30 rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                  Parlez-nous de votre projet
                </h2>

                {isSubmitted ? (
                  <motion.div
                    className="text-center py-12"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Message envoyé avec succès !
                    </h3>
                    <p className="text-gray-600">
                      Nous vous répondrons sous 24h. Merci pour votre confiance !
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors"
                          placeholder="Votre nom"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors"
                          placeholder="votre@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Entreprise
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors"
                          placeholder="Nom de votre entreprise"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors"
                          placeholder="+33 1 23 45 67 89"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Type de service *
                      </label>
                      <select
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors"
                      >
                        <option value="">Sélectionnez un service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Budget estimé
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors"
                        >
                          <option value="">Sélectionnez un budget</option>
                          <option value="< 5K€">Moins de 5 000€</option>
                          <option value="5K-15K€">5 000€ - 15 000€</option>
                          <option value="15K-50K€">15 000€ - 50 000€</option>
                          <option value="50K+€">Plus de 50 000€</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Délai souhaité
                        </label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors"
                        >
                          <option value="">Sélectionnez un délai</option>
                          <option value="Urgent (< 1 mois)">Urgent (moins d'1 mois)</option>
                          <option value="Court terme (1-3 mois)">Court terme (1-3 mois)</option>
                          <option value="Moyen terme (3-6 mois)">Moyen terme (3-6 mois)</option>
                          <option value="Long terme (6+ mois)">Long terme (6+ mois)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Décrivez votre projet *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors resize-none"
                        placeholder="Décrivez votre projet, vos objectifs et vos besoins spécifiques..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      className="w-full bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Send className="w-5 h-5" />
                      <span>Envoyer ma demande</span>
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Questions <span className="text-orange-500">Fréquentes</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Trouvez rapidement les réponses à vos questions les plus courantes.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                question: "Quel est le délai moyen pour un projet ?",
                answer: "Les délais varient selon la complexité : 2-4 semaines pour un site vitrine, 2-6 mois pour une application mobile, et 3-12 mois pour des logiciels sur mesure."
              },
              {
                question: "Proposez-vous de la maintenance ?",
                answer: "Oui, nous proposons des contrats de maintenance incluant mises à jour, sauvegardes, monitoring et support technique 24/7."
              },
              {
                question: "Travaillez-vous avec des TPE/PME ?",
                answer: "Absolument ! Nous adaptons nos solutions et nos tarifs à tous types d'entreprises, des startups aux grandes corporations."
              },
              {
                question: "Comment se déroule le processus ?",
                answer: "Analyse des besoins → Devis détaillé → Conception → Développement → Tests → Livraison → Formation et support."
              },
              {
                question: "Gérez-vous l'hébergement ?",
                answer: "Nous proposons des solutions d'hébergement cloud sécurisées et performantes, ou nous adaptons à votre infrastructure existante."
              },
              {
                question: "Quelles technologies utilisez-vous ?",
                answer: "Nous utilisons les technologies les plus récentes et adaptées : React, Next.js, Node.js, Python, AWS, et bien d'autres selon vos besoins."
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -2 }}
              >
                <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Rencontrons-nous
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Notre bureau est situé au cœur de Paris, dans un espace moderne 
                conçu pour favoriser la créativité et l'innovation.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-900 dark:text-white">123 Avenue de la République, 75011 Paris</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-900 dark:text-white">Rendez-vous sur demande</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-lg p-8 text-center">
                  <MapPin className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Bureau Parisien
                  </h3>
                  <p className="text-gray-300">
                    Métro République (Lignes 3, 5, 8, 9, 11)
                  </p>
                  <p className="text-gray-300">
                    Parking et accès PMR disponibles
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 sm:py-32 bg-orange-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Transformons ensemble vos idées en succès digital
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              Quel que soit votre projet, notre équipe d'experts est prête à vous accompagner 
              vers l'excellence technologique.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Remplir le formulaire
              </button>
              <a
                href="tel:+33123456789"
                className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Appelez-nous maintenant
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}