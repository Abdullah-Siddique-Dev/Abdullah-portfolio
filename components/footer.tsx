"use client";

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

const socialLinks = [
  { icon: IconBrandLinkedin,  href: "#", label: "LinkedIn" },
  { icon: IconBrandGithub,    href: "#", label: "GitHub" },
  { icon: IconBrandX,         href: "#", label: "Twitter" },
  { icon: IconBrandWhatsapp,  href: "#", label: "WhatsApp" },
];

const footerColumns = [
  {
    title: "General",
    links: [
      { label: "Home",       href: "#home" },
      { label: "About Me",   href: "#about" },
      { label: "Projects",   href: "#projects" },
      { label: "Blog",       href: "#blog" },
      { label: "Contact",    href: "#contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Resume",       href: "#" },
      { label: "GitHub",       href: "#" },
      { label: "Certificates", href: "#" },
      { label: "Skills",       href: "#skills" },
      { label: "Experience",   href: "#experience" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "LinkedIn", href: "#" },
      { label: "GitHub",   href: "#" },
      { label: "Email",    href: "#" },
      { label: "Twitter",  href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0a0a0a] border-t border-white/10 overflow-hidden min-h-[380px] md:min-h-[420px]">

      {/* BIG watermark logo — top right corner */}
      <img
        src="/logo.png"
        alt=""
        aria-hidden="true"
        className="absolute select-none pointer-events-none hidden md:block"
        style={{
          width: "500px",
          height: "500px",
          objectFit: "contain",
          opacity: 0.1,
          filter: "brightness(3) contrast(1.5)",
          right: "-80px",
          top: "-60px",
          zIndex: 0,
        }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-10 md:pt-12 pb-16 md:pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 items-start">

          {/* Left: logo + bio + socials */}
          <div className="flex flex-col gap-4 md:gap-5 text-center sm:text-left">
            <img
              src="/logo.png"
              alt="Abdullah Siddique Logo"
              width={110}
              height={110}
              className="object-contain mx-auto sm:mx-0"
            />
            <p className="text-sm text-neutral-400 leading-relaxed max-w-[220px] mx-auto sm:mx-0">
              Computer Science student, MERN Stack Developer, and problem solver
              passionate about building impactful digital solutions.
            </p>
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="relative flex items-center justify-center w-9 h-9 rounded-full border border-white/20 text-neutral-400 hover:text-white transition-all duration-300 group"
                  style={{ background: "rgba(255,255,255,0.04)" }}
                >
                  {/* Violet glow border on hover */}
                  <span
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      boxShadow: "0 0 0 1px rgba(124,58,237,0.8), 0 0 12px 3px rgba(124,58,237,0.4)",
                      borderRadius: "inherit",
                    }}
                  />
                  <Icon size={16} className="relative z-10" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title} className="flex flex-col gap-3 md:gap-4 text-center sm:text-left">
              <span className="text-sm font-semibold text-white">
                {col.title}
              </span>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-neutral-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>

      {/* Big outlined name — half hidden at footer bottom */}
      <div
        className="relative z-0 select-none pointer-events-none overflow-hidden"
        style={{ height: "clamp(2.5rem, 8vw, 8rem)" }}
        aria-hidden="true"
      >
        <p
          className="text-center font-black uppercase leading-none tracking-tight absolute bottom-0 left-0 right-0 translate-y-[35%]"
          style={{
            fontSize: "clamp(2.5rem, 12vw, 11rem)",
            color: "transparent",
            WebkitTextStroke: "1.5px rgba(255,255,255,0.18)",
          }}
        >
          Abdullah
        </p>
      </div>

    </footer>
  );
}
