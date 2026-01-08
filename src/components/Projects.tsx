import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Projects = () => {
  const { t, language } = useLanguage();

  const projects = [
    {
      title: 'MCMV Jaboatão',
      description: language === 'pt' 
        ? 'Sistema completo do programa Minha Casa Minha Vida para a prefeitura de Jaboatão dos Guararapes, com formulários de inscrição, validação de dados e painel administrativo.'
        : 'Complete Minha Casa Minha Vida program system for Jaboatão city hall, with registration forms, data validation, and admin panel.',
      technologies: ['React', 'TypeScript', 'Next.js', 'PM2'],
      github: 'https://github.com/stars/larissadsmachado/lists/jaboatao',
      demo: '#',
    },
    {
      title: 'Portal SASC',
      description: language === 'pt'
        ? 'Site institucional da Secretaria de Assistência Social e Cidadania com sistema de gerenciamento de notícias, destaques e conteúdo dinâmico.'
        : 'Institutional website for the Social Assistance Secretariat with news management system, highlights, and dynamic content.',
      technologies: ['React', 'TypeScript', 'Next.js', 'PM2'],
      github: 'https://github.com/stars/larissadsmachado/lists/jaboatao',
      demo: '#',
    },
    {
      title: 'Jaboatão Prev',
      description: language === 'pt'
        ? 'Site institucional do Instituto de Previdência do Município de Jaboatão dos Guararapes, com informações sobre benefícios e serviços.'
        : 'Institutional website for Jaboatão Municipal Pension Institute, with information about benefits and services.',
      technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
      github: 'https://github.com/stars/larissadsmachado/lists/jaboatao',
      demo: '#',
    },
    {
      title: 'Portal Jaboatão Oficial',
      description: language === 'pt'
        ? 'Portal oficial da Prefeitura de Jaboatão dos Guararapes com notícias, serviços ao cidadão e transparência pública.'
        : 'Official portal of Jaboatão city hall with news, citizen services, and public transparency.',
      technologies: ['React', 'TypeScript', 'Next.js', 'PM2'],
      github: 'https://github.com/stars/larissadsmachado/lists/jaboatao',
      demo: '#',
    },
    {
      title: 'Amor por Jaboatão',
      description: language === 'pt'
        ? 'Plataforma de engajamento cidadão para projetos e iniciativas da comunidade de Jaboatão dos Guararapes.'
        : 'Citizen engagement platform for community projects and initiatives in Jaboatão dos Guararapes.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
      github: 'https://github.com/stars/larissadsmachado/lists/jaboatao',
      demo: '#',
    },
    {
      title: 'Sistema CIPTEA',
      description: language === 'pt'
        ? 'Sistema de Cadastro da Pessoa com Transtorno do Espectro Autista, com formulários especializados, gestão de cadastros e painel administrativo.'
        : 'Registration System for People with Autism Spectrum Disorder, with specialized forms, registration management, and admin panel.',
      technologies: ['React', 'TypeScript', 'Next.js', 'PM2'],
      github: 'https://github.com/stars/larissadsmachado/lists/jaboatao',
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
