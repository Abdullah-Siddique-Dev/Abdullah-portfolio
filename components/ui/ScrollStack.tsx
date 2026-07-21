'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ScrollStack.css';

gsap.registerPlugin(ScrollTrigger);

interface ScrollStackProps {
  children: React.ReactNode;
  className?: string;
}

const ScrollStack: React.FC<ScrollStackProps> = ({ children, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !stackRef.current) return;

    const container = containerRef.current;
    const stack = stackRef.current;
    const cards = stack.querySelectorAll('.scroll-stack-card');

    // Set initial positions
    cards.forEach((card, index) => {
      gsap.set(card, {
        zIndex: cards.length - index,
        y: index * 20,
        scale: 1 - index * 0.05,
        opacity: 1 - index * 0.1
      });
    });

    // Create scroll animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          
          cards.forEach((card, index) => {
            const cardProgress = Math.max(0, Math.min(1, (progress * cards.length) - index));
            
            gsap.to(card, {
              y: index * 20 - cardProgress * 100,
              scale: 1 - index * 0.05 + cardProgress * 0.05,
              opacity: 1 - index * 0.1 + cardProgress * 0.1,
              rotationX: cardProgress * -5,
              duration: 0.3,
              ease: 'power2.out'
            });
          });
        }
      }
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className={`scroll-stack-container ${className}`}>
      <div ref={stackRef} className="scroll-stack">
        {children}
      </div>
    </div>
  );
};

export default ScrollStack;