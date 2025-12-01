import React, { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '/src/assets/image/logo.png';
import NavigationProgress from './NavigationProgress';
import ThemeToggle from './ThemeToggle';
import CookieConsent from './CookieConsent';

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'À propos', href: '/about' },
  { name: 'Projets', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isTeamMemberPage = location.pathname.startsWith('/team/');

  return (
    <div className="bg-white dark:bg-dark-950 min-h-screen transition-colors duration-300">
      <NavigationProgress />
      <CookieConsent />

      {!isTeamMemberPage && (
        <header className="absolute inset-x-0 top-0 z-50">
          <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
            <motion.div
              className="flex lg:flex-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/" className="-m-1.5 p-1.5 flex items-center space-x-2">
                <div className="flex  items-center justify-center w-[60px] h-[40px] rounded-lg overflow-hidden">
                  <img
                    src={logo}

                    className="w-full h-full bg-orange "
                  />
                </div>
                <span className="text-xl font-bold text-orange-500 dark:text-orange-400">Bigitalis</span>
              </Link>
            </motion.div>

            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:text-orange-500 transition-colors"
              >
                <span className="sr-only">Ouvrir le menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>
            </div>

            <motion.div
              className="hidden lg:flex lg:gap-x-12"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-semibold transition-colors relative group ${location.pathname === item.href
                    ? 'text-orange-500'
                    : 'text-gray-900 dark:text-white hover:text-orange-500'
                    }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                </Link>
              ))}
            </motion.div>

            <motion.div
              className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ThemeToggle />
              <a
                href="https://wa.me/221785309683"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-orange-500 hover:accent-green-600 text-white hover:text-black px-4 py-2 rounded-full font-semibold hover:bg-[#25d366] transition-all duration-300 transform hover:scale-105"
              >
                <i className="fab fa-whatsapp text-xl"></i>
                <span>Contacter →</span>
              </a>
            </motion.div>
          </nav>

          <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
            <motion.div
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white/95 dark:bg-dark-950 backdrop-blur-xl border-l border-gray-200/20 dark:border-gray-700/20 sm:max-w-sm shadow-2xl">
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="h-full"
              >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200/10 dark:border-gray-700/10">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Link to="/" className="flex items-center space-x-3" onClick={() => setMobileMenuOpen(false)}>
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl  shadow-lg">
                        <img
                          src={logo}
                          className="w-6 h-6 object-cover"
                          alt="Bigitalis"
                        />
                      </div>
                      <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                        Bigitalis
                      </span>
                    </Link>
                  </motion.div>

                  <motion.button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="relative p-2 rounded-xl bg-gray-100/50 dark:bg-dark-950 text-gray-600 dark:text-gray-400 hover:text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all duration-300 group"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ delay: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <XMarkIcon className="w-6 h-6 transition-transform group-hover:rotate-90" />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.button>
                </div>

                {/* Navigation */}
                <div className="px-2 py-8">
                  <nav className="space-y-2">
                    {navigation.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * (index + 1), type: 'spring', stiffness: 100 }}
                      >
                        <Link
                          to={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`group relative flex items-center space-x-4 px-4 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${location.pathname === item.href
                            ? 'text-orange-500 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/20 shadow-lg shadow-orange-500/10'
                            : 'text-gray-700 dark:text-gray-300 hover:text-orange-500 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 dark:hover:from-gray-800/50 dark:hover:to-gray-700/30'
                            }`}
                        >
                          <div className={`w-2 h-2 rounded-full transition-all duration-300 ${location.pathname === item.href
                            ? 'bg-orange-500 shadow-lg shadow-orange-500/50'
                            : 'bg-gray-300 dark:bg-dark-950 group-hover:bg-orange-400'
                            }`} />
                          <span className="flex-1">{item.name}</span>
                          <div className={`w-6 h-6 rounded-full border-2 transition-all duration-300 ${location.pathname === item.href
                            ? 'border-orange-500 bg-orange-500'
                            : 'border-gray-300 dark:border-gray-600 group-hover:border-orange-400'
                            }`}>
                            {location.pathname === item.href && (
                              <motion.div
                                className="w-full h-full rounded-full bg-white flex items-center justify-center"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                              >
                                <div className="w-2 h-2 rounded-full bg-orange-500" />
                              </motion.div>
                            )}
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </nav>
                </div>

                {/* Footer Actions */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white/80 to-transparent dark:from-dark-900/80 backdrop-blur-sm border-t border-gray-200/10 dark:border-gray-700/10">
                  <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="flex justify-center">
                      <div className="p-2 rounded-xl bg-gray-100/50 dark:bg-dark-950">
                        <ThemeToggle />
                      </div>
                    </div>

                    <Link
                      to="/contact"
                      onClick={() => setMobileMenuOpen(false)}
                      className="relative group block w-full"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity" />
                      <div className="relative bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-4 rounded-2xl font-bold text-center shadow-lg shadow-orange-500/25 group-hover:shadow-xl group-hover:shadow-orange-500/30 transform group-hover:scale-[1.02] transition-all duration-300">
                        <span className="flex items-center justify-center space-x-2">
                          <span>Nous contacter</span>
                          <motion.div
                            className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center"
                            whileHover={{ x: 5 }}
                            transition={{ type: 'spring', stiffness: 400 }}
                          >
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </motion.div>
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </DialogPanel>
          </Dialog>
        </header>
      )}

      <main>
        {children}
      </main>

      {!isTeamMemberPage && (
        <footer className="bg-gray-900 dark:bg-dark-950 text-white">
          <div className="max-w-7xl mx-auto px-6 py-12 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center justify-center w-[80px] h-[50px] rounded-lg overflow-hidden">
                    <img
                      src={logo}

                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/*<span className="text-xl w-[80px] h-[10]  font-bold">Bigitalis</span>*/}
                </div>
                <p className="text-gray-400 dark:text-gray-300 mb-4">
                  Votre partenaire de confiance pour toutes vos solutions digitales et services informatiques.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 dark:text-gray-300 hover:text-orange-500 transition-colors">
                    LinkedIn
                  </a>
                  <a href="#" className="text-gray-400 dark:text-gray-300 hover:text-orange-500 transition-colors">
                    Twitter
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
                <ul className="space-y-2 text-gray-400 dark:text-gray-300">
                  <li><a href="/services" className="hover:text-orange-500 transition-colors">Développement Web</a></li>
                  <li><a href="/services" className="hover:text-orange-500 transition-colors">Applications Mobiles</a></li>
                  <li><a href="/services" className="hover:text-orange-500 transition-colors">Logiciels Sur Mesure</a></li>
                  <li><a href="/services" className="hover:text-orange-500 transition-colors">Analyse de Données</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
                <div className="space-y-2 text-gray-400 dark:text-gray-300">
                  <p>bigitalis05@gmail.com</p>
                  <p>+221 77 388 04 36</p>
                  <p>Dakar, Senegal</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 text-center text-gray-400 dark:text-gray-300">
              <p>&copy; 2025 Bigitalis. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}