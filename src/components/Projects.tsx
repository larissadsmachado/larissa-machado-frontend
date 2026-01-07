import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

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

  return (
    <section id="projects" className="py-20 lg:py-32 relative">
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
            <span className="gradient-text">{t('projects.title')}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full glass rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:scale-[1.02] card-glow gradient-border">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all"
                      aria-label="View GitHub repository"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all"
                      aria-label="View live demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
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
