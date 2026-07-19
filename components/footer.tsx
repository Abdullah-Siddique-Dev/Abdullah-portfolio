"use client";

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandInstagram,
} from "@tabler/icons-react";

const socialLinks = [
  { icon: IconBrandX, href: "#", label: "X (Twitter)" },
  { icon: IconBrandInstagram, href: "#", label: "Instagram" },
  { icon: IconBrandGithub, href: "#", label: "GitHub" },
  { icon: IconBrandLinkedin, href: "#", label: "LinkedIn" },
];

const footerColumns = [
  {
    title: "Projects",
    links: [
      { label: "Web Apps", href: "#" },
      { label: "Open Source", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Case Studies", href: "#" },
      { label: "Tech Stack", href: "#" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "About", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[#0a0a0a] border-t border-white/10 overflow-hidden">
      {/* Top section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Left: tagline + socials */}
          <div className="flex flex-col gap-6">
            <p className="text-sm text-neutral-400 leading-relaxed max-w-[200px]">
              Abdullah is a full-stack developer building modern and intuitive
              web experiences.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-full border border-white/20 text-neutral-400 hover:text-white hover:border-white/50 transition-colors duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-white">
                  {col.title}
                </span>
                {/* decorative line */}
                <div className="flex-1 h-px bg-white/10" />
              </div>
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

      {/* Big outlined name */}
      <div
        className="relative z-0 select-none pointer-events-none px-4 -mb-4"
        aria-hidden="true"
      >
        <p
          className="text-center font-black uppercase leading-none tracking-tight"
          style={{
            fontSize: "clamp(3.5rem, 14vw, 11rem)",
            color: "transparent",
            WebkitTextStroke: "1px rgba(255,255,255,0.12)",
          }}
        >
          Abdullah
        </p>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-white/10 mt-2">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-neutral-500">
            © {year} Abdullah / All rights reserved
          </p>
          <nav className="flex items-center gap-5">
            {["GitHub", "LinkedIn", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-neutral-500 hover:text-white transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
