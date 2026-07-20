"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import LightRays from "@/components/ui/LightRays";

const roles = ["Full Stack Developer", "MERN Stack Developer", "PERN Stack Developer"];

function TypingEffect() {
  const [displayed, setDisplayed] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), 70);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), 40);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setRoleIdx((r) => (r + 1) % roles.length);
    }

    setDisplayed(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, roleIdx]);

  return (
    <span className="inline-flex items-center gap-1">
      <span
        className="text-transparent bg-clip-text"
        style={{
          backgroundImage: "linear-gradient(135deg, #a78bfa 0%, #7c3aed 50%, #06b6d4 100%)",
        }}
      >
        {displayed}
      </span>
      <span className="inline-block w-[2px] h-[1em] bg-violet-400 animate-pulse align-middle" />
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#0d0a18]"
    >
      {/* ── LightRays — top-right corner ── */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none z-0">
        <LightRays
          raysOrigin="top-right"
          raysColor="#7c3aed"
          raysSpeed={1.2}
          lightSpread={0.6}
          rayLength={1.4}
          followMouse={true}
          mouseInfluence={0.08}
          noiseAmount={0.05}
          distortion={0.03}
          fadeDistance={0.9}
          saturation={0.9}
          pulsating={true}
        />
      </div>

      {/* ── Background ambient glows ── */}
      {/* Top-left purple blob */}
      <div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(109,40,217,0.18) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      {/* Bottom-right cyan blob */}
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* ── Main content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 py-24">

        {/* ── LEFT: Text ── */}
        <div className="flex flex-col gap-6 lg:max-w-[52%]">

          {/* Greeting badge - removed */}

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(12px)", y: 30 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="text-neutral-500 text-sm tracking-[0.3em] uppercase mb-3 font-medium">
              <TypingEffect />
            </p>
            <h1
              className="text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] tracking-tight text-white whitespace-nowrap"
              style={{ fontFamily: "var(--font-playfair), 'Times New Roman', serif" }}
            >
              Abdullah Siddique
            </h1>
          </motion.div>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base lg:text-lg text-neutral-400 leading-relaxed max-w-lg font-light"
          >
            Computer Science student specializing in{" "}
            <span className="text-neutral-200 font-medium">MERN</span> &{" "}
            <span className="text-neutral-200 font-medium">PERN</span> stack development.
            I architect scalable web applications and craft seamless digital experiences
            with precision and care.
          </motion.p>

          {/* Tech stack pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-2"
          >
            {[
              "React", "Next.js", "Node.js", "Express",
              "MongoDB", "PostgreSQL", "TypeScript", "Tailwind",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium tracking-wide rounded-md border border-white/10 bg-white/5 text-neutral-300"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Divider line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="w-24 h-px origin-left"
            style={{ background: "linear-gradient(90deg, #7c3aed, #06b6d4)" }}
          />
        </div>

        {/* ── RIGHT: Photo ── */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex-shrink-0 flex items-center justify-center"
        >
          {/* Outer decorative ring */}
          <div
            className="absolute w-[380px] h-[380px] lg:w-[440px] lg:h-[440px] rounded-full"
            style={{
              background:
                "conic-gradient(from 180deg, rgba(124,58,237,0.4), rgba(6,182,212,0.3), rgba(124,58,237,0.4))",
              filter: "blur(2px)",
            }}
          />

          {/* Blurred half-circle glow — right side */}
          <div
            className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-[200px] h-[340px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at left, rgba(6,182,212,0.35) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />

          {/* Blurred half-circle glow — left side */}
          <div
            className="absolute left-[-60px] top-1/2 -translate-y-1/2 w-[200px] h-[340px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at right, rgba(124,58,237,0.35) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />

          {/* Inner solid circle background */}
          <div
            className="absolute w-[340px] h-[340px] lg:w-[400px] lg:h-[400px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(109,40,217,0.25) 0%, rgba(13,10,24,0.8) 70%)",
            }}
          />

          {/* Photo */}
          <div className="relative w-[300px] h-[360px] lg:w-[340px] lg:h-[420px] z-10">
            <img
              src="/abdullah.jpeg"
              alt="Abdullah Siddique"
              className="w-full h-full object-cover object-top"
              style={{
                borderRadius: "40% 40% 48% 48%",
                boxShadow:
                  "0 0 0 3px rgba(124,58,237,0.4), 0 0 60px rgba(124,58,237,0.2), 0 0 120px rgba(6,182,212,0.15)",
              }}
            />
            {/* Grain overlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay"
              style={{
                borderRadius: "40% 40% 48% 48%",
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
              }}
            />
          </div>
        </motion.div>

      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #0d0a18)" }}
      />
    </section>
  );
}
