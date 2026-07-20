"use client";

import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import BorderGlow from "@/components/ui/BorderGlow";

const fullText = "Who Am I";

function TypingHeading() {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(fullText.slice(0, i));
      if (i >= fullText.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <h2
      ref={ref}
      className="text-4xl lg:text-5xl font-black tracking-tight text-white min-h-[1.2em]"
      style={{ fontFamily: "var(--font-playfair), 'Times New Roman', serif" }}
    >
      {displayed}
      {!done && (
        <span className="inline-block w-[3px] h-[0.85em] bg-violet-400 animate-pulse align-middle ml-1" />
      )}
    </h2>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full bg-[#0a0812] py-24 overflow-hidden"
    >
      {/* Subtle background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "600px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(124,58,237,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section label — centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          <div className="h-px w-12 bg-violet-500/50" />
          <span className="text-xs tracking-[0.3em] uppercase text-violet-400 font-medium">
            About
          </span>
          <div className="h-px w-12 bg-violet-500/50" />
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT: Picture — square, fixed size */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative flex justify-center"
          >
            {/* Left blur */}
            <div className="absolute pointer-events-none" style={{ left: "-50px", top: "50%", transform: "translateY(-50%)", width: "130px", height: "110%", background: "radial-gradient(ellipse at right, rgba(124,58,237,0.6) 0%, rgba(59,130,246,0.3) 50%, transparent 70%)", filter: "blur(35px)", zIndex: 0 }} />
            {/* Right blur */}
            <div className="absolute pointer-events-none" style={{ right: "-50px", top: "50%", transform: "translateY(-50%)", width: "130px", height: "110%", background: "radial-gradient(ellipse at left, rgba(6,182,212,0.35) 0%, rgba(124,58,237,0.2) 50%, transparent 70%)", filter: "blur(35px)", zIndex: 0 }} />

            {/* Square image wrapped in BorderGlow */}
            <BorderGlow
              edgeSensitivity={20}
              glowColor="270 70 70"
              backgroundColor="#0a0812"
              borderRadius={12}
              glowRadius={50}
              glowIntensity={1.2}
              coneSpread={30}
              animated={true}
              colors={["#7c3aed", "#a78bfa", "#06b6d4"]}
              fillOpacity={0.3}
            >
              <div
                style={{
                  width: "320px",
                  height: "320px",
                  overflow: "hidden",
                  borderRadius: "11px",
                  flexShrink: 0,
                }}
              >
                <img
                  src="/about.jpeg"
                  alt="Abdullah Siddique"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center 20%",
                    filter: "brightness(0.85) contrast(1.05) saturate(0.8)",
                    display: "block",
                  }}
                />
              </div>
            </BorderGlow>
          </motion.div>

          {/* RIGHT: Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-7"
          >
            {/* Typing heading */}
            <TypingHeading />

            {/* Violet accent line */}
            <div
              className="w-16 h-[3px] rounded-full"
              style={{ background: "linear-gradient(90deg, #7c3aed, #06b6d4)" }}
            />

            {/* Body text */}
            <p className="text-neutral-400 text-base lg:text-lg leading-[1.9] font-light">
              I build modern web applications that combine{" "}
              <span className="text-white font-medium">clean design</span> with{" "}
              <span className="text-white font-medium">powerful functionality</span>.
              As a Full Stack Developer, I specialize in creating responsive frontends,
              scalable backends, and seamless user experiences using{" "}
              <span className="text-violet-400 font-medium">React</span>,{" "}
              <span className="text-violet-400 font-medium">Next.js</span>,{" "}
              <span className="text-violet-400 font-medium">Node.js</span>,{" "}
              <span className="text-violet-400 font-medium">Express</span>,{" "}
              <span className="text-violet-400 font-medium">MongoDB</span>,{" "}
              <span className="text-violet-400 font-medium">PostgreSQL</span>, and
              modern web technologies.
            </p>

            <p className="text-neutral-400 text-base lg:text-lg leading-[1.9] font-light">
              I&apos;m constantly learning, experimenting with{" "}
              <span className="text-white font-medium">AI</span>, and turning
              innovative ideas into reality.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 pt-2">
              {[
                { value: "1+", label: "Year Experience" },
                { value: "10+", label: "Projects Built" },
                { value: "5+", label: "Technologies" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span
                    className="text-3xl font-black text-white"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-xs text-neutral-500 tracking-wide uppercase">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
