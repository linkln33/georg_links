'use client';

import React, { useCallback, memo } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Container, Engine, RecursivePartial, IOptions } from 'tsparticles-engine';

interface GlobalBackgroundProps {
  variant?: 'space' | 'clouds' | 'nebula' | 'minimal' | 'geometric';
  density?: 'low' | 'medium' | 'high';
}

const GlobalBackground: React.FC<GlobalBackgroundProps> = ({ variant = 'nebula', density = 'medium' }) => {
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
            value: ['#ff00b8', '#00ffff', '#8A2BE2', '#FF1493', '#ff4500', '#ff6b35', '#39ff14', '#00ff41'],
          },
          links: {
            color: '#ff00b8',
            distance: 120,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          move: {
            direction: "none" as any,
            enable: true,
            outModes: {
              default: "out",
            },
            random: true,
            speed: 0.4,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1000,
            },
            value: getParticleCount(100),
          },
          opacity: {
            value: 0.6,
            random: true,
          },
          shape: {
            type: ["circle", "triangle", "polygon"],
          },
          size: {
            value: { min: 1, max: 4 },
            random: true,
          },
        },
        detectRetina: true,
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
          value: ['#ff00b8', '#00ffff', '#8A2BE2', '#FF1493', '#ff4500', '#ff6b35', '#39ff14', '#00ff41'],
        },
        links: {
          color: '#ff00b8',
          distance: 120,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none" as any,
          enable: true,
          outModes: {
            default: "out",
          },
          random: true,
          speed: 0.4,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 1000,
          },
          value: getParticleCount(100),
        },
        opacity: {
          value: 0.6,
          random: true,
        },
        shape: {
          type: ["circle", "triangle", "polygon"],
        },
        size: {
          value: { min: 1, max: 4 },
          random: true,
        },
      },
      detectRetina: true,
    };
  }, [variant, getParticleCount]);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
      <Particles
        id="tsparticles-global"
        init={particlesInit}
        options={getConfig()}
        className="w-full h-full"
        style={{ position: 'fixed', width: '100%', height: '100%', zIndex: 0 }}
      />
    </div>
  );
};

export { GlobalBackground }
export default memo(GlobalBackground);
