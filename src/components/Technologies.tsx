import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import TechIcon from '@/components/TechIcon';

const Technologies = () => {
  const { t } = useLanguage();

  const technologies = [
    { name: 'React', color: 'text-cyan-500' },
    { name: 'TypeScript', color: 'text-blue-500' },
    { name: 'Next.js', color: 'text-foreground' },
    { name: 'Vite', color: 'text-purple-500' },
    { name: 'Tailwind CSS', color: 'text-cyan-400' },
    { name: 'Git', color: 'text-orange-500' },
    { name: 'Figma', color: 'text-pink-500' },
    { name: 'Node.js', color: 'text-green-500' },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 40, rotateY: -30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotateY: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="technologies" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">{t('tech.title')}</span>
          </h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            {t('tech.subtitle')}
          </motion.p>
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 max-w-4xl mx-auto"
          style={{ perspective: '1000px' }}
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.08,
                y: -8,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="glass rounded-2xl p-6 lg:p-8 text-center transition-all duration-300 card-glow gradient-border h-full flex flex-col items-center justify-center gap-4">
                <motion.div
                  className={tech.color}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <TechIcon name={tech.name} className="w-10 h-10 lg:w-12 lg:h-12" />
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
