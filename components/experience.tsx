'use client';

import React from 'react';
import ReflectiveCard from '@/components/ui/ReflectiveCard';

interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  period: string;
  location?: string;
  highlights: string[];
  stack: string[];
  accent: string;
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: 'Iqamat e Islam',
    role: 'IT Team Member',
    period: 'Feb 2025',
    highlights: [
      'Worked under the IT Director to build and maintain a community Learning Management System.',
      'Implemented Quran recitation, daily Namaz attendance tracking, and team collaboration tools alongside the frontend portal.',
    ],
    stack: ['PHP', 'SQL', 'CSS', 'JavaScript'],
    accent: '#a78bfa',
  },
  {
    id: 2,
    company: 'Exytex Technologies',
    role: 'MERN Stack Developer',
    period: 'Aug 2025 – Mar 2026',
    location: 'Wah Cantt',
    highlights: [
      'Developed full-stack web applications with React.js, Node.js, Express.js, MongoDB, and REST APIs.',
      'Contributed to Exenra.ai (flagship product), Exytex company website, a POS system, and a hospital management system.',
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs'],
    accent: '#7c3aed',
  },
  {
    id: 3,
    company: 'DevRemind Technologies',
    role: 'Full Stack Developer',
    period: 'Apr – May 2026',
    highlights: [
      'Engineered a scalable Point of Sale (POS) system tailored for restaurants, retail shops, and marts.',
      'Strengthened full-stack architecture and high-throughput billing workflows.',
    ],
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    accent: '#06b6d4',
  },
  {
    id: 4,
    company: 'CallTire',
    role: 'IT Director',
    period: 'Aug – Oct 2026',
    highlights: [
      'Led IT operations and built a custom PERN stack CRM for automotive roadside assistance and call center dispatch.',
      'Maintained production infrastructure, fleet workflows, and B2B invoicing.',
    ],
    stack: ['PostgreSQL', 'Express', 'React', 'Node.js', 'Next.js'],
    accent: '#22c55e',
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative bg-[#0a0812] py-16 md:py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section heading */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-8 sm:w-12 bg-violet-500/40" />
            <h2 className="text-xs tracking-[0.3em] uppercase text-violet-400 font-medium">
              Experience
            </h2>
            <div className="h-px w-8 sm:w-12 bg-violet-500/40" />
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            My professional journey building full-stack products, internal platforms, and scalable business systems.
          </p>
        </div>

        {/* 2x2 grid on desktop, 1 column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {experiences.map((exp) => (
            <ReflectiveCard
              key={exp.id}
              theme="dark"
              tint="#c4b5fd"
              metalness={0.85}
              roughness={0.32}
              blurStrength={6}
              shine={0.9}
              glare={0.45}
              tiltStrength={8}
              width="100%"
              height="auto"
              radius={20}
              className="min-h-[300px]"
            >
              <div className="flex flex-col justify-between h-full gap-5">
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-medium tracking-wider uppercase text-violet-300 bg-violet-500/10 border border-violet-500/25 px-2.5 py-1 rounded-md">
                    {exp.period}
                  </span>
                  {exp.location && (
                    <span className="inline-flex items-center gap-1.5 text-xs text-neutral-400">
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: exp.accent }}
                      />
                      {exp.location}
                    </span>
                  )}
                </div>

                {/* Role & Company */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                    {exp.company}
                  </h3>
                  <p className="text-sm text-violet-300/90 font-medium mt-0.5">
                    {exp.role}
                  </p>
                  <ul className="mt-3 space-y-2 text-xs sm:text-sm text-neutral-300/85 leading-relaxed list-disc list-inside">
                    {exp.highlights.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                  {exp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-medium px-2 py-0.5 rounded bg-white/5 border border-white/10 text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </ReflectiveCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
