"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiChevronRight, FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled
            ? "bg-navy/95 backdrop-blur-xl shadow-2xl py-3 border-b border-white/10"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-gold/10 flex items-center justify-center transition-all duration-300 group-hover:bg-gold/20">
                <Image
                  src="/logo.svg"
                  alt="Career Sponsorship"
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl text-white leading-tight">
                  Career <span className="text-gold">Sponsorship</span>
                </span>
                <span className="font-accent text-[10px] text-gold/80 tracking-[0.15em] uppercase">
                  Premium British Services
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`relative font-accent text-base font-semibold tracking-wide transition-all duration-300 py-2 ${
                      isActive
                        ? "text-gold"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute -bottom-0 left-0 right-0 h-0.5 bg-gold"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* CTA Button Desktop */}
            <motion.a
              href="https://wa.me/447883169263"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="hidden lg:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-gold to-gold-dark text-navy font-accent font-bold text-base rounded-full hover:shadow-lg hover:shadow-gold/30 transition-all duration-300"
            >
              <span>Get Started</span>
              <FiChevronRight className="w-4 h-4" />
            </motion.a>

            {/* Hamburger Button - White when transparent, normal when scrolled */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden relative w-11 h-11 rounded-full transition-all duration-300 flex items-center justify-center ${
                mobileOpen 
                  ? "bg-gold text-navy" 
                  : scrolled 
                    ? "bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20" 
                    : "bg-white/10 backdrop-blur-sm hover:bg-white/20"
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <FiX className="w-5 h-5" />
              ) : (
                <FiMenu className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* IMPROVED MOBILE DROPDOWN MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[98] bg-black/50 backdrop-blur-sm lg:hidden"
            />
            
            {/* Dropdown Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20, scaleY: 0.8 }}
              animate={{ opacity: 1, y: 0, scaleY: 1 }}
              exit={{ opacity: 0, y: -20, scaleY: 0.8 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="fixed top-[76px] left-0 right-0 z-[99] lg:hidden origin-top"
            >
              <div className="bg-gradient-to-b from-navy/95 to-navy backdrop-blur-xl border-y border-white/10 shadow-2xl">
                <div className="px-6 py-4">
                  {/* Navigation Links - Clean and spacious */}
                  <div className="flex flex-col gap-1">
                    {navLinks.map((link, i) => {
                      const isActive = pathname === link.href;
                      return (
                        <motion.div
                          key={link.label}
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05, duration: 0.3 }}
                        >
                          <Link
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className={`flex items-center justify-between py-4 px-5 rounded-2xl transition-all duration-300 ${
                              isActive
                                ? "bg-gold/15 text-gold"
                                : "text-white/80 hover:text-white hover:bg-white/5"
                            }`}
                          >
                            <span className={`font-accent text-lg font-semibold ${
                              isActive ? "text-gold" : ""
                            }`}>
                              {link.label}
                            </span>
                            {isActive && (
                              <motion.div 
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="w-2 h-2 rounded-full bg-gold"
                              />
                            )}
                            {!isActive && (
                              <FiChevronRight className="w-4 h-4 text-white/30" />
                            )}
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Divider with gradient */}
                  <div className="my-3 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

                  {/* Mobile CTA Button - Prominent */}
                  <motion.a
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.3 }}
                    href="https://wa.me/447883169263"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-4 mt-2 bg-gradient-to-r from-gold to-gold-dark text-navy font-accent font-bold text-lg rounded-2xl hover:shadow-xl hover:shadow-gold/30 transition-all duration-300"
                  >
                    <span>Get Started Now</span>
                    <FiChevronRight className="w-5 h-5" />
                  </motion.a>

                  {/* Contact Information */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.45, duration: 0.3 }}
                    className="mt-6 pt-5 text-center border-t border-white/10"
                  >
                    <div className="flex flex-col gap-2">
                      <a 
                        href="tel:+447883169263" 
                        className="text-white/40 hover:text-gold text-sm font-accent transition-colors flex items-center justify-center gap-2"
                      >
                        <span></span> +44 7883 169263
                      </a>
                      <a 
                        href="mailto:hello@careersponsorship.com" 
                        className="text-white/40 hover:text-gold text-sm font-accent transition-colors flex items-center justify-center gap-2"
                      >
                        <span></span> hello@careersponsorship.com
                      </a>
                    </div>
                    <p className="text-white/20 text-xs font-accent mt-4">
                      © 2024 Career Sponsorship
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}