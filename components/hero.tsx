"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import LightRays from "@/components/ui/LightRays";
import SoftAurora from "@/components/ui/SoftAurora";

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
        className="text-violet-400"
        style={{
          color: "#7c3aed",
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
      {/* ── SoftAurora — centered background ── */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden">
        <div
          style={{
            width: "100%",
            height: "80%",
            position: "relative",
            opacity: 1,
            maskImage: "linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.85) 30%, rgba(0,0,0,0.95) 55%, black 65%)",
            WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.85) 30%, rgba(0,0,0,0.95) 55%, black 65%)",
          }}
        >
          <SoftAurora
            speed={0.4}
            scale={1.5}
            brightness={1.4}
            color1="#7c3aed"
            color2="#7c3aed"
            noiseFrequency={2.0}
            noiseAmplitude={0.8}
            bandHeight={0.5}
            bandSpread={1.0}
            octaveDecay={0.12}
            layerOffset={0.3}
            colorSpeed={0.6}
            enableMouseInteraction={false}
            mouseInfluence={0}
          />
        </div>
      </div>

      {/* ── LightRays — top-right corner ── */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] pointer-events-none z-0">
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
        className="absolute -top-20 -left-20 w-[300px] h-[300px] md:-top-32 md:-left-32 md:w-[500px] md:h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      {/* Bottom-right blob — same color */}
      <div
        className="absolute bottom-0 right-0 w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.10) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* ── Main content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 py-16 sm:py-20 md:py-24">

        {/* ── LEFT: Text ── */}
        <div className="flex flex-col gap-4 md:gap-6 lg:max-w-[52%] text-center lg:text-left w-full">

          {/* Greeting badge - removed */}

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(12px)", y: 30 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="text-neutral-500 text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-2 md:mb-3 font-medium">
              <TypingEffect />
            </p>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] tracking-tight text-white break-words"
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
            className="text-sm sm:text-base lg:text-lg text-neutral-400 leading-relaxed max-w-lg font-light mx-auto lg:mx-0"
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
            className="flex flex-wrap gap-2 justify-center lg:justify-start"
          >
            {[
              "React", "Next.js", "Node.js", "Express",
              "MongoDB", "PostgreSQL", "TypeScript", "Tailwind",
            ].map((tech) => (
              <span
                key={tech}
                className="px-2.5 sm:px-3 py-1 text-xs font-medium tracking-wide rounded-md border border-white/10 bg-white/5 text-neutral-300"
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
            className="w-16 sm:w-24 h-px origin-left mx-auto lg:mx-0"
            style={{ background: "#7c3aed" }}
          />
        </div>

        {/* ── RIGHT: Photo ── */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative shrink-0 flex items-center justify-center w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[320px] md:h-[320px]"
        >
          {/* Left side — violet blur */}
          <div
            className="absolute pointer-events-none hidden sm:block"
            style={{
              left: "-50px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "140px",
              height: "100%",
              background: "radial-gradient(ellipse at right, rgba(124,58,237,0.6) 0%, transparent 70%)",
              filter: "blur(35px)",
              zIndex: 0,
            }}
          />

          {/* Right side — violet blur */}
          <div
            className="absolute pointer-events-none hidden sm:block"
            style={{
              right: "-50px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "140px",
              height: "100%",
              background: "radial-gradient(ellipse at left, rgba(124,58,237,0.4) 0%, transparent 70%)",
              filter: "blur(35px)",
              zIndex: 0,
            }}
          />

          {/* Thin glowing ring */}
          <div
            className="absolute rounded-full w-[210px] h-[210px] sm:w-[250px] sm:h-[250px] md:w-[310px] md:h-[310px]"
            style={{
              background: "transparent",
              boxShadow: "0 0 0 2px rgba(124,58,237,0.6), 0 0 30px rgba(124,58,237,0.3)",
              zIndex: 2,
            }}
          />

          {/* Photo — perfect circle */}
          <img
            src="/abdullah.jpeg"
            alt="Abdullah Siddique"
            className="w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[300px] md:h-[300px] object-cover rounded-full relative z-[1]"
            style={{
              objectPosition: "top center",
            }}
          />
        </motion.div>

      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #0d0a18)" }}
      />
    </section>
  );
}
