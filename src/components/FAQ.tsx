import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Quel est le délai moyen pour un projet ?",
    answer: "Les délais varient selon la complexité : 2-4 semaines pour un site vitrine, 2-6 mois pour une application mobile, et 3-12 mois pour des logiciels sur mesure. Nous nous engageons à respecter les délais convenus."
  },
  {
    question: "Proposez-vous de la maintenance ?",
    answer: "Oui, nous proposons des contrats de maintenance incluant mises à jour, sauvegardes, monitoring et support technique 24/7. Nos forfaits de maintenance sont adaptés à vos besoins."
  },
  {
    question: "Travaillez-vous avec des TPE/PME ?",
    answer: "Absolument ! Nous adaptons nos solutions et nos tarifs à tous types d'entreprises, des startups aux grandes corporations. Chaque projet est unique et mérite notre attention."
  },
  {
    question: "Comment se déroule le processus ?",
    answer: "Notre processus en 4 étapes : Analyse des besoins → Devis détaillé → Conception → Développement → Tests → Livraison → Formation et support. Nous vous tenons informés à chaque étape."
  },
  {
    question: "Gérez-vous l'hébergement ?",
    answer: "Nous proposons des solutions d'hébergement cloud sécurisées et performantes, ou nous adaptons à votre infrastructure existante. Nous nous occupons de tout pour vous."
  },
  {
    question: "Quelles technologies utilisez-vous ?",
    answer: "Nous utilisons les technologies les plus récentes et adaptées : React, Next.js, Node.js, Python, AWS, et bien d'autres selon vos besoins. Nous restons à la pointe de l'innovation."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Première question ouverte par défaut

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
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
              Questions <span className="text-orange-500">Fréquentes</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Trouvez rapidement les réponses à vos questions les plus courantes.
            </p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          <div className="overflow-hidden">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                className="border-b border-gray-200 dark:border-gray-700 last:border-b-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between transition-colors duration-200 group"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-orange-500 transition-colors">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 ml-4"
                  >
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-orange-500" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition-colors" />
                    )}
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6">
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
