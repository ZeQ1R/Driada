import React, { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const SnowParticles = () => {
  const canvasRef = useRef(null);
  const { season } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const particleCount = season === 'winter' ? 100 : 30;
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 3 + 1,
          speedY: Math.random() * 1 + 0.5,
          speedX: Math.random() * 0.5 - 0.25,
          opacity: Math.random() * 0.5 + 0.3,
          swing: Math.random() * Math.PI * 2,
          swingSpeed: Math.random() * 0.02 + 0.01
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.y += particle.speedY;
        particle.swing += particle.swingSpeed;
        particle.x += Math.sin(particle.swing) * 0.5 + particle.speedX;

        if (particle.y > canvas.height) {
          particle.y = -10;
          particle.x = Math.random() * canvas.width;
        }

        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        
        if (season === 'winter') {
          ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        } else {
          // Autumn leaves effect
          const colors = ['rgba(180, 100, 50, ', 'rgba(200, 150, 50, ', 'rgba(150, 80, 30, '];
          ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)] + `${particle.opacity})`;
        }
        
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    resize();
    createParticles();
    animate();

    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [season]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30"
      style={{ opacity: 0.7 }}
    />
  );
};

export default SnowParticles;
