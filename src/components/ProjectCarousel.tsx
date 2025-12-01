import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import images
import n8n from "/src/assets/image/n8n.png";
import sama from "/src/assets/image/sama.png";
import stok from "/src/assets/image/stok.png";
import bi from "/src/assets/image/sante.jpg";
import chat from "/src/assets/image/chatbot.png";
import web from "/src/assets/image/web.webp";

// Real data from Projects.tsx
const projects = [
    {
        id: 1,
        title: 'Assistant WhatsApp Intelligent',
        category: 'Automatisation & IA',
        description: "Un assistant bot WhatsApp pour discuter avec vos clients 24/7 💬",
        image: n8n,
        color: 'from-green-500 to-emerald-600'
    },
    {
        id: 2,
        title: 'App Mobile Gestion Stock',
        category: 'Application Mobile',
        description: 'Application simple pour gérer le stock et les ventes de matériel informatique.',
        image: stok,
        color: 'from-blue-500 to-cyan-600'
    },
    {
        id: 3,
        title: 'Sama Plainte',
        category: 'Plateforme Citoyenne',
        description: 'Plateforme numérique permettant aux Sénégalais de déposer leurs plaintes.',
        image: sama,
        color: 'from-red-500 to-orange-600'
    },
    {
        id: 4,
        title: 'IA Prédictive DataFlow',
        category: 'Intelligence Artificielle',
        description: "Système d'analyse prédictive pour optimiser les ventes et stocks.",
        image: chat,
        color: 'from-purple-500 to-indigo-600'
    },
    {
        id: 5,
        title: 'Dashboard RetailVision',
        category: 'Analyse de Données',
        description: "Tableau de bord temps réel pour pilotage d'activité retail multi-sites.",
        image: bi,
        color: 'from-yellow-500 to-orange-600'
    },
    {
        id: 6,
        title: 'Gestion Clinique',
        category: 'Plateforme Web',
        description: 'Plateforme de gestion clinique complète et scalable.',
        image: web,
        color: 'from-pink-500 to-rose-600'
    }
];

export default function ProjectCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => {
            let nextIndex = prevIndex + newDirection;
            if (nextIndex < 0) nextIndex = projects.length - 1;
            if (nextIndex >= projects.length) nextIndex = 0;
            return nextIndex;
        });
    };

    // Auto-play
    useEffect(() => {
        const timer = setInterval(() => {
            paginate(1);
        }, 5000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    return (
        <section className="py-24 bg-white dark:bg-dark-950 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div
                    className="mx-auto max-w-2xl text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                        Nos <span className="text-orange-500">Réalisations</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Découvrez comment nous avons aidé nos clients à atteindre leurs objectifs.
                    </p>
                </motion.div>

                <div className="relative h-[500px] w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(_, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);

                                if (swipe < -swipeConfidenceThreshold) {
                                    paginate(1);
                                } else if (swipe > swipeConfidenceThreshold) {
                                    paginate(-1);
                                }
                            }}
                            className="absolute inset-0 w-full h-full"
                        >
                            <div className="relative w-full h-full group">
                                {/* Image Background */}
                                <div className="absolute inset-0">
                                    <img
                                        src={projects[currentIndex].image}
                                        alt={projects[currentIndex].title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                                </div>

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 text-white">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${projects[currentIndex].color} mb-4`}>
                                            {projects[currentIndex].category}
                                        </span>
                                        <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                                            {projects[currentIndex].title}
                                        </h3>
                                        <p className="text-gray-200 text-lg mb-6 max-w-2xl">
                                            {projects[currentIndex].description}
                                        </p>
                                        <Link
                                            to="/projects"
                                            className="inline-flex items-center space-x-2 text-white hover:text-orange-400 transition-colors font-semibold group/link"
                                        >
                                            <span>Voir le projet</span>
                                            <ArrowRight className="w-5 h-5 transform group-hover/link:translate-x-1 transition-transform" />
                                        </Link>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <button
                        className="absolute top-1/2 left-4 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
                        onClick={() => paginate(-1)}
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        className="absolute top-1/2 right-4 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
                        onClick={() => paginate(1)}
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Indicators */}
                    <div className="absolute bottom-6 right-8 flex space-x-2 z-10">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setDirection(index > currentIndex ? 1 : -1);
                                    setCurrentIndex(index);
                                }}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8 bg-orange-500' : 'bg-white/50 hover:bg-white'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
