import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Larissa Machado. {t('footer.rights')}
          </p>

          {/* Made with love */}
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            {t('footer.made')}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart size={14} className="text-primary fill-primary" />
            </motion.span>
            {t('footer.by')} <span className="gradient-text font-semibold">Larissa</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
