"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  FiArrowRight,
  FiCheckCircle,
  FiTrendingUp,
  FiBriefcase,
  FiAward,
  FiStar,
  FiZap,
  FiTarget,
  FiUsers,
  FiClock,
  FiHeart,
  FiShield,
  FiLayers,
  FiCpu,
  FiHeadphones,
  FiSmile,
  FiSun,
  FiAnchor,
  FiCompass,
  FiThumbsUp,
  FiGlobe,
  FiX,
  FiBookOpen,
  FiMail,
  FiLinkedin,
  FiVideo,
  FiCalendar,
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
  HiOutlineScale,
  HiOutlineWrenchScrewdriver,
  HiOutlineClock,
} from "react-icons/hi2";

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

function SectionHeader({ tag, title, light = false, centered = true }) {
  return (
    <motion.div
      variants={fadeUp}
      style={{
        textAlign: centered ? "center" : "left",
        marginBottom: 48,
      }}
    >
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
          fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
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
          width: centered ? 80 : 60,
          height: 4,
          margin: centered ? "0 auto" : 0,
          borderRadius: 4,
          background: "#fbba59",
        }}
      />
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════
   SERVICES PAGE MAIN COMPONENT
   ═══════════════════════════════════════════════ */

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <main style={{ overflowX: "hidden" }}>
      <Navbar />

      {/* Hero Section with teaching.jpg */}
      <ServicesHeroSection />

      {/* Service Cards Grid - 8 Services */}
      <ServicesGridSection setSelectedService={setSelectedService} />

      {/* Service Modal Dialog */}
      <ServiceModal selectedService={selectedService} setSelectedService={setSelectedService} />

      {/* What Makes Us Different */}
      <WhyChooseUsSection />

      {/* Process Section */}
      <ProcessSection />

      {/* Testimonials / Success Stories */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Call to Action */}
      <ServicesCTASection />

      <Footer />
      <WhatsAppButton />
      <GridStyles />
    </main>
  );
}

/* ═══════════════════════════════════════════════
   HERO SECTION WITH TEACHING IMAGE
   ═══════════════════════════════════════════════ */

function ServicesHeroSection() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "65vh",
        display: "flex",
        alignItems: "center",
        background: "#012e69",
        overflow: "hidden",
      }}
    >
      {/* Background Image with Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <Image
          src="/teaching.jpg"
          alt="Career Guidance and Teaching"
          fill
          style={{ objectFit: "cover", opacity: 0.35 }}
          priority
        />
      </div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 1280,
          margin: "0 auto",
          padding: "6rem 2rem",
          width: "100%",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span
            style={{
              display: "inline-block",
              background: "rgba(251,186,89,0.15)",
              backdropFilter: "blur(4px)",
              padding: "6px 16px",
              borderRadius: 40,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "#fbba59",
              marginBottom: 24,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Our Services
          </span>
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(2rem, 5vw, 4rem)",
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: 24,
              lineHeight: 1.2,
              maxWidth: 800,
            }}
          >
            Career Solutions That{" "}
            <span style={{ color: "#fbba59" }}>Put You First</span>
          </h1>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              color: "rgba(255,255,255,0.85)",
              maxWidth: 600,
              lineHeight: 1.6,
            }}
          >
            From crafting the perfect resume to landing your dream role — we
            provide end-to-end support tailored to your unique journey.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   SERVICE CARDS DATA - 8 SERVICES
   ═══════════════════════════════════════════════ */

const SERVICES_DATA = [
  {
    id: 1,
    icon: HiOutlineDocumentText,
    title: "ATS Resume Writing",
    tag: "Resume Optimization",
    shortDesc: "Keyword-optimized resumes that pass automated screening systems.",
    fullDesc: {
      overview: "Our ATS Resume Writing service creates professionally crafted, keyword-optimized resumes that pass Applicant Tracking Systems and land on recruiters' desks every time.",
      benefits: [
        "Industry-specific keyword optimization",
        "Clean, ATS-friendly formatting",
        "Quantifiable achievement highlighting",
        "Professional summary that grabs attention",
        "Unlimited revisions until satisfaction"
      ],
      process: "We start with a deep-dive consultation about your experience and target roles. Our expert writers then craft a resume optimized for both ATS algorithms and human recruiters.",
      outcome: "Get 3x more interview callbacks with a resume that stands out in any application system."
    },
    color: "#012e69",
  },
  {
    id: 2,
    icon: HiOutlinePencilSquare,
    title: "Cover Letter Crafting",
    tag: "Personalized Writing",
    shortDesc: "Compelling cover letters that tell your unique story.",
    fullDesc: {
      overview: "Custom cover letters that complement your resume and make hiring managers want to meet you immediately.",
      benefits: [
        "Tailored to each specific role",
        "Showcases your unique value proposition",
        "Professional tone with personality",
        "Addresses gaps or career changes effectively",
        "Includes call-to-action for interviews"
      ],
      process: "We analyze the job description and your background to craft a narrative that connects your skills to the company's needs.",
      outcome: "Stand out from other applicants with a cover letter that gets read and remembered."
    },
    color: "#fbba59",
  },
  {
    id: 3,
    icon: HiOutlineGlobeAlt,
    title: "LinkedIn Revamping",
    tag: "Profile Optimization",
    shortDesc: "Complete LinkedIn makeover for maximum recruiter visibility.",
    fullDesc: {
      overview: "Transform your LinkedIn profile into a recruiter magnet with SEO optimization, professional branding, and strategic content.",
      benefits: [
        "Keyword-optimized headline and summary",
        "Professional experience storytelling",
        "Skills endorsement strategy",
        "Profile photo recommendations",
        "Increased profile views and connection requests"
      ],
      process: "We audit your current profile, conduct keyword research for your industry, and completely rewrite every section for maximum impact.",
      outcome: "Become visible to recruiters searching for candidates like you and increase inbound opportunities."
    },
    color: "#012e69",
  },
  {
    id: 4,
    icon: HiOutlineChatBubbleLeftRight,
    title: "Interview Coaching",
    tag: "Mock Interviews",
    shortDesc: "One-on-one coaching to build confidence and ace interviews.",
    fullDesc: {
      overview: "Personalized interview preparation with industry experts who provide real-time feedback and proven strategies.",
      benefits: [
        "Mock interviews with expert feedback",
        "Behavioral question mastery (STAR method)",
        "Salary negotiation techniques",
        "Nervousness management strategies",
        "Industry-specific question banks"
      ],
      process: "We simulate real interview conditions, then provide detailed feedback on your answers, body language, and overall presence.",
      outcome: "Walk into any interview with confidence and a clear strategy to impress hiring managers."
    },
    color: "#fbba59",
  },
  {
    id: 5,
    icon: HiOutlineBriefcase,
    title: "Job Application Support",
    tag: "Application Management",
    shortDesc: "End-to-end job search assistance handled for you.",
    fullDesc: {
      overview: "We take the stress out of job searching by finding, tailoring, and submitting applications on your behalf.",
      benefits: [
        "Daily curated job matches",
        "Customized applications for each role",
        "Application tracking dashboard",
        "Follow-up email templates",
        "Time-saving automation"
      ],
      process: "We understand your preferences, then actively search and apply to roles that match your criteria while you focus on preparing.",
      outcome: "Apply to 5x more quality jobs without spending hours on applications each day."
    },
    color: "#012e69",
  },
  {
    id: 6,
    icon: HiOutlineAcademicCap,
    title: "Academic Writing",
    tag: "SOP & Personal Statements",
    shortDesc: "Professional academic documents with originality guaranteed.",
    fullDesc: {
      overview: "Expertly crafted Statements of Purpose, personal statements, research proposals, and other academic documents that showcase your potential.",
      benefits: [
        "100% original, plagiarism-free content",
        "University and program-specific tailoring",
        "Compelling narrative of your journey",
        "Research proposal development",
        "Scholarship application essays"
      ],
      process: "We collaborate with you to understand your academic background, research interests, and career aspirations to tell your authentic story.",
      outcome: "Submit application documents that admissions committees remember and choose."
    },
    color: "#fbba59",
  },
  {
    id: 7,
    icon: HiOutlineUserGroup,
    title: "Career Sponsorship",
    tag: "Financial Support",
    shortDesc: "Sponsored career services for deserving students.",
    fullDesc: {
      overview: "Our Career Sponsorship program provides free or reduced-cost services to talented students facing financial barriers due to inflation and economic challenges.",
      benefits: [
        "Complete career guidance at no cost",
        "Resume and LinkedIn optimization",
        "Interview preparation",
        "Job placement support",
        "Mentorship from industry professionals"
      ],
      process: "Apply through our sponsorship form. Selected candidates receive full access to our services based on need and potential.",
      outcome: "Launch your career regardless of your financial situation with professional support behind you."
    },
    color: "#012e69",
  },
  {
    id: 8,
    icon: HiOutlineRocketLaunch,
    title: "Elite Career Coaching",
    tag: "Premium Support",
    shortDesc: "Comprehensive 1-on-1 coaching until you land your dream job.",
    fullDesc: {
      overview: "Our most comprehensive service — ongoing personalized coaching that doesn't stop until you've accepted your dream offer.",
      benefits: [
        "Unlimited coaching sessions",
        "Direct HR and company referrals",
        "Priority daily job applications",
        "Salary negotiation support",
        "Post-placement check-ins"
      ],
      process: "You get a dedicated career coach who works with you through every step — from strategy to offer acceptance.",
      outcome: "Land your ideal role faster with expert guidance every step of the way, with support continuing until you succeed."
    },
    color: "#fbba59",
  },
];

/* ═══════════════════════════════════════════════
   SERVICES GRID SECTION
   ═══════════════════════════════════════════════ */

function ServicesGridSection({ setSelectedService }) {
  return (
    <Section id="services">
      <div style={{ padding: "6rem 0", background: "#fdf8f0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem", width: "100%" }}>
          <SectionHeader
            tag="What We Offer"
            title="Our Premium Services"
          />
          <p
            style={{
              textAlign: "center",
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              color: "rgba(26,26,46,0.65)",
              maxWidth: 600,
              margin: "0 auto 48px",
              lineHeight: 1.6,
            }}
          >
            Click on any service card to learn more about how we can help you
            achieve your career goals.
          </p>

          <motion.div
            variants={staggerContainer}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(1, 1fr)",
              gap: 32,
            }}
            className="sm:!grid-cols-2 lg:!grid-cols-4"
          >
            {SERVICES_DATA.map((service, i) => {
              const Icon = service.icon;
              const isGold = service.color === "#fbba59";
              return (
                <motion.div
                  key={service.id}
                  variants={scaleIn}
                  custom={i}
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(1,46,105,0.12)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  onClick={() => setSelectedService(service)}
                  style={{
                    background: "#ffffff",
                    borderRadius: 20,
                    padding: 28,
                    border: `1px solid ${isGold ? "rgba(251,186,89,0.3)" : "rgba(1,46,105,0.08)"}`,
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.3s ease",
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
                      background: service.color,
                    }}
                  />

                  {/* Icon */}
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 14,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 20,
                      background: isGold ? "rgba(251,186,89,0.12)" : "rgba(1,46,105,0.08)",
                      color: service.color,
                    }}
                  >
                    <Icon size={28} />
                  </div>

                  {/* Tag */}
                  <span
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "0.65rem",
                      fontWeight: 600,
                      color: isGold ? "#fbba59" : "#012e69",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      background: isGold ? "rgba(251,186,89,0.1)" : "rgba(1,46,105,0.06)",
                      padding: "4px 10px",
                      borderRadius: 20,
                      display: "inline-block",
                      marginBottom: 12,
                    }}
                  >
                    {service.tag}
                  </span>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: "#012e69",
                      marginBottom: 12,
                      lineHeight: 1.3,
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.85rem",
                      color: "rgba(26,26,46,0.6)",
                      lineHeight: 1.6,
                      marginBottom: 20,
                    }}
                  >
                    {service.shortDesc}
                  </p>

                  {/* Learn More Link */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: service.color,
                    }}
                  >
                    Click to learn more <FiArrowRight size={14} />
                  </div>
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
   SERVICE MODAL DIALOG
   ═══════════════════════════════════════════════ */

function ServiceModal({ selectedService, setSelectedService }) {
  if (!selectedService) return null;

  const Icon = selectedService.icon;
  const isGold = selectedService.color === "#fbba59";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setSelectedService(null)}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0,0,0,0.8)",
          backdropFilter: "blur(8px)",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          overflowY: "auto",
        }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 30 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            maxWidth: 800,
            width: "100%",
            maxHeight: "85vh",
            overflowY: "auto",
            background: "#ffffff",
            borderRadius: 32,
            position: "relative",
          }}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedService(null)}
            style={{
              position: "sticky",
              top: 20,
              right: 20,
              float: "right",
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "rgba(0,0,0,0.05)",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              margin: "20px 20px 0 0",
              zIndex: 10,
            }}
            whileHover={{ background: "rgba(0,0,0,0.1)" }}
          >
            <FiX size={20} />
          </button>

          <div style={{ padding: "0 32px 40px 32px" }}>
            {/* Icon and Title */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
                marginBottom: 24,
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: 20,
                  background: isGold ? "rgba(251,186,89,0.12)" : "rgba(1,46,105,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: selectedService.color,
                }}
              >
                <Icon size={36} />
              </div>
              <div>
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    color: isGold ? "#fbba59" : "#012e69",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    background: isGold ? "rgba(251,186,89,0.1)" : "rgba(1,46,105,0.06)",
                    padding: "4px 12px",
                    borderRadius: 20,
                    display: "inline-block",
                    marginBottom: 8,
                  }}
                >
                  {selectedService.tag}
                </span>
                <h2
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "clamp(1.5rem, 4vw, 2rem)",
                    fontWeight: 700,
                    color: "#012e69",
                    margin: 0,
                  }}
                >
                  {selectedService.title}
                </h2>
              </div>
            </div>

            {/* Overview */}
            <div style={{ marginBottom: 32 }}>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  color: "#012e69",
                  marginBottom: 12,
                }}
              >
                Overview
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.95rem",
                  color: "rgba(26,26,46,0.7)",
                  lineHeight: 1.7,
                }}
              >
                {selectedService.fullDesc.overview}
              </p>
            </div>

            {/* Benefits */}
            <div style={{ marginBottom: 32 }}>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  color: "#012e69",
                  marginBottom: 16,
                }}
              >
                Key Benefits
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(1, 1fr)",
                  gap: 12,
                }}
                className="sm:!grid-cols-2"
              >
                {selectedService.fullDesc.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <FiCheckCircle size={16} color={selectedService.color} />
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.85rem",
                        color: "rgba(26,26,46,0.7)",
                      }}
                    >
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div style={{ marginBottom: 32 }}>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  color: "#012e69",
                  marginBottom: 12,
                }}
              >
                Our Process
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.95rem",
                  color: "rgba(26,26,46,0.7)",
                  lineHeight: 1.7,
                }}
              >
                {selectedService.fullDesc.process}
              </p>
            </div>

            {/* Outcome */}
            <div
              style={{
                background: isGold ? "rgba(251,186,89,0.08)" : "rgba(1,46,105,0.04)",
                padding: 20,
                borderRadius: 16,
                marginBottom: 32,
                borderLeft: `4px solid ${selectedService.color}`,
              }}
            >
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "#012e69",
                  marginBottom: 8,
                }}
              >
                What You'll Achieve
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.9rem",
                  color: "rgba(26,26,46,0.7)",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {selectedService.fullDesc.outcome}
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 16,
                justifyContent: "flex-start",
              }}
            >
              <motion.a
                href="/contact"
                whileHover={{ y: -2, boxShadow: "0 8px 20px rgba(1,46,105,0.15)" }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "12px 28px",
                  borderRadius: 40,
                  background: selectedService.color,
                  color: isGold ? "#012e69" : "#ffffff",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
              >
                Get This Service <FiArrowRight size={14} />
              </motion.a>
              <motion.a
                href="/about#mission"
                whileHover={{ y: -2 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "12px 28px",
                  borderRadius: 40,
                  background: "transparent",
                  color: "#012e69",
                  border: `2px solid ${selectedService.color}`,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
              >
                Learn About Sponsorship <FiHeart size={14} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ═══════════════════════════════════════════════
   WHY CHOOSE US
   ═══════════════════════════════════════════════ */

const UNIQUE_FEATURES = [
  {
    icon: HiOutlineShieldCheck,
    title: "No False Promises",
    desc: "We believe in honest, transparent career guidance. Every strategy we recommend is ethical and achievable.",
    color: "#012e69",
  },
  {
    icon: HiOutlineUserGroup,
    title: "Dedicated Support",
    desc: "You're never alone. Our team provides ongoing support and answers your questions within 24 hours.",
    color: "#fbba59",
  },
  {
    icon: HiOutlineSparkles,
    title: "ATS-Optimized Documents",
    desc: "All resumes and cover letters are crafted with the latest ATS algorithms to maximize interview calls.",
    color: "#012e69",
  },
  {
    icon: HiOutlineClock,
    title: "Fast Turnaround",
    desc: "Most documents delivered within 48 hours without compromising on quality or attention to detail.",
    color: "#fbba59",
  },
  {
    icon: HiOutlineGlobeAlt,
    title: "Global Reach",
    desc: "We work with clients across 40+ countries, understanding diverse markets and visa requirements.",
    color: "#012e69",
  },
  {
    icon: HiOutlineHeart,
    title: "Sponsorship Program",
    desc: "Financial limitations shouldn't stop talent. Our sponsorship program helps deserving students.",
    color: "#fbba59",
  },
];

function WhyChooseUsSection() {
  return (
    <Section id="why-us">
      <div style={{ padding: "6rem 0", background: "#ffffff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem", width: "100%" }}>
          <SectionHeader tag="Why Trust Us" title="What Makes Us Different" />

          <motion.div
            variants={staggerContainer}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(1, 1fr)",
              gap: 32,
            }}
            className="sm:!grid-cols-2 lg:!grid-cols-3"
          >
            {UNIQUE_FEATURES.map((feature, i) => {
              const Icon = feature.icon;
              const isGold = feature.color === "#fbba59";
              return (
                <motion.div
                  key={feature.title}
                  variants={scaleIn}
                  custom={i}
                  whileHover={{ y: -6 }}
                  style={{
                    padding: 28,
                    borderRadius: 20,
                    background: "#fdf8f0",
                    border: "1px solid rgba(1,46,105,0.06)",
                  }}
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 16,
                      background: isGold ? "rgba(251,186,89,0.12)" : "rgba(1,46,105,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 20,
                      color: feature.color,
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
                    {feature.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.85rem",
                      color: "rgba(26,26,46,0.65)",
                      lineHeight: 1.6,
                    }}
                  >
                    {feature.desc}
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
   PROCESS SECTION
   ═══════════════════════════════════════════════ */

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery Call",
    desc: "We learn about your goals, experience, and dream roles through a 30-minute consultation.",
    icon: FiHeadphones,
  },
  {
    step: "02",
    title: "Strategy & Planning",
    desc: "We create a personalized roadmap with clear milestones and timeline for your job search.",
    icon: FiTarget,
  },
  {
    step: "03",
    title: "Document Creation",
    desc: "ATS-optimized resume, cover letter, and LinkedIn profile tailored to your target roles.",
    icon: HiOutlineDocumentText,
  },
  {
    step: "04",
    title: "Active Job Search",
    desc: "We find, match, and apply to relevant opportunities on your behalf.",
    icon: HiOutlineBriefcase,
  },
  {
    step: "05",
    title: "Interview Preparation",
    desc: "Mock sessions, confidence building, and insider techniques to ace every interview.",
    icon: HiOutlineChatBubbleLeftRight,
  },
  {
    step: "06",
    title: "Offer & Onboarding",
    desc: "Negotiation support and smooth transition into your new role.",
    icon: HiOutlineRocketLaunch,
  },
];

function ProcessSection() {
  return (
    <Section id="process">
      <div style={{ padding: "6rem 0", background: "#fdf8f0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem", width: "100%" }}>
          <SectionHeader tag="How It Works" title="Your Journey With Us" />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(1, 1fr)",
              gap: 24,
            }}
            className="sm:!grid-cols-2 lg:!grid-cols-3"
          >
            {PROCESS_STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  variants={fadeUp}
                  custom={i}
                  whileHover={{ y: -4 }}
                  style={{
                    display: "flex",
                    gap: 20,
                    alignItems: "flex-start",
                    padding: 24,
                    background: "#ffffff",
                    borderRadius: 20,
                    border: "1px solid rgba(1,46,105,0.06)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "2rem",
                      fontWeight: 700,
                      color: "#fbba59",
                      opacity: 0.5,
                      minWidth: 50,
                    }}
                  >
                    {step.step}
                  </div>
                  <div>
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 12,
                        background: "rgba(1,46,105,0.06)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 12,
                        color: "#012e69",
                      }}
                    >
                      <Icon size={20} />
                    </div>
                    <h3
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "#012e69",
                        marginBottom: 8,
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.85rem",
                        color: "rgba(26,26,46,0.6)",
                        lineHeight: 1.5,
                      }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════════
   TESTIMONIALS SECTION
   ═══════════════════════════════════════════════ */

const TESTIMONIALS = [
  {
    name: "Emily Rodriguez",
    role: "Marketing Manager",
    text: "The resume writing service transformed my job search. Within 3 weeks, I had 5 interview requests. The team really understood my industry!",
  },
  {
    name: "David Kim",
    role: "Software Engineer",
    text: "As an international student, I was struggling with applications. Their LinkedIn revamping service got me noticed by top recruiters. Landed my dream job!",
  },
  {
    name: "Priya Sharma",
    role: "Recent Graduate",
    text: "Thanks to their sponsorship program, I could afford professional help. The interview coaching gave me the confidence I needed. Forever grateful!",
  },
];

function TestimonialsSection() {
  return (
    <Section id="testimonials">
      <div style={{ padding: "6rem 0", background: "#ffffff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem", width: "100%" }}>
          <SectionHeader tag="Success Stories" title="What Our Clients Say" />

          <motion.div
            variants={staggerContainer}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(1, 1fr)",
              gap: 32,
            }}
            className="md:!grid-cols-3"
          >
            {TESTIMONIALS.map((testimonial, i) => (
              <motion.div
                key={testimonial.name}
                variants={scaleIn}
                custom={i}
                style={{
                  background: "#fdf8f0",
                  padding: 32,
                  borderRadius: 24,
                  position: "relative",
                  border: "1px solid rgba(1,46,105,0.06)",
                }}
              >
                <FiStar
                  size={32}
                  style={{
                    color: "#fbba59",
                    opacity: 0.3,
                    position: "absolute",
                    top: 24,
                    right: 24,
                  }}
                />
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9rem",
                    color: "rgba(26,26,46,0.7)",
                    lineHeight: 1.7,
                    marginBottom: 24,
                    fontStyle: "italic",
                  }}
                >
                  "{testimonial.text}"
                </p>
                <div>
                  <h4
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "#012e69",
                    }}
                  >
                    {testimonial.name}
                  </h4>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.75rem",
                      color: "#fbba59",
                      fontWeight: 600,
                    }}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════════
   FAQ SECTION
   ═══════════════════════════════════════════════ */

const FAQS = [
  {
    q: "How long does each service take?",
    a: "Most document services (resume, cover letter, LinkedIn) are delivered within 48 hours. Coaching and application support are ongoing based on your needs.",
  },
  {
    q: "Do you offer refunds?",
    a: "We stand by our quality. If you're not satisfied with your initial documents, we offer unlimited revisions until you're happy.",
  },
  {
    q: "What is the Career Sponsorship program?",
    a: "We sponsor deserving students facing financial difficulties. If you qualify, we provide our services at reduced or no cost. Learn more on our About page.",
  },
  {
    q: "Can I combine multiple services?",
    a: "Absolutely! Many clients choose a package that combines resume writing, LinkedIn optimization, and interview coaching for maximum impact.",
  },
];

function FAQSection() {
  return (
    <Section id="faq">
      <div style={{ padding: "6rem 0", background: "#fdf8f0" }}>
        <div style={{ maxWidth: 896, margin: "0 auto", padding: "0 2rem", width: "100%" }}>
          <SectionHeader tag="Questions" title="Frequently Asked Questions" />

          <motion.div variants={staggerContainer}>
            {FAQS.map((faq, i) => (
              <motion.div
                key={faq.q}
                variants={fadeUp}
                custom={i}
                style={{
                  background: "#ffffff",
                  padding: 24,
                  borderRadius: 16,
                  marginBottom: 16,
                  border: "1px solid rgba(1,46,105,0.06)",
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#012e69",
                    marginBottom: 12,
                  }}
                >
                  {faq.q}
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9rem",
                    color: "rgba(26,26,46,0.65)",
                    lineHeight: 1.6,
                  }}
                >
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════════
   CALL TO ACTION
   ═══════════════════════════════════════════════ */

function ServicesCTASection() {
  return (
    <Section>
      <div style={{ padding: "5rem 0", background: "#ffffff" }}>
        <div style={{ maxWidth: 896, margin: "0 auto", padding: "0 2rem", width: "100%", textAlign: "center" }}>
          <motion.div variants={fadeUp}>
            <HiOutlineSparkles size={48} style={{ color: "#fbba59", margin: "0 auto 24px" }} />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            custom={1}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 700,
              color: "#012e69",
              marginBottom: 24,
              lineHeight: 1.2,
            }}
          >
            Ready to Transform Your Career?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              color: "rgba(26,26,46,0.65)",
              maxWidth: 560,
              margin: "0 auto 40px",
              lineHeight: 1.7,
            }}
          >
            Book a free consultation today and let's create your personalized
            career success roadmap.
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
              Book Free Consultation <FiArrowRight />
            </motion.a>
            <motion.a
              href="/about#mission"
              whileHover={{ y: -3, borderColor: "#012e69" }}
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
              Learn About Sponsorship <FiArrowRight />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════════
   GLOBAL GRID STYLES
   ═══════════════════════════════════════════════ */

function GridStyles() {
  return (
    <style jsx global>{`
      @media (min-width: 640px) {
        .sm\\:!grid-cols-2 { grid-template-columns: repeat(2, 1fr) !important; }
        .sm\\:!grid-cols-3 { grid-template-columns: repeat(3, 1fr) !important; }
      }
      @media (min-width: 768px) {
        .md\\:!grid-cols-2 { grid-template-columns: repeat(2, 1fr) !important; }
        .md\\:!grid-cols-3 { grid-template-columns: repeat(3, 1fr) !important; }
      }
      @media (min-width: 1024px) {
        .lg\\:!grid-cols-2 { grid-template-columns: repeat(2, 1fr) !important; }
        .lg\\:!grid-cols-3 { grid-template-columns: repeat(3, 1fr) !important; }
        .lg\\:!grid-cols-4 { grid-template-columns: repeat(4, 1fr) !important; }
      }
    `}</style>
  );
}