import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Sun, Moon, Globe, Code2, Database, Zap, Mail, FileText, BarChart3, Settings } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [showApps, setShowApps] = useState(false);

  const themes = [
    { key: 'system' as const, icon: Monitor, label: 'Système' },
    { key: 'light' as const, icon: Sun, label: 'Clair' },
    { key: 'dark' as const, icon: Moon, label: 'Sombre' }
  ];

  const applications = [
    { icon: Globe, name: 'Sites Web', color: 'text-blue-500', bgColor: 'bg-blue-50 dark:bg-blue-900/20' },
    { icon: Code2, name: 'Apps Mobile', color: 'text-green-500', bgColor: 'bg-green-50 dark:bg-green-900/20' },
    { icon: Database, name: 'Logiciels', color: 'text-purple-500', bgColor: 'bg-purple-50 dark:bg-purple-900/20' },
    { icon: Zap, name: 'IA & Automatisation', color: 'text-orange-500', bgColor: 'bg-orange-50 dark:bg-orange-900/20' },
    { icon: Mail, name: 'Email Marketing', color: 'text-red-500', bgColor: 'bg-red-50 dark:bg-red-900/20' },
    { icon: FileText, name: 'Documentation', color: 'text-indigo-500', bgColor: 'bg-indigo-50 dark:bg-indigo-900/20' },
    { icon: BarChart3, name: 'Analytics', color: 'text-cyan-500', bgColor: 'bg-cyan-50 dark:bg-cyan-900/20' },
    { icon: Settings, name: 'Configuration', color: 'text-gray-500', bgColor: 'bg-gray-50 dark:bg-gray-900/20' }
  ];

  return (
    <div className="relative">
      <div className="flex items-center bg-gray-200 dark:bg-gray-800 rounded-full p-1">
        {themes.map(({ key, icon: Icon, label }) => (
          <motion.button
            key={key}
            onClick={() => setTheme(key)}
            onMouseEnter={() => key === 'system' && setShowApps(true)}
            onMouseLeave={() => key === 'system' && setShowApps(false)}
            className={`p-2 rounded-full transition-all duration-200 ${
              theme === key
                ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Thème ${label}`}
            title={label}
          >
            <Icon className="w-4 h-4" />
          </motion.button>
        ))}
      </div>

      {/* Fenêtre des applications */}
      <AnimatePresence>
        {showApps && (
           <motion.div
             initial={{ opacity: 0, y: 8, scale: 0.96 }}
             animate={{ opacity: 1, y: 0, scale: 1 }}
             exit={{ opacity: 0, y: 8, scale: 0.96 }}
             transition={{ 
               duration: 0.25,
               ease: [0.16, 1, 0.3, 1],
               scale: { duration: 0.2 }
             }}
             className="absolute top-full right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-4 z-50"
             style={{
               boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
               backdropFilter: 'blur(20px)'
             }}
             onMouseEnter={() => setShowApps(true)}
             onMouseLeave={() => setShowApps(false)}
           >
            <motion.div 
              className="mb-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Nos Services</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">Découvrez nos solutions digitales</p>
            </motion.div>
            
            <div className="grid grid-cols-4 gap-3">
              {applications.map((app, index) => (
                <motion.div
                  key={app.name}
                  initial={{ opacity: 0, y: 12, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    delay: 0.15 + (index * 0.03),
                    duration: 0.3,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50/80 dark:hover:bg-gray-700/50 transition-all duration-200 cursor-pointer group relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.02,
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div 
                    className={`w-10 h-10 rounded-lg ${app.bgColor} flex items-center justify-center mb-2 group-hover:scale-110 transition-all duration-200 relative`}
                    style={{
                      boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 2px 8px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    <app.icon className={`w-5 h-5 ${app.color} group-hover:scale-110 transition-transform duration-200`} />
                  </div>
                  <span className="text-xs text-gray-700 dark:text-gray-300 text-center leading-tight group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">
                    {app.name}
                  </span>
                  
                  {/* Effet de brillance au hover */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-full group-hover:translate-x-full" />
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mt-4 pt-3 border-t border-gray-200/50 dark:border-gray-700/50"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 bg-gradient-to-br from-orange-400 to-orange-600 rounded-md flex items-center justify-center">
                    <span className="text-white text-xs font-bold">B</span>
                  </div>
                  <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Bigitalis</span>
                </div>
                <div className="flex space-x-1">
                  <motion.div 
                    className="w-2 h-2 bg-orange-500 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.2 }}
                  />
                  <motion.div 
                    className="w-2 h-2 bg-orange-400 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.45, duration: 0.2 }}
                  />
                  <motion.div 
                    className="w-2 h-2 bg-orange-300 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.2 }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
