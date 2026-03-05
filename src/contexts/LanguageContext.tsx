import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    // Navbar
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.services': 'Serviços',
    'nav.projects': 'Projetos',
    'nav.technologies': 'Tecnologias',
    'nav.contact': 'Contato',
    
    // Hero
    'hero.greeting': 'Olá, eu sou',
    'hero.tagline': 'Desenvolvedora Full Stack com foco em Frontend, criando interfaces modernas, acessíveis e soluções digitais robustas para sistemas e portais web',
    'hero.cta.projects': 'Ver Projetos',
    'hero.cta.contact': 'Entrar em Contato',
    
    // About
    'about.title': 'Sobre Mim',
    'about.description': 'Desenvolvedora Fullstack com experiência sólida em React, Next.js, TypeScript e Tailwind CSS. Atuo no desenvolvimento de sistemas web, portais institucionais e aplicações robustas para órgãos públicos, sempre focando em código limpo, performance e acessibilidade.',
    'about.description2': 'Trabalho com deploy e gerenciamento de servidores usando PM2, além de integração com APIs e bancos de dados. Tenho paixão por transformar ideias em interfaces funcionais e elegantes. Estou aberta a novos desafios e projetos que exijam qualidade e comprometimento.',
    'about.experience': 'Anos de Experiência',
    'about.projects': 'Projetos Entregues',
    'about.clients': 'Clientes Satisfeitos',
    
    // Services
    'services.title': 'Serviços e Investimentos',
    'services.subtitle': 'Soluções digitais com preços transparentes e processo claro para você planejar seu investimento com confiança.',
    'services.from': 'A partir de',
    'services.includes': 'Inclui:',
    'services.process': 'Processo:',
    'services.popular': 'Mais Popular',
    'services.howItWorks': 'Como funciona o processo de desenvolvimento',
    
    // Landing Pages
    'services.landing.description': 'Páginas de conversão otimizadas para capturar leads e promover seu produto/serviço.',
    'services.landing.feature1': 'Design responsivo e moderno',
    'services.landing.feature2': 'Otimização para conversão',
    'services.landing.feature3': 'Integração com redes sociais',
    'services.landing.process1': 'Prazo: 1-2 semanas',
    'services.landing.process2': '1-3 páginas',
    'services.landing.process3': 'Entrega rápida',
    
    // Portfolio Sites
    'services.portfolio.description': 'Apresente seu trabalho de forma profissional e atraia novos clientes.',
    'services.portfolio.feature1': 'Design personalizado',
    'services.portfolio.feature2': 'Galeria de projetos',
    'services.portfolio.feature4': 'Blog integrado (opcional)',
    'services.portfolio.process1': 'Prazo: 2-3 semanas',
    'services.portfolio.process2': '3-5 páginas',
    'services.portfolio.process3': 'Revisões inclusas',
    
    // Custom Systems
    'services.custom.title': 'Sistemas Personalizados',
    'services.custom.price': 'Sob consulta',
    'services.custom.description': 'Desenvolvimento sob medida para necessidades específicas do seu negócio.',
    'services.custom.feature1': 'Análise de requisitos',
    'services.custom.feature2': 'UI/UX personalizado',
    'services.custom.feature3': 'Banco de dados integrado',
    'services.custom.feature4': 'Painel administrativo',
    'services.custom.process1': 'Prazo variável',
    'services.custom.process2': 'Escalável',
    'services.custom.process3': 'Manutenção contínua',
    
    // Steps
    'services.step1': 'Entendemos suas necessidades e objetivos',
    'services.step2Title': 'Proposta',
    'services.step2': 'Apresentamos escopo, cronograma e orçamento',
    'services.step3Title': 'Desenvolvimento',
    'services.step3': 'Criamos e validamos cada etapa com você',
    'services.step4Title': 'Entrega',
    'services.step4': 'Lançamento e treinamento para uso',
    
    // Projects
    'projects.title': 'Projetos',
    'projects.subtitle': 'Uma seleção dos meus trabalhos mais recentes',
    'projects.viewCode': 'Ver Código',
    'projects.viewDemo': 'Ver Demo',
    'projects.showMore': 'Ver Mais Projetos',
    'projects.showLess': 'Ver Menos',
    
    // Technologies
    'tech.title': 'Tecnologias',
    'tech.subtitle': 'Ferramentas e tecnologias que utilizo no dia a dia',
    
    // Contact
    'contact.title': 'Vamos Conversar?',
    'contact.subtitle': 'Estou disponível para novos projetos e oportunidades',
    'contact.cta': 'Fale Comigo no WhatsApp',
    
    // Footer
    'footer.rights': 'Todos os direitos reservados.',
    'footer.made': 'Feito com',
    'footer.by': 'por',
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.technologies': 'Technologies',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': "Hi, I'm",
    'hero.tagline': 'Full Stack Developer focused on Frontend, creating modern, accessible interfaces and robust digital solutions for web systems and portals',
    'hero.cta.projects': 'View Projects',
    'hero.cta.contact': 'Get in Touch',
    
    // About
    'about.title': 'About Me',
    'about.description': "Fullstack Developer with solid experience in React, Next.js, TypeScript, and Tailwind CSS. I work on developing web systems, institutional portals, and robust applications for public agencies, always focusing on clean code, performance, and accessibility.",
    'about.description2': "I work with deployment and server management using PM2, as well as API and database integration. I'm passionate about transforming ideas into functional and elegant interfaces. I'm open to new challenges and projects that demand quality and commitment.",
    'about.experience': 'Years of Experience',
    'about.projects': 'Delivered Projects',
    'about.clients': 'Happy Clients',
    
    // Services
    'services.title': 'Services & Pricing',
    'services.subtitle': 'Digital solutions with transparent pricing and clear process so you can plan your investment with confidence.',
    'services.from': 'Starting at',
    'services.includes': 'Includes:',
    'services.process': 'Process:',
    'services.popular': 'Most Popular',
    'services.howItWorks': 'How the development process works',
    
    // Landing Pages
    'services.landing.description': 'Conversion-optimized pages to capture leads and promote your product/service.',
    'services.landing.feature1': 'Responsive and modern design',
    'services.landing.feature2': 'Conversion optimization',
    'services.landing.feature3': 'Social media integration',
    'services.landing.process1': 'Timeline: 1-2 weeks',
    'services.landing.process2': '1-3 pages',
    'services.landing.process3': 'Fast delivery',
    
    // Portfolio Sites
    'services.portfolio.description': 'Present your work professionally and attract new clients.',
    'services.portfolio.feature1': 'Custom design',
    'services.portfolio.feature2': 'Project gallery',
    'services.portfolio.feature4': 'Integrated blog (optional)',
    'services.portfolio.process1': 'Timeline: 2-3 weeks',
    'services.portfolio.process2': '3-5 pages',
    'services.portfolio.process3': 'Revisions included',
    
    // Custom Systems
    'services.custom.title': 'Custom Systems',
    'services.custom.price': 'On request',
    'services.custom.description': 'Tailored development for your specific business needs.',
    'services.custom.feature1': 'Requirements analysis',
    'services.custom.feature2': 'Custom UI/UX',
    'services.custom.feature3': 'Integrated database',
    'services.custom.feature4': 'Admin panel',
    'services.custom.process1': 'Variable timeline',
    'services.custom.process2': 'Scalable',
    'services.custom.process3': 'Ongoing maintenance',
    
    // Steps
    'services.step1': 'We understand your needs and goals',
    'services.step2Title': 'Proposal',
    'services.step2': 'We present scope, timeline, and budget',
    'services.step3Title': 'Development',
    'services.step3': 'We create and validate each step with you',
    'services.step4Title': 'Delivery',
    'services.step4': 'Launch and training for use',
    
    // Projects
    'projects.title': 'Projects',
    'projects.subtitle': 'A selection of my most recent work',
    'projects.viewCode': 'View Code',
    'projects.viewDemo': 'View Demo',
    'projects.showMore': 'Show More Projects',
    'projects.showLess': 'Show Less',
    
    // Technologies
    'tech.title': 'Technologies',
    'tech.subtitle': 'Tools and technologies I use daily',
    
    // Contact
    'contact.title': "Let's Talk?",
    'contact.subtitle': "I'm available for new projects and opportunities",
    'contact.cta': 'Message Me on WhatsApp',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.made': 'Made with',
    'footer.by': 'by',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['pt']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
