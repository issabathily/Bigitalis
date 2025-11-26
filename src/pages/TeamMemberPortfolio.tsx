import { useState, useEffect, useRef } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import {
    ArrowLeft, Mail, Phone, Linkedin, Github, Twitter, ExternalLink,
    Award, Briefcase, GraduationCap, Star, Globe, MapPin, Calendar,
    CheckCircle, Download, Share2, MessageCircle, Code, Layers, Zap
} from 'lucide-react';
import { getTeamMemberById } from '../data/teamData';

// Composant pour les statistiques animées
const AnimatedStat = ({ value, label, icon: Icon, delay = 0 }) => {
    const [count, setCount] = useState(0);
    const nodeRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    let start = 0;
                    const end = parseInt(value.toString(), 10);
                    const duration = 2000;
                    const increment = end / (duration / 16);

                    const timer = setInterval(() => {
                        start += increment;
                        if (start >= end) {
                            setCount(end);
                            clearInterval(timer);
                        } else {
                            setCount(Math.floor(start));
                        }
                    }, 16);

                    return () => clearInterval(timer);
                }
            },
            { threshold: 0.5 }
        );

        if (nodeRef.current) {
            observer.observe(nodeRef.current);
        }

        return () => observer.disconnect();
    }, [value]);

    return (
        <motion.div
            ref={nodeRef}
            className="flex flex-col items-center p-6 bg-white/5 dark:bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-orange-500/30 transition-all duration-300 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5 }}
            viewport={{ once: true }}
        >
            <div className="p-3 bg-orange-500/10 rounded-full mb-4 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                <Icon className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors" />
            </div>
            <span className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {count}{typeof value === 'string' && value.includes('+') ? '+' : ''}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">{label}</span>
        </motion.div>
    );
};

// Composant pour les barres de compétences circulaires
const CircularSkill = ({ name, level, delay = 0 }) => {
    const circumference = 2 * Math.PI * 40; // rayon 40

    return (
        <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay, duration: 0.5 }}
            viewport={{ once: true }}
        >
            <div className="relative w-24 h-24 mb-3">
                <svg className="w-full h-full transform -rotate-90">
                    <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        className="text-gray-200 dark:text-gray-800"
                    />
                    <motion.circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference}
                        className="text-orange-500"
                        strokeLinecap="round"
                        whileInView={{ strokeDashoffset: circumference - (level / 100) * circumference }}
                        transition={{ duration: 1.5, delay: delay + 0.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">{level}%</span>
                </div>
            </div>
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 text-center">{name}</span>
        </motion.div>
    );
};

export default function TeamMemberPortfolio() {
    const { memberId } = useParams<{ memberId: string }>();
    const member = memberId ? getTeamMemberById(memberId) : undefined;
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    const [activeTab, setActiveTab] = useState('experience');

    // Si le membre n'existe pas, rediriger vers la page About
    if (!member) {
        return <Navigate to="/about" replace />;
    }

    const technicalSkills = member.skills.filter(s => s.category === 'technical');
    const toolsSkills = member.skills.filter(s => s.category === 'tools');
    const softSkills = member.skills.filter(s => s.category === 'soft');

    return (
        <div className="bg-gray-50 dark:bg-dark-950 min-h-screen transition-colors duration-300 overflow-hidden">
            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-orange-500 z-50 origin-left"
                style={{ scaleX: scrollYProgress }}
            />

            {/* Hero Section Premium */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
                {/* Background Elements */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-100 to-white dark:from-dark-950 dark:to-dark-900" />
                    <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px] animate-pulse" />
                    <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] dark:opacity-[0.05]" />
                </div>

                <div className="container mx-auto px-4 z-10 relative">
                    {/* Navigation Back */}
                    <motion.div
                        className="absolute top-4 left-4 sm:top-8 sm:left-8"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <Link
                            to="/about"
                            className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-dark-800/80 backdrop-blur-md rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 text-gray-700 dark:text-gray-200"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span>Retour</span>
                        </Link>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        {/* Text Content */}
                        <motion.div
                            className="lg:col-span-7 text-center lg:text-left pt-12 lg:pt-0"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.div
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-sm font-semibold mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <Star className="w-4 h-4 fill-current" />
                                <span>{member.role}</span>
                            </motion.div>

                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                                {member.name.split(' ')[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">{member.name.split(' ')[1]}</span>
                            </h1>

                            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
                                {member.tagline || member.bio.substring(0, 100) + '...'}
                            </p>

                            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
                                <a
                                    href={`mailto:${member.email}`}
                                    className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all transform hover:-translate-y-1 flex items-center gap-2"
                                >
                                    <Mail className="w-5 h-5" />
                                    Me Contacter
                                </a>
                                <button className="px-8 py-4 bg-white dark:bg-dark-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-500 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center gap-2 group">
                                    <Download className="w-5 h-5 group-hover:text-orange-500 transition-colors" />
                                    CV / Resume
                                </button>
                            </div>

                            <div className="flex justify-center lg:justify-start gap-6 text-gray-500 dark:text-gray-400">
                                {member.linkedin && (
                                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors transform hover:scale-110">
                                        <Linkedin className="w-6 h-6" />
                                    </a>
                                )}
                                {member.github && (
                                    <a href={member.github} target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors transform hover:scale-110">
                                        <Github className="w-6 h-6" />
                                    </a>
                                )}
                                {member.twitter && (
                                    <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors transform hover:scale-110">
                                        <Twitter className="w-6 h-6" />
                                    </a>
                                )}
                                {member.website && (
                                    <a href={member.website} target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors transform hover:scale-110">
                                        <Globe className="w-6 h-6" />
                                    </a>
                                )}
                            </div>
                        </motion.div>

                        {/* Image Premium */}
                        <motion.div
                            className="lg:col-span-5 relative"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
                                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-yellow-500 rounded-[2rem] rotate-6 opacity-20 blur-2xl" />
                                <div className="absolute inset-0 border-2 border-orange-500/30 rounded-[2rem] -rotate-3" />
                                <div className="relative h-full rounded-[2rem] overflow-hidden shadow-2xl bg-white dark:bg-dark-800">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                                    />

                                    {/* Floating Card */}
                                    <motion.div
                                        className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 dark:bg-dark-900/90 backdrop-blur-md rounded-xl border border-white/20 shadow-lg"
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 1 }}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Expérience</p>
                                                <p className="text-lg font-bold text-gray-900 dark:text-white">{member.yearsOfExperience}+ Ans</p>
                                            </div>
                                            <div className="h-10 w-10 bg-orange-100 dark:bg-orange-900/50 rounded-full flex items-center justify-center text-orange-600 dark:text-orange-400">
                                                <Briefcase className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <span className="text-xs uppercase tracking-widest">Scroll</span>
                    <div className="w-px h-12 bg-gradient-to-b from-orange-500 to-transparent" />
                </motion.div>
            </section>

            {/* Stats Section */}
            <section className="py-12 bg-white dark:bg-dark-900 border-y border-gray-200 dark:border-gray-800">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <AnimatedStat
                            value={member.stats?.projectsCompleted || 50}
                            label="Projets Terminés"
                            icon={CheckCircle}
                            delay={0}
                        />
                        <AnimatedStat
                            value={member.stats?.clientsSatisfied || 30}
                            label="Clients Satisfaits"
                            icon={Star}
                            delay={0.1}
                        />
                        <AnimatedStat
                            value={member.stats?.awardsWon || 5}
                            label="Prix Remportés"
                            icon={Award}
                            delay={0.2}
                        />
                        <AnimatedStat
                            value={member.stats?.coffeeConsumed || 1000}
                            label="Cafés Consommés"
                            icon={Zap}
                            delay={0.3}
                        />
                    </div>
                </div>
            </section>

            {/* About & Skills Section */}
            <section className="py-20 bg-gray-50 dark:bg-dark-950">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        {/* About Text */}
                        <div className="lg:col-span-5">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                                    <span className="w-10 h-1 bg-orange-500 rounded-full" />
                                    À Propos de Moi
                                </h2>
                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8 text-justify">
                                    {member.bio}
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-orange-100 dark:bg-orange-900/20 rounded-lg text-orange-600 dark:text-orange-400">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 uppercase">Localisation</p>
                                            <p className="font-medium text-gray-900 dark:text-white">{member.location}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-orange-100 dark:bg-orange-900/20 rounded-lg text-orange-600 dark:text-orange-400">
                                            <Calendar className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 uppercase">Expérience</p>
                                            <p className="font-medium text-gray-900 dark:text-white">{member.yearsOfExperience} Ans</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Languages */}
                                {member.languages && (
                                    <div className="mb-8">
                                        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Langues</h3>
                                        <div className="flex flex-wrap gap-3">
                                            {member.languages.map((lang, idx) => (
                                                <span key={idx} className="px-3 py-1 bg-white dark:bg-dark-800 border border-gray-200 dark:border-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300">
                                                    <span className="font-semibold">{lang.name}</span> <span className="text-gray-400">|</span> {lang.level}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </div>

                        {/* Skills Visualization */}
                        <div className="lg:col-span-7">
                            <motion.div
                                className="bg-white dark:bg-dark-900 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-800"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Compétences</h3>
                                    <div className="flex gap-2">
                                        <span className="w-3 h-3 rounded-full bg-red-500" />
                                        <span className="w-3 h-3 rounded-full bg-yellow-500" />
                                        <span className="w-3 h-3 rounded-full bg-green-500" />
                                    </div>
                                </div>

                                {/* Top Skills Circular */}
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
                                    {technicalSkills.slice(0, 4).map((skill, idx) => (
                                        <CircularSkill key={idx} name={skill.name} level={skill.level} delay={idx * 0.1} />
                                    ))}
                                </div>

                                {/* Other Skills Bars */}
                                <div className="space-y-6">
                                    {technicalSkills.slice(4).concat(toolsSkills).slice(0, 5).map((skill, idx) => (
                                        <div key={idx}>
                                            <div className="flex justify-between mb-2">
                                                <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                                                <span className="text-orange-500 font-bold">{skill.level}%</span>
                                            </div>
                                            <div className="h-2 bg-gray-100 dark:bg-dark-800 rounded-full overflow-hidden">
                                                <motion.div
                                                    className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    transition={{ duration: 1, delay: 0.5 + (idx * 0.1) }}
                                                    viewport={{ once: true }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience & Education Tabs */}
            <section className="py-20 bg-white dark:bg-dark-900">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center mb-12">
                        <div className="inline-flex p-1 bg-gray-100 dark:bg-dark-800 rounded-xl">
                            <button
                                onClick={() => setActiveTab('experience')}
                                className={`px-6 py-3 rounded-lg font-semibold transition-all ${activeTab === 'experience' ? 'bg-white dark:bg-dark-700 text-orange-500 shadow-md' : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'}`}
                            >
                                Expérience
                            </button>
                            <button
                                onClick={() => setActiveTab('education')}
                                className={`px-6 py-3 rounded-lg font-semibold transition-all ${activeTab === 'education' ? 'bg-white dark:bg-dark-700 text-orange-500 shadow-md' : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'}`}
                            >
                                Formation
                            </button>
                        </div>
                    </div>

                    <AnimatePresence mode="wait">
                        {activeTab === 'experience' ? (
                            <motion.div
                                key="experience"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="max-w-4xl mx-auto"
                            >
                                {member.experience.map((exp, index) => (
                                    <div key={index} className="relative pl-8 sm:pl-32 py-6 group">
                                        {/* Date Line */}
                                        <div className="hidden sm:flex flex-col items-end absolute left-0 top-6 w-24 pr-8 text-right">
                                            <span className="text-lg font-bold text-orange-500">{exp.period.split(' - ')[0]}</span>
                                            <span className="text-sm text-gray-400">{exp.period.split(' - ')[1] || 'Présent'}</span>
                                        </div>

                                        {/* Timeline Line */}
                                        <div className="absolute left-0 sm:left-24 top-0 bottom-0 w-px bg-gray-200 dark:bg-dark-700 group-last:bottom-auto group-last:h-6"></div>
                                        <div className="absolute left-[-4px] sm:left-[92px] top-8 w-2 h-2 rounded-full bg-orange-500 ring-4 ring-white dark:ring-dark-900"></div>

                                        <div className="bg-gray-50 dark:bg-dark-800 p-6 rounded-2xl border border-gray-100 dark:border-dark-700 hover:shadow-lg transition-shadow">
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                                                <div>
                                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                                                    <p className="text-orange-500 font-medium">{exp.company}</p>
                                                </div>
                                                <span className="sm:hidden text-sm text-gray-500 mt-2">{exp.period}</span>
                                            </div>
                                            <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                                            {exp.achievements && (
                                                <ul className="space-y-2">
                                                    {exp.achievements.map((ach, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400">
                                                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                            {ach}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                key="education"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
                            >
                                {member.education?.map((edu, index) => (
                                    <div key={index} className="bg-gray-50 dark:bg-dark-800 p-6 rounded-2xl border border-gray-100 dark:border-dark-700 flex gap-4">
                                        <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-xl h-fit text-blue-600 dark:text-blue-400">
                                            <GraduationCap className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{edu.degree}</h3>
                                            <p className="text-gray-600 dark:text-gray-300 mb-2">{edu.school}</p>
                                            <span className="px-3 py-1 bg-white dark:bg-dark-700 rounded-full text-xs font-semibold text-gray-500 border border-gray-200 dark:border-gray-600">
                                                {edu.year}
                                            </span>
                                        </div>
                                    </div>
                                ))}

                                {member.certifications?.map((cert, index) => (
                                    <div key={`cert-${index}`} className="bg-gray-50 dark:bg-dark-800 p-6 rounded-2xl border border-gray-100 dark:border-dark-700 flex gap-4">
                                        <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-xl h-fit text-purple-600 dark:text-purple-400">
                                            <Award className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{cert.name}</h3>
                                            <p className="text-gray-600 dark:text-gray-300 mb-2">{cert.issuer}</p>
                                            <span className="px-3 py-1 bg-white dark:bg-dark-700 rounded-full text-xs font-semibold text-gray-500 border border-gray-200 dark:border-gray-600">
                                                {cert.year}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            {/* Projects Showcase */}
            <section className="py-20 bg-gray-50 dark:bg-dark-950">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm">Portfolio</span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2">Projets Récents</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {member.projects.map((project, index) => (
                            <motion.div
                                key={index}
                                className="group relative bg-white dark:bg-dark-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-dark-800 dark:to-dark-700 relative overflow-hidden">
                                    {/* Placeholder for project image */}
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-600">
                                        <Code className="w-12 h-12 opacity-50" />
                                    </div>
                                    <div className="absolute inset-0 bg-orange-500/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                                        {project.link && (
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full text-orange-500 hover:scale-110 transition-transform">
                                                <ExternalLink className="w-5 h-5" />
                                            </a>
                                        )}
                                        <button className="p-3 bg-white rounded-full text-orange-500 hover:scale-110 transition-transform">
                                            <Share2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="text-xs font-bold text-orange-500 uppercase tracking-wider">{project.category}</span>
                                        {project.featured && (
                                            <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 text-[10px] font-bold rounded uppercase">Featured</span>
                                        )}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-orange-500 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-3">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.slice(0, 3).map((tech, i) => (
                                            <span key={i} className="px-2 py-1 bg-gray-100 dark:bg-dark-800 text-gray-600 dark:text-gray-300 text-xs rounded">
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <span className="px-2 py-1 bg-gray-100 dark:bg-dark-800 text-gray-600 dark:text-gray-300 text-xs rounded">
                                                +{project.technologies.length - 3}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            {member.testimonials && member.testimonials.length > 0 && (
                <section className="py-20 bg-white dark:bg-dark-900">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">Témoignages</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {member.testimonials.map((testi, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-gray-50 dark:bg-dark-800 p-8 rounded-3xl relative"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="absolute -top-4 left-8 text-6xl text-orange-500 opacity-30 font-serif">"</div>
                                    <p className="text-gray-600 dark:text-gray-300 mb-6 italic relative z-10">
                                        {testi.text}
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-gray-200 dark:bg-dark-700 rounded-full flex items-center justify-center text-xl font-bold text-gray-500">
                                            {testi.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 dark:text-white">{testi.name}</h4>
                                            <p className="text-sm text-gray-500">{testi.role}, {testi.company}</p>
                                        </div>
                                        <div className="ml-auto flex gap-1">
                                            {[...Array(testi.rating)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-orange-600 dark:bg-orange-700">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                            Prêt à démarrer un projet ?
                        </h2>
                        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                            Discutons de vos idées et voyons comment je peux vous aider à les concrétiser.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href={`mailto:${member.email}`}
                                className="px-8 py-4 bg-white text-orange-600 rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                            >
                                <Mail className="w-5 h-5" />
                                Me Contacter
                            </a>
                            <Link
                                to="/contact"
                                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                            >
                                <MessageCircle className="w-5 h-5" />
                                Demander un Devis
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
