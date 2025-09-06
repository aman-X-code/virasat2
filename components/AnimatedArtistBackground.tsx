'use client';

import React from 'react';
import FloatingOrbs from './FloatingOrbs';

const AnimatedArtistBackground = () => {
  return (
    <div
      className="absolute inset-0 -z-10"
      style={{
        background: 'radial-gradient(ellipse at 50% 50%, #1c1c1c, #0a0a0a)',
      }}
    >
      <FloatingOrbs />
    </div>
  );
};

export default AnimatedArtistBackground;
