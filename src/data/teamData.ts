// Données enrichies des membres de l'équipe avec contenu avancé
export interface TeamMember {
    id: string;
    name: string;
    role: string;
    bio: string;
    tagline: string; // Phrase d'accroche
    image: string;
    coverImage?: string; // Image de couverture
    email: string;
    phone?: string;
    linkedin?: string;
    github?: string;
    twitter?: string;
    website?: string;
    location: string;
    yearsOfExperience: number;

    // Statistiques
    stats: {
        projectsCompleted: number;
        clientsSatisfied: number;
        awardsWon: number;
        coffeeConsumed: number;
    };

    // Compétences
    skills: {
        name: string;
        level: number; // 0-100
        category: 'technical' | 'soft' | 'tools';
        icon?: string;
    }[];

    // Expérience
    experience: {
        title: string;
        company: string;
        period: string;
        description: string;
        achievements?: string[];
    }[];

    // Projets
    projects: {
        title: string;
        description: string;
        technologies: string[];
        image?: string;
        link?: string;
        category: string;
        featured?: boolean;
    }[];

    // Formation
    education?: {
        degree: string;
        school: string;
        year: string;
        description?: string;
    }[];

    // Certifications
    certifications?: {
        name: string;
        issuer: string;
        year: string;
        credential?: string;
    }[];

    // Témoignages
    testimonials?: {
        name: string;
        role: string;
        company: string;
        text: string;
        image?: string;
        rating: number;
    }[];

    // Récompenses
    achievements?: {
        title: string;
        description: string;
        year: string;
        icon?: string;
    }[];

    // Intérêts
    interests?: string[];

    // Langues
    languages?: {
        name: string;
        level: string; // Natif, Courant, Intermédiaire, Débutant
    }[];
}

export const teamMembers: TeamMember[] = [
    {
        id: 'issa-bathily',
        name: 'Issa Bathily',
        role: 'Expert en Automatisation',
        tagline: 'Transformer la complexité en simplicité, un workflow à la fois',
        bio: 'Passionné par l\'automatisation et l\'optimisation des processus métier, je transforme les workflows complexes en solutions élégantes et efficaces. Avec plus de 3 ans d\'expérience, je maîtrise les technologies web modernes et les outils d\'automatisation no-code. Ma mission : faire gagner du temps aux entreprises en automatisant leurs tâches répétitives.',
        image: '/src/assets/image/issa.jpg',
        email: 'issa.bathily@bigitalis.com',
        phone: '+221 78 530 96 83',
        linkedin: 'https://linkedin.com/in/issa-bathily',
        github: 'https://github.com/issabathily',
        location: 'Dakar, Sénégal',
        yearsOfExperience: 3,

        stats: {
            projectsCompleted: 45,
            clientsSatisfied: 32,
            awardsWon: 5,
            coffeeConsumed: 1247,
        },

        skills: [
            { name: 'React & TypeScript', level: 90, category: 'technical' },
            { name: 'Node.js & Express', level: 85, category: 'technical' },
            { name: 'Automatisation (n8n, Make, Zapier)', level: 95, category: 'tools' },
            { name: 'Python & Django', level: 80, category: 'technical' },
            { name: 'API Integration & REST', level: 90, category: 'technical' },
            { name: 'MongoDB & PostgreSQL', level: 82, category: 'technical' },
            { name: 'Docker & CI/CD', level: 78, category: 'tools' },
            { name: 'Problem Solving', level: 95, category: 'soft' },
            { name: 'Communication', level: 85, category: 'soft' },
            { name: 'Leadership', level: 80, category: 'soft' },
        ],

        experience: [
            {
                title: 'Expert en Automatisation',
                company: 'Bigitalis',
                period: '2022 - Présent',
                description: 'Conception et mise en œuvre de solutions d\'automatisation pour optimiser les processus métier des clients.',
                achievements: [
                    'Automatisé plus de 100 processus métier pour 30+ clients',
                    'Réduit le temps de traitement de 70% en moyenne',
                    'Formé 50+ professionnels aux outils d\'automatisation',
                    'Développé 15+ intégrations API personnalisées',
                ],
            },
            {
                title: 'Développeur Full Stack',
                company: 'Freelance',
                period: '2021 - 2022',
                description: 'Développement d\'applications web et mobiles pour divers clients internationaux.',
                achievements: [
                    'Livré 20+ projets web avec satisfaction client de 98%',
                    'Spécialisé en React, Node.js et automatisation',
                    'Géré des projets de 5K€ à 50K€',
                ],
            },
        ],

        projects: [
            {
                title: 'Plateforme d\'Automatisation E-commerce',
                description: 'Système complet d\'automatisation pour la gestion des commandes, stocks et notifications clients avec intégration WhatsApp Business.',
                technologies: ['n8n', 'Node.js', 'MongoDB', 'WhatsApp API', 'Stripe'],
                category: 'Automatisation',
                featured: true,
            },
            {
                title: 'Dashboard Analytics Temps Réel',
                description: 'Interface de visualisation de données en temps réel avec intégrations multiples (Google Analytics, Facebook Ads, etc.).',
                technologies: ['React', 'TypeScript', 'Chart.js', 'WebSocket', 'Redis'],
                category: 'Web App',
                featured: true,
            },
            {
                title: 'Bot WhatsApp Intelligent',
                description: 'Chatbot automatisé pour le support client avec IA conversationnelle et intégration CRM.',
                technologies: ['Python', 'OpenAI API', 'WhatsApp Business API', 'PostgreSQL'],
                category: 'IA & Automatisation',
            },
            {
                title: 'Système de Gestion RH Automatisé',
                description: 'Automatisation complète du processus RH : recrutement, onboarding, gestion des congés.',
                technologies: ['Make', 'Airtable', 'Gmail API', 'Slack API'],
                category: 'Automatisation',
            },
        ],

        education: [
            {
                degree: 'Licence en Informatique',
                school: 'Université Cheikh Anta Diop',
                year: '2021',
                description: 'Spécialisation en développement web et systèmes d\'information',
            },
        ],

        certifications: [
            {
                name: 'AWS Certified Cloud Practitioner',
                issuer: 'Amazon Web Services',
                year: '2023',
            },
            {
                name: 'Professional Scrum Master I',
                issuer: 'Scrum.org',
                year: '2022',
            },
            {
                name: 'n8n Automation Expert',
                issuer: 'n8n',
                year: '2023',
            },
        ],

        testimonials: [
            {
                name: 'Marie Dupont',
                role: 'CEO',
                company: 'TechStart SAS',
                text: 'Issa a transformé notre façon de travailler. Grâce à ses solutions d\'automatisation, nous avons gagné 15h par semaine et réduit nos erreurs de 90%.',
                rating: 5,
            },
            {
                name: 'Jean Martin',
                role: 'Directeur Technique',
                company: 'InnovCorp',
                text: 'Un expert passionné qui comprend vraiment les besoins métier. Ses solutions sont élégantes, robustes et faciles à maintenir.',
                rating: 5,
            },
        ],

        achievements: [
            {
                title: 'Prix de l\'Innovation Digitale',
                description: 'Récompensé pour une solution d\'automatisation révolutionnaire',
                year: '2023',
            },
            {
                title: 'Top 10 Développeurs Sénégalais',
                description: 'Classé parmi les meilleurs développeurs du Sénégal',
                year: '2022',
            },
        ],

        interests: ['Intelligence Artificielle', 'Blockchain', 'IoT', 'Photographie', 'Voyages'],

        languages: [
            { name: 'Français', level: 'Natif' },
            { name: 'Anglais', level: 'Courant' },
            { name: 'Wolof', level: 'Natif' },
        ],
    },

    {
        id: 'moussa-corea',
        name: 'Moussa Corea',
        role: 'Data Scientist & Designer',
        tagline: 'Donner vie aux données avec créativité et précision',
        bio: 'Spécialiste en intelligence artificielle et analyse de données, je combine expertise technique et sens du design pour créer des solutions data-driven visuellement impactantes. Ma passion : transformer les données complexes en insights actionnables et en expériences utilisateur mémorables.',
        image: '/src/assets/image/moussa.png',
        email: 'moussa.corea@bigitalis.com',
        linkedin: 'https://linkedin.com/in/moussa-corea',
        github: 'https://github.com/moussacorea',
        location: 'Dakar, Sénégal',
        yearsOfExperience: 4,

        stats: {
            projectsCompleted: 38,
            clientsSatisfied: 28,
            awardsWon: 7,
            coffeeConsumed: 982,
        },

        skills: [
            { name: 'Python & Machine Learning', level: 95, category: 'technical' },
            { name: 'Data Visualization (Plotly, D3.js)', level: 90, category: 'technical' },
            { name: 'UI/UX Design (Figma, Adobe XD)', level: 85, category: 'tools' },
            { name: 'TensorFlow & PyTorch', level: 88, category: 'technical' },
            { name: 'SQL & NoSQL Databases', level: 85, category: 'technical' },
            { name: 'Power BI & Tableau', level: 92, category: 'tools' },
            { name: 'React & Next.js', level: 80, category: 'technical' },
            { name: 'Analytical Thinking', level: 95, category: 'soft' },
            { name: 'Creativity', level: 92, category: 'soft' },
            { name: 'Presentation Skills', level: 88, category: 'soft' },
        ],

        experience: [
            {
                title: 'Data Scientist & Designer',
                company: 'Bigitalis',
                period: '2021 - Présent',
                description: 'Développement de modèles d\'IA et création d\'interfaces utilisateur pour des solutions data-driven.',
                achievements: [
                    'Développé 12+ modèles ML avec précision moyenne de 91%',
                    'Créé 25+ dashboards interactifs pour clients Fortune 500',
                    'Réduit le temps d\'analyse de 60% avec automatisation',
                    'Formé 30+ professionnels en Data Science',
                ],
            },
            {
                title: 'Analyste de Données Senior',
                company: 'Tech Solutions Africa',
                period: '2020 - 2021',
                description: 'Analyse de données massives et création de rapports insights pour la prise de décision stratégique.',
                achievements: [
                    'Analysé 10M+ lignes de données mensuellement',
                    'Identifié opportunités générant 2M€ de revenus',
                    'Automatisé 80% des rapports récurrents',
                ],
            },
        ],

        projects: [
            {
                title: 'Système de Prédiction de Ventes',
                description: 'Modèle ML pour prédire les tendances de ventes avec 92% de précision, intégré dans un dashboard interactif.',
                technologies: ['Python', 'Scikit-learn', 'Pandas', 'Plotly', 'FastAPI'],
                category: 'Machine Learning',
                featured: true,
            },
            {
                title: 'Dashboard BI Interactif',
                description: 'Interface de Business Intelligence avec visualisations avancées et analyse prédictive en temps réel.',
                technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
                category: 'Data Visualization',
                featured: true,
            },
            {
                title: 'Chatbot IA Conversationnel',
                description: 'Assistant virtuel intelligent avec traitement du langage naturel et apprentissage continu.',
                technologies: ['Python', 'NLP', 'OpenAI', 'Rasa', 'MongoDB'],
                category: 'Intelligence Artificielle',
            },
            {
                title: 'Plateforme de Design System',
                description: 'Système de design complet avec composants réutilisables et documentation interactive.',
                technologies: ['Figma', 'React', 'Storybook', 'TypeScript'],
                category: 'UI/UX Design',
            },
        ],

        education: [
            {
                degree: 'Master en Data Science',
                school: 'École Supérieure Polytechnique',
                year: '2020',
                description: 'Spécialisation en Machine Learning et Big Data',
            },
        ],

        certifications: [
            {
                name: 'TensorFlow Developer Certificate',
                issuer: 'Google',
                year: '2023',
            },
            {
                name: 'Professional Data Scientist',
                issuer: 'DataCamp',
                year: '2022',
            },
            {
                name: 'UX Design Professional',
                issuer: 'Google',
                year: '2021',
            },
        ],

        testimonials: [
            {
                name: 'Sophie Laurent',
                role: 'Directrice Marketing',
                company: 'RetailPro',
                text: 'Moussa a créé un dashboard qui a révolutionné notre prise de décision. Les visualisations sont magnifiques et les insights précieux.',
                rating: 5,
            },
            {
                name: 'Ahmed Diallo',
                role: 'CTO',
                company: 'FinTech Solutions',
                text: 'Un talent rare qui maîtrise à la fois la data science et le design. Ses solutions sont aussi belles que performantes.',
                rating: 5,
            },
        ],

        achievements: [
            {
                title: 'Best Data Visualization Award',
                description: 'Prix pour le meilleur dashboard interactif',
                year: '2023',
            },
            {
                title: 'AI Innovation Prize',
                description: 'Récompensé pour une solution IA innovante',
                year: '2022',
            },
        ],

        interests: ['Art Numérique', 'Photographie', 'Basketball', 'Musique', 'Lecture'],

        languages: [
            { name: 'Français', level: 'Natif' },
            { name: 'Anglais', level: 'Courant' },
            { name: 'Espagnol', level: 'Intermédiaire' },
        ],
    },

    {
        id: 'sekou-diedhou',
        name: 'Sekou Diedhou',
        role: 'Developer Odoo',
        tagline: 'Optimiser votre entreprise avec des solutions ERP sur mesure',
        bio: 'Expert en développement Odoo et ERP, je crée des solutions de gestion d\'entreprise sur mesure. Spécialisé dans la personnalisation et l\'intégration de modules Odoo pour optimiser les processus métier et augmenter la productivité.',
        image: '/src/assets/image/sekou.jpg',
        email: 'sekou.diedhou@bigitalis.com',
        linkedin: 'https://linkedin.com/in/sekou-diedhou',
        github: 'https://github.com/sekoudiedhou',
        location: 'Dakar, Sénégal',
        yearsOfExperience: 4,

        stats: {
            projectsCompleted: 52,
            clientsSatisfied: 35,
            awardsWon: 4,
            coffeeConsumed: 1456,
        },

        skills: [
            { name: 'Odoo Development', level: 95, category: 'technical' },
            { name: 'Python', level: 90, category: 'technical' },
            { name: 'PostgreSQL', level: 85, category: 'technical' },
            { name: 'XML & QWeb', level: 88, category: 'technical' },
            { name: 'JavaScript & OWL', level: 80, category: 'technical' },
            { name: 'Docker & Linux', level: 82, category: 'tools' },
            { name: 'Project Management', level: 85, category: 'soft' },
            { name: 'Client Relations', level: 90, category: 'soft' },
            { name: 'Training & Mentoring', level: 87, category: 'soft' },
        ],

        experience: [
            {
                title: 'Developer Odoo Senior',
                company: 'Bigitalis',
                period: '2020 - Présent',
                description: 'Développement et personnalisation de modules Odoo pour divers secteurs d\'activité.',
                achievements: [
                    'Implémenté 40+ modules Odoo personnalisés',
                    'Formé 100+ utilisateurs sur Odoo',
                    'Migré 15+ entreprises vers Odoo',
                    'Réduit les coûts opérationnels de 40% en moyenne',
                ],
            },
            {
                title: 'Consultant ERP',
                company: 'Business Solutions',
                period: '2019 - 2020',
                description: 'Conseil en implémentation de solutions ERP et formation des utilisateurs.',
            },
        ],

        projects: [
            {
                title: 'ERP Complet pour PME',
                description: 'Solution Odoo complète avec modules personnalisés pour la gestion commerciale, stocks, comptabilité.',
                technologies: ['Odoo 16', 'Python', 'PostgreSQL', 'JavaScript'],
                category: 'ERP',
                featured: true,
            },
            {
                title: 'Module de Gestion de Stock Avancé',
                description: 'Module personnalisé pour la gestion multi-entrepôts avec traçabilité complète.',
                technologies: ['Odoo', 'Python', 'XML', 'PostgreSQL'],
                category: 'ERP Module',
            },
            {
                title: 'Intégration E-commerce Odoo',
                description: 'Connexion entre Odoo et plateforme e-commerce avec synchronisation temps réel.',
                technologies: ['Odoo', 'API REST', 'Python', 'WooCommerce'],
                category: 'Integration',
            },
        ],

        education: [
            {
                degree: 'Licence en Génie Logiciel',
                school: 'Institut Supérieur d\'Informatique',
                year: '2019',
            },
        ],

        certifications: [
            {
                name: 'Odoo Certified Developer',
                issuer: 'Odoo S.A.',
                year: '2021',
            },
            {
                name: 'PostgreSQL Administrator',
                issuer: 'PostgreSQL',
                year: '2022',
            },
        ],

        testimonials: [
            {
                name: 'Fatou Sall',
                role: 'Directrice Générale',
                company: 'Distribution Plus',
                text: 'Sekou a transformé notre gestion avec Odoo. Tout est maintenant centralisé et automatisé. Un vrai professionnel !',
                rating: 5,
            },
        ],

        achievements: [
            {
                title: 'Meilleur Projet Odoo Afrique',
                description: 'Récompensé pour l\'implémentation ERP la plus complète',
                year: '2023',
            },
        ],

        interests: ['Football', 'Échecs', 'Technologie', 'Voyages'],

        languages: [
            { name: 'Français', level: 'Natif' },
            { name: 'Anglais', level: 'Courant' },
            { name: 'Wolof', level: 'Natif' },
        ],
    },

    {
        id: 'aliou-diallo',
        name: 'Aliou Diallo',
        role: 'Expert en Excel',
        tagline: 'Transformer vos données en décisions stratégiques',
        bio: 'Spécialiste en analyse de données et visualisation avec Excel, je transforme les données brutes en tableaux de bord interactifs et rapports visuels percutants. Expert en Power BI, VBA et automatisation Excel pour optimiser vos processus d\'analyse.',
        image: '/src/assets/image/aliou.jpg',
        email: 'aliou.diallo@bigitalis.com',
        linkedin: 'https://linkedin.com/in/aliou-diallo',
        location: 'Dakar, Sénégal',
        yearsOfExperience: 5,

        stats: {
            projectsCompleted: 67,
            clientsSatisfied: 42,
            awardsWon: 6,
            coffeeConsumed: 1823,
        },

        skills: [
            { name: 'Excel Avancé & VBA', level: 98, category: 'tools' },
            { name: 'Power BI', level: 92, category: 'tools' },
            { name: 'Data Analysis', level: 95, category: 'technical' },
            { name: 'SQL', level: 85, category: 'technical' },
            { name: 'Power Query & DAX', level: 90, category: 'technical' },
            { name: 'Python (Pandas)', level: 75, category: 'technical' },
            { name: 'Attention to Detail', level: 95, category: 'soft' },
            { name: 'Teaching', level: 88, category: 'soft' },
            { name: 'Problem Solving', level: 92, category: 'soft' },
        ],

        experience: [
            {
                title: 'Expert en Excel & BI',
                company: 'Bigitalis',
                period: '2021 - Présent',
                description: 'Création de tableaux de bord Excel et Power BI pour l\'analyse de données.',
                achievements: [
                    'Créé 100+ dashboards Excel automatisés',
                    'Formé 200+ professionnels à Excel avancé',
                    'Automatisé 500+ heures de travail manuel',
                    'Développé 50+ macros VBA personnalisées',
                ],
            },
            {
                title: 'Analyste Financier',
                company: 'Cabinet Comptable',
                period: '2019 - 2021',
                description: 'Analyse financière et création de rapports automatisés.',
            },
        ],

        projects: [
            {
                title: 'Dashboard Financier Automatisé',
                description: 'Tableau de bord Excel avec mise à jour automatique des données financières et analyses prédictives.',
                technologies: ['Excel', 'VBA', 'Power Query', 'SQL'],
                category: 'Finance',
                featured: true,
            },
            {
                title: 'Système de Reporting Power BI',
                description: 'Solution complète de reporting avec visualisations interactives et KPIs en temps réel.',
                technologies: ['Power BI', 'DAX', 'Power Query', 'Excel'],
                category: 'Business Intelligence',
                featured: true,
            },
            {
                title: 'Outil de Prévision de Trésorerie',
                description: 'Modèle Excel avancé pour la prévision et l\'analyse de trésorerie avec scénarios multiples.',
                technologies: ['Excel', 'VBA', 'Macros'],
                category: 'Finance',
            },
        ],

        education: [
            {
                degree: 'Master en Finance',
                school: 'Institut des Hautes Études Commerciales',
                year: '2019',
            },
        ],

        certifications: [
            {
                name: 'Microsoft Excel Expert',
                issuer: 'Microsoft',
                year: '2023',
            },
            {
                name: 'Power BI Data Analyst',
                issuer: 'Microsoft',
                year: '2022',
            },
            {
                name: 'Financial Modeling & Valuation',
                issuer: 'CFI',
                year: '2021',
            },
        ],

        testimonials: [
            {
                name: 'Ibrahima Ndiaye',
                role: 'Directeur Financier',
                company: 'Groupe Industriel',
                text: 'Les dashboards d\'Aliou ont révolutionné notre reporting financier. Précis, automatisés et visuellement parfaits.',
                rating: 5,
            },
        ],

        achievements: [
            {
                title: 'Excel Champion Award',
                description: 'Reconnu comme expert Excel de l\'année',
                year: '2023',
            },
        ],

        interests: ['Finance', 'Économie', 'Tennis', 'Lecture', 'Cuisine'],

        languages: [
            { name: 'Français', level: 'Natif' },
            { name: 'Anglais', level: 'Courant' },
            { name: 'Arabe', level: 'Intermédiaire' },
        ],
    },

    {
        id: 'fama-diop',
        name: 'Fama Diop',
        role: 'Developer Mobile & Community Manager',
        tagline: 'Créer des expériences mobiles qui connectent et inspirent',
        bio: 'Développeuse mobile passionnée et community manager créative, je crée des applications mobiles performantes tout en animant les communautés digitales. Double expertise technique et communication pour des projets qui marquent les esprits.',
        image: '/src/assets/image/fama.jpg',
        email: 'fama.diop@bigitalis.com',
        linkedin: 'https://linkedin.com/in/fama-diop',
        github: 'https://github.com/famadiop',
        twitter: 'https://twitter.com/famadiop',
        location: 'Dakar, Sénégal',
        yearsOfExperience: 3,

        stats: {
            projectsCompleted: 34,
            clientsSatisfied: 26,
            awardsWon: 5,
            coffeeConsumed: 876,
        },

        skills: [
            { name: 'React Native', level: 90, category: 'technical' },
            { name: 'Flutter & Dart', level: 85, category: 'technical' },
            { name: 'Social Media Management', level: 95, category: 'tools' },
            { name: 'Content Creation', level: 92, category: 'soft' },
            { name: 'JavaScript/TypeScript', level: 88, category: 'technical' },
            { name: 'Firebase & Backend', level: 80, category: 'technical' },
            { name: 'UI/UX Mobile', level: 87, category: 'tools' },
            { name: 'Community Building', level: 95, category: 'soft' },
            { name: 'Communication', level: 98, category: 'soft' },
            { name: 'Marketing Digital', level: 90, category: 'soft' },
        ],

        experience: [
            {
                title: 'Developer Mobile & Community Manager',
                company: 'Bigitalis',
                period: '2021 - Présent',
                description: 'Développement d\'applications mobiles et gestion de la présence digitale.',
                achievements: [
                    'Développé 15+ applications mobiles iOS/Android',
                    'Augmenté l\'engagement social de 400%',
                    'Créé une communauté de 10K+ followers',
                    'Généré 50K€+ de leads via social media',
                ],
            },
            {
                title: 'Développeuse Mobile',
                company: 'Startup Tech',
                period: '2020 - 2021',
                description: 'Développement d\'applications mobiles avec React Native.',
            },
        ],

        projects: [
            {
                title: 'Application E-commerce Mobile',
                description: 'App mobile complète avec paiement mobile, notifications push et système de fidélité.',
                technologies: ['React Native', 'Firebase', 'Stripe', 'Redux'],
                category: 'E-commerce',
                featured: true,
            },
            {
                title: 'App de Gestion de Tâches',
                description: 'Application de productivité avec synchronisation cloud et collaboration en temps réel.',
                technologies: ['Flutter', 'Dart', 'Firebase', 'SQLite'],
                category: 'Productivity',
                featured: true,
            },
            {
                title: 'Campagne Social Media',
                description: 'Stratégie digitale complète avec croissance de 300% de l\'engagement et ROI de 500%.',
                technologies: ['Instagram', 'Facebook', 'LinkedIn', 'Canva', 'Analytics'],
                category: 'Marketing',
            },
        ],

        education: [
            {
                degree: 'Licence en Informatique Mobile',
                school: 'École Supérieure Multinationale des Télécommunications',
                year: '2020',
            },
        ],

        certifications: [
            {
                name: 'React Native Developer',
                issuer: 'Meta',
                year: '2023',
            },
            {
                name: 'Digital Marketing Professional',
                issuer: 'Google',
                year: '2022',
            },
            {
                name: 'Social Media Marketing',
                issuer: 'HubSpot',
                year: '2021',
            },
        ],

        testimonials: [
            {
                name: 'Aminata Sy',
                role: 'CEO',
                company: 'Fashion Brand',
                text: 'Fama a créé notre app mobile et géré nos réseaux sociaux. Résultat : +300% de ventes en 6 mois. Incroyable !',
                rating: 5,
            },
        ],

        achievements: [
            {
                title: 'Best Mobile App Award',
                description: 'Prix pour la meilleure application mobile de l\'année',
                year: '2023',
            },
            {
                title: 'Social Media Influencer',
                description: 'Reconnue comme influenceuse tech',
                year: '2022',
            },
        ],

        interests: ['Mode', 'Photographie', 'Voyages', 'Fitness', 'Musique'],

        languages: [
            { name: 'Français', level: 'Natif' },
            { name: 'Anglais', level: 'Courant' },
            { name: 'Wolof', level: 'Natif' },
        ],
    },
];

// Fonction helper pour trouver un membre par ID
export const getTeamMemberById = (id: string): TeamMember | undefined => {
    return teamMembers.find(member => member.id === id);
};
