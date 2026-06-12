"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  FiTarget,
  FiEye,
  FiHeart,
  FiTrendingUp,
  FiBriefcase,
  FiUsers,
  FiAward,
  FiGlobe,
  FiShield,
  FiStar,
  FiThumbsUp,
  FiCheckCircle,
  FiArrowRight,
  FiSmile,
  FiCompass,
  FiAnchor,
  FiSun,
  FiClock,
} from "react-icons/fi";
import {
  HiOutlineAcademicCap,
  HiOutlineBuildingOffice2,
  HiOutlineChartBarSquare,
  HiOutlineUserGroup,
  HiOutlineLightBulb,
  HiOutlineSparkles,
  HiOutlineRocketLaunch,
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
   ABOUT PAGE MAIN COMPONENT
   ═══════════════════════════════════════════════ */

export default function AboutPage() {
  return (
    <main style={{ overflowX: "hidden" }}>
      <Navbar />

      {/* Hero Section with Image */}
      <AboutHeroSection />

      {/* Career Sponsorship Mission */}
      <SponsorshipMissionSection />

      {/* Our Story Section */}
      <OurStorySection />

      {/* Why Choose Us / Values */}
      <WhyChooseUsSection />

      {/* Our Impact Stats */}
      <ImpactStatsSection />

      {/* Team / Leadership Section */}
      <TeamSection />

      {/* Call to Action */}
      <AboutCTASection />

      <Footer />
      <WhatsAppButton />
      <GridStyles />
    </main>
  );
}

/* ═══════════════════════════════════════════════
   HERO SECTION WITH COUNSELLING IMAGE
   ═══════════════════════════════════════════════ */

function AboutHeroSection() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "70vh",
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
          src="/counselling.jpg"
          alt="Career Counseling"
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
            About Us
          </span>
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(2.2rem, 5vw, 4.2rem)",
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: 24,
              lineHeight: 1.2,
              maxWidth: 800,
            }}
          >
            Empowering Careers,{" "}
            <span style={{ color: "#fbba59" }}>Transforming Lives</span>
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
            We're on a mission to bridge the gap between talent and opportunity,
            helping professionals land their dream jobs while supporting students
            through career sponsorship.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   CAREER SPONSORSHIP MISSION (CORE MESSAGE)
   ═══════════════════════════════════════════════ */

function SponsorshipMissionSection() {
  return (
    <Section id="mission">
      <div
        style={{
          padding: "6rem 0",
          background: "linear-gradient(135deg, #fdf8f0 0%, #ffffff 100%)",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 2rem",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: 48,
              alignItems: "center",
            }}
            className="lg:!grid-cols-2"
          >
            {/* Left Side: Logo Large */}
            <motion.div
              variants={scaleIn}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  maxWidth: 400,
                  width: "100%",
                  
                  
                  padding: "2rem",
               
                  
                }}
              >
                <div style={{ position: "relative", width: "100%", aspectRatio: "1/1" }}>
                  <Image
                    src="/logo.svg"
                    alt="Company Logo"
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                  />
                </div>
              </div>
            </motion.div>

            {/* Right Side: Mission Content */}
            <motion.div variants={fadeUp}>
              <SectionHeader
                tag="Our Promise"
                title="Career Sponsorship Motive"
                centered={false}
              />

              <div style={{ marginBottom: 32 }}>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "#012e69",
                    marginBottom: 16,
                  }}
                >
                  <FiTarget style={{ display: "inline", marginRight: 12, color: "#fbba59" }} />
                  Our Mission
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1rem",
                    color: "rgba(26,26,46,0.7)",
                    lineHeight: 1.7,
                    marginBottom: 24,
                  }}
                >
                  To provide quality career sponsorship and job placement support
                  to students and professionals who face financial barriers due
                  to rising inflation and economic uncertainties. We believe
                  talent is universal — but opportunity shouldn't be.
                </p>
              </div>

              <div style={{ marginBottom: 32 }}>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "#012e69",
                    marginBottom: 16,
                  }}
                >
                  <FiEye style={{ display: "inline", marginRight: 12, color: "#fbba59" }} />
                  Our Motive
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1rem",
                    color: "rgba(26,26,46,0.7)",
                    lineHeight: 1.7,
                    marginBottom: 24,
                  }}
                >
                  Rising inflation has made education and job searching more
                  challenging than ever. Many talented students feel helpless,
                  unsure how to fund their career journey. Our motive is simple:
                  <strong style={{ color: "#012e69" }}>
                    {" "}provide them with meaningful job opportunities so they
                    can fulfill their needs, support their families, and build
                    sustainable careers.
                  </strong>
                </p>
              </div>

              <div
                style={{
                  background: "rgba(1,46,105,0.04)",
                  padding: 24,
                  borderRadius: 16,
                  borderLeft: `4px solid #fbba59`,
                }}
              >
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1rem",
                    fontStyle: "italic",
                    color: "#012e69",
                    lineHeight: 1.6,
                  }}
                >
                  "We don't just write resumes — we build bridges to financial
                  independence. Every placement is a family supported, a dream
                  realized, and a future secured."
                </p>
                <p
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "#fbba59",
                    marginTop: 12,
                  }}
                >
                  — Our Career Sponsorship Pledge
                </p>
              </div>
            </motion.div>
          </div>

          {/* Stats Row - Key figures */}
          <motion.div
            variants={staggerContainer}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 24,
              marginTop: 64,
              textAlign: "center",
            }}
            className="sm:!grid-cols-4"
          >
            {[
              { num: "500+", label: "Sponsored Students", icon: HiOutlineAcademicCap },
              { num: "85%", label: "Placement Success", icon: HiOutlineChartBarSquare },
              { num: "40+", label: "Partner Companies", icon: HiOutlineBuildingOffice2 },
              { num: "1,200+", label: "Careers Launched", icon: HiOutlineRocketLaunch },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  variants={scaleIn}
                  custom={i}
                  whileHover={{ y: -6 }}
                  style={{
                    padding: 24,
                    background: "#ffffff",
                    borderRadius: 16,
                    border: "1px solid rgba(1,46,105,0.08)",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.02)",
                  }}
                >
                  <Icon size={32} style={{ color: "#fbba59", margin: "0 auto 12px" }} />
                  <div
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "1.8rem",
                      fontWeight: 700,
                      color: "#012e69",
                    }}
                  >
                    {item.num}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.8rem",
                      color: "rgba(26,26,46,0.6)",
                      fontWeight: 500,
                    }}
                  >
                    {item.label}
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
   OUR STORY
   ═══════════════════════════════════════════════ */

function OurStorySection() {
  return (
    <Section id="story">
      <div style={{ padding: "6rem 0", background: "#ffffff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem", width: "100%" }}>
          <SectionHeader tag="Our Journey" title="How We Started" />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: 48,
              alignItems: "center",
            }}
            className="lg:!grid-cols-2"
          >
            <motion.div variants={fadeUp}>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1rem",
                  color: "rgba(26,26,46,0.7)",
                  lineHeight: 1.7,
                  marginBottom: 20,
                }}
              >
                Founded in 2020, CareerBridge began as a small initiative to help
                international students navigate the complex job market. What
                started as resume reviews in coffee shops has grown into a
                full-service career consultancy serving thousands of professionals
                across 40+ countries.
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1rem",
                  color: "rgba(26,26,46,0.7)",
                  lineHeight: 1.7,
                  marginBottom: 20,
                }}
              >
                We noticed a critical gap: talented individuals were being held
                back not by lack of skills, but by lack of access — access to
                recruiters, access to optimized applications, and access to
                affordable career guidance. That's when we created our Career
                Sponsorship program.
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1rem",
                  color: "rgba(26,26,46,0.7)",
                  lineHeight: 1.7,
                }}
              >
                Today, we partner with companies, universities, and mentors to
                ensure that no deserving student is left behind due to financial
                constraints. Our sponsorship model has helped over 500 students
                secure meaningful employment.
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              style={{
                background: "#fdf8f0",
                borderRadius: 24,
                padding: 32,
                position: "relative",
              }}
            >
              <FiCompass size={48} style={{ color: "#fbba59", marginBottom: 24 }} />
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "#012e69",
                  marginBottom: 16,
                }}
              >
                Our Philosophy
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.95rem",
                  color: "rgba(26,26,46,0.7)",
                  lineHeight: 1.6,
                  marginBottom: 16,
                }}
              >
                We believe that a person's potential shouldn't be limited by their
                current financial situation. With the right guidance, a polished
                application, and genuine sponsorship, anyone can achieve their
                career dreams.
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginTop: 24,
                }}
              >
                <FiCheckCircle size={20} color="#fbba59" />
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", fontWeight: 500 }}>
                  Integrity-first approach
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginTop: 12,
                }}
              >
                <FiCheckCircle size={20} color="#fbba59" />
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", fontWeight: 500 }}>
                  Transparent sponsorship model
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginTop: 12,
                }}
              >
                <FiCheckCircle size={20} color="#fbba59" />
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", fontWeight: 500 }}>
                  Long-term career partnerships
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════════
   WHY CHOOSE US / CORE VALUES
   ═══════════════════════════════════════════════ */

const CORE_VALUES_ABOUT = [
  {
    icon: FiShield,
    title: "Uncompromising Integrity",
    desc: "We never make false promises. Every resume is original, every strategy is ethical, and every client is treated with honesty.",
    color: "#012e69",
  },
  {
    icon: FiHeart,
    title: "Sponsorship First",
    desc: "Our sponsorship program prioritizes students facing financial hardship. We believe in paying it forward.",
    color: "#fbba59",
  },
  {
    icon: HiOutlineLightBulb,
    title: "Innovation Driven",
    desc: "We constantly update our strategies based on the latest ATS algorithms, hiring trends, and recruiter insights.",
    color: "#012e69",
  },
  {
    icon: FiUsers,
    title: "Community Centric",
    desc: "We've built a supportive community of mentors, alumni, and hiring partners who genuinely want to help you succeed.",
    color: "#fbba59",
  },
  {
    icon: FiAward,
    title: "Excellence Focused",
    desc: "We hold ourselves to the highest standards. Every document is reviewed multiple times for perfection.",
    color: "#012e69",
  },
  {
    icon: FiGlobe,
    title: "Global Perspective",
    desc: "With clients in over 40 countries, we understand diverse markets, visa requirements, and cultural nuances.",
    color: "#fbba59",
  },
];

function WhyChooseUsSection() {
  return (
    <Section id="values">
      <div style={{ padding: "6rem 0", background: "#fdf8f0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem", width: "100%" }}>
          <SectionHeader tag="Our Foundation" title="Why Choose Us" />

          <motion.div
            variants={staggerContainer}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(1, 1fr)",
              gap: 32,
            }}
            className="sm:!grid-cols-2 lg:!grid-cols-3"
          >
            {CORE_VALUES_ABOUT.map((val, i) => {
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
                    padding: 32,
                    borderRadius: 20,
                    background: "#ffffff",
                    border: `1px solid rgba(1,46,105,0.08)`,
                    transition: "all 0.3s ease",
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
                      marginBottom: 24,
                      color: val.color,
                    }}
                  >
                    <Icon size={28} />
                  </div>
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
                      fontSize: "0.875rem",
                      color: "rgba(26,26,46,0.65)",
                      lineHeight: 1.6,
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
   IMPACT STATS SECTION
   ═══════════════════════════════════════════════ */

const IMPACT_STATS = [
  { icon: HiOutlineUserGroup, num: "8,000+", label: "Careers Transformed", desc: "Across 40+ countries" },
  { icon: FiTrendingUp, num: "97%", label: "Client Satisfaction", desc: "5-star rated service" },
  { icon: FiBriefcase, num: "3x", label: "More Interviews", desc: "Average callback increase" },
  { icon: FiClock, num: "48hr", label: "Fast Turnaround", desc: "Quality rush available" },
  { icon: FiStar, num: "500+", label: "Sponsored Students", desc: "Financially supported" },
  { icon: FiThumbsUp, num: "100%", label: "Original Work", desc: "Plagiarism-free guarantee" },
];

function ImpactStatsSection() {
  return (
    <Section id="impact">
      <div
        style={{
          padding: "6rem 0",
          background: "linear-gradient(135deg, #012e69 0%, #0a1a3a 100%)",
          position: "relative",
        }}
      >
        <div style={{ position: "relative", zIndex: 10, maxWidth: 1280, margin: "0 auto", padding: "0 2rem", width: "100%" }}>
          <SectionHeader tag="Our Impact" title="Making a Difference" light />

          <motion.div
            variants={staggerContainer}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(1, 1fr)",
              gap: 24,
            }}
            className="sm:!grid-cols-2 lg:!grid-cols-3"
          >
            {IMPACT_STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  variants={scaleIn}
                  custom={i}
                  whileHover={{ y: -4, background: "rgba(255,255,255,0.08)" }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 20,
                    padding: 24,
                    borderRadius: 16,
                    background: "rgba(255,255,255,0.04)",
                    backdropFilter: "blur(4px)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 14,
                      background: "rgba(251,186,89,0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fbba59",
                    }}
                  >
                    <Icon size={28} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "1.8rem",
                        fontWeight: 700,
                        color: "#ffffff",
                      }}
                    >
                      {stat.num}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        color: "#fbba59",
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                      }}
                    >
                      {stat.label}
                    </div>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.75rem",
                        color: "rgba(255,255,255,0.5)",
                        marginTop: 4,
                      }}
                    >
                      {stat.desc}
                    </p>
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
   TEAM / LEADERSHIP SECTION
   ═══════════════════════════════════════════════ */

const TEAM_MEMBERS = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    bio: "Former tech recruiter with 12+ years of experience. Started CareerBridge to democratize access to career opportunities.",
    icon: FiSmile,
  },
  {
    name: "Michael Chen",
    role: "Head of Sponsorship",
    bio: "Passionate about education equity. Has helped secure over $2M in sponsorship funding for deserving students.",
    icon: FiSun,
  },
  {
    name: "Priya Patel",
    role: "Lead Career Coach",
    bio: "Certified resume strategist and interview expert. Has personally coached 2,000+ professionals to success.",
    icon: FiStar,
  },
];

function TeamSection() {
  return (
    <Section id="team">
      <div style={{ padding: "6rem 0", background: "#ffffff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem", width: "100%" }}>
          <SectionHeader tag="Leadership" title="The Team Behind the Mission" />

          <motion.div
            variants={staggerContainer}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(1, 1fr)",
              gap: 32,
            }}
            className="sm:!grid-cols-2 lg:!grid-cols-3"
          >
            {TEAM_MEMBERS.map((member, i) => {
              const Icon = member.icon;
              return (
                <motion.div
                  key={member.name}
                  variants={fadeUp}
                  custom={i}
                  whileHover={{ y: -8 }}
                  style={{
                    textAlign: "center",
                    padding: 32,
                    borderRadius: 24,
                    background: "#fdf8f0",
                    border: "1px solid rgba(1,46,105,0.06)",
                  }}
                >
                  <div
                    style={{
                      width: 100,
                      height: 100,
                      margin: "0 auto 24px",
                      borderRadius: "50%",
                      background: "#012e69",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fbba59",
                    }}
                  >
                    <Icon size={48} />
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "1.3rem",
                      fontWeight: 700,
                      color: "#012e69",
                      marginBottom: 4,
                    }}
                  >
                    {member.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "#fbba59",
                      marginBottom: 16,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {member.role}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.85rem",
                      color: "rgba(26,26,46,0.65)",
                      lineHeight: 1.6,
                    }}
                  >
                    {member.bio}
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
   CALL TO ACTION
   ═══════════════════════════════════════════════ */

function AboutCTASection() {
  return (
    <Section>
      <div style={{ padding: "5rem 0", background: "#fdf8f0" }}>
        <div style={{ maxWidth: 896, margin: "0 auto", padding: "0 2rem", width: "100%", textAlign: "center" }}>
          <motion.div variants={fadeUp}>
            <FiAnchor size={48} style={{ color: "#fbba59", margin: "0 auto 24px" }} />
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
            Ready to Write Your Success Story?
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
            Whether you need career sponsorship, professional resume writing, or
            interview coaching — we're here to guide you every step of the way.
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
              Apply for Sponsorship <FiArrowRight />
            </motion.a>
            <motion.a
              href="/services"
              whileHover={{ y: -3, borderColor: "#012e69", background: "#012e69", color: "#ffffff" }}
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
              Explore Services <FiArrowRight />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════════
   GLOBAL GRID STYLES (same as home)
   ═══════════════════════════════════════════════ */

function GridStyles() {
  return (
    <style jsx global>{`
      @media (min-width: 640px) {
        .sm\\:!grid-cols-2 { grid-template-columns: repeat(2, 1fr) !important; }
        .sm\\:!grid-cols-3 { grid-template-columns: repeat(3, 1fr) !important; }
        .sm\\:!grid-cols-4 { grid-template-columns: repeat(4, 1fr) !important; }
      }
      @media (min-width: 1024px) {
        .lg\\:!grid-cols-2 { grid-template-columns: repeat(2, 1fr) !important; }
        .lg\\:!grid-cols-3 { grid-template-columns: repeat(3, 1fr) !important; }
        .lg\\:!grid-cols-4 { grid-template-columns: repeat(4, 1fr) !important; }
        .lg\\:!grid-cols-6 { grid-template-columns: repeat(6, 1fr) !important; }
      }
    `}</style>
  );
}