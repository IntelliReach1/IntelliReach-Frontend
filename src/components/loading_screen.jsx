import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// WebGL Particle Animation
function WebGLParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Particle class with gradient colors
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.8;
        this.speedY = (Math.random() - 0.5) * 0.8;
        this.opacity = Math.random() * 0.6 + 0.2;
        
        // Gradient colors matching the logo
        const colors = [
          '#8B5CF6', // purple
          '#EC4899', // pink
          '#F97316', // orange
          '#A855F7', // violet
          '#FB923C', // light orange
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Wrap around screen
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }
      
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        
        // Gradient fill
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size * 2
        );
        gradient.addColorStop(0, this.color + Math.floor(this.opacity * 255).toString(16).padStart(2, '0'));
        gradient.addColorStop(1, this.color + '00');
        
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    }
    
    // Create particles
    const particleCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 10000));
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    // Connect nearby particles with colored lines
    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(236, 72, 153, ${0.15 * (1 - distance / 120)})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  );
}

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const interval = 20;
    const increment = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment + Math.random() * 0.5;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 300);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 flex flex-col items-center justify-center"
    >
      {/* WebGL Particles Background */}
      <WebGLParticles />
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-400/20 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-400/20 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-orange-300/15 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotateY: -180 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="flex items-center gap-3 mb-12 relative z-10"
      >
        <motion.div 
          className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center shadow-lg shadow-purple-400/50"
          animate={{ 
            boxShadow: [
              '0 10px 30px rgba(168, 85, 247, 0.5)',
              '0 10px 30px rgba(236, 72, 153, 0.5)',
              '0 10px 30px rgba(251, 146, 60, 0.5)',
              '0 10px 30px rgba(168, 85, 247, 0.5)',
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <span className="text-white font-bold text-xl">IR</span>
        </motion.div>
        <span className="text-2xl font-semibold text-gray-800">
          Intelli<span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">Reach</span>
        </span>
      </motion.div>

      {/* Progress Container */}
      <div className="relative flex flex-col items-center z-10">
        {/* Soft background glow behind the number */}
        <div className="pointer-events-none absolute -inset-x-24 -top-6 -bottom-2 rounded-[999px] blur-3xl" style={{ background: 'radial-gradient(35% 60% at 50% 55%, rgba(168,85,247,0.25), rgba(236,72,153,0) 70%)' }} />

        {/* Progress Percentage with fill-on-load + outline + glow */}
        <div className="relative inline-block leading-none mb-6 select-none tracking-tight">
          {/* Glow clipped to the filled area */}
          <span
            className="absolute inset-0 font-extrabold leading-none text-[96px] md:text-[160px] opacity-60"
            style={{
              backgroundImage: `linear-gradient(to top, rgba(168,85,247,0.9) ${Math.floor(progress)}%, rgba(0,0,0,0) ${Math.floor(progress)}%)`,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              filter: 'blur(14px)',
            }}
            aria-hidden="true"
          >
            {`${Math.floor(progress)}%`}
          </span>

          {/* Filled part (bottom up) with gradient */}
          <span
            className="relative block font-extrabold leading-none text-[96px] md:text-[160px]"
            style={{
              backgroundImage: `linear-gradient(to top, #A855F7 ${Math.floor(progress * 0.3)}%, #EC4899 ${Math.floor(progress * 0.6)}%, #FB923C ${Math.floor(progress)}%, transparent ${Math.floor(progress)}%)`,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              textShadow: '0 6px 24px rgba(168,85,247,0.4), 0 0 60px rgba(236,72,153,0.3)',
            }}
          >
            {`${Math.floor(progress)}%`}
          </span>
        </div>

        {/* Progress Bar Background */}
        <div className="relative h-1.5 w-64 bg-gray-200/50 rounded-full overflow-visible backdrop-blur-sm">
          <motion.div
            className="relative h-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.7),0_0_30px_rgba(236,72,153,0.5)]"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          >
            {/* Moving glow at the leading edge */}
            <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-orange-300" />
            <motion.div
              className="absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full opacity-70"
              style={{
                background: 'radial-gradient(circle, rgba(251,146,60,0.9) 0, rgba(236,72,153,0.5) 50%, rgba(168,85,247,0) 70%)',
                filter: 'blur(12px)',
              }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </div>

        {/* Loading Text */}
        <p className="text-gray-400 text-sm text-center mt-4">
          Loading experience...
        </p>
      </div>

      {/* Orbiting Dots with gradient colors */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => {
          const colors = ['bg-purple-400/70', 'bg-pink-400/70', 'bg-orange-400/70', 'bg-violet-400/70', 'bg-fuchsia-400/70'];
          const shadows = ['shadow-purple-300/50', 'shadow-pink-300/50', 'shadow-orange-300/50', 'shadow-violet-300/50', 'shadow-fuchsia-300/50'];
          return (
            <motion.div
              key={i}
              className={`absolute top-1/2 left-1/2 w-2.5 h-2.5 ${colors[i]} rounded-full shadow-lg ${shadows[i]}`}
              animate={{
                rotate: 360,
                scale: [1, 1.3, 1],
              }}
              transition={{
                rotate: {
                  duration: 4 + i * 1.5,
                  repeat: Infinity,
                  ease: "linear",
                },
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
              }}
              style={{
                transformOrigin: `${-60 - i * 25}px 0px`,
              }}
            />
          );
        })}
      </div>
    </motion.div>
  );
}