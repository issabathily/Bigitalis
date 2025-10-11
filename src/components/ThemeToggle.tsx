import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const themes = [
    { key: 'system' as const, icon: Monitor, label: 'Système' },
    { key: 'light' as const, icon: Sun, label: 'Clair' },
    { key: 'dark' as const, icon: Moon, label: 'Sombre' }
  ];

  return (
    <div className="flex items-center bg-gray-200 dark:bg-gray-800 rounded-full p-1">
      {themes.map(({ key, icon: Icon, label }) => (
        <motion.button
          key={key}
          onClick={() => setTheme(key)}
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
  );
}
