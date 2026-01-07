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
    'about.description': 'Sou uma desenvolvedora frontend apaixonada por criar experiências digitais excepcionais. Com sólida experiência em React, Next.js, Vite e TypeScript, desenvolvo interfaces modernas que combinam estética impecável com performance otimizada.',
    'about.description2': 'Meu foco está em código limpo, acessibilidade e experiência do usuário. Trabalho com sistemas web, sites institucionais e interfaces que fazem a diferença. Estou sempre aberta a novos projetos, especialmente criação de landing pages criativas e funcionais.',
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
    'about.description': "I'm a frontend developer passionate about creating exceptional digital experiences. With solid experience in React, Next.js, Vite, and TypeScript, I build modern interfaces that combine flawless aesthetics with optimized performance.",
    'about.description2': 'My focus is on clean code, accessibility, and user experience. I work with web systems, institutional websites, and interfaces that make a difference. I\'m always open to new projects, especially creating creative and functional landing pages.',
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
