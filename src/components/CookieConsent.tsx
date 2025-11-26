import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [consentGiven, setConsentGiven] = useState<boolean | null>(null);

  useEffect(() => {
    const savedConsent = localStorage.getItem('cookieConsent');
    if (savedConsent === null) {
      setShowBanner(true);
    } else {
      setConsentGiven(savedConsent === 'true');
      updateGTagConsent(savedConsent === 'true');
    }
  }, []);

  const updateGTagConsent = (consent: boolean) => {
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        ad_storage: consent ? 'granted' : 'denied',
        analytics_storage: consent ? 'granted' : 'denied',
      });
    }
  };

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setConsentGiven(true);
    updateGTagConsent(true);
    setShowBanner(false);
    console.log('Cookies acceptés');
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'false');
    setConsentGiven(false);
    updateGTagConsent(false);
    setShowBanner(false);
    console.log('Cookies refusés');
  };

  // Pour le débogage
  useEffect(() => {
    console.log('État du consentement:', consentGiven);
  }, [consentGiven]);

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -20, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed bottom-4 left-4 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-lg z-50 overflow-hidden"
      >
        <div className="p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm-1-9a1 1 0 10-2 0v4a1 1 0 002 0V9zm0 6a1 1 0 10-2 0 1 1 0 002 0z" />
                </svg>
              </div>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white">Cookies</h3>
              <p className="mt-1 text-xs text-gray-600 dark:text-gray-300">
                Nous utilisons des cookies pour améliorer votre expérience.
              </p>
              <div className="mt-2 flex space-x-2">
                <button
                  onClick={handleReject}
                  className="text-xs px-3 py-1.5 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg text-gray-700 dark:text-gray-200 transition-colors"
                >
                  Refuser
                </button>
                <button
                  onClick={handleAccept}
                  className="text-xs px-3 py-1.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors"
                >
                  Accepter
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
