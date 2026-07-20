"use client";

import { motion } from "motion/react";

// Official colored SVG icons from devicons CDN
const skills = [
  { name: "React",       color: "#61DAFB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",      whiteIcon: false },
  { name: "Next.js",     color: "#ffffff", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",     whiteIcon: true  },
  { name: "Node.js",     color: "#68A063", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",     whiteIcon: false },
  { name: "Express",     color: "#ffffff", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",   whiteIcon: true  },
  { name: "MongoDB",     color: "#47A248", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",   whiteIcon: false },
  { name: "PostgreSQL",  color: "#336791", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", whiteIcon: false },
  { name: "TypeScript",  color: "#3178C6", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", whiteIcon: false },
  { name: "JavaScript",  color: "#F7DF1E", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", whiteIcon: false },
  { name: "Tailwind",    color: "#38BDF8", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", whiteIcon: false },
  { name: "HTML5",       color: "#E34F26", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",       whiteIcon: false },
  { name: "CSS3",        color: "#1572B6", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",         whiteIcon: false },
  { name: "Git",         color: "#F05032", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",           whiteIcon: false },
  { name: "GitHub",      color: "#ffffff", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",     whiteIcon: true  },
  { name: "Python",      color: "#3776AB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",     whiteIcon: false },
  { name: "Prisma",      color: "#5A67D8", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",     whiteIcon: true  },
  { name: "VS Code",     color: "#007ACC", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",     whiteIcon: false },
];

function SkillCard({ skill }: { skill: typeof skills[0] }) {
  return (
    <motion.div
      className="group relative flex flex-col items-center justify-center gap-3 px-6 py-6 rounded-xl border border-white/8 bg-white/3 cursor-default select-none"
      style={{ minWidth: "120px" }}
      whileHover={{ y: -4, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Icon */}
      <div className="w-12 h-12 flex items-center justify-center">
        <img
          src={skill.icon}
          alt={skill.name}
          width={48}
          height={48}
          className={[
            "w-12 h-12 object-contain transition-all duration-300",
            skill.whiteIcon
              // White icons: dim with low opacity + invert to make dark, hover restores white
              ? "opacity-20 invert group-hover:opacity-90 group-hover:invert"
              // Colored icons: greyscale + dim, hover reveals real color
              : "grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100",
          ].join(" ")}
          loading="lazy"
        />
      </div>

      <span className="text-xs font-medium tracking-wide text-neutral-500 group-hover:text-white transition-colors duration-300 whitespace-nowrap">
        {skill.name}
      </span>

      {/* Glow border on hover */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow: `0 0 16px 2px rgba(124,58,237,0.25), inset 0 0 16px 0px rgba(124,58,237,0.08)`,
          border: `1px solid rgba(124,58,237,0.35)`,
        }}
      />
    </motion.div>
  );
}

export default function Skills() {
  const track = [...skills, ...skills];

  return (
    <section id="skills" className="relative w-full bg-[#000000] py-20 overflow-hidden">

      {/* Section label */}
      <div className="flex items-center justify-center gap-4 mb-14">
        <div className="h-px w-12 bg-violet-500/40" />
        <span className="text-xs tracking-[0.3em] uppercase text-violet-400 font-medium">
          Skills &amp; Technologies
        </span>
        <div className="h-px w-12 bg-violet-500/40" />
      </div>

      {/* Marquee */}
      <div className="relative w-full overflow-hidden">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #000000 0%, transparent 100%)" }} />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #000000 0%, transparent 100%)" }} />

        <motion.div
          className="flex gap-4"
          style={{ width: "max-content" }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear", repeatType: "loop" }}
        >
          {track.map((skill, idx) => (
            <SkillCard key={`${skill.name}-${idx}`} skill={skill} />
          ))}
        </motion.div>
      </div>

    </section>
  );
}
