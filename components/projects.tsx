'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Abdrax LMS",
    description: "A comprehensive Learning Management System built with modern web technologies. Features include course management, student progress tracking, interactive quizzes, and real-time messaging system.",
    image: "/projects/Abdrax LMS.png",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "AI Search E-commerce",
    description: "An intelligent e-commerce platform powered by AI search. Users can search products using natural language, get personalized recommendations, and enjoy smart filtering.",
    image: "/projects/AI Search E commerce.png",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "OpenAI API", "Stripe"],
  },
  {
    id: 3,
    title: "CareSync",
    description: "A healthcare management app connecting patients with providers. Features appointment scheduling, medical record management, prescription tracking, and telemedicine.",
    image: "/projects/CareSync.png",
    technologies: ["React", "Node.js", "PostgreSQL", "Express", "JWT", "WebRTC"],
  },
  {
    id: 4,
    title: "Exenra POS",
    description: "A modern Point of Sale system for retail businesses. Includes inventory management, sales analytics, customer management, and multi-payment gateway integration.",
    image: "/projects/Exenra POS.png",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Chart.js", "Payment APIs"],
  },
  {
    id: 5,
    title: "Tabibistan",
    description: "A digital healthcare platform connecting patients with doctors across Pakistan. Features online consultations, appointment booking, prescription management, and health record digitization.",
    image: "/projects/Tabibistan.png",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "NextAuth", "Tailwind CSS"],
  },
];

const CARD_HEIGHT = 520;
const STICK_TOP   = 80;   // px from top of viewport — same for ALL cards
const CARD_GAP    = 32;   // px gap between cards

const Projects: React.FC = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!cards.length) return;

    const update = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;

      // Figure out which card index is currently "on top" (the frontmost visible card)
      // A card is considered active once its sticky top edge has been reached
      let activeIndex = 0;
      cards.forEach((card, i) => {
        // The slot wrapper is the parent
        const slot = card.parentElement!;
        const slotTop = slot.getBoundingClientRect().top + scrollY;
        // Card becomes "active" once we've scrolled to its pin point
        if (scrollY >= slotTop - STICK_TOP) {
          activeIndex = i;
        }
      });

      cards.forEach((card, i) => {
        const depth = activeIndex - i; // 0 = active/front, >0 = buried behind
        if (depth <= 0) {
          // Front card or cards not yet reached — crisp, full scale
          card.style.filter  = 'blur(0px)';
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
        } else {
          // Buried cards — blur and scale down proportionally
          const blurVal   = Math.min(depth * 3, 8);   // max 8px blur
          const scaleVal  = Math.max(1 - depth * 0.03, 0.88);
          const opacity   = Math.max(1 - depth * 0.15, 0.5);
          card.style.filter  = `blur(${blurVal}px)`;
          card.style.opacity = String(opacity);
          card.style.transform = `scale(${scaleVal})`;
        }
        card.style.transformOrigin = 'top center';
        card.style.transition = 'filter 0.3s ease, opacity 0.3s ease, transform 0.3s ease';
      });
    };

    window.addEventListener('scroll', update, { passive: true });
    update(); // run once on mount

    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <section id="projects" className="relative bg-[#0d0a18] py-16 md:py-24">

      {/* Section heading */}
      <div className="text-center mb-12 md:mb-16 px-4 sm:px-6">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-8 sm:w-12 bg-violet-500/40" />
          <h2 className="text-xs tracking-[0.3em] uppercase text-violet-400 font-medium">
            My Projects
          </h2>
          <div className="h-px w-8 sm:w-12 bg-violet-500/40" />
        </div>
        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed px-4">
          Explore my portfolio of full-stack applications, each built with modern technologies
          and designed to solve real-world problems with elegant user experiences.
        </p>
      </div>

      {/*
        Stack wrapper:
        - paddingBottom gives scroll travel so each card has room to slide in
        - Each slot is sticky at exactly the same `top` so all cards align perfectly
      */}
      <div
        className="mx-auto px-4 sm:px-6"
        style={{
          maxWidth: '62rem',
          paddingBottom: `${(projects.length - 1) * (CARD_HEIGHT + CARD_GAP)}px`,
        }}
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            style={{
              position: 'sticky',
              top: `${STICK_TOP}px`,
              zIndex: index + 1,
              height: `${CARD_HEIGHT}px`,
              marginBottom: index < projects.length - 1 ? `${CARD_GAP}px` : 0,
            }}
          >
            <div
              className="project-card"
              ref={(el) => { cardRefs.current[index] = el; }}
            >
              {/* Left — image 60% */}
              <div className="project-image-wrap">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={520}
                  className="project-img"
                  priority={project.id === 1}
                />
              </div>

              {/* Right — info 40% */}
              <div className="project-info-panel">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <p className="project-tech-label">Technologies Used:</p>
                <div className="project-tech-list">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="project-tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Projects;
