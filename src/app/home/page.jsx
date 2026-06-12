"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  FiArrowRight,
  FiPhone,
  FiChevronUp,
} from "react-icons/fi";
import {
  HiOutlineDocumentText,
  HiOutlineChatBubbleLeftRight,
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineUserGroup,
  HiOutlineGlobeAlt,
  HiOutlineChartBarSquare,
  HiOutlineClipboardDocumentCheck,
  HiOutlineArrowPath,
  HiOutlineSparkles,
  HiOutlineShieldCheck,
  HiOutlineHeart,
  HiOutlinePencilSquare,
  HiOutlineLightBulb,
  HiOutlineRocketLaunch,
  HiOutlineCheckBadge,
  HiOutlineBuildingOffice2,
  HiOutlineComputerDesktop,
  HiOutlineBanknotes,
  HiOutlineBeaker,
  HiOutlineScale,
  HiOutlineWrenchScrewdriver,
} from "react-icons/hi2";

/* ═══════════════════════════════════════════════
   DATA — CAREER SERVICES
   ═══════════════════════════════════════════════ */

const SERVICES = [
  {
    icon: HiOutlineDocumentText,
    title: "ATS Resume Writing",
    desc: "Professionally crafted, keyword-optimized resumes that pass Applicant Tracking Systems and land on recruiters' desks every time.",
    accent: "#012e69",
  },
  {
    icon: HiOutlinePencilSquare,
    title: "Cover Letter Crafting",
    desc: "Compelling, role-specific cover letters that tell your story and make hiring managers want to meet you immediately.",
    accent: "#fbba59",
  },
  {
    icon: HiOutlineGlobeAlt,
    title: "LinkedIn Revamping",
    desc: "Complete LinkedIn profile overhaul headline, summary, experience, skills, and SEO optimization for maximum recruiter visibility.",
    accent: "#012e69",
  },
  {
    icon: HiOutlineChatBubbleLeftRight,
    title: "Interview Coaching",
    desc: "One-on-one mock interviews with industry experts, behavioral question prep, and personalized feedback to build your confidence.",
    accent: "#fbba59",
  },
  {
    icon: HiOutlineBriefcase,
    title: "Job Application Support",
    desc: "End-to-end application management we find, customize, and submit applications to roles that match your career goals.",
    accent: "#012e69",
  },
  {
    icon: HiOutlineAcademicCap,
    title: "Academic Writing",
    desc: "Professional academic documents, research proposals, personal statements, and SOP writing with integrity and originality guaranteed.",
    accent: "#fbba59",
  },
];

const CORE_VALUES = [
  {
    icon: HiOutlineShieldCheck,
    title: "Honesty",
    desc: "Complete transparency in everything we do. No false promises, no inflated claims — just genuine guidance that you can trust to build your career on.",
    color: "#012e69",
  },
  {
    icon: HiOutlineHeart,
    title: "Integrity",
    desc: "We uphold the highest ethical standards. Every document we produce is original, every strategy is authentic, and every interaction is rooted in respect.",
    color: "#fbba59",
  },
  {
    icon: HiOutlineAcademicCap,
    title: "Academic Excellence",
    desc: "Rigorous research-backed writing that meets global academic standards. We treat your personal statements and SOPs with the same precision as scholarly work.",
    color: "#012e69",
  },
  {
    icon: HiOutlineLightBulb,
    title: "Innovation",
    desc: "We stay ahead of hiring trends, ATS algorithms, and recruiter expectations so your application always uses the most current, effective strategies.",
    color: "#fbba59",
  },
];

const STATS = [
  { icon: HiOutlineChartBarSquare, num: "8K+", label: "Careers Transformed", text: "Professionals across 40+ countries who landed their dream roles with our help." },
  { icon: HiOutlineUserGroup, num: "97%", label: "Client Satisfaction", text: "Our clients rate us 5 stars for quality, communication, and results." },
  { icon: HiOutlineClipboardDocumentCheck, num: "3x", label: "More Interviews", text: "Our optimized resumes generate three times more interview callbacks on average." },
  { icon: HiOutlineArrowPath, num: "48hr", label: "Turnaround Time", text: "Fast delivery without compromising quality — most documents ready within 2 days." },
];

const INDUSTRIES = [
  { icon: HiOutlineComputerDesktop, name: "Tech & IT" },
  { icon: HiOutlineBanknotes, name: "Finance" },
  { icon: HiOutlineBeaker, name: "Healthcare" },
  { icon: HiOutlineBuildingOffice2, name: "Consulting" },
  { icon: HiOutlineScale, name: "Legal" },
  { icon: HiOutlineWrenchScrewdriver, name: "Engineering" },
];

/* ═══════════════════════════════════════════════
   ANIMATION VARIANTS
   ═══════════════════════════════════════════════ */

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.1 },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.08 },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ═══════════════════════════════════════════════
   SECTION WRAPPER
   ═══════════════════════════════════════════════ */

function Section({ children, className = "", id }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.section>
  );
}

/* ═══════════════════════════════════════════════
   SECTION HEADER
   ═══════════════════════════════════════════════ */

function SectionHeader({ tag, title, light = false }) {
  return (
    <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: 64 }}>
      <span
        style={{
          display: "inline-block",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: "0.75rem",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.2em",
          color: light ? "#fbba59" : "#e5a540",
          marginBottom: 12,
        }}
      >
        {tag}
      </span>
      <h2
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "clamp(1.8rem, 4vw, 3rem)",
          fontWeight: 700,
          color: light ? "#ffffff" : "#012e69",
          marginBottom: 16,
          lineHeight: 1.2,
        }}
      >
        {title}
      </h2>
      <div
        style={{
          width: 80,
          height: 4,
          margin: "0 auto",
          borderRadius: 4,
          background: "#fbba59",
        }}
      />
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════
   SCROLL TO TOP
   ═══════════════════════════════════════════════ */

function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fn = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            position: "fixed",
            bottom: 112,
            right: 28,
            zIndex: 50,
            width: 48,
            height: 48,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
            cursor: "pointer",
            background: "#012e69",
            color: "#ffffff",
            border: "none",
          }}
          whileHover={{ background: "#fbba59", color: "#012e69", scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll to top"
        >
          <FiChevronUp size={22} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

/* ═══════════════════════════════════════════════
   HOME PAGE (DEFAULT EXPORT)
   ═══════════════════════════════════════════════ */

export default function HomePage() {
  return (
    <main style={{ overflowX: "hidden" }}>
      {/* ── Existing components (untouched) ── */}
      <Navbar />
      <HeroSection />
      <MarqueeSection />

      {/* ── New sections ── */}
      <ServicesSection />
      <CoreValuesSection />
      <StatsSection />
      <IndustriesSection />
      <CTASection />

      {/* ── Existing components (untouched) ── */}
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
      <GridStyles />
    </main>
  );
}

/* ═══════════════════════════════════════════════
   SERVICES
   ═══════════════════════════════════════════════ */

function ServicesSection() {
  return (
    <Section id="services">
      <div style={{ padding: "6rem 0", background: "#fdf8f0", position: "relative" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem", width: "100%" }}>
          <SectionHeader tag="What We Offer" title="Our Premium Services" />

          <motion.div
            variants={staggerContainer}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(1, 1fr)",
              gap: 32,
            }}
            className="sm:!grid-cols-2 lg:!grid-cols-3"
          >
            {SERVICES.map((svc, i) => {
              const Icon = svc.icon;
              const isGold = svc.accent === "#fbba59";
              return (
                <motion.div
                  key={svc.title}
                  variants={fadeUp}
                  custom={i}
                  whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(1,46,105,0.12)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{
                    background: "#ffffff",
                    borderRadius: 16,
                    padding: 32,
                    border: "1px solid rgba(1,46,105,0.08)",
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                  }}
                >
                  {/* Top accent */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 4,
                      background: svc.accent,
                      borderRadius: "16px 16px 0 0",
                    }}
                  />

                  {/* Icon */}
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 12,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 24,
                      background: isGold ? "rgba(251,186,89,0.15)" : "rgba(1,46,105,0.08)",
                      color: svc.accent,
                      transition: "all 0.4s ease",
                    }}
                  >
                    <Icon size={28} />
                  </div>

                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: "#012e69",
                      marginBottom: 12,
                    }}
                  >
                    {svc.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.875rem",
                      color: "rgba(26,26,46,0.65)",
                      lineHeight: 1.7,
                      marginBottom: 20,
                    }}
                  >
                    {svc.desc}
                  </p>
                  <motion.a
                    href="/services"
                    whileHover={{ x: 4 }}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "#012e69",
                      textDecoration: "none",
                    }}
                  >
                    Learn More <FiArrowRight size={16} />
                  </motion.a>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════════
   CORE VALUES
   ═══════════════════════════════════════════════ */

function CoreValuesSection() {
  return (
    <Section id="core-values">
      <div style={{ padding: "6rem 0", background: "#ffffff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem", width: "100%" }}>
          <SectionHeader tag="What We Stand For" title="Our Core Values" />

          <motion.div
            variants={staggerContainer}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(1, 1fr)",
              gap: 32,
            }}
            className="sm:!grid-cols-2 lg:!grid-cols-4"
          >
            {CORE_VALUES.map((val, i) => {
              const Icon = val.icon;
              const isGold = val.color === "#fbba59";
              return (
                <motion.div
                  key={val.title}
                  variants={scaleIn}
                  custom={i}
                  whileHover={{
                    y: -8,
                    boxShadow: "0 20px 40px rgba(1,46,105,0.1)",
                  }}
                  style={{
                    textAlign: "center",
                    padding: 32,
                    borderRadius: 16,
                    border: "1px solid rgba(1,46,105,0.08)",
                    background: "#ffffff",
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.4s ease",
                    cursor: "default",
                  }}
                >
                  {/* Bottom accent line */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "60%",
                      height: 3,
                      background: val.color,
                      borderRadius: "3px 3px 0 0",
                      transition: "width 0.4s ease",
                    }}
                  />

                  <motion.div
                    whileHover={{
                      background: val.color,
                      color: isGold ? "#012e69" : "#ffffff",
                      scale: 1.1,
                    }}
                    style={{
                      width: 72,
                      height: 72,
                      margin: "0 auto 24px",
                      borderRadius: 20,
                      background: isGold ? "rgba(251,186,89,0.12)" : "rgba(1,46,105,0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: val.color,
                      transition: "all 0.4s ease",
                    }}
                  >
                    <Icon size={32} />
                  </motion.div>

                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: "#012e69",
                      marginBottom: 12,
                    }}
                  >
                    {val.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.85rem",
                      color: "rgba(26,26,46,0.55)",
                      lineHeight: 1.7,
                    }}
                  >
                    {val.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════════
   STATS
   ═══════════════════════════════════════════════ */

function StatsSection() {
  return (
    <Section id="results">
      <div
        style={{
          padding: "6rem 0",
          background: "linear-gradient(135deg, #012e69 0%, #1a1a2e 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative */}
        <div style={{ position: "absolute", top: -100, right: -100, width: 350, height: 350, borderRadius: "50%", background: "rgba(251,186,89,0.06)", filter: "blur(80px)" }} />
        <div style={{ position: "absolute", bottom: -100, left: -100, width: 350, height: 350, borderRadius: "50%", background: "rgba(251,186,89,0.06)", filter: "blur(80px)" }} />

        <div style={{ position: "relative", zIndex: 10, maxWidth: 1280, margin: "0 auto", padding: "0 2rem", width: "100%" }}>
          <SectionHeader tag="Our Track Record" title="Results That Speak" light />

          <motion.div
            variants={staggerContainer}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(1, 1fr)",
              gap: 32,
            }}
            className="sm:!grid-cols-2 lg:!grid-cols-4"
          >
            {STATS.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  variants={scaleIn}
                  custom={i}
                  whileHover={{
                    y: -6,
                    borderColor: "rgba(251,186,89,0.4)",
                    background: "rgba(255,255,255,0.08)",
                  }}
                  style={{
                    textAlign: "center",
                    padding: 32,
                    borderRadius: 16,
                    border: "1px solid rgba(255,255,255,0.1)",
                    background: "rgba(255,255,255,0.04)",
                    backdropFilter: "blur(8px)",
                    transition: "all 0.4s ease",
                    cursor: "default",
                  }}
                >
                  <motion.div
                    whileHover={{ background: "#fbba59", color: "#012e69" }}
                    style={{
                      width: 64,
                      height: 64,
                      margin: "0 auto 20px",
                      borderRadius: 16,
                      background: "rgba(251,186,89,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fbba59",
                      transition: "all 0.4s ease",
                    }}
                  >
                    <Icon size={28} />
                  </motion.div>

                  <div
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "2.5rem",
                      fontWeight: 700,
                      color: "#ffffff",
                      fontVariantNumeric: "tabular-nums",
                      marginBottom: 4,
                    }}
                  >
                    {item.num}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: "#fbba59",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      marginBottom: 12,
                    }}
                  >
                    {item.label}
                  </div>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.85rem",
                      color: "rgba(255,255,255,0.5)",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════════
   INDUSTRIES
   ═══════════════════════════════════════════════ */

function IndustriesSection() {
  return (
    <Section id="industries">
      <div style={{ padding: "6rem 0", background: "#fdf8f0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem", width: "100%" }}>
          <SectionHeader tag="Where Our Clients Work" title="Industries We Serve" />

          <motion.div
            variants={staggerContainer}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 24,
            }}
            className="sm:!grid-cols-3 lg:!grid-cols-6"
          >
            {INDUSTRIES.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <motion.div
                  key={ind.name}
                  variants={scaleIn}
                  custom={i}
                  whileHover={{
                    y: -6,
                    borderColor: "#fbba59",
                    boxShadow: "0 12px 24px rgba(1,46,105,0.08)",
                  }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 16,
                    padding: 24,
                    borderRadius: 16,
                    border: "1px solid rgba(1,46,105,0.08)",
                    background: "#ffffff",
                    transition: "all 0.4s ease",
                    cursor: "default",
                  }}
                >
                  <motion.div
                    whileHover={{ background: "#fbba59", color: "#012e69" }}
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 12,
                      background: "rgba(1,46,105,0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#012e69",
                      transition: "all 0.4s ease",
                    }}
                  >
                    <Icon size={26} />
                  </motion.div>
                  <span
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: "#012e69",
                      textAlign: "center",
                    }}
                  >
                    {ind.name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════════
   CTA
   ═══════════════════════════════════════════════ */

function CTASection() {
  return (
    <Section>
      <div style={{ padding: "5rem 0", background: "#ffffff" }}>
        <div style={{ maxWidth: 896, margin: "0 auto", padding: "0 2rem", width: "100%", textAlign: "center" }}>
          <motion.div variants={fadeUp}>
            <HiOutlineRocketLaunch
              size={48}
              style={{ color: "#fbba59", margin: "0 auto 24px" }}
            />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            custom={1}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#012e69",
              marginBottom: 24,
              lineHeight: 1.2,
            }}
          >
            Ready to Land Your{" "}
            <span
              
            >
              Dream Job?
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.1rem",
              color: "rgba(26,26,46,0.65)",
              maxWidth: 560,
              margin: "0 auto 40px",
              lineHeight: 1.7,
            }}
          >
            Get a professionally crafted resume, an optimized LinkedIn profile,
            and expert interview coaching — all tailored to your career goals.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={3}
            style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}
          >
            <motion.a
              href="/contact"
              whileHover={{ y: -3, boxShadow: "0 12px 24px rgba(1,46,105,0.2)" }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 32px",
                borderRadius: 12,
                background: "#012e69",
                color: "#ffffff",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                fontSize: "0.9rem",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
            >
              Get Started <FiArrowRight />
            </motion.a>
            <motion.a
              href="tel:+447883169263"
              whileHover={{
                y: -3,
                background: "#012e69",
                color: "#ffffff",
                borderColor: "#012e69",
              }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 32px",
                borderRadius: 12,
                background: "transparent",
                color: "#012e69",
                border: "2px solid rgba(1,46,105,0.2)",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                fontSize: "0.9rem",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
            >
              <FiPhone /> Call Us Now
            </motion.a>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

function GridStyles() {
  return (
    <style jsx global>{`
      @media (min-width: 640px) {
        .sm\\:!grid-cols-2 { grid-template-columns: repeat(2, 1fr) !important; }
        .sm\\:!grid-cols-3 { grid-template-columns: repeat(3, 1fr) !important; }
      }
      @media (min-width: 1024px) {
        .lg\\:!grid-cols-3 { grid-template-columns: repeat(3, 1fr) !important; }
        .lg\\:!grid-cols-4 { grid-template-columns: repeat(4, 1fr) !important; }
        .lg\\:!grid-cols-6 { grid-template-columns: repeat(6, 1fr) !important; }
      }
    `}</style>
  );
}