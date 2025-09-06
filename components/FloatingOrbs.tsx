'use client';

import React, { useMemo } from 'react';

const FloatingOrbs = () => {
  const orbs = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => {
      const size = Math.random() * 100 + 50; // Orbs between 50px and 150px
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const animationDuration = Math.random() * 20 + 15; // Duration between 15s and 35s
      const animationDelay = Math.random() * 10; // Delay up to 10s

      return {
        id: i,
        style: {
          width: `${size}px`,
          height: `${size}px`,
          top: `${top}%`,
          left: `${left}%`,
          animationDuration: `${animationDuration}s`,
          animationDelay: `${animationDelay}s`,
        },
      };
    });
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.1;
          }
          50% {
            transform: translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px) scale(1.1);
            opacity: 0.3;
          }
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.1;
          }
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 165, 0, 0.6), transparent 70%);
          animation: float infinite ease-in-out;
          filter: blur(10px);
        }
      `}</style>
      {orbs.map((orb) => (
        <div key={orb.id} className="orb" style={orb.style} />
      ))}
    </div>
  );
};

export default FloatingOrbs;
