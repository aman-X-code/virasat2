'use client';

import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

const FlowingSilkBackground = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathsRef = useRef<SVGPathElement[]>([]);

  useLayoutEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const width = svg.clientWidth;
    const height = svg.clientHeight;
    const numWaves = 5;
    const waveHeight = height * 0.3;
    const speed = 0.1;

    const waves = pathsRef.current.map((path, i) => {
      const initialPhase = Math.random() * Math.PI * 2;
      const amplitude = Math.random() * 50 + 50;
      const frequency = Math.random() * 0.02 + 0.01;
      const yOffset = (height / numWaves) * i;

      return {
        path,
        initialPhase,
        amplitude,
        frequency,
        yOffset,
      };
    });

    const ticker = (time: number) => {
      waves.forEach(wave => {
        let d = `M 0,${wave.yOffset}`;
        for (let x = 0; x <= width; x += 10) {
          const y = Math.sin(x * wave.frequency + time * speed + wave.initialPhase) * wave.amplitude + wave.yOffset;
          d += ` L ${x},${y}`;
        }
        d += ` L ${width},${height} L 0,${height} Z`;
        wave.path.setAttribute('d', d);
      });
    };

    gsap.ticker.add(ticker);

    return () => {
      gsap.ticker.remove(ticker);
    };
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-gray-900">
      <svg ref={svgRef} className="w-full h-full">
        <defs>
          <radialGradient id="silkGradient1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(74, 20, 140, 0.3)" />
            <stop offset="100%" stopColor="rgba(13, 71, 161, 0.3)" />
          </radialGradient>
          <radialGradient id="silkGradient2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(106, 27, 154, 0.3)" />
            <stop offset="100%" stopColor="rgba(21, 101, 192, 0.3)" />
          </radialGradient>
          <filter id="blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
          </filter>
        </defs>
        {[...Array(5)].map((_, i) => (
          <path
            key={i}
            ref={el => {
              if (el) pathsRef.current[i] = el;
            }}
            fill={`url(#silkGradient${(i % 2) + 1})`}
            filter="url(#blur)"
          />
        ))}
      </svg>
    </div>
  );
};

export default FlowingSilkBackground;
