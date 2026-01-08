import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Projects = () => {
  const { t, language } = useLanguage();

  const projects = [
    {
      title: 'E-commerce Dashboard',
      description: language === 'pt' 
        ? 'Dashboard completo para gestão de e-commerce com métricas em tempo real, gráficos interativos e sistema de gerenciamento de produtos.'
        : 'Complete e-commerce management dashboard with real-time metrics, interactive charts, and product management system.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts'],
      github: 'https://github.com/larissadsmachado',
      demo: '#',
    },
    {
      title: 'Landing Page Startup',
      description: language === 'pt'
        ? 'Landing page moderna para startup de tecnologia com animações fluidas, design responsivo e otimização de performance.'
        : 'Modern landing page for tech startup with fluid animations, responsive design, and performance optimization.',
      technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
      github: 'https://github.com/larissadsmachado',
      demo: '#',
    },
    {
      title: 'Sistema de Gestão',
      description: language === 'pt'
        ? 'Aplicação web para gestão empresarial com autenticação, dashboards customizáveis e integração com APIs externas.'
        : 'Web application for business management with authentication, customizable dashboards, and external API integration.',
      technologies: ['React', 'Vite', 'TypeScript', 'Supabase'],
      github: 'https://github.com/larissadsmachado',
      demo: '#',
    },
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

  const cardVariants = {
    hidden: { opacity: 0, y: 60, rotateX: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.7,
        delay: 0.2 + i * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    }),
  };

  return (
    <section id="projects" className="py-20 lg:py-32 relative overflow-hidden">
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
            <span className="gradient-text">{t('projects.title')}</span>
          </h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            {t('projects.subtitle')}
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" style={{ perspective: '1000px' }}>
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="h-full glass rounded-2xl p-6 lg:p-8 transition-all duration-300 card-glow gradient-border">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all"
                      aria-label="View GitHub repository"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={18} />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all"
                      aria-label="View live demo"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={18} />
                    </motion.a>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.5 + techIndex * 0.05 }}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
