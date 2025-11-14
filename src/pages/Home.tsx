import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Database, 
  Code2, 
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  Zap,
  UserPlus,
  BarChart3,
  Calendar
} from 'lucide-react';
import FAQ from '../components/FAQ';
import web from "/src/assets/video/siteweb.mp4"
import app from "/src/assets/video/mobiles.mp4"
import logiciel from "/src/assets/video/logicieldesktop.mp4"
import ia from   "/src/assets/video/ia.mp4"
import React from "react";
const stats = [
  // { number: '150+', label: 'Projets Réalisés' },
  // { number: '50+', label: 'Clients Satisfaits' },
  // { number: '5+', label: 'Années d\'Expérience' },
  // { number: '24/7', label: 'Support Technique' },
];

const features = [
  'Solutions 100% sur mesure',
  'Équipe d\'experts certifiés',
  'Accompagnement personnalisé',
  'Technologies de pointe',
];

export default function Home() {
  return (
    <div className="bg-gray-100 dark:bg-dark-950 transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative isolate ">
        {/* Icônes d'applications en arrière-plan - 6 principales */}
        <div className="absolute inset-0 overflow-hidden -z-20">
          {/* Figma */}
          <motion.div
            className="absolute top-32 left-10 text-4xl text-gray-400/30 dark:text-gray-500/40"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <i className="fab fa-figma"></i>
          </motion.div>

          {/* React */}
          <motion.div
            className="absolute top-44 right-16 text-4xl text-gray-400/30 dark:text-gray-500/40"
            animate={{
              y: [0, 15, 0],
              rotate: [0, -10, 10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            <i className="fab fa-react"></i>
          </motion.div>

          {/* Node.js */}
          <motion.div
            className="absolute top-72 left-20 text-4xl text-gray-400/30 dark:text-gray-500/40"
            animate={{
              y: [0, -25, 0],
              rotate: [0, 8, -8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <i className="fab fa-node-js"></i>
          </motion.div>

          {/* JavaScript */}
          <motion.div
            className="absolute top-52 right-32 text-4xl text-gray-400/30 dark:text-gray-500/40"
            animate={{
              y: [0, 20, 0],
              rotate: [0, -12, 12, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8
            }}
          >
            <i className="fab fa-js-square"></i>
          </motion.div>

          {/* Python */}
          <motion.div
            className="absolute top-92 left-32 text-4xl text-gray-400/30 dark:text-gray-500/40"
            animate={{
              y: [0, -18, 0],
              rotate: [0, 6, -6, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.2
            }}
          >
            <i className="fab fa-python"></i>
          </motion.div>

          {/* GitHub */}
          <motion.div
            className="absolute top-57 right-48 text-4xl text-gray-400/30 dark:text-gray-500/40"
            animate={{
              y: [0, -22, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 3.9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.4
            }}
          >
            <i className="fab fa-github"></i>
          </motion.div>
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-30 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-orange-400 to-orange-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        
        <div className="mx-auto max-w-2xl py-32 sm:py-28 lg:py-44">
          <motion.div 
            className="hidden sm:mb-8 sm:flex sm:justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 transition-all duration-300">
              Découvrez nos dernières innovations technologiques.{' '}
              <Link to="/projects" className="font-semibold text-orange-500 hover:text-orange-600">
                <span aria-hidden="true" className="absolute inset-0" />
                Voir nos projets <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </motion.div>
          
          <div className="text-center">
            <motion.h1 
              className="text-5xl font-bold tracking-tight text-balance text-gray-900 dark:text-white sm:text-7xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="inline-block"
              >
                Solutions Digitales
              </motion.span>
              <motion.span 
                className="text-orange-500 block"
                initial={{ opacity: 0, x: 50, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.8,
                  type: "spring",
                  stiffness: 100,
                  damping: 10
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                Innovantes
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="mt-8 text-lg font-medium text-pretty text-gray-600 dark:text-white sm:text-xl/8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Chez Bigitalis, nous transformons vos idées en solutions digitales performantes. 
              Développement web, applications mobiles, IA et analyse de données - votre réussite numérique commence ici.
            </motion.p>
            
            <motion.div 
              className="mt-10 flex items-center justify-center gap-x-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
                       <a
  href="https://wa.me/221785309683"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center space-x-2 bg-orange-500 hover:accent-green-600 text-white hover:text-black px-6 py-3 rounded-full font-semibold hover:bg-[#25d366] transition-all duration-300 transform hover:scale-105"
>

  <span>Demander un devis </span>
</a>
              <Link 
                to="/services" 
                className="text-sm font-semibold dark:text-orange-500 transition-colors group"
              >
                Découvrir nos services 
                <ArrowRight className="inline w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
        
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-orange-400 to-orange-600 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>

      {/* Services Section - Header */}
      <section className="py-24 sm:py-32 bg-gray-100 dark:bg-dark-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
              Nos <span className="text-orange-500">Expertises</span>
            </h2>
            <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-300">
              Des solutions technologiques complètes pour accélérer votre transformation digitale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Automation Section */}
      <section className="py-24 sm:py-32 bg-gray-100 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <motion.div 
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <ArrowRight className="w-6 h-6 text-orange-500" />
                <span className="text-orange-500 font-medium">Bigitalis.ai</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                Découvrez tout ce que nous pouvons{' '}
                <span className="text-orange-500">automatiser</span> pour vous.
              </h2>
              
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-8">
                Chaque entreprise est unique. Voici comment nous aidons nos clients à gagner du temps et à se 
                concentrer sur ce qui compte :
              </p>
            </motion.div>
            
            {/* Right Column - Automation Cards in Stair Layout */}
            <motion.div 
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Chatbot WhatsApp Card */}
                <motion.div
                  className="bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-xl p-6 hover:bg-gray-50 dark:hover:bg-gray-800/70 transition-all duration-300 shadow-sm dark:shadow-none"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-lg mb-4">
                    <i className="fab fa-whatsapp text-green-500 text-xl"></i>
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">Chatbot WhatsApp</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    Répondez automatiquement à vos clients 24/7 sur WhatsApp. Gagnez du temps et améliorez votre service client.
                  </p>
                </motion.div>

                {/* Email Automation Card */}
                <motion.div
                  className="bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-xl p-6 hover:bg-gray-50 dark:hover:bg-gray-800/70 transition-all duration-300 shadow-sm dark:shadow-none"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-lg mb-4">
                    <i className="fas fa-envelope text-blue-500"></i>
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">Automatisation Email</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    Envoyez des emails automatiques à vos clients. Séries de bienvenue, relances, confirmations.
                  </p>
                </motion.div>

                {/* Social Media Automation Card */}
                <motion.div
                  className="bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-xl p-6 hover:bg-gray-50 dark:hover:bg-gray-800/70 transition-all duration-300 shadow-sm dark:shadow-none"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-lg mb-4">
                    <i className="fas fa-share-alt text-purple-500"></i>
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">Publication Automatique</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    Publiez automatiquement sur vos réseaux sociaux. Facebook, Instagram, LinkedIn programmés.
                  </p>
                </motion.div>

                {/* Customer Support Automation Card */}
                <motion.div
                  className="bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-xl p-6 hover:bg-gray-50 dark:hover:bg-gray-800/70 transition-all duration-300 shadow-sm dark:shadow-none"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-indigo-500/20 rounded-lg mb-4">
                    <i className="fas fa-headset text-indigo-500"></i>
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">Support Client Auto</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    Réponses automatiques aux questions fréquentes. Chatbot intelligent pour votre site web.
                  </p>
                </motion.div>
              </div>
              
          
            </motion.div>
          </div>
        </div>
      </section>
<section className="py-24 sm:py-32 bg-gray-100 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
              L'IA Compatible Avec Tous Vos <span className="text-orange-500">Outils</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Intégrez notre intelligence artificielle à vos outils existants pour des processus encore plus fluides et efficaces.
            </p>
          </motion.div>

          <div className="relative overflow-hidden">
            <div className="logos-container animate-scroll-left">
              {/* Premier set de logos */}
              <div className="flex space-x-12 flex-shrink-0 pr-24" style={{ width: '50%' }}>
                {/* Google Suite */}
                <div className="flex flex-col items-center group flex-shrink-0">
                  <div className="w-24 h-24 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className="fab fa-google text-5xl text-blue-500 group-hover:text-blue-600 transition-colors duration-300"></i>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mt-3 text-center">Google Suite</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 text-center">Document</p>
                </div>

                {/* Salesforce */}
                <div className="flex flex-col items-center group flex-shrink-0">
                  <div className="w-24 h-24 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className="fab fa-salesforce text-5xl text-cyan-500 group-hover:text-cyan-600 transition-colors duration-300"></i>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mt-3 text-center">Salesforce</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 text-center">CRM</p>
                </div>

                {/* Microsoft Teams */}
                <div className="flex flex-col items-center group flex-shrink-0">
                  <div className="w-24 h-24 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className="fab fa-microsoft text-5xl text-purple-600 group-hover:text-purple-700 transition-colors duration-300"></i>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mt-3 text-center">Teams</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 text-center">Gestion Projet</p>
                </div>

                {/* Outlook */}
                <div className="flex flex-col items-center group flex-shrink-0">
                  <div className="w-24 h-24 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-envelope text-5xl text-blue-500 group-hover:text-blue-600 transition-colors duration-300"></i>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mt-3 text-center">Outlook</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 text-center">Mailing</p>
                </div>

                {/* Slack */}
                <div className="flex flex-col items-center group flex-shrink-0">
                  <div className="w-24 h-24 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className="fab fa-slack text-5xl text-green-500 group-hover:text-green-600 transition-colors duration-300"></i>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mt-3 text-center">Slack</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 text-center">Communication</p>
                </div>

                {/* LinkedIn */}
                <div className="flex flex-col items-center group flex-shrink-0">
                  <div className="w-24 h-24 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className="fab fa-linkedin text-5xl text-blue-600 group-hover:text-blue-700 transition-colors duration-300"></i>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mt-3 text-center">LinkedIn</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 text-center">Réseaux sociaux</p>
                </div>

                {/* X (Twitter) */}
                <div className="flex flex-col items-center group flex-shrink-0">
                  <div className="w-24 h-24 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className="fab fa-x-twitter text-5xl text-gray-800 dark:text-white group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors duration-300"></i>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mt-3 text-center">X (Twitter)</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 text-center">Réseaux sociaux</p>
                </div>

                {/* WhatsApp */}
                <div className="flex flex-col items-center group flex-shrink-0">
                  <div className="w-24 h-24 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className="fab fa-whatsapp text-5xl text-green-600 group-hover:text-green-700 transition-colors duration-300"></i>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mt-3 text-center">WhatsApp</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 text-center">Messagerie</p>
                </div>

                {/* Facebook */}
                <div className="flex flex-col items-center group flex-shrink-0">
                  <div className="w-24 h-24 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className="fab fa-facebook text-5xl text-blue-700 group-hover:text-blue-800 transition-colors duration-300"></i>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mt-3 text-center">Facebook</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 text-center">Réseaux sociaux</p>
                </div>
              </div>


              {/* Deuxième set identique pour la boucle infinie */}
              <div className="flex space-x-12 flex-shrink-0 pr-24" style={{ width: '50%' }}>
                {/* Google Suite */}
                <div className="flex flex-col items-center group flex-shrink-0">
                  <div className="w-24 h-24 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  </div>
                </div>

                {/* Salesforce */}
                <div className="flex flex-col items-center group flex-shrink-0">
                  <div className="w-24 h-24 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className="fab fa-salesforce text-5xl text-cyan-500 group-hover:text-cyan-600 transition-colors duration-300"></i>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mt-3 text-center">Salesforce</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 text-center">CRM</p>
                </div>

                {/* Microsoft Teams */}
                <div className="flex flex-col items-center group flex-shrink-0">
                  <div className="w-24 h-24 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className="fab fa-microsoft text-5xl text-purple-600 group-hover:text-purple-700 transition-colors duration-300"></i>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mt-3 text-center">Teams</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 text-center">Gestion Projet</p>
                </div>

                {/* Outlook */}
                <div className="flex flex-col items-center group flex-shrink-0">
                  <div className="w-24 h-24 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-envelope text-5xl text-blue-500 group-hover:text-blue-600 transition-colors duration-300"></i>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mt-3 text-center">Outlook</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 text-center">Mailing</p>
                </div>

                {/* Slack */}
                <div className="flex flex-col items-center group flex-shrink-0">
                  <div className="w-24 h-24 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className="fab fa-slack text-5xl text-green-500 group-hover:text-green-600 transition-colors duration-300"></i>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mt-3 text-center">Slack</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 text-center">Communication</p>
                </div>

                {/* LinkedIn */}
                <div className="flex flex-col items-center group flex-shrink-0">
                  <div className="w-24 h-24 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className="fab fa-linkedin text-5xl text-blue-600 group-hover:text-blue-700 transition-colors duration-300"></i>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mt-3 text-center">LinkedIn</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 text-center">Réseaux sociaux</p>
                </div>

                {/* X (Twitter) */}
                <div className="flex flex-col items-center group flex-shrink-0">
                  <div className="w-24 h-24 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className="fab fa-x-twitter text-5xl text-gray-800 dark:text-white group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors duration-300"></i>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mt-3 text-center">X (Twitter)</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 text-center">Réseaux sociaux</p>
                </div>

                {/* WhatsApp */}
                <div className="flex flex-col items-center group flex-shrink-0">
                  <div className="w-24 h-24 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className="fab fa-whatsapp text-5xl text-green-600 group-hover:text-green-700 transition-colors duration-300"></i>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mt-3 text-center">WhatsApp</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 text-center">Messagerie</p>
                </div>

                {/* Facebook */}
                <div className="flex flex-col items-center group flex-shrink-0">
                  <div className="w-24 h-24 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className="fab fa-facebook text-5xl text-blue-700 group-hover:text-blue-800 transition-colors duration-300"></i>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mt-3 text-center">Facebook</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 text-center">Réseaux sociaux</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-gray-500 dark:text-gray-500 uppercase tracking-wider">
              Vérifiez si vos outils actuels sont compatibles avec nos solutions IA.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Web Development Section */}
      <section className="py-24 sm:py-32 bg-gray-50 dark:bg-dark-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <motion.div 
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                <span className="text-gray-900 dark:text-white">Création de</span> <span className="text-orange-500">Sites Web</span>
              </h3>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-6">
                Sites web modernes, responsives et optimisés SEO pour votre présence digitale. 
                Nous créons des expériences utilisateur exceptionnelles qui convertissent vos visiteurs en clients.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Design responsive et moderne</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Optimisation SEO avancée</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Performance et rapidité</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Intégration CMS et e-commerce</span>
                </div>
              </div>
              
              <Link
                to="/services"
                className="inline-flex items-center bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                En savoir plus
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
            
            {/* Right Column - Web Development Visual */}
            <motion.div 
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                {/* Browser Frame */}
                <div className="bg-gray-100 rounded-t-lg p-3 border-b border-gray-200">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="flex items-center space-x-2 ml-4 text-sm text-gray-600 dark:text-gray-300">
                      <Globe className="w-4 h-4" />
                      <span>monsite.com</span>
                    </div>
                  </div>
                </div>
                
                {/* Video Content */}
                <div className="bg-white dark:bg-dark-950 border border-orange-500/20 dark:border-orange-500/30 rounded-b-lg overflow-hidden">
                  <video 
                    className="w-full h-auto"
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    controls={false}
                  >
                    <source src={web} type="video/mp4" />
                    Votre navigateur ne supporte pas la lecture de vidéos.
                  </video>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mobile Apps Section */}
      <section className="py-24 sm:py-32 bg-white dark:bg-dark-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <motion.div 
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                <span className="text-gray-900 dark:text-white">Applications</span> <span className="text-orange-500">Mobiles</span>
              </h3>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-6">
                Applications iOS et Android natives ou hybrides pour toucher vos clients partout. 
                Développement d'apps performantes avec une expérience utilisateur optimale.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Développement natif iOS et Android</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Applications hybrides React Native</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Interface utilisateur intuitive</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Publication sur App Store et Google Play</span>
                </div>
              </div>
              
              <Link
                to="/services"
                className="inline-flex items-center bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                En savoir plus
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
            
            {/* Right Column - Mobile App Visual */}
            <motion.div 
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative flex justify-center">
                {/* iPhone Frame with Video */}
                <div className="relative">
                  <div className="w-64 h-96 bg-gray-900 rounded-3xl p-2 shadow-2xl">
                    <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                      {/* Status Bar */}
                      <div className="bg-gray-900 text-white text-xs px-4 py-1 flex justify-between">
                        <span>9:41</span>
                        <div className="flex space-x-1">
                          <div className="w-4 h-2 bg-white rounded-sm"></div>
                          <div className="w-1 h-2 bg-white rounded-sm"></div>
                        </div>
                      </div>
                      
                      {/* Video Content */}
                      <video 
                        className="w-full h-full object-cover"
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        controls={false}
                      >
                        <source src={app} type="video/mp4" />
                        Votre navigateur ne supporte pas la lecture de vidéos.
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Custom Software Section */}
      <section className="py-24 sm:py-32 bg-gray-50 dark:bg-dark-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <motion.div 
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                <span className="text-gray-900 dark:text-white">Logiciels</span> <span className="text-orange-500">Sur Mesure</span>
              </h3>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-6">
                Solutions logicielles personnalisées adaptées à vos besoins spécifiques. 
                Développement d'applications métier pour optimiser vos processus internes.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Analyse des besoins métier</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Architecture technique sur mesure</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Développement agile et itératif</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Formation et support technique</span>
                </div>
              </div>
              
              <Link
                to="/services"
                className="inline-flex items-center bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                En savoir plus
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
            
            {/* Right Column - Software Dashboard Visual */}
            <motion.div 
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                {/* Desktop Window */}
                <div className="bg-gray-100 rounded-t-lg p-3 border-b border-gray-200">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="flex items-center space-x-2 ml-4 text-sm text-gray-600 dark:text-gray-300">
                      <Code2 className="w-4 h-4" />
                      <span>dashboard.bigitalis.com</span>
                    </div>
                  </div>
                </div>
                
                {/* Video Content */}
                <div className="bg-white dark:bg-dark-950 border border-orange-500/20 dark:border-orange-500/30 rounded-b-lg overflow-hidden">
                  <video 
                    className="w-full h-auto"
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    controls={false}
                  >
                    <source src={logiciel} type="video/mp4" />
                    Votre navigateur ne supporte pas la lecture de vidéos.
                  </video>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Section */}
      <section className="py-24 sm:py-32 bg-white dark:bg-dark-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <motion.div 
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                <span className="text-gray-900 dark:text-white">Intelligence</span> <span className="text-orange-500">Artificielle</span>
              </h3>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-6">
                Intégration IA et machine learning pour automatiser et optimiser vos processus. 
                Solutions intelligentes qui transforment vos données en insights actionnables.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Chatbots et assistants virtuels</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Analyse prédictive et data mining</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Automatisation des processus</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Recommandations personnalisées</span>
                </div>
              </div>
              
              <Link
                to="/services"
                className="inline-flex items-center bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                En savoir plus
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
            
            {/* Right Column - AI Visual */}
            <motion.div 
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                {/* Video Content */}
                <video 
                  className="w-full h-auto rounded-2xl"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  controls={false}
                >
                  <source src={ia} type="video/mp4" />
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Stats Section */}
    

      {/* Features Section */}
      <section className="py-24 sm:py-32 bg-gray-50 dark:bg-dark-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                Pourquoi choisir <span className="text-orange-500">Bigitalis</span> ?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Notre approche combine expertise technique, innovation et accompagnement personnalisé 
                pour garantir le succès de vos projets digitaux.
              </p>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {[
                { icon: Users, title: 'Équipe Dédiée', desc: 'Experts passionnés' },
                { icon: Award, title: 'Qualité Premium', desc: 'Standards élevés' },
                { icon: Zap, title: 'Livraison Rapide', desc: 'Délais respectés' },
                { icon: Database, title: 'Support Continu', desc: 'Maintenance incluse' },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="bg-white dark:bg-dark-950 border border-orange-500/20 dark:border-orange-500/30 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 text-center group"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mx-auto mb-4 group-hover:bg-orange-500 transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <section className="py-24 sm:py-32 bg-white dark:bg-dark-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Prêt à transformer votre <span className="text-orange-500">vision</span> en réalité ?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
              Contactez nos experts dès aujourd'hui pour discuter de votre projet 
              et recevoir un devis personnalisé gratuit.
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link
                to="/contact"
                className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Demander un devis gratuit
              </Link>
              <Link
                to="/projects"
                className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Voir nos réalisations
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Integration Tools Section */}

    </div>
  );
}