'use client';

import React from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Abdrax LMS",
    description: "A comprehensive Learning Management System built with modern web technologies. Features include course management, student progress tracking, interactive quizzes, and real-time messaging system for educators and students.",
    image: "/projects/Abdrax LMS.png",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "AI Search E-commerce",
    description: "An intelligent e-commerce platform powered by AI search capabilities. Users can search products using natural language queries, get personalized recommendations, and enjoy smart filtering options.",
    image: "/projects/AI Search E commerce.png",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "OpenAI API", "Stripe"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "CareSync",
    description: "A healthcare management application that connects patients with healthcare providers. Features appointment scheduling, medical record management, prescription tracking, and telemedicine capabilities.",
    image: "/projects/CareSync.png",
    technologies: ["React", "Node.js", "PostgreSQL", "Express", "JWT", "WebRTC"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "Exenra POS",
    description: "A modern Point of Sale system designed for retail businesses. Includes inventory management, sales analytics, customer management, and multi-payment gateway integration for seamless transactions.",
    image: "/projects/Exenra POS.png",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Chart.js", "Payment APIs"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 5,
    title: "Tabibistan",
    description: "A digital healthcare platform connecting patients with doctors across Pakistan. Features online consultations, appointment booking, prescription management, and health record digitization.",
    image: "/projects/Tabibistan.png",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "NextAuth", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="mb-32">
      <div className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
        <div className={`relative group ${!isEven ? 'lg:order-2' : ''}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
          <div className="relative overflow-hidden rounded-xl border border-violet-500/30 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 p-4">
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
        
        <div className={`space-y-6 ${!isEven ? 'lg:order-1' : ''}`}>
          <div>
            <h3 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {project.title}
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              {project.description}
            </p>
          </div>
          
          <div>
            <h4 className="text-violet-400 font-semibold mb-4 text-xl">Technologies Used:</h4>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-4 py-2 bg-violet-500/20 border border-violet-500/30 rounded-full text-violet-300 text-sm font-medium hover:bg-violet-500/30 hover:border-violet-500/50 transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex gap-4 pt-6">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 text-white rounded-xl hover:from-violet-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg hover:shadow-xl"
              >
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-violet-500/50 text-violet-300 rounded-xl hover:bg-violet-500/20 hover:border-violet-500 transition-all duration-300 font-semibold"
              >
                View Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section className="relative py-24 bg-[#0d0a18] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Explore my portfolio of full-stack applications, each built with modern technologies 
            and designed to solve real-world problems with elegant user experiences.
          </p>
        </div>
        
        <div className="space-y-0">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;