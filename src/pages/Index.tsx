import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider, useTheme } from '@/contexts/ThemeContext';
import CustomCursor from '@/components/CustomCursor';
import StarBackground from '@/components/StarBackground';
import DayBackground from '@/components/DayBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Technologies from '@/components/Technologies';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const PortfolioContent = () => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <CustomCursor />
      {theme === 'dark' ? <StarBackground /> : <DayBackground />}
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

const Index = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PortfolioContent />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Index;
