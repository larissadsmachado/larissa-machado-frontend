import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

type ProjectCategory = 'sistema' | 'outro';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  demo: string;
  image: string;
  category: ProjectCategory;
}

const Projects = () => {
  const { t, language } = useLanguage();
  const [showAll, setShowAll] = useState(false);

  const projects: Project[] = [
    // === SISTEMAS ===
    {
      title: 'MCMV Jaboatão',
      description: language === 'pt'
        ? 'Sistema completo do programa Minha Casa Minha Vida para a prefeitura de Jaboatão dos Guararapes, com formulários de inscrição, validação de dados e painel administrativo.'
        : 'Complete Minha Casa Minha Vida program system for Jaboatão city hall, with registration forms, data validation, and admin panel.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
      demo: 'https://cadastrohabitacao.jaboatao.pe.gov.br/',
      image: '/images/projects/mcmv.png',
      category: 'sistema',
    },
    {
      title: 'Sistema CIPTEA (Em produção)',
      description: language === 'pt'
        ? 'Sistema de Cadastro da Pessoa com Transtorno do Espectro Autista, com formulários especializados, gestão de cadastros e painel administrativo.'
        : 'Registration System for People with Autism Spectrum Disorder, with specialized forms, registration management, and admin panel.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
      demo: '#',
      image: '/images/projects/ciptea.png',
      category: 'sistema',
    },
    {
      title: 'Sistema PCD Jaboatão',
      description: language === 'pt'
        ? 'Portal e sistema de cadastro destinado à solicitação e emissão da Carteira da Pessoa com Deficiência (PCD) no município de Jaboatão dos Guararapes.'
        : 'Portal and registration system for requesting and issuing the Person with Disabilities (PCD) card in the municipality of Jaboatão dos Guararapes.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
      demo: 'https://carteirapcd.jaboatao.pe.gov.br/',
      image: '/images/projects/pcd.png',
      category: 'sistema',
    },

    {
      title: 'Sistema NadaConsta',
      description: language === 'pt'
        ? 'Sistema online destinado à emissão de certidão negativa de débitos municipais (Nada Consta) no município de Jaboatão dos Guararapes, permitindo consulta e geração do documento de forma rápida e segura.'
        : 'Online system for issuing municipal debt clearance certificates (Nada Consta) in the municipality of Jaboatão dos Guararapes, allowing users to check and generate the document quickly and securely.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
      demo: 'https://nadaconsta.jaboatao.pe.gov.br/',
      image: '/images/projects/nadaconsta.png',
      category: 'sistema',
    },


    {
      title: 'Sistema SASC',
      description: language === 'pt'
        ? 'Sistema da Secretaria de Assistência Social e Cidadania com gerenciamento de notícias, destaques e conteúdo dinâmico.'
        : 'System for the Social Assistance Secretariat with news management, highlights, and dynamic content.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
      demo: 'https://assistenciasocial.jaboatao.pe.gov.br/',
      image: '/images/projects/sasc.png',
      category: 'sistema',
    },
    // === SITES ===
    {
      title: 'Site Jaboatão Oficial',
      description: language === 'pt'
        ? 'Site oficial da Prefeitura de Jaboatão dos Guararapes com notícias, serviços ao cidadão e transparência pública.'
        : 'Official website of Jaboatão city hall with news, citizen services, and public transparency.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
      demo: 'https://jaboatao.pe.gov.br/',
      image: '/images/projects/oficial.png',
      category: 'outro',
    },
    {
      title: 'Jaboatão Prev',
      description: language === 'pt'
        ? 'Site institucional do Instituto de Previdência do Município de Jaboatão dos Guararapes, com informações sobre benefícios e serviços.'
        : 'Institutional website for Jaboatão Municipal Pension Institute, with information about benefits and services.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
      demo: 'https://jaboataoprev.jaboatao.pe.gov.br/',
      image: '/images/projects/jaboatao-prev.png',
      category: 'outro',
    },
    {
      title: 'Site SEI Jaboatão',
      description: language === 'pt'
        ? 'Site do Sistema Eletrônico de Informações (SEI), utilizado para tramitação e gestão de processos administrativos no município de Jaboatão dos Guararapes.'
        : 'Electronic Information System (SEI) website used for handling and managing administrative processes in the municipality of Jaboatão dos Guararapes.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
      demo: 'https://portalsei.jaboatao.pe.gov.br/',
      image: '/images/projects/sei.png',
      category: 'outro',
    },
    {
      title: 'Amor por Jaboatão',
      description: language === 'pt'
        ? 'Site de engajamento cidadão para projetos e iniciativas da comunidade de Jaboatão dos Guararapes.'
        : 'Citizen engagement website for community projects and initiatives in Jaboatão dos Guararapes.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
      demo: 'https://amorpor.jaboatao.pe.gov.br/',
      image: '/images/projects/amor-jaboatao.png',
      category: 'outro',
    },
    {
      title: 'PODE (Descontinuado)',
      description: language === 'pt'
        ? 'Site da Prefeitura de Jaboatão focado em conectar empresas, trabalhadores e consumidores em um só lugar. A plataforma reúne divulgação de serviços, vagas de emprego e apoio à formalização de negócios, fortalecendo a economia local.'
        : 'Official website of the Jaboatão City Hall focused on connecting businesses, workers, and consumers in one place. The platform brings together service promotion, job listings, and support for business formalization, strengthening the local economy.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
      demo: 'https://www.linkedin.com/posts/kaueksilva_hoje-venho-publicar-para-agradecer-p%C3%B4r-ter-ugcPost-7215757964505194497-2R41?utm_source=share&utm_medium=member_desktop&rcm=ACoAADTBpy4B94fv7-NPvMzJPpCMFboUvn85pbA',
      image: '/images/projects/pode.jfif',
      category: 'outro',
    },

  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 6);

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" style={{ perspective: '1000px' }}>
          <AnimatePresence>
            {visibleProjects.map((project, index) => (
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
                  <div className="relative w-full h-48 overflow-hidden bg-muted">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${project.category === 'sistema'
                          ? 'bg-primary/90 text-primary-foreground'
                          : 'bg-accent/90 text-accent-foreground'
                        }`}>
                        {project.category === 'sistema' ? 'Sistema' : 'Site'}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 lg:p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
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

                    <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                      {project.description}
                    </p>

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
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {projects.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAll ? t('projects.showLess') : t('projects.showMore')}
              {showAll ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
