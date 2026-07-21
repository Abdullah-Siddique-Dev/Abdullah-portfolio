'use client';

import { useEffect, useRef, useCallback } from 'react';
import './ScrollStack.css';

interface ScrollStackItemProps {
  children: React.ReactNode;
  itemClassName?: string;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ children, itemClassName = '' }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>
    {children}
  </div>
);

interface ScrollStackProps {
  children: React.ReactNode;
  className?: string;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  blurAmount?: number;
  rotationAmount?: number;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.04,
  itemStackDistance = 25,
  stackPosition = '15%',
  scaleEndPosition = '5%',
  baseScale = 0.88,
  blurAmount = 0,
  rotationAmount = 0,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const rafRef = useRef<number | null>(null);
  const lastScrollRef = useRef<number>(-1);

  const parsePercent = useCallback((val: string, vh: number) => {
    if (typeof val === 'string' && val.includes('%')) {
      return (parseFloat(val) / 100) * vh;
    }
    return parseFloat(val);
  }, []);

  const update = useCallback(() => {
    const cards = cardsRef.current;
    if (!cards.length) return;

    const scrollTop = window.scrollY;
    if (scrollTop === lastScrollRef.current) return;
    lastScrollRef.current = scrollTop;

    const vh = window.innerHeight;
    const stackPosPx = parsePercent(stackPosition, vh);
    const scaleEndPx = parsePercent(scaleEndPosition, vh);

    // The end marker sits after all cards
    const container = containerRef.current;
    if (!container) return;
    const endMarker = container.querySelector('.scroll-stack-end') as HTMLElement | null;
    const endTop = endMarker
      ? endMarker.getBoundingClientRect().top + scrollTop
      : 0;

    cards.forEach((card, i) => {
      const cardTop = card.getBoundingClientRect().top + scrollTop;

      const triggerStart = cardTop - stackPosPx - itemStackDistance * i;
      const triggerEnd   = cardTop - scaleEndPx;
      const pinStart     = triggerStart;
      const pinEnd       = endTop - vh / 2;

      // Scale
      let scaleProgress = 0;
      if (scrollTop >= triggerStart && scrollTop <= triggerEnd) {
        scaleProgress = (scrollTop - triggerStart) / (triggerEnd - triggerStart);
      } else if (scrollTop > triggerEnd) {
        scaleProgress = 1;
      }
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);

      // Translate (pin effect)
      let translateY = 0;
      if (scrollTop >= pinStart && scrollTop <= pinEnd) {
        translateY = scrollTop - cardTop + stackPosPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPosPx + itemStackDistance * i;
      }

      // Blur
      let blur = 0;
      if (blurAmount > 0) {
        let topIdx = 0;
        cards.forEach((c, j) => {
          const cTop = c.getBoundingClientRect().top + scrollTop;
          const cTrigger = cTop - stackPosPx - itemStackDistance * j;
          if (scrollTop >= cTrigger) topIdx = j;
        });
        if (i < topIdx) blur = (topIdx - i) * blurAmount;
      }

      // Rotation
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      card.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale}) rotate(${rotation}deg)`;
      card.style.filter = blur > 0 ? `blur(${blur}px)` : '';
      card.style.zIndex = String(i + 1);
    });
  }, [baseScale, blurAmount, itemScale, itemStackDistance, parsePercent,
      rotationAmount, scaleEndPosition, stackPosition]);

  const onScroll = useCallback(() => {
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(update);
  }, [update]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Collect cards and set spacing
    const cards = Array.from(
      container.querySelectorAll<HTMLElement>(':scope > .scroll-stack-inner > .scroll-stack-card')
    );
    cardsRef.current = cards;

    cards.forEach((card, i) => {
      card.style.transformOrigin = 'top center';
      card.style.willChange = 'transform, filter';
      card.style.backfaceVisibility = 'hidden';
      if (i < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      }
    });

    window.addEventListener('scroll', onScroll, { passive: true });
    // Run once on mount to position correctly if page is already scrolled
    update();

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [itemDistance, onScroll, update]);

  return (
    <div ref={containerRef} className={`scroll-stack-host ${className}`.trim()}>
      <div className="scroll-stack-inner">
        {children}
        <div className="scroll-stack-end" />
      </div>
    </div>
  );
};

export default ScrollStack;
