import { motion } from 'framer-motion';
import logo from "/src/assets/image/logo.png"
interface LoaderProps {
  isLoading: boolean;
}

export default function Loader({ isLoading }: LoaderProps) {
  if (!isLoading) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-dark-900"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center space-y-8">
        {/* Logo avec pulsation seulement */}
        <motion.img
          src={logo}
          alt="Bigitalis Logo"
          className="w-20 h-20 object-contain"
          animate={{ 
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
          }}
        />

        {/* Texte de chargement avec animation */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
            <motion.h2
              className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Bigitalis
            </motion.h2>
            <motion.p
              className="text-gray-600 dark:text-gray-300"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              Solutions Digitales Innovantes
            </motion.p>
        </motion.div>

        {/* Barre de progression */}
        <div className="w-64 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full loader-shimmer rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
        </div>

        {/* Points de chargement */}
        <motion.div
          className="flex space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-2 bg-orange-500 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
