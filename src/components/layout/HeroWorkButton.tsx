import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';

const HeroWorkButton = (): JSX.Element => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const buttonContainerRef = useRef<HTMLDivElement | null>(null);
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const particleContainerRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const [particlesCreated, setParticlesCreated] = useState<boolean>(false);
  
  // Reset letterRefs array
  letterRefs.current = [];
  
  // Add letters to refs array with proper typing
  const addToRefs = (el: HTMLSpanElement | null): void => {
    if (el && !letterRefs.current.includes(el)) {
      letterRefs.current.push(el);
    }
  };

  // Create particles dynamically
  useLayoutEffect(() => {
    if (particleContainerRef.current && !particlesCreated) {
      const particleCount = 20;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute bg-gray-400 rounded-full opacity-0';
        
        // Random size between 2-5px
        const size = Math.random() * 3 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random starting position
        const posX = Math.random() * 160; // button width
        const posY = Math.random() * 60;  // button height
        particle.style.left = `${posX}px`;
        particle.style.top = `${posY}px`;
        
        particleContainerRef.current.appendChild(particle);
      }
      setParticlesCreated(true);
    }
  }, [particlesCreated]);

  useLayoutEffect(() => {
    if (!particlesCreated) return;
    
    const ctx = gsap.context(() => {
      // Initial entrance animation
      const tl = gsap.timeline();

      // Create digital glitch effect
      const glitchEffect = () => {
        if (buttonRef.current) {
          const glitchTl = gsap.timeline();
          
          glitchTl
            .to(buttonRef.current, {
              x: 3,
              duration: 0.05,
              ease: "power1.inOut"
            })
            .to(buttonRef.current, {
              x: -3,
              duration: 0.05,
              ease: "power1.inOut"
            })
            .to(buttonRef.current, {
              x: 0,
              duration: 0.05,
              ease: "power1.inOut"
            });
            
          // Random color shifts
          for (let i = 0; i < 3; i++) {
            const r = Math.floor(Math.random() * 100) + 100;
            const g = Math.floor(Math.random() * 100) + 100;
            const b = Math.floor(Math.random() * 100) + 200;
            
            glitchTl.to(buttonRef.current, {
              boxShadow: `0 0 15px rgba(${r}, ${g}, ${b}, 0.8)`,
              duration: 0.1,
              ease: "none"
            }, i * 0.1);
          }
          
          // Reset
          glitchTl.to(buttonRef.current, {
            boxShadow: '0 0 15px rgba(59, 130, 246, 0.6)',
            duration: 0.2
          });
          
          return glitchTl;
        }
        return gsap.timeline();
      };
      
      // Button container animation with tech effect
      if (buttonContainerRef.current) {
        tl.fromTo(
          buttonContainerRef.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          }
        );
      }
      
      // Scanning line effect
      if (buttonRef.current) {
        tl.fromTo(
          buttonRef.current,
          { 
            backgroundImage: 'linear-gradient(to bottom, rgba(156, 163, 175, 0.2), rgba(156, 163, 175, 0))',
            backgroundSize: '100% 0%',
            backgroundRepeat: 'no-repeat',
            scale: 0.9, 
            opacity: 0.5 
          },
          {
            backgroundSize: '100% 100%',
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .add(glitchEffect(), "-=0.5");
      }
      
      // Letters animation (tech-inspired)
      if (letterRefs.current.length > 0) {
        tl.fromTo(
          letterRefs.current,
          { 
            y: 30, 
            opacity: 0, 
            rotationY: 90,
            filter: 'blur(10px)'
          },
          {
            y: 0,
            opacity: 1,
            rotationY: 0,
            filter: 'blur(0px)',
            duration: 0.6,
            stagger: 0.08,
            ease: "back.out(1.5)",
            onComplete: () => {
              // Add glow to letters after they appear
              gsap.to(letterRefs.current, {
                textShadow: '0 0 8px rgba(255, 255, 255, 0.8)',
                duration: 0.4
              });
            }
          },
          "-=0.8"
        );
      }
      
      // Glow animation
      if (glowRef.current) {
        tl.fromTo(
          glowRef.current,
          { opacity: 0, scale: 0.8 },
          { opacity: 0.7, scale: 1, duration: 1, ease: "power2.out" },
          "-=0.5"
        );
      }
      
      // Particles animation
      if (particleContainerRef.current) {
        const particles = particleContainerRef.current.children;
        
        for (let i = 0; i < particles.length; i++) {
          const particle = particles[i] as HTMLElement;
          
          // Random delay
          const delay = Math.random() * 3 + tl.totalDuration() - 0.5;
          
          // Animate each particle
          gsap.fromTo(
            particle,
            { 
              opacity: 0,
              scale: 0 
            },
            { 
              opacity: Math.random() * 0.7 + 0.3,
              scale: Math.random() * 3 + 1,
              duration: Math.random() * 1 + 0.5,
              delay: delay,
              repeat: -1,
              repeatDelay: Math.random() * 2 + 1,
              yoyo: true,
              ease: "power2.inOut"
            }
          );
          
          // Floating motion
          gsap.to(particle, {
            x: `${Math.random() * 30 - 15}`,
            y: `${Math.random() * 30 - 15}`,
            duration: Math.random() * 3 + 2,
            delay: delay,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
          });
        }
      }
      
      // Hover effects
      if (buttonRef.current) {
        // Create hover timeline
        const hoverTl = gsap.timeline({ paused: true });
        
        hoverTl
          .to(buttonRef.current, {
            backgroundColor: "#1F2937", // Deeper gray
            scale: 1.05,
            boxShadow: '0 0 20px rgba(156, 163, 175, 0.8), 0 0 40px rgba(156, 163, 175, 0.4)',
            duration: 0.3,
            ease: "power2.out"
          })
          .to(glowRef.current, {
            opacity: 0.9,
            scale: 1.1,
            duration: 0.3
          }, 0);
        
        if (letterRefs.current.length > 0) {
          hoverTl.to(letterRefs.current, {
            y: -3,
            textShadow: '0 0 12px rgba(255, 255, 255, 1)',
            stagger: 0.03,
            duration: 0.2
          }, 0);
        }
        
        // Add data scanning effect on hover
        const scanEffectTl = gsap.timeline({ paused: true });
        scanEffectTl
          .fromTo(
            buttonRef.current,
            { 
              backgroundImage: 'linear-gradient(to bottom, rgba(156, 163, 175, 0.3), rgba(156, 163, 175, 0))',
              backgroundSize: '100% 10%',
              backgroundPosition: '0% 0%',
              backgroundRepeat: 'no-repeat' 
            },
            {
              backgroundPosition: '0% 100%',
              duration: 1,
              repeat: -1,
              ease: "none"
            }
          );
          
        // Add event listeners
        const handleMouseEnter = () => {
          hoverTl.play();
          scanEffectTl.play();
          glitchEffect();
        };
        
        const handleMouseLeave = () => {
          hoverTl.reverse();
          scanEffectTl.pause();
        };
        
        // Periodic glitch effect
        const intervalId = setInterval(() => {
          glitchEffect();
        }, 5000);
        
        buttonRef.current.addEventListener("mouseenter", handleMouseEnter);
        buttonRef.current.addEventListener("mouseleave", handleMouseLeave);
        
        return () => {
          if (buttonRef.current) {
            buttonRef.current.removeEventListener("mouseenter", handleMouseEnter);
            buttonRef.current.removeEventListener("mouseleave", handleMouseLeave);
          }
          clearInterval(intervalId);
        };
      }
    });
    
    return () => ctx.revert();
  }, [particlesCreated]);

  return (
    <div ref={buttonContainerRef} className="flex flex-col items-center justify-center mt-3">
      <button
        ref={buttonRef}
        className="relative mt-8 px-8 py-4 bg-gray-800 text-white rounded-md transition overflow-hidden shadow-lg border border-gray-700"
        style={{ 
          width: '160px',
          boxShadow: '0 0 15px rgba(156, 163, 175, 0.6), inset 0 0 10px rgba(156, 163, 175, 0.4)'
        }}
      >
        {/* Particles container */}
        <div 
          ref={particleContainerRef} 
          className="absolute inset-0 pointer-events-none"
        />
        
        {/* Glow effect */}
        <div 
          ref={glowRef}
          className="absolute inset-0 bg-gray-500 rounded-md blur-xl opacity-0 pointer-events-none"
        />
        
        {/* Digital circuit lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-0 top-1/4 w-1/4 h-px bg-gray-400 opacity-70" />
          <div className="absolute right-0 top-2/3 w-1/3 h-px bg-gray-400 opacity-70" />
          <div className="absolute left-1/4 bottom-0 w-px h-1/3 bg-gray-400 opacity-70" />
          <div className="absolute right-1/3 top-0 w-px h-1/4 bg-gray-400 opacity-70" />
        </div>
        
        {/* Text content */}
        <div className="flex justify-center items-center relative z-10">
          {Array.from("WORKS").map((letter, index) => (
            <span
              key={index}
              ref={addToRefs}
              className="inline-block text-3xl font-bold relative"
              style={{ textShadow: '0 0 5px rgba(255, 255, 255, 0.5)' }}
            >
              {letter}
            </span>
          ))}
        </div>
      </button>
    </div>
  );
};

export default HeroWorkButton;