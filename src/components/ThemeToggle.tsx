import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Monitor, Globe, Code2, Zap, Mail, FileText, BarChart3, Settings } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import qrIcon from '/src/assets/logiciel/qr.ico';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [showApps, setShowApps] = useState(false);

  const themes = [
    { key: 'system' as const, icon: Monitor, label: 'Système' },
    { key: 'light' as const, icon: Sun, label: 'Clair' },
    { key: 'dark' as const, icon: Moon, label: 'Sombre' }
  ];

  const applications = [
    { 
      icon: null,
      customIcon: qrIcon,
      name: 'QR Vision', 
      color: 'text-purple-500', 
      bgColor: 'bg-transparent',
      href: '/src/assets/logiciel/QR Vision Setup 0.0.0.exe',
      download: 'QR_Vision_Setup_0.0.0.exe',
      isDownload: true
    }
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
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Téléchargement</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">Téléchargez notre logiciel QR Vision</p>
            </motion.div>
            
            <div className="grid grid-cols-1 gap-3">
              {applications.map((app, index) => (
                <motion.a
                  key={app.name}
                  href={app.href}
                  download={app.download}
                  initial={{ opacity: 0, y: 12, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    delay: 0.15 + (index * 0.03),
                    duration: 0.3,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className={`flex flex-col items-center p-3 rounded-lg hover:bg-gray-50/80 dark:hover:bg-gray-700/50 transition-all duration-200 cursor-pointer group relative overflow-hidden ${app.isDownload ? 'download-link' : ''}`}
                  whileHover={{ 
                    scale: 1.02,
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div 
                    className="flex items-center justify-center mb-2 group-hover:scale-110 transition-all duration-200 relative"
                  >
                    {app.isDownload && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800 z-10"></div>
                    )}
                    {app.customIcon ? (
                      <img 
                        src={app.customIcon} 
                        alt={app.name} 
                        className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-200"
                      />
                    ) : app.icon ? (
                      <app.icon className={`w-5 h-5 ${app.color} group-hover:scale-110 transition-transform duration-200`} />
                    ) : null}
                  </div>
                  <span className="text-xs text-gray-700 dark:text-gray-300 text-center leading-tight group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">
                    {app.name}
                    {app.isDownload && (
                      <span className="block text-[10px] text-green-500 font-medium mt-0.5">Télécharger</span>
                    )}
                  </span>
                  
                  {/* Effet de brillance au hover */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-full group-hover:translate-x-full" />
                </motion.a>
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
