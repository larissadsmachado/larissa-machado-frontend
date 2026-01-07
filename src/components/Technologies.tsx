import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const Technologies = () => {
  const { t } = useLanguage();

  const technologies = [
    { name: 'React', icon: '⚛️', color: 'from-blue-400 to-blue-600' },
    { name: 'TypeScript', icon: '📘', color: 'from-blue-500 to-blue-700' },
    { name: 'Next.js', icon: '▲', color: 'from-gray-400 to-gray-600' },
    { name: 'Vite', icon: '⚡', color: 'from-purple-400 to-yellow-500' },
    { name: 'Tailwind CSS', icon: '🎨', color: 'from-cyan-400 to-blue-500' },
    { name: 'Git', icon: '📂', color: 'from-orange-400 to-red-500' },
    { name: 'Figma', icon: '🎯', color: 'from-pink-400 to-purple-500' },
    { name: 'Node.js', icon: '🟢', color: 'from-green-400 to-green-600' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="technologies" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">{t('tech.title')}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('tech.subtitle')}
          </p>
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 max-w-4xl mx-auto"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -5,
              }}
              className="group"
            >
              <div className="glass rounded-2xl p-6 lg:p-8 text-center transition-all duration-300 card-glow gradient-border h-full">
                <motion.div
                  className="text-4xl lg:text-5xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {tech.icon}
                </motion.div>
                <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                  {tech.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
