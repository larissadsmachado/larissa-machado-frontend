import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

interface ShootingStar {
  id: number;
  startX: number;
  startY: number;
  duration: number;
}

const StarBackground = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);

  useEffect(() => {
    // Generate static twinkling stars
    const generatedStars: Star[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5,
    }));
    setStars(generatedStars);
  }, []);

  useEffect(() => {
    // Generate shooting stars periodically
    const createShootingStar = () => {
      const newStar: ShootingStar = {
        id: Date.now(),
        startX: Math.random() * 60,
        startY: Math.random() * 40,
        duration: Math.random() * 1.5 + 1,
      };
      setShootingStars(prev => [...prev, newStar]);

      setTimeout(() => {
        setShootingStars(prev => prev.filter(s => s.id !== newStar.id));
      }, newStar.duration * 1000 + 500);
    };

    const interval = setInterval(createShootingStar, 4000);
    createShootingStar(); // Create one immediately

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse at top, hsl(var(--primary) / 0.15) 0%, transparent 50%), radial-gradient(ellipse at bottom right, hsl(var(--accent) / 0.1) 0%, transparent 50%)',
        }}
      />

      {/* Twinkling stars */}
      {stars.map(star => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Shooting stars */}
      <AnimatePresence>
        {shootingStars.map(star => (
          <motion.div
            key={star.id}
            className="absolute"
            style={{
              left: `${star.startX}%`,
              top: `${star.startY}%`,
            }}
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{ 
              opacity: [0, 1, 1, 0],
              x: 300,
              y: 300,
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: star.duration,
              ease: 'linear',
            }}
          >
            {/* Star head */}
            <div 
              className="w-1.5 h-1.5 rounded-full bg-white"
              style={{
                boxShadow: '0 0 10px 2px hsl(var(--star)), 0 0 20px 4px hsl(var(--primary) / 0.5)',
              }}
            />
            {/* Star tail */}
            <div
              className="absolute top-1/2 right-full -translate-y-1/2"
              style={{
                width: '80px',
                height: '2px',
                background: 'linear-gradient(90deg, transparent 0%, hsl(var(--star) / 0.8) 100%)',
                transform: 'translateY(-50%) rotate(45deg)',
                transformOrigin: 'right center',
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default StarBackground;
