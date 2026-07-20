"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
  NavbarButton,
} from "@/components/ui/resizable-navbar";
import { StaggeredMenu } from "@/components/ui/StaggeredMenu";

const navItems = [
  { name: "Home",       link: "#home" },
  { name: "About",      link: "#about" },
  { name: "Skills",     link: "#skills" },
  { name: "Projects",   link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact",    link: "#contact" },
];

const menuItems = navItems.map((item) => ({
  label: item.name,
  ariaLabel: `Go to ${item.name}`,
  link: item.link,
}));

const socialItems = [
  { label: "LinkedIn",  link: "https://linkedin.com" },
  { label: "GitHub",    link: "https://github.com" },
  { label: "Twitter",   link: "https://twitter.com" },
  { label: "WhatsApp",  link: "https://wa.me/" },
];

export default function NavbarDemo() {
  return (
    <>
      {/* ── Desktop navbar (lg+) ── */}
      <div className="hidden lg:block relative w-full">
        <Navbar>
          <NavBody>
            <NavbarLogo />
            <NavItems items={navItems} />
            <NavbarButton variant="primary" href="#contact" className="shrink-0">
              Hire Me
            </NavbarButton>
          </NavBody>
        </Navbar>
      </div>

      {/* ── Mobile navbar (below lg) — StaggeredMenu ── */}
      <div
        className="lg:hidden fixed inset-0 pointer-events-none"
        style={{ zIndex: 50 }}
      >
        <StaggeredMenu
          isFixed={false}
          position="right"
          logoUrl="/logo.png"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          colors={["#0d0a18", "#1a0f2e", "#7c3aed"]}
          accentColor="#7c3aed"
          menuButtonColor="#ffffff"
          openMenuButtonColor="#ffffff"
          changeMenuColorOnOpen={false}
          closeOnClickAway={true}
        />
      </div>
    </>
  );
}
