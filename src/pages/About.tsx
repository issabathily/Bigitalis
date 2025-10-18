import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users,
  Target,
  Award,
  Heart,
  Lightbulb,
  Rocket,
  Shield,
  Zap,
  ArrowRight
} from 'lucide-react';
import equipe from "/src/assets/image/collage1.png"
import issa from "/src/assets/image/issa.jpg"
import moussa from "/src/assets/image/moussa.png"
import sekou from "/src/assets/image/sekou.jpg"
import aliou from "/src/assets/image/aliou.jpg"
import fama from   "/src/assets/image/fama.jpg"

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Nous restons à la pointe des technologies pour offrir des solutions d\'avenir.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'Notre équipe porte chaque projet avec passion et engagement personnel.',
  },
  {
    icon: Shield,
    title: 'Fiabilité',
    description: 'Des solutions robustes et sécurisées pour votre tranquillité d\'esprit.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimisation continue pour des résultats qui dépassent vos attentes.',
  },
];

const team = [
  {
    name: 'Issa Bathily ',
    role: ' expert en Automatisation',
    description: '3 + années d\'expérience en développement web et mobile.',
    image: issa,
  },
  {
    name: 'Moussa Corea',
    role: 'Data Scientist & Disiner',
    description: 'Experte en intelligence artificielle et analyse de données.',
    image: moussa,
  },
  {
    name: 'Sekou Diedhou',
    role: 'Developer Odoo',
    description: 'Créateur d\'expériences utilisateur exceptionnelles.',
    image: sekou,
  },
  {
    name: 'Aliou Diallo',
    role: 'Expert en Excel',
    description: 'Création de visuel Avancer avec les donnes.',
    image: aliou,
  },{
    name: 'Fama Diop',
    role: 'Develloper Mobile et Community Manager',
    description: 'Creation application Perfortmant ',
    image: fama,
  },
];

export default function About() {
  return (
    <div className="bg-white dark:bg-dark-950 pt-16 transition-colors duration-300">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 relative">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-white dark:bg-dark-950">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            {/* Left Column - Text Content (Réduit) */}
            <motion.div 
              className="order-2 lg:order-1 lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
                Nous changeons la façon dont les gens se 
                <span className="text-orange-500 block">connectent</span>
              </h1>
              <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300 mb-4">
                Chez Bigitalis, nous croyons que la technologie doit servir l'humain. 
                Notre mission est de créer des solutions digitales qui facilitent les connexions.
              </p>
              <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300 mb-6">
                Nous accompagnons les entreprises dans leur transformation
                digitale avec passion, expertise et innovation.
              </p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Découvrir notre équipe
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center text-gray-900 hover:text-orange-500 transition-colors font-semibold"
                >
                  Voir nos projets
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Right Column - Images (Agrandi) */}
            <motion.div 
              className="order-1 lg:order-2 lg:col-span-3"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative h-96 lg:h-[600px] w-full flex items-center justify-center">
                {/* Image unique centrée et agrandie */}
                <div className="relative w-full h-full lg:w-[500px] lg:h-[550px] rounded-3xl overflow-hidden dark:bg-gray-800 p-2">
                  <div className="w-full h-full rounded-2xl overflow-hidden">
                    <img 
                      src={equipe}
                      alt="Équipe Bigitalis" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Effet de bordure gradient */}
                  <div className="absolute inset-0 rounded-3xl  pointer-events-none"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 sm:py-32 bg-gray-50 dark:bg-dark-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              <span className="text-gray-900 dark:text-white">Nos</span> <span className="text-orange-500">Valeurs</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Les principes qui guident notre travail et notre vision de l'innovation technologique.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center bg-white dark:bg-dark-950 border border-orange-500/20 dark:border-orange-500/30 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-xl mx-auto mb-4 group-hover:bg-orange-500 transition-colors duration-300">
                  <value.icon className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Notre <span className="text-orange-500">Équipe</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Des experts passionnés qui transforment vos idées en solutions digitales exceptionnelles.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="text-center group bg-white dark:bg-dark-950 border border-orange-500/20 dark:border-orange-500/30 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-orange-500 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-6">
              Prêt à transformer votre vision en réalité ?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Rejoignez les entreprises qui nous font confiance pour leur transformation digitale.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-orange-500 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Démarrer votre projet
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}