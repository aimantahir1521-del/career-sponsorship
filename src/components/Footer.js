"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiArrowUp,
  FiChevronRight,
} from "react-icons/fi";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";

/* ── DATA ── */

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact Us", href: "/contact" },
];

const serviceLinks = [
  "ATS Resume Writing",
  "Cover Letter Crafting",
  "LinkedIn Revamping",
  "Interview Preparation",
  "Job Applications",
  "Professional References",
  "Internship Certificates",
  "Career Counselling",
];

const socialLinks = [
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaXTwitter, href: "#", label: "Twitter" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
];

const contactItems = [
  {
    icon: FiMapPin,
    content: (
      <>
        Office 263, 85 Dunstall Hill,
        <br />
        Wolverhampton, WV6 0SR,
        <br />
        United Kingdom
      </>
    ),
    href: null,
  },
  {
    icon: FiPhone,
    content: "+44 7883 169263",
    href: "tel:+447883169263",
  },
  {
    icon: FiMail,
    content: "info@careersponsorship.uk",
    href: "mailto:info@careersponsorship.uk",
  },
];

/* ── COLORS ── */

const C = {
  navy: "#012e69",
  navyDeep: "#001a3d",
  navyMid: "#38659a",
  gold: "#fbba59",
  goldDark: "#e5a540",
  white: "#ffffff",
};

/* ── ANIMATION VARIANTS ── */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.1 },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const linkHover = {
  x: 4,
  color: C.gold,
  transition: { duration: 0.2 },
};

/* ── STYLES ── */

const sectionHeading = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontWeight: 700,
  fontSize: "1rem",
  color: C.white,
  marginBottom: 20,
  position: "relative",
  display: "inline-block",
  paddingBottom: 10,
};

const headingBar = {
  position: "absolute",
  bottom: 0,
  left: 0,
  width: 32,
  height: 2,
  background: C.gold,
  borderRadius: 4,
};

const linkStyle = {
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.85rem",
  color: "rgba(255,255,255,0.45)",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  gap: 8,
  transition: "color 0.3s ease",
  cursor: "pointer",
};

const iconBox = {
  width: 36,
  height: 36,
  borderRadius: 8,
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  transition: "all 0.3s ease",
};

/* ── COMPONENT ── */

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      ref={ref}
      style={{
        position: "relative",
        background: `linear-gradient(135deg, ${C.navy} 0%, ${C.navy} 60%, ${C.navyDeep} 100%)`,
        marginTop: 0,
        overflow: "hidden",
      }}
    >
      {/* Top gold line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: 3,
          background: `linear-gradient(90deg, ${C.gold}, ${C.gold}80, transparent)`,
        }}
      />

      {/* Decorative blobs */}
      <div
        style={{
          position: "absolute",
          top: 100,
          right: -60,
          width: 350,
          height: 350,
          borderRadius: "50%",
          background: `${C.gold}08`,
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: -80,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: `${C.navyMid}12`,
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
      />

      {/* Main content */}
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={stagger}
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "3rem 2rem 2rem",
          position: "relative",
          zIndex: 10,
          width: "100%",
        }}
      >
        {/* 4‑column grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 1fr)",
            gap: "2.5rem",
            marginBottom: "2.5rem",
          }}
          className="sm:!grid-cols-2 lg:!grid-cols-4"
        >
          {/* ─── COL 1: Brand ─── */}
          <motion.div variants={fadeUp} custom={0}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 12,
                  overflow: "hidden",
                  background: "rgba(255,255,255,0.04)",
                  border: `1px solid ${C.gold}30`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
                }}
              >
                <Image
                  src="/logo.svg"
                  alt="Career Sponsorship"
                  width={50}
                  height={50}
                  style={{ objectFit: "contain", padding: 6 }}
                />
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.2rem",
                    color: C.white,
                    lineHeight: 1.2,
                  }}
                >
                  Career{" "}
                  <span style={{ color: C.gold }}>Sponsorship</span>
                </p>
                <p
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "0.6rem",
                    color: `${C.gold}CC`,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                  }}
                >
                  Premium British Services
                </p>
              </div>
            </div>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.85rem",
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.7,
                marginBottom: 20,
              }}
            >
              A premium British career services company dedicated to transforming
              your professional identity and landing you the opportunities you
              deserve.
            </p>

            {/* Socials */}
            <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{
                      background: C.gold,
                      color: C.navy,
                      borderColor: C.gold,
                      scale: 1.1,
                    }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "rgba(255,255,255,0.35)",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <Icon size={14} />
                  </motion.a>
                );
              })}
            </div>

            {/* Quote card */}
            <div
              style={{
                background: `linear-gradient(90deg, ${C.gold}15, transparent)`,
                borderLeft: `2px solid ${C.gold}`,
                borderRadius: "0 12px 12px 0",
                padding: "14px 16px",
              }}
            >
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.75rem",
                  fontStyle: "italic",
                  color: `${C.gold}AA`,
                  lineHeight: 1.6,
                }}
              >
                &ldquo;Your skills are not the problem! your presentation is.&rdquo;
              </p>
            </div>
          </motion.div>

          {/* ─── COL 2: Quick Links ─── */}
          <motion.div variants={fadeUp} custom={1}>
            <h4 style={sectionHeading}>
              Quick Links
              <span style={headingBar} />
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} style={linkStyle}>
                    <FiChevronRight size={12} style={{ opacity: 0.4 }} />
                    <motion.span whileHover={linkHover}>
                      {link.label}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ─── COL 3: Services ─── */}
          <motion.div variants={fadeUp} custom={2}>
            <h4 style={sectionHeading}>
              Our Services
              <span style={headingBar} />
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link href="/services" style={linkStyle}>
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: `${C.gold}70`,
                        flexShrink: 0,
                        transition: "all 0.3s ease",
                      }}
                    />
                    <motion.span whileHover={linkHover}>
                      {service}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ─── COL 4: Contact ─── */}
          <motion.div variants={fadeUp} custom={3}>
            <h4 style={sectionHeading}>
              Get in Touch
              <span style={headingBar} />
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {contactItems.map((item, i) => {
                const Icon = item.icon;
                const inner = (
                  <motion.div
                    key={i}
                    whileHover={{ x: 4 }}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      cursor: item.href ? "pointer" : "default",
                    }}
                  >
                    <div style={iconBox}>
                      <Icon size={16} style={{ color: C.gold }} />
                    </div>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.85rem",
                        color: "rgba(255,255,255,0.5)",
                        lineHeight: 1.6,
                        transition: "color 0.3s ease",
                        wordBreak: "break-all",
                      }}
                    >
                      {item.content}
                    </p>
                  </motion.div>
                );

                return item.href ? (
                  <a key={i} href={item.href} style={{ textDecoration: "none" }}>
                    {inner}
                  </a>
                ) : (
                  <div key={i}>{inner}</div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* ─── Newsletter ─── */}
        <motion.div
          variants={fadeUp}
          custom={4}
          style={{
            padding: "24px 0",
            marginBottom: 24,
            borderTop: "1px solid rgba(255,255,255,0.08)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
              alignItems: "center",
              justifyContent: "space-between",
            }}
            className="md:!flex-row"
          >
            <div>
              <h4
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  color: C.white,
                  marginBottom: 4,
                }}
              >
                Subscribe to Our Newsletter
              </h4>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.75rem",
                  color: "rgba(255,255,255,0.35)",
                }}
              >
                Get the latest career tips and exclusive offers
              </p>
            </div>
            <div style={{ display: "flex", width: "100%", maxWidth: 340 }}>
              <input
                type="email"
                placeholder="Your email address"
                style={{
                  flex: 1,
                  padding: "10px 16px",
                  borderRadius: "8px 0 0 8px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRight: "none",
                  color: C.white,
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.85rem",
                  outline: "none",
                  transition: "border-color 0.3s ease",
                }}
                onFocus={(e) => (e.target.style.borderColor = `${C.gold}70`)}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
              />
              <motion.button
                whileHover={{ background: C.goldDark, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  padding: "10px 24px",
                  borderRadius: "0 8px 8px 0",
                  background: C.gold,
                  color: C.navy,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  whiteSpace: "nowrap",
                }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* ─── Bottom bar - Removed Privacy, Terms, Refund links ─── */}
        <motion.div
          variants={fadeUp}
          custom={5}
          style={{
            paddingTop: 20,
            display: "flex",
            flexDirection: "column",
            gap: 16,
            alignItems: "center",
            justifyContent: "space-between",
          }}
          className="md:!flex-row"
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.7rem",
              color: "rgba(255,255,255,0.25)",
              textAlign: "center",
            }}
          >
            © {new Date().getFullYear()} Career Sponsorship. All rights reserved. Registered in England & Wales.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{
              background: `${C.gold}30`,
              y: -2,
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 16px",
              borderRadius: 8,
              background: "rgba(255,255,255,0.04)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            aria-label="Scroll to top"
          >
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
              }}
            >
              Back to top
            </span>
            <FiArrowUp size={14} style={{ color: "rgba(255,255,255,0.4)" }} />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* ── Responsive grid helper (only CSS needed) ── */}
      <style jsx>{`
        @media (min-width: 640px) {
          .sm\\:!grid-cols-2 { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (min-width: 1024px) {
          .lg\\:!grid-cols-4 { grid-template-columns: repeat(4, 1fr) !important; }
        }
        @media (min-width: 768px) {
          .md\\:!flex-row { flex-direction: row !important; }
        }
      `}</style>
    </footer>
  );
}