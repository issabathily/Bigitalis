import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ExternalLink, 
  Calendar, 
  Users, 
  CheckCircle,
  Globe,
  Smartphone,
  Code2,
  Brain,
  Database,
  ArrowRight
} from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Luxe - Maison Élegance',
    category: 'Site Web & E-Commerce',
    description: 'Plateforme e-commerce haut de gamme avec système de gestion avancé et intégration multi-canaux.',
    image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'Stripe', 'MongoDB'],
    results: [
      '+300% de conversions',
      'Temps de chargement < 2s',
      'Interface mobile optimisée',
    ],
    timeline: '3 mois',
    client: 'Maison Élegance',
    icon: Globe,
  },
  {
    id: 2,
    title: 'Application Mobile - FitTracker Pro',
    category: 'Application Mobile',
    description: 'Application de fitness avec IA pour programmes personnalisés et suivi en temps réel.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React Native', 'TensorFlow', 'Firebase', 'Python'],
    results: [
      '50K+ téléchargements',
      '4.8/5 étoiles stores',
      '95% rétention utilisateurs',
    ],
    timeline: '6 mois',
    client: 'FitTracker Inc.',
    icon: Smartphone,
  },
  {
    id: 3,
    title: 'ERP Manufacturing - TechProd',
    category: 'Logiciel Sur Mesure',
    description: 'Système ERP complet pour la gestion de production avec modules intégrés.',
    image: 'https://images.pexels.com/photos/3184434/pexels-photo-3184434.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'Docker'],
    results: [
      '-40% temps de production',
      'Traçabilité complète',
      'ROI de 250% en 1 an',
    ],
    timeline: '8 mois',
    client: 'TechProd Industries',
    icon: Code2,
  },
  {
    id: 4,
    title: 'IA Prédictive - DataFlow Analytics',
    category: 'Intelligence Artificielle',
    description: 'Système d\'analyse prédictive pour optimiser les ventes et stocks.',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'TensorFlow', 'Pandas', 'AWS'],
    results: [
      '+35% précision prévisions',
      '-25% surplus de stock',
      'Automatisation 90%',
    ],
    timeline: '4 mois',
    client: 'DataFlow Corp',
    icon: Brain,
  },
  {
    id: 5,
    title: 'Dashboard Analytics - RetailVision',
    category: 'Analyse de Données',
    description: 'Tableau de bord temps réel pour pilotage d\'activité retail multi-sites.',
    image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Vue.js', 'D3.js', 'Python', 'Elasticsearch'],
    results: [
      'Vision 360° activité',
      'Décisions 3x plus rapides',
      'KPIs temps réel',
    ],
    timeline: '2 mois',
    client: 'RetailVision Group',
    icon: Database,
  },
  {
    id: 6,
    title: 'Plateforme SaaS - CloudManager',
    category: 'SaaS & Cloud',
    description: 'Plateforme de gestion cloud multi-tenant avec API complète.',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'AWS'],
    results: [
      '1000+ utilisateurs actifs',
      '99.9% uptime',
      'Scalabilité illimitée',
    ],
    timeline: '10 mois',
    client: 'CloudManager Ltd',
    icon: Globe,
  },
];

const categories = [
  'Tous',
  'Site Web & E-Commerce',
  'Application Mobile', 
  'Logiciel Sur Mesure',
  'Intelligence Artificielle',
  'Analyse de Données',
  'SaaS & Cloud'
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = React.useState('Tous');
  
  const filteredProjects = activeCategory === 'Tous' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

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
              <span className="text-gray-900 dark:text-white">Nos</span> <span className="text-orange-500">Réalisations</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Découvrez nos projets les plus marquants et les résultats exceptionnels 
              obtenus pour nos clients dans différents secteurs d'activité.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-50 dark:bg-dark-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-white dark:bg-dark-950 border border-orange-500/20 dark:border-orange-500/30 text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:text-orange-500 shadow-sm'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-[#fff7ed] dark:bg-dark-950 border border-orange-500/20 dark:border-orange-500/30 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                layout
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-orange-500 rounded-lg">
                      <project.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Users className="w-4 h-4" />
                      <span>Client: {project.client}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>Durée: {project.timeline}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies utilisées:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Résultats obtenus:</h4>
                    <div className="space-y-2">
                      {project.results.map((result, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center space-x-2 bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105"
                  >
                    <span>Projet similaire ?</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gray-50 dark:bg-dark-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Résultats <span className="text-orange-500">Mesurables</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Nos projets génèrent des résultats concrets et mesurables pour nos clients.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: '150+', label: 'Projets Livrés', desc: 'Solutions développées' },
              { metric: '98%', label: 'Clients Satisfaits', desc: 'Taux de satisfaction' },
              { metric: '250%', label: 'ROI Moyen', desc: 'Retour sur investissement' },
              { metric: '24/7', label: 'Support Premium', desc: 'Assistance continue' },
            ].map((stat, index) => (
              <motion.div
                key={stat.metric}
                className="text-center bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl font-bold text-orange-500 mb-2">{stat.metric}</div>
                <div className="font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              Ce que disent nos <span className="text-orange-500">Clients</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Bigitalis a transformé notre présence digitale. Leur expertise technique et leur approche personnalisée ont dépassé toutes nos attentes.",
                author: "Marie Dubois",
                role: "CEO, Maison Élegance",
                avatar: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=200",
              },
              {
                quote: "L'application développée par Bigitalis a révolutionné notre approche du fitness. Les utilisateurs adorent l'interface et les fonctionnalités IA.",
                author: "Jean Moreau",
                role: "Fondateur, FitTracker",
                avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200",
              },
              {
                quote: "Grâce à leur ERP sur mesure, nous avons optimisé notre production de 40%. Un investissement qui s'est révélé très rentable.",
                author: "Philippe Laurent",
                role: "Directeur, TechProd",
                avatar: "https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=200",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-6">
                  <div className="text-orange-500 text-5xl font-serif leading-none mb-4">"</div>
                  <p className="text-gray-700 italic">{testimonial.quote}</p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-6">
              Votre projet sera le prochain succès
            </h2>
            <p className="text-lg text-gray-300 mb-10">
              Rejoignez nos clients satisfaits et transformez votre vision en réalité digitale.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Démarrer mon projet
              </Link>
              <Link
                to="/services"
                className="border border-gray-300 dark:border-white text-gray-900 dark:text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-white hover:text-gray-900 dark:hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
              >
                Découvrir nos services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}