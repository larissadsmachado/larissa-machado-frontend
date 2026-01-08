import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ThemeToggle from '@/components/ThemeToggle';

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'technologies', 'contact'];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: t('nav.home'), id: 'home' },
    { href: '#about', label: t('nav.about'), id: 'about' },
    { href: '#projects', label: t('nav.projects'), id: 'projects' },
    { href: '#technologies', label: t('nav.technologies'), id: 'technologies' },
    { href: '#contact', label: t('nav.contact'), id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-2' : 'py-4'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className={`glass rounded-2xl px-4 md:px-6 py-3 flex items-center justify-between transition-all duration-300 ${
            scrolled ? 'shadow-lg shadow-primary/5' : ''
          }`}>
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="flex items-center gap-2 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center shadow-lg">
                <img
  src="/images/logo.png"
  alt="Logo"
  className="w-5 h-5"
/>
              </div>
              <span className="font-display font-bold text-lg hidden sm:block">
                <span className="gradient-text">Larissa</span>
                <span className="text-muted-foreground">.dev</span>
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'text-primary' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 rounded-xl bg-primary/10 -z-10"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}
            </div>

            {/* Right side controls */}
            <div className="flex items-center gap-2">
              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Language Switcher */}
              <div className="hidden md:flex items-center gap-1 glass rounded-xl p-1">
                <motion.button
                  onClick={() => setLanguage('pt')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    language === 'pt' 
                      ? 'gradient-bg text-white shadow-md' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  PT
                </motion.button>
                <motion.button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    language === 'en' 
                      ? 'gradient-bg text-white shadow-md' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  EN
                </motion.button>
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden relative w-12 h-12 flex items-center justify-center rounded-xl gradient-bg text-white shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={24} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={24} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 backdrop-blur-md bg-background/80"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm z-50 glass border-l border-border"
            >
              <div className="flex flex-col h-full p-6 pt-24">
                {/* Navigation Links */}
                <nav className="flex flex-col gap-2">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.1 }}
                      className={`text-xl font-display font-semibold py-3 px-4 rounded-xl transition-all ${
                        activeSection === item.id
                          ? 'gradient-bg text-white'
                          : 'text-foreground hover:bg-muted'
                      }`}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </nav>

                {/* Language Switcher Mobile */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-auto flex items-center gap-3"
                >
                  <button
                    onClick={() => setLanguage('pt')}
                    className={`flex-1 px-4 py-3 text-sm font-semibold rounded-xl transition-all ${
                      language === 'pt' 
                        ? 'gradient-bg text-white' 
                        : 'bg-muted text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    Português
                  </button>
                  <button
                    onClick={() => setLanguage('en')}
                    className={`flex-1 px-4 py-3 text-sm font-semibold rounded-xl transition-all ${
                      language === 'en' 
                        ? 'gradient-bg text-white' 
                        : 'bg-muted text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    English
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
