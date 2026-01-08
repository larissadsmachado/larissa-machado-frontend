import { motion } from 'framer-motion';
import { useMemo } from 'react';

const DayBackground = () => {
  // Generate static stars for light mode (space theme with light blue bg)
  const stars = useMemo(() => {
    return Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 3,
      duration: Math.random() * 2 + 2,
    }));
  }, []);

  // Code elements floating in background
  const codeSnippets = [
    { code: '<div>', x: 5, y: 15 },
    { code: 'const', x: 85, y: 10 },
    { code: '{ }', x: 15, y: 75 },
    { code: '=>', x: 75, y: 80 },
    { code: '</>', x: 90, y: 45 },
    { code: 'function', x: 8, y: 45 },
    { code: '[ ]', x: 70, y: 25 },
    { code: 'return', x: 25, y: 90 },
    { code: 'import', x: 60, y: 65 },
    { code: 'export', x: 40, y: 20 },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Light space gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, hsl(220 60% 92%) 0%, hsl(240 50% 95%) 50%, hsl(260 40% 94%) 100%)',
        }}
      />

      {/* Subtle nebula effect */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse at 20% 30%, hsl(240 60% 85% / 0.5) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, hsl(280 50% 88% / 0.4) 0%, transparent 50%)',
        }}
      />

      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            background: 'hsl(250 60% 60% / 0.6)',
          }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Shooting stars for light mode */}
      <ShootingStar delay={2} />
      <ShootingStar delay={7} />
      <ShootingStar delay={12} />

      {/* Code elements */}
      {codeSnippets.map((snippet, index) => (
        <motion.div
          key={index}
          className="absolute font-mono text-xs md:text-sm opacity-20 text-primary select-none"
          style={{
            left: `${snippet.x}%`,
            top: `${snippet.y}%`,
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 4 + index * 0.5,
            repeat: Infinity,
            delay: index * 0.3,
            ease: 'easeInOut',
          }}
        >
          {snippet.code}
        </motion.div>
      ))}

      {/* Floating brackets decoration */}
      <motion.div
        className="absolute top-1/4 left-1/4 text-4xl md:text-6xl font-mono opacity-10 text-primary"
        animate={{ rotate: [0, 10, -10, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        {'{ }'}
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 right-1/4 text-4xl md:text-6xl font-mono opacity-10 text-primary"
        animate={{ rotate: [0, -10, 10, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      >
        {'< />'}
      </motion.div>
    </div>
  );
};

const ShootingStar = ({ delay }: { delay: number }) => {
  const startX = Math.random() * 50 + 10;
  const startY = Math.random() * 30 + 5;
  
  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full"
      style={{
        left: `${startX}%`,
        top: `${startY}%`,
        background: 'linear-gradient(90deg, hsl(250 70% 60%) 0%, transparent 100%)',
        boxShadow: '0 0 6px 2px hsl(250 70% 60% / 0.4)',
      }}
      initial={{ x: 0, y: 0, opacity: 0 }}
      animate={{
        x: [0, 150],
        y: [0, 100],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 1.5,
        delay: delay,
        repeat: Infinity,
        repeatDelay: 8,
        ease: 'easeOut',
      }}
    />
  );
};

export default DayBackground;
