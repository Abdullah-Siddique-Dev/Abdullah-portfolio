"use client";

import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import React, { useRef, useState } from "react";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      className={cn("sticky inset-x-0 top-0 z-40 w-full pt-4 pb-2", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible }
            )
          : child
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: "blur(12px)",
        boxShadow: visible
          ? "0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.12)"
          : "0 2px 16px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.08)",
        y: visible ? 8 : 8,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{ minWidth: "0px" }}
      className={cn(
        "relative z-60 mx-auto hidden w-[calc(100%-3rem)] max-w-5xl flex-row items-center justify-between self-start rounded-xl px-5 py-3 lg:flex",
        "bg-[#13111c]/90 border border-white/15",
        visible && "bg-[#13111c]/98",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-1 text-sm font-medium lg:flex",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-4 py-2 text-neutral-400 hover:text-white transition-colors duration-300 tracking-widest text-xs uppercase font-bold"
          key={`link-${idx}`}
          href={item.link}
          style={{
            WebkitTextStroke: "0.5px rgba(255, 255, 255, 0.3)",
            textShadow: "0 0 20px rgba(255, 255, 255, 0.1)",
          }}
        >
          {/* Triangle/cone glow from bottom - no box */}
          {hovered === idx && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute left-1/2 -translate-x-1/2 bottom-0 pointer-events-none"
              style={{
                width: "120px",
                height: "80px",
                background: "radial-gradient(ellipse at center top, rgba(34, 211, 238, 0.6) 0%, rgba(6, 182, 212, 0.3) 30%, transparent 70%)",
                filter: "blur(16px)",
              }}
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(12px)" : "blur(0px)",
        boxShadow: visible
          ? "0 0 0 1px rgba(255,255,255,0.08), 0 8px 32px rgba(0,0,0,0.4)"
          : "none",
        borderRadius: visible ? "16px" : "0px",
        y: visible ? 10 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full flex-col items-center justify-between px-4 py-3 lg:hidden",
        "bg-[#1a1025]/90 border-b border-white/10",
        visible && "bg-[#1a1025]/95",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 35 }}
          className={cn(
            "fixed inset-y-0 left-0 z-50 w-72 flex flex-col items-start justify-start gap-2",
            "bg-[#120d1e] border-r border-white/10 px-6 py-10 shadow-2xl",
            className
          )}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-neutral-400 hover:text-white transition-colors"
          >
            <IconX size={20} />
          </button>

          {/* Nav links with staggered animation */}
          <div className="flex flex-col w-full gap-1 mt-8">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors"
    >
      <span className="text-xs tracking-[0.2em] uppercase font-medium">
        Menu
      </span>
      <motion.div
        animate={{ rotate: isOpen ? 90 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {isOpen ? (
          <IconX className="text-white" size={20} />
        ) : (
          <IconMenu2 className="text-white" size={20} />
        )}
      </motion.div>
    </button>
  );
};

export const NavbarLogo = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center px-1 py-1 shrink-0"
    >
      <img
        src="/logo.png"
        alt="Abdullah Siddique Logo"
        width={65}
        height={65}
        className="object-contain"
      />
    </a>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const baseStyles =
    "px-4 py-2 rounded-lg text-xs font-bold tracking-widest uppercase relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

  const variantStyles = {
    primary:
      "bg-violet-600 text-white hover:bg-violet-500 shadow-lg shadow-violet-900/40",
    secondary:
      "bg-transparent text-neutral-300 hover:text-white border border-white/20 hover:border-white/40",
    dark: "bg-white text-black hover:bg-neutral-200",
    gradient:
      "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
