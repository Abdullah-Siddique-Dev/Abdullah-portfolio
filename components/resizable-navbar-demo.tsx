"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { motion } from "motion/react";
import { useState } from "react";

const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export default function NavbarDemo() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <NavbarButton variant="primary" href="#contact" className="shrink-0">
            Hire Me
          </NavbarButton>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <motion.a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: idx * 0.07, type: "spring", stiffness: 300, damping: 30 }}
                whileHover={{ scale: 1.02 }}
                className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-neutral-400 hover:text-white transition-colors group relative"
              >
                {/* Soft glow on hover - no box */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 bottom-0 pointer-events-none"
                  style={{
                    width: "100px",
                    height: "60px",
                    background: "radial-gradient(ellipse at left center, rgba(34, 211, 238, 0.4) 0%, rgba(6, 182, 212, 0.2) 40%, transparent 70%)",
                    filter: "blur(20px)",
                  }}
                />
                
                {/* Animated accent line */}
                <motion.span className="w-0 h-px bg-cyan-400 group-hover:w-4 transition-all duration-300 relative z-10" />
                <span className="text-sm tracking-widest uppercase font-medium relative z-10">
                  {item.name}
                </span>
              </motion.a>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Overlay when mobile menu open */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
        />
      )}
    </div>
  );
}
