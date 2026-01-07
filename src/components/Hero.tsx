import { motion } from 'framer-motion';
import { ArrowDown, Code2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const { t } = useLanguage();

  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-full gradient-bg animate-pulse-slow opacity-60 blur-xl" />
              <div className="absolute inset-2 rounded-full gradient-border glass">
                <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-muted">
                  {/* Placeholder for profile photo */}
                  <div className="text-center p-6">
                    <Code2 className="w-16 h-16 mx-auto text-primary mb-4" />
                    <p className="text-muted-foreground text-sm">Sua foto aqui</p>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 rounded-xl glass flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="text-xl">⚛️</span>
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 rounded-xl glass flex items-center justify-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              >
                <span className="text-xl">✨</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content - Shows first on mobile due to flex-col-reverse on parent */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 text-center lg:text-left max-w-2xl"
          >
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground font-medium mb-2"
            >
              {t('hero.greeting')}
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-4"
            >
              <span className="gradient-text text-glow">Larissa Machado</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8"
            >
              {t('hero.tagline')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                variant="hero"
                size="lg"
                onClick={() => handleScroll('#projects')}
              >
                {t('hero.cta.projects')}
              </Button>
              <Button
                variant="heroOutline"
                size="lg"
                onClick={() => handleScroll('#contact')}
              >
                {t('hero.cta.contact')}
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={() => handleScroll('#about')}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
