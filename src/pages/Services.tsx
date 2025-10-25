import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Smartphone, 
  Code2, 
  Brain, 
  Database, 
  Shield,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Création de Sites Web',
    description: 'Sites web modernes, responsives et optimisés pour votre présence digitale.',
    features: [
      'Design responsive et moderne',
      'Optimisation SEO avancée',
      'E-commerce et solutions de paiement',
    ],
    price: 'À partir de 2 500€',
    color: 'blue',
  },
  {
    icon: Smartphone,
    title: 'Applications Mobiles',
    description: 'Applications iOS et Android natives ou hybrides pour toucher vos clients.',
    features: [
      'Applications natives iOS/Android',
      'Interface utilisateur intuitive',
      'Intégration API et services cloud',
      'Publication sur stores incluse',
    ],
    price: 'À partir de 8 000€',
    color: 'green',
  },
  {
    icon: Code2,
    title: 'Logiciels Sur Mesure',
    description: 'Solutions logicielles personnalisées adaptées à vos besoins spécifiques .',
    features: [
      'Analyse complète des besoins',
      'Architecture évolutive',
      'Technologies modernes',
      'Formation et documentation',
    ],
    price: 'Devis personnalisé',
    color: 'purple',
  },
  {
    icon: Brain,
    title: 'Intelligence Artificielle',
    description: 'Intégration IA et machine learning pour automatiser vos processus.',
    features: [
      'Analyse de données avancée',
      'Modèles d\'IA personnalisés',
      'Chatbots et assistants virtuels',
      'Vision par ordinateur',
    ],
    price: 'À partir de 15 000€',
    color: 'pink',
  },
  {
    icon: Database,
    title: 'Analyse de Données',
    description: 'Transformez vos données en insights actionnables pour votre business.',
    features: [
      'Tableaux de bord interactifs',
      'Business Intelligence',
      'Visualisations avancées',
      'Prédictions et tendances',
    ],
    price: 'À partir de 5 000€',
    color: 'indigo',
  },
  {
    icon: Shield,
    title: 'Sécurité & Maintenance',
    description: 'Protection et maintenance continue de vos solutions digitales.',
    features: [
      'Audits de sécurité réguliers',
      'Sauvegardes automatisées',
      'Mises à jour et correctifs',
      'Support technique prioritaire',
    ],
    price: 'À partir de 200€/mois',
    color: 'red',
  },
];

// Fonction pour obtenir les couleurs selon le thème
const getColorClasses = (color: string, isDark: boolean = false) => {
  const colors = {
    blue: {
      bg: isDark ? 'bg-blue-900/20' : 'bg-blue-100',
      text: 'text-blue-500',
      hover: 'group-hover:bg-blue-500',
    },
    green: {
      bg: isDark ? 'bg-green-900/20' : 'bg-green-100',
      text: 'text-green-500',
      hover: 'group-hover:bg-green-500',
    },
    purple: {
      bg: isDark ? 'bg-purple-900/20' : 'bg-purple-100',
      text: 'text-purple-500',
      hover: 'group-hover:bg-purple-500',
    },
    pink: {
      bg: isDark ? 'bg-pink-900/20' : 'bg-pink-100',
      text: 'text-pink-500',
      hover: 'group-hover:bg-pink-500',
    },
    indigo: {
      bg: isDark ? 'bg-indigo-900/20' : 'bg-indigo-100',
      text: 'text-indigo-500',
      hover: 'group-hover:bg-indigo-500',
    },
    red: {
      bg: isDark ? 'bg-red-900/20' : 'bg-red-100',
      text: 'text-red-500',
      hover: 'group-hover:bg-red-500',
    },
  };
  return colors[color as keyof typeof colors] || colors.blue;
};

export default function Services() {
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
              <span className="text-gray-900 dark:text-white">Nos</span> <span className="text-orange-500">Services</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Découvrez notre gamme complète de services digitaux conçus pour propulser 
              votre entreprise vers le succès numérique.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-100  dark:bg-dark-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white dark:bg-dark-950 border-0 dark:border dark:border-orange-500/30 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 group text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {/* Icône en haut */}
                <div className={`flex items-center justify-center w-16 h-16 ${getColorClasses(service.color, false).bg} dark:${getColorClasses(service.color, true).bg} rounded-xl ${getColorClasses(service.color, false).hover} transition-colors duration-300 mx-auto mb-6`}>
                  <service.icon className={`w-8 h-8 ${getColorClasses(service.color, false).text} group-hover:text-white transition-colors duration-300`} />
                </div>
                
                {/* Contenu en bas */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-2">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className={`w-4 h-4 ${getColorClasses(service.color, false).text} flex-shrink-0`} />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">

                    <Link
                      to="/contact"
                      className="w-full bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                    >
                      <span>Devis gratuit</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Notre <span className="text-orange-500">Processus</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Une méthodologie éprouvée pour garantir le succès de votre projet.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Analyse', desc: 'Étude approfondie de vos besoins et objectifs', icon: '' },
              { step: '02', title: 'Conception', desc: 'Design et architecture de la solution', icon: '' },
              { step: '03', title: 'Développement', desc: 'Réalisation avec technologies avancées', icon: '' },
              { step: '04', title: 'Livraison', desc: 'Déploiement et formation utilisateur', icon: '' },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                className="text-center group bg-white dark:bg-dark-950 border-0 dark:border dark:border-orange-500/30 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 dark:bg-orange-900/20 text-orange-500 font-bold text-lg rounded-full mb-4 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/*<section className="py-24 sm:py-32 bg-gray-900">*/}
      {/*  <div className="mx-auto max-w-7xl px-6 lg:px-8">*/}
      {/*    <motion.div*/}
      {/*      className="mx-auto max-w-2xl text-center"*/}
      {/*      initial={{ opacity: 0, y: 30 }}*/}
      {/*      whileInView={{ opacity: 1, y: 0 }}*/}
      {/*      transition={{ duration: 0.8 }}*/}
      {/*      viewport={{ once: true }}*/}
      {/*    >*/}
      {/*      <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-6">*/}
      {/*        Démarrons votre projet ensemble*/}
      {/*      </h2>*/}
      {/*      <p className="text-lg text-gray-300 mb-10">*/}
      {/*        Contactez-nous dès aujourd'hui pour un audit gratuit de vos besoins digitaux */}
      {/*        et recevez votre devis personnalisé sous 24h.*/}
      {/*      </p>*/}
      {/*      */}
      {/*      <div className="flex flex-col sm:flex-row gap-4 justify-center">*/}
      {/*        <Link*/}
      {/*          to="/contact"*/}
      {/*          className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"*/}
      {/*        >*/}
      {/*          Obtenir un devis gratuit*/}
      {/*        </Link>*/}
      {/*        <Link*/}
      {/*          to="/projects"*/}
      {/*          className="border border-gray-300 dark:border-white text-gray-900 dark:text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-white hover:text-gray-900 dark:hover:text-gray-900 transition-all duration-300 transform hover:scale-105"*/}
      {/*        >*/}
      {/*          Voir nos réalisations*/}
      {/*        </Link>*/}
      {/*      </div>*/}
      {/*    </motion.div>*/}
      {/*  </div>*/}
      {/*</section>*/}
    </div>
  );
}