import { motion, Variants } from 'framer-motion';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';

const Projects = () => {
  const { t } = useLanguage();
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: 'MCMV Jaboatão',
      description: 'Sistema de cadastro e gerenciamento do programa Minha Casa Minha Vida para a Prefeitura de Jaboatão dos Guararapes.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'API REST'],
      demo: 'https://mcmv.jaboatao.pe.gov.br/',
      image: '/images/mcmv.png',
    },
    {
      title: 'Portal SASC',
      description: 'Portal institucional da Secretaria de Assistência Social e Cidadania com informações e serviços para a população.',
      technologies: ['React', 'TypeScript', 'Styled Components'],
      demo: 'https://sasc.jaboatao.pe.gov.br/',
      image: '/images/sasc.png',
    },
    {
      title: 'Portal Trabalho',
      description: 'Plataforma de emprego e qualificação profissional conectando cidadãos a oportunidades de trabalho.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      demo: 'https://trabalho.jaboatao.pe.gov.br/',
      image: '/images/trabalho.png',
    },
    {
      title: 'Portal SDES',
      description: 'Site institucional da Secretaria de Desenvolvimento Econômico e Sustentabilidade.',
      technologies: ['React', 'TypeScript', 'CSS Modules'],
      demo: 'https://sdes.jaboatao.pe.gov.br/',
      image: '/images/sdes.png',
    },
    {
      title: 'Portal SEINFRA',
      description: 'Portal da Secretaria de Infraestrutura com informações sobre obras e projetos municipais.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      demo: 'https://seinfra.jaboatao.pe.gov.br/',
      image: '/images/seinfra.png',
    },
    {
      title: 'Portal SDI',
      description: 'Site da Secretaria de Desenvolvimento Institucional com serviços e informações ao cidadão.',
      technologies: ['React', 'TypeScript', 'Styled Components'],
      demo: 'https://sdi.jaboatao.pe.gov.br/',
      image: '/images/sdi.png',
    },
    {
      title: 'SEDUC Jaboatão',
      description: 'Portal da Secretaria de Educação com recursos para alunos, professores e comunidade escolar.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      demo: 'https://seduc.jaboatao.pe.gov.br/',
      image: '/images/seduc.png',
    },
    {
      title: 'PrefConnect',
      description: 'Sistema interno de comunicação e gestão para servidores da prefeitura.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'TypeScript'],
      demo: 'https://prefconnect.jaboatao.pe.gov.br/',
      image: '/images/prefconnect.png',
    },
    {
      title: 'Portal Transparência',
      description: 'Plataforma de transparência pública com dados abertos e prestação de contas.',
      technologies: ['Next.js', 'TypeScript', 'Charts.js'],
      demo: 'https://transparencia.jaboatao.pe.gov.br/',
      image: '/images/transparencia.png',
    },
    {
      title: 'Agenda Cultural',
      description: 'Calendário de eventos culturais e atividades de lazer do município.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      demo: 'https://cultura.jaboatao.pe.gov.br/',
      image: '/images/cultura.png',
    },
  ];

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, rotateX: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  const displayedProjects = showAll ? projects : projects.slice(0, 6);

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
          {displayedProjects.map((project, index) => (
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
              <div className="h-full glass rounded-2xl overflow-hidden transition-all duration-300 card-glow gradient-border">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6 lg:p-8">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
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
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
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
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Show More Button */}
        {projects.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAll ? (
                <>
                  {t('projects.showLess')}
                  <ChevronUp size={20} />
                </>
              ) : (
                <>
                  {t('projects.showMore')}
                  <ChevronDown size={20} />
                </>
              )}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
