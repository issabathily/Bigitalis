import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  X, 
  Calendar, 
  Users, 
  CheckCircle,
  Globe,
  Smartphone,
  Brain,
  Database,
  Clock,
  Star,
  Award,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

import n8n from "/src/assets/image/n8n.png";
import figma from "/src/assets/image/figma.png";
import sama from "/src/assets/image/sama.png";
import stok from "/src/assets/image/stok.png";
import bi from "/src/assets/image/sante.jpg";
import chat from "/src/assets/image/chatbot.png";
import web from "/src/assets/image/web.webp";
// import accident from "/src/assets/image/accident.jpg";
import vente from "/src/assets/image/vente.jpg";

const projects = [
  {
    id: 1,
    title: 'Assistant WhatsApp Intelligent',
    category: 'Automatisation & IA',
    description: "Un assistant bot WhatsApp pour discuter avec vos clients 24/7 💬",
    image: n8n,
    details: "Ce projet révolutionnaire permet de répondre automatiquement aux clients via WhatsApp, gérer les rendez-vous et fournir un support 24/7. Il comprend un système de réservation intelligent, un suivi des conversations et des notifications en temps réel.",
    technologies: ['WhatsApp API', 'Node.js', 'MongoDB', 'IA/ML'],
    results: [
      'Réponses automatiques 24/7',
      'Gestion des rendez-vous',
      'Support client amélioré',
      'Notifications intelligentes'
    ],
    timeline: '2 mois',
    client: 'Salon de Coiffure Élégance',
    icon: Smartphone,
    gallery: [
      n8n,

    ]
  },
  {
    id: 2,
    title: 'Application Mobile pour Vendeurs de materiel Informatique',
    category: 'Application Mobile',
    description: 'Application simple pour gérer le stock et les ventes de matériel informatique, même pour les non-digitalisés.',
    image: stok ,
    details: "Application mobile intuitive conçue spécialement pour les vendeurs de matériel informatique. Interface simple et claire qui permet de gérer facilement le stock, les ventes et les clients. Même les personnes non-digitalisées peuvent l'utiliser sans difficulté grâce à son design épuré et ses fonctionnalités intuitives.",
    technologies: ['React Native', 'Firebase', 'SQLite', 'UI/UX Simple'],
    results: [
      'Interface ultra-simple',
      'Formation rapide (1h)',
      'Gestion stock en temps réel',
      'Accessible à tous les âges'
    ],
    timeline: '3 mois',
    client: 'Magasin Informatique TechStore',
    icon: Smartphone,
    gallery: [
     stok
    ]
  },
  {
    id: 3,
    title: 'Sama Plainte',
    category: 'Etat du Senegal',
    description: 'une plateforme numérique citoyenne qui permet aux Sénégalais de déposer leur plaintes',
    image: sama,
    details: " SAMA PLAINTES est une plateforme numérique citoyenne qui permet aux Sénégalais de déposer, suivre et gérer leurs plaintes en ligne selon leur localité. Accessible sur ordinateur et mobile, elle relie directement les citoyens aux autorités compétentes de leur zone géographique.L’objectif est de rendre la gestion des plaintes plus rapide, transparente et inclusive, tout en facilitant la communication entre les habitants et les institutions locales.",
    technologies: [''],
    results: [
      'Plaintes et suggestions des citoyens',
      'Dépôt de plaintes',
      'Guide de style cohérent',
      'Prototypes interactifs'
    ],
    timeline: '3 mois',
    client: 'Startup TechCorp',
    icon: Globe,
    gallery: [

    sama,
    ]
  },
  {
    id: 4,
    title: 'IA Prédictive DataFlow Analytics',
    category: 'Intelligence Artificielle',
    description: "Système d'analyse prédictive pour optimiser les ventes et stocks.",
    image: chat,
    details: "DataFlow Analytics utilise des algorithmes d'intelligence artificielle pour analyser les données historiques et prévoir les ventes et besoins en stock. Cela permet aux entreprises de prendre des décisions éclairées et d'optimiser leurs ressources.",
    technologies: ['Python', 'TensorFlow', 'Pandas', 'AWS'],
    results: [
      '+35% précision prévisions',
      '-25% surplus de stock',
      'Automatisation 90%',
      'ROI de 300%'
    ],
    timeline: '4 mois',
    client: '',
    icon: Brain,
    gallery: [
      chat
    ]
  },
  {
    id: 5,
    title: 'Dashboard Analytics RetailVision',
    category: 'Analyse de Données',
    description: "Tableau de bord temps réel pour pilotage d'activité retail multi-sites.",
    image: bi,
    details: "Tableau de bord des Urgences Hospitalières – Avril 2023\n" +
        "Voici les chiffres clés du mois :\n" +
        "- Nombre total de patients : 479\n" +
        "- Temps d’attente moyen : 34,9 minutes\n" +
        "- Score de satisfaction : 5,30\n" +
        "- Patients référés vers d'autres services : 216\n" +
        "Répartition des patients :\n" +
        "- Par statut d’admission : admis, transférés, sortis\n" +
        "- Par tranche d’âge : toutes les générations concernées\n" +
        "- Par sexe : légère majorité féminine\n" +
        "- Par service de référence : diversité des orientations médicales\n" +
        "- Par jour et par heure : pics d’affluence bien identifiés\n" +
        "Ces données permettent d’améliorer la gestion des urgences, optimiser les ressources et renforcer la qualité des soins.",
    technologies: ['Vue.js', 'D3.js', 'Python', 'Elasticsearch'],
    results: [
      'Vision 360° activité',
      'Décisions 3x plus rapides',
      'KPIs temps réel',
      'Interface intuitive'
    ],
    timeline: '2 mois',
    client: 'RetailVision Group',
    icon: Database,
    gallery: [
      // accident,
        bi,
        vente
    ]
  },
  {
    id: 6,
    title: 'site web de gestion Clibique',
    category: '',
    description: 'Plateforme de gestion clinique complète.',
    image: web,
    details: "",
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'AWS'],
    results: [
      '1000+ utilisateurs actifs',
      '99.9% uptime',
      'Scalabilité illimitée',
      'API complète'
    ],
    timeline: '10 mois',
    client: 'pharma',
    icon: Globe,
    gallery: [
  web
    ]
  }
];

const categories = [
  'Tous',
  'Automatisation & IA',
  'Application Mobile',
  'Design & Interface',
  'Intelligence Artificielle',
  'Analyse de Données',
  'SaaS & Cloud'
];

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  details: string;
  technologies: string[];
  results: string[];
  timeline: string;
  client: string;
  icon: any;
  gallery: string[];
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProjects = activeCategory === 'Tous'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.gallery.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.gallery.length - 1 : prev - 1
      );
    }
  };

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  // Désactiver le scroll de la page quand la modale est ouverte
  useEffect(() => {
    if (selectedProject) {
      // Sauvegarder la position actuelle du scroll
      const scrollY = window.scrollY;
      // Désactiver le scroll
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';

      // Cleanup : réactiver le scroll quand la modale se ferme
      return () => {
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        if (scrollY) {
          window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }
      };
    }
  }, [selectedProject]);

  return (
    <div className="bg-white dark:bg-dark-950 pt-20 transition-colors duration-300">
      {/* Hero Section */}
         <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-4xl text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
              Nos <span className="text-orange-500">Réalisations</span>
            </h1>
            <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-300 mb-8">
              Découvrez nos projets phares qui transforment les idées en solutions digitales performantes
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                50+ Projets réalisés
              </span>
              <span className="flex items-center gap-2">
                <Star className="w-4 h-4" />
                100% Satisfaction client
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Livraison dans les temps
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-orange-500 text-white shadow-lg transform scale-105'
                    : 'bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:text-orange-500 hover:border-orange-300 dark:hover:border-orange-500/50 shadow-sm'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-white dark:bg-dark-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                onClick={() => openProject(project)}
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Image Container - Left Side */}
                  <div className="relative w-full lg:w-2/5 h-64 lg:h-auto overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {project.category}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                        <project.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                </div>

                  {/* Content - Right Side */}
                  <div className="p-4 lg:p-6 flex-1 flex flex-col justify-center">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-orange-500 transition-colors">
                    {project.title}
                  </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm lg:text-base">
                      {project.description}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        Cliquez pour voir les détails
                      </span>
                      <ArrowRight className="w-4 h-4 text-orange-500 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Modal for Project Details */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-start z-50 p-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white dark:bg-gray-950 rounded-none shadow-2xl w-full max-w-full overflow-hidden flex flex-col absolute top-10"
              style={{ width: '100vw', height: 'calc(100vh - 2rem)', maxWidth: '100%' }}
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with Close Button */}
              <div className="relative p-6 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-gray-100 dark:bg-gray-950 rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 overflow-y-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Image Gallery - Left Side */}
                  <div className="space-y-4">
                    {/* Main Image */}
                    <div className="relative h-64 rounded-2xl overflow-hidden">
                      <img
                        src={selectedProject.gallery[currentImageIndex]}
                        alt={selectedProject.title}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Navigation Arrows */}
                      {selectedProject.gallery.length > 1 && (
                        <>
                          <button
                            onClick={prevImage}
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
                          >
                            <ChevronLeft className="w-5 h-5 text-gray-700" />
                          </button>
                          <button
                            onClick={nextImage}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
                          >
                            <ChevronRight className="w-5 h-5 text-gray-700" />
                          </button>
                        </>
                      )}

                      {/* Image Indicators */}
                      {selectedProject.gallery.length > 1 && (
                        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
                          {selectedProject.gallery.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`w-2 h-2 rounded-full transition-colors ${
                                index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                              }`}
                            />
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Thumbnail Gallery */}
                    {selectedProject.gallery.length > 1 && (
                      <div className="flex gap-2 overflow-x-auto">
                        {selectedProject.gallery.map((image, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                              index === currentImageIndex 
                                ? 'border-orange-500' 
                                : 'border-gray-200 dark:border-gray-700'
                            }`}
                          >
                            <img
                              src={image}
                              alt={`${selectedProject.title} ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Main Content - Right Side */}
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-orange-500/10 rounded-full p-2">
                        <selectedProject.icon className="w-6 h-6 text-orange-500" />
                      </div>
                      <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {selectedProject.category}
                      </span>
                    </div>

                    <h2 className="text-2xl lg:text-2xl font-bold text-gray-900 dark:text-white">
                      {selectedProject.title}
                    </h2>

                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                      {selectedProject.details}
                    </p>

                    {/* Project Info */}
                    <div className="bg-gray-50 dark:bg-gray-950 rounded-2xl p-6">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Informations du projet
                      </h3>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-3">
                          <Calendar className="w-5 h-5 text-orange-500" />
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Durée</p>
                            <p className="font-medium text-gray-900 dark:text-white">{selectedProject.timeline}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <Users className="w-5 h-5 text-orange-500" />
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Client</p>
                            <p className="font-medium text-gray-900 dark:text-white">{selectedProject.client}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Results */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Résultats obtenus
                      </h3>
                      <div className="grid grid-cols-1 gap-3">
                        {selectedProject.results.map((result, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>


                    {/* CTA */}
                <Link
                  to="/contact"
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                      onClick={() => setSelectedProject(null)}
                >
                      <span>Demander un projet similaire</span>
                      <ArrowRight className="w-5 h-5" />
                </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}