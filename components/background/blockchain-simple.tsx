'use client';

import React, { useCallback, memo } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Container, Engine, RecursivePartial, IOptions } from 'tsparticles-engine';

interface AnimatedBackgroundProps {
  variant?: 'space' | 'clouds' | 'nebula' | 'minimal' | 'geometric';
  density?: 'low' | 'medium' | 'high';
}

const BlockchainSimple: React.FC<AnimatedBackgroundProps> = ({ variant = 'nebula', density = 'medium' }) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  // Get particle count based on density
  const getParticleCount = useCallback((baseDensity: number): number => {
    switch (density) {
      case 'low': return Math.floor(baseDensity * 0.5);
      case 'high': return Math.floor(baseDensity * 1.5);
      case 'medium':
      default: return baseDensity;
    }
  }, [density]);

  const getConfig = useCallback((): RecursivePartial<IOptions> => {
    // Nebula configuration - ChadEmpire style with bright colors
    if (variant === 'nebula') {
      return {
        fullScreen: false,
        background: {
          color: {
            value: 'transparent',
          },
        },
        fpsLimit: 30,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.8,
              },
            },
            push: {
              quantity: 4,
            },
          },
        },
        particles: {
          color: {
            value: ['#ff00b8', '#00ffff', '#8A2BE2', '#FF1493'],
          },
          links: {
            color: '#ff00b8',
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1.5,
          },
          move: {
            direction: "none" as any,
            enable: true,
            outModes: {
              default: "out",
            },
            random: true,
            speed: 0.6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: getParticleCount(70),
          },
          opacity: {
            value: 0.8,
            random: true,
          },
          shape: {
            type: ["circle", "triangle", "polygon"],
          },
          size: {
            value: { min: 2, max: 10 },
            random: true,
          },
        },
        detectRetina: true,
      };
    }

    // Space configuration (default)
    if (variant === 'space') {
      return {
        fullScreen: false,
        background: {
          color: {
            value: 'transparent',
          },
        },
        fpsLimit: 30,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            onClick: {
              enable: false,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.5,
              },
            },
            push: {
              quantity: 4,
            },
          },
        },
        particles: {
          color: { value: '#ff00b8' },
          links: {
            color: '#00ffff',
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          move: {
            direction: "none" as any,
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 0.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: getParticleCount(40),
          },
          opacity: {
            value: 0.5,
            random: true,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
            random: true,
          },
        },
        detectRetina: true,
      };
    }

    // Minimal configuration - very lightweight
    if (variant === 'minimal') {
      return {
        fullScreen: false,
        background: { color: { value: 'transparent' } },
        fpsLimit: 30,
        interactivity: {
          events: { 
            onHover: { enable: true, mode: "connect" },
            onClick: { enable: false },
            resize: true 
          },
          modes: { 
            connect: { 
              distance: 200,
              links: { opacity: 0.3 },
              radius: 120
            } 
          }
        },
        particles: {
          color: { value: ['#ff00b8', '#00ffff'] },
          links: { 
            color: '#ff00b8',
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1 
          },
          move: { 
            enable: true,
            speed: 0.3,
            direction: "none" as any,
            random: false,
            straight: false,
            outModes: { default: "out" }
          },
          number: { 
            density: { enable: true, area: 1000 },
            value: getParticleCount(30)
          },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } }
        },
        detectRetina: true
      };
    }

    // Default nebula configuration
    return {
      fullScreen: false,
      background: {
        color: {
          value: 'transparent',
        },
      },
      fpsLimit: 30,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
          onClick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 140,
            links: {
              opacity: 0.8,
            },
          },
          push: {
            quantity: 4,
          },
        },
      },
      particles: {
        color: {
          value: ['#ff00b8', '#00ffff', '#8A2BE2', '#FF1493'],
        },
        links: {
          color: '#ff00b8',
          distance: 150,
          enable: true,
          opacity: 0.4,
          width: 1.5,
        },
        move: {
          direction: "none" as any,
          enable: true,
          outModes: {
            default: "out",
          },
          random: true,
          speed: 0.6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: getParticleCount(70),
        },
        opacity: {
          value: 0.8,
          random: true,
        },
        shape: {
          type: ["circle", "triangle", "polygon"],
        },
        size: {
          value: { min: 2, max: 10 },
          random: true,
        },
      },
      detectRetina: true,
    };
  }, [variant, getParticleCount]);

  return (
    <div className="absolute inset-0 overflow-hidden w-full h-full z-0">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={getConfig()}
        className="w-full h-full"
        style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 0 }}
      />
    </div>
  );
};

export { BlockchainSimple }
export default memo(BlockchainSimple);