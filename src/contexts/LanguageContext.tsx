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
    'nav.projects': 'Projetos',
    'nav.technologies': 'Tecnologias',
    'nav.contact': 'Contato',
    
    // Hero
    'hero.greeting': 'Olá, eu sou',
    'hero.tagline': 'Desenvolvedora Frontend criando interfaces modernas e acessíveis',
    'hero.cta.projects': 'Ver Projetos',
    'hero.cta.contact': 'Entrar em Contato',
    
    // About
    'about.title': 'Sobre Mim',
    'about.description': 'Desenvolvedora Fullstack com experiência sólida em React, Next.js, TypeScript e Tailwind CSS. Atuo no desenvolvimento de sistemas web, portais institucionais e aplicações robustas para órgãos públicos, sempre focando em código limpo, performance e acessibilidade.',
    'about.description2': 'Trabalho com deploy e gerenciamento de servidores usando PM2, além de integração com APIs e bancos de dados. Tenho paixão por transformar ideias em interfaces funcionais e elegantes. Estou aberta a novos desafios e projetos que exijam qualidade e comprometimento.',
    'about.experience': 'Anos de Experiência',
    'about.projects': 'Projetos Entregues',
    'about.clients': 'Clientes Satisfeitos',
    
    // Projects
    'projects.title': 'Projetos',
    'projects.subtitle': 'Uma seleção dos meus trabalhos mais recentes',
    'projects.viewCode': 'Ver Código',
    'projects.viewDemo': 'Ver Demo',
    
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
    'nav.projects': 'Projects',
    'nav.technologies': 'Technologies',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': "Hi, I'm",
    'hero.tagline': 'Frontend Developer creating modern and accessible interfaces',
    'hero.cta.projects': 'View Projects',
    'hero.cta.contact': 'Get in Touch',
    
    // About
    'about.title': 'About Me',
    'about.description': "Fullstack Developer with solid experience in React, Next.js, TypeScript, and Tailwind CSS. I work on developing web systems, institutional portals, and robust applications for public agencies, always focusing on clean code, performance, and accessibility.",
    'about.description2': "I work with deployment and server management using PM2, as well as API and database integration. I'm passionate about transforming ideas into functional and elegant interfaces. I'm open to new challenges and projects that demand quality and commitment.",
    'about.experience': 'Years of Experience',
    'about.projects': 'Delivered Projects',
    'about.clients': 'Happy Clients',
    
    // Projects
    'projects.title': 'Projects',
    'projects.subtitle': 'A selection of my most recent work',
    'projects.viewCode': 'View Code',
    'projects.viewDemo': 'View Demo',
    
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
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
