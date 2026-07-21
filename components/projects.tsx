'use client';

import React from 'react';
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

const CARD_HEIGHT = 420; // px — height of each card
const STICK_TOP = 80;    // px — how far from top of viewport cards stick

const Projects: React.FC = () => {
  return (
    <section id="projects" className="relative bg-[#0d0a18] py-24">

      {/* Section heading */}
      <div className="text-center mb-16 px-6">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-12 bg-violet-500/40" />
          <h2 className="text-xs tracking-[0.3em] uppercase text-violet-400 font-medium">
            My Projects
          </h2>
          <div className="h-px w-12 bg-violet-500/40" />
        </div>
        <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
          Explore my portfolio of full-stack applications, each built with modern technologies
          and designed to solve real-world problems with elegant user experiences.
        </p>
      </div>

      {/* Stack container — total height gives scroll room for each card */}
      <div
        className="mx-auto px-6"
        style={{
          maxWidth: '62rem',
          /* Each card after the first needs ~1 viewport of travel to scroll in */
          paddingBottom: `${(projects.length - 1) * 100}vh`,
        }}
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            style={{
              position: 'sticky',
              top: `${STICK_TOP + index * 8}px`,   // slight cascade offset
              zIndex: index + 1,
              height: `${CARD_HEIGHT}px`,
              marginBottom: index < projects.length - 1 ? '-8px' : 0,
            }}
          >
            <div
              className="project-card"
              style={{
                /* Subtle scale-down for cards underneath — pure CSS, no JS */
                transform: `scale(${1 - index * 0.02})`,
                transformOrigin: 'top center',
              }}
            >
              {/* Left — image ~60% */}
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

              {/* Right — info panel ~40% */}
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
