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
          className="relative shrink-0 flex items-center justify-center"
          style={{ width: "320px", height: "320px" }}
        >
          {/* Left side — strong violet/blue blur */}
          <div
            className="absolute pointer-events-none"
            style={{
              left: "-70px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "180px",
              height: "320px",
              background: "radial-gradient(ellipse at right, rgba(124,58,237,0.7) 0%, rgba(59,130,246,0.4) 40%, transparent 70%)",
              filter: "blur(35px)",
              zIndex: 0,
            }}
          />

          {/* Right side — softer cyan blur */}
          <div
            className="absolute pointer-events-none"
            style={{
              right: "-70px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "180px",
              height: "320px",
              background: "radial-gradient(ellipse at left, rgba(6,182,212,0.45) 0%, rgba(124,58,237,0.2) 40%, transparent 70%)",
              filter: "blur(35px)",
              zIndex: 0,
            }}
          />

          {/* Thin glowing ring */}
          <div
            className="absolute rounded-full"
            style={{
              width: "310px",
              height: "310px",
              background: "transparent",
              boxShadow: "0 0 0 2px rgba(124,58,237,0.6), 0 0 30px rgba(124,58,237,0.3)",
              zIndex: 2,
            }}
          />

          {/* Photo — perfect circle */}
          <img
            src="/abdullah.jpeg"
            alt="Abdullah Siddique"
            style={{
              width: "300px",
              height: "300px",
              objectFit: "cover",
              objectPosition: "top center",
              borderRadius: "50%",
              position: "relative",
              zIndex: 1,
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
