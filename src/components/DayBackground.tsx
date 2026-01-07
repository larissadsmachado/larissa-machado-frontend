import { motion } from 'framer-motion';

const DayBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Sky gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, hsl(210 80% 70%) 0%, hsl(200 70% 85%) 50%, hsl(40 80% 90%) 100%)',
        }}
      />

      {/* Sun */}
      <motion.div
        className="absolute top-20 right-20 md:top-32 md:right-32"
        animate={{ 
          scale: [1, 1.05, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: 'easeInOut' 
        }}
      >
        {/* Sun glow */}
        <div 
          className="absolute inset-0 w-32 h-32 md:w-40 md:h-40 rounded-full blur-2xl"
          style={{
            background: 'radial-gradient(circle, hsl(45 100% 70% / 0.6) 0%, transparent 70%)',
            transform: 'translate(-25%, -25%) scale(2)',
          }}
        />
        {/* Sun core */}
        <div 
          className="w-24 h-24 md:w-32 md:h-32 rounded-full"
          style={{
            background: 'radial-gradient(circle at 30% 30%, hsl(50 100% 85%) 0%, hsl(45 100% 60%) 50%, hsl(35 100% 55%) 100%)',
            boxShadow: '0 0 60px 20px hsl(45 100% 70% / 0.4)',
          }}
        />
      </motion.div>

      {/* Clouds */}
      <motion.div
        className="absolute top-1/4 left-10"
        animate={{ x: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Cloud size="lg" />
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-1/4"
        animate={{ x: [0, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      >
        <Cloud size="md" />
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-1/3"
        animate={{ x: [0, 25, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
      >
        <Cloud size="sm" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 right-10"
        animate={{ x: [0, -15, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 8 }}
      >
        <Cloud size="md" />
      </motion.div>

      {/* Subtle light rays */}
      <div 
        className="absolute top-0 right-0 w-1/2 h-1/2 opacity-20"
        style={{
          background: 'linear-gradient(135deg, hsl(45 100% 80% / 0.3) 0%, transparent 60%)',
        }}
      />
    </div>
  );
};

const Cloud = ({ size }: { size: 'sm' | 'md' | 'lg' }) => {
  const sizeClasses = {
    sm: 'w-20 h-8',
    md: 'w-32 h-12',
    lg: 'w-48 h-16',
  };

  return (
    <div className={`${sizeClasses[size]} relative`}>
      <div 
        className="absolute inset-0 rounded-full"
        style={{
          background: 'hsl(0 0% 100% / 0.9)',
          filter: 'blur(8px)',
          borderRadius: '50px',
        }}
      />
      <div 
        className="absolute left-1/4 -top-1/2 w-1/2 h-full rounded-full"
        style={{
          background: 'hsl(0 0% 100% / 0.9)',
          filter: 'blur(6px)',
        }}
      />
      <div 
        className="absolute right-1/4 -top-1/3 w-2/5 h-4/5 rounded-full"
        style={{
          background: 'hsl(0 0% 100% / 0.85)',
          filter: 'blur(6px)',
        }}
      />
    </div>
  );
};

export default DayBackground;
