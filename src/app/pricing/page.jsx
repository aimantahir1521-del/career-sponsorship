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
  FiXCircle,
  FiMail,
  FiMessageCircle,
  FiStar,
  FiZap,
  FiAward,
  FiX,
  FiHeart,
  FiShield,
  FiClock,
} from "react-icons/fi";
import {
  HiOutlineSparkles,
  HiOutlineRocketLaunch,
  HiOutlineCheckBadge,
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

function SectionHeader({ tag, title, light = false }) {
  return (
    <motion.div
      variants={fadeUp}
      style={{
        textAlign: "center",
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
   PRICING PAGE MAIN COMPONENT
   ═══════════════════════════════════════════════ */

export default function PricingPage() {
  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <main style={{ overflowX: "hidden" }}>
      <Navbar />

      {/* Hero Section with student4.jpg */}
      <PricingHeroSection />

      {/* Pricing Tables */}
      <PricingTablesSection setSelectedPackage={setSelectedPackage} />

      {/* Comparison Table */}
      <ComparisonSection />

      {/* FAQ Section */}
      <PricingFAQSection />

      {/* Contact Modal */}
      <ContactModal selectedPackage={selectedPackage} setSelectedPackage={setSelectedPackage} />

      <Footer />
      <WhatsAppButton />
      <GridStyles />
    </main>
  );
}

/* ═══════════════════════════════════════════════
   HERO SECTION WITH STUDENT4.JPG
   ═══════════════════════════════════════════════ */

function PricingHeroSection() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "55vh",
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
          src="/student4.jpg"
          alt="Students celebrating career success"
          fill
          style={{ objectFit: "cover", opacity: 0.35 }}
          priority
        />
      </div>

      {/* Decorative blurred circles */}
      <div
        style={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "rgba(251,186,89,0.08)",
          filter: "blur(80px)",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -100,
          left: -100,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "rgba(251,186,89,0.08)",
          filter: "blur(80px)",
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 1280,
          margin: "0 auto",
          padding: "5rem 2rem",
          width: "100%",
          textAlign: "center",
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
            Investment
          </span>
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: 20,
              lineHeight: 1.2,
            }}
          >
            Simple, Transparent{" "}
            <span style={{ color: "#fbba59" }}>Pricing</span>
          </h1>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(1rem, 2vw, 1.1rem)",
              color: "rgba(255,255,255,0.85)",
              maxWidth: 600,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Choose the package that fits your career goals. No hidden fees,
            no surprises  just results.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   PRICING TABLES
   ═══════════════════════════════════════════════ */

const LAUNCH_FEATURES = [
  { name: "ATS-Optimized CV", included: true },
  { name: "Tailored Cover Letter", included: true },
  { name: "Curated Job List (LinkedIn-based)", included: true },
  { name: "LinkedIn Revamping", included: false },
  { name: "Active Job Applications", included: false },
  { name: "Interview Scheduling Support", included: false },
  { name: "Mock Interviews", included: false },
  { name: "Internship Certificate", included: false },
  { name: "Priority Daily Applications", included: false },
  { name: "Direct HR & Company References", included: false },
  { name: "Unlimited Mock Interviews", included: false },
  { name: "1-on-1 Interview Coaching", included: false },
  { name: "Confidence Building Sessions", included: false },
  { name: "Job Cracking Techniques", included: false },
  { name: "Ongoing Support Until Job", included: false },
];

const ACCELERATOR_FEATURES = [
  { name: "ATS-Optimized CV", included: true },
  { name: "Tailored Cover Letter", included: true },
  { name: "Curated Job List (LinkedIn-based)", included: true },
  { name: "LinkedIn Revamping", included: true },
  { name: "Active Job Applications", included: true },
  { name: "Interview Scheduling Support", included: true },
  { name: "Mock Interviews", included: true, detail: "One Session only" },
  { name: "Internship Certificate", included: true, detail: "if required" },
  { name: "Priority Daily Applications", included: false },
  { name: "Direct HR & Company References", included: false },
  { name: "Unlimited Mock Interviews", included: false },
  { name: "1-on-1 Interview Coaching", included: false },
  { name: "Confidence Building Sessions", included: false },
  { name: "Job Cracking Techniques", included: false },
  { name: "Ongoing Support Until Job", included: false },
];

const ELITE_FEATURES = [
  { name: "ATS-Optimized CV", included: true },
  { name: "Tailored Cover Letter", included: true },
  { name: "Curated Job List (LinkedIn-based)", included: true },
  { name: "LinkedIn Revamping", included: true },
  { name: "Active Job Applications", included: true },
  { name: "Interview Scheduling Support", included: true },
  { name: "Mock Interviews", included: true, detail: "One Session" },
  { name: "Internship Certificate", included: true, detail: "if required" },
  { name: "Priority Daily Applications", included: true },
  { name: "Direct HR & Company References", included: true },
  { name: "Unlimited Mock Interviews", included: true },
  { name: "1-on-1 Interview Coaching", included: true },
  { name: "Confidence Building Sessions", included: true },
  { name: "Job Cracking Techniques", included: true },
  { name: "Ongoing Support Until Job", included: true },
];

function PricingTablesSection({ setSelectedPackage }) {
  return (
    <Section id="pricing">
      <div style={{ padding: "6rem 0", background: "#fdf8f0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem", width: "100%" }}>
          <SectionHeader tag="Investment" title="Choose Your Package" />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(1, 1fr)",
              gap: 32,
              marginTop: 24,
            }}
            className="md:!grid-cols-2 lg:!grid-cols-3"
          >
            {/* Launch Package */}
            <PricingCard
              title="Launch Package"
              price="£159"
              period="one-time"
              features={LAUNCH_FEATURES}
              tag="Starter Tier"
              accent="#012e69"
              gradient="linear-gradient(135deg, #012e69 0%, #1a3a6e 100%)"
              onSelect={() => setSelectedPackage({ name: "Launch Package", price: "£159", contact: true })}
            />

            {/* Accelerator Package */}
            <PricingCard
              title="Accelerator Package"
              price="£499"
              period="one-time"
              features={ACCELERATOR_FEATURES}
              tag="Most Popular"
              accent="#fbba59"
              gradient="linear-gradient(135deg, #1a3a6e 0%, #fbba59 100%)"
              popular
              onSelect={() => setSelectedPackage({ name: "Accelerator Package", price: "£499", contact: true })}
            />

            {/* Elite Placement Package */}
            <PricingCard
              title="Elite Placement Package"
              price="£899"
              period="one-time"
              features={ELITE_FEATURES}
              tag="Ultimate Success"
              accent="#012e69"
              gradient="linear-gradient(135deg, #012e69 0%, #0a1a3a 100%)"
              onSelect={() => setSelectedPackage({ name: "Elite Placement Package", price: "£899", contact: true })}
            />
          </div>

          {/* Note about sponsorship */}
          <motion.div
            variants={fadeUp}
            style={{
              textAlign: "center",
              marginTop: 48,
              padding: 24,
              background: "#ffffff",
              borderRadius: 16,
              border: "1px solid rgba(1,46,105,0.08)",
            }}
          >
            <FiHeart style={{ color: "#fbba59", margin: "0 auto 12px" }} size={32} />
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9rem",
                color: "rgba(26,26,46,0.7)",
                maxWidth: 600,
                margin: "0 auto",
              }}
            >
              <strong style={{ color: "#012e69" }}>Need financial support?</strong>{" "}
              We offer career sponsorship programs for deserving students facing
              economic challenges.{" "}
              <a href="/about#mission" style={{ color: "#fbba59", textDecoration: "none", fontWeight: 600 }}>
                Learn more →
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

function PricingCard({ title, price, period, features, tag, accent, gradient, popular = false, onSelect }) {
  const isGold = accent === "#fbba59";

  return (
    <motion.div
      variants={scaleIn}
      whileHover={{ y: -12 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{
        position: "relative",
        background: "#ffffff",
        borderRadius: 24,
        overflow: "hidden",
        boxShadow: popular
          ? "0 20px 40px rgba(1,46,105,0.15)"
          : "0 10px 30px rgba(0,0,0,0.05)",
        border: popular ? `2px solid #fbba59` : "1px solid rgba(1,46,105,0.08)",
      }}
    >
      {/* Top Gradient Bar */}
      <div
        style={{
          height: 6,
          background: gradient,
        }}
      />

      {/* Popular Badge */}
      {popular && (
        <div
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            background: "#fbba59",
            color: "#012e69",
            padding: "4px 12px",
            borderRadius: 40,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.05em",
          }}
        >
          Most Popular
        </div>
      )}

      <div style={{ padding: 32 }}>
        {/* Tag */}
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
            borderRadius: 40,
            display: "inline-block",
            marginBottom: 16,
          }}
        >
          {tag}
        </span>

        {/* Title */}
        <h3
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "#012e69",
            marginBottom: 8,
          }}
        >
          {title}
        </h3>

        {/* Price */}
        <div style={{ marginBottom: 24 }}>
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "2.5rem",
              fontWeight: 700,
              color: "#012e69",
            }}
          >
            {price}
          </span>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.85rem",
              color: "rgba(26,26,46,0.5)",
              marginLeft: 4,
            }}
          >
            / {period}
          </span>
        </div>

        {/* Features List */}
        <div style={{ marginBottom: 32 }}>
          {features.map((feature, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 12,
              }}
            >
              {feature.included ? (
                <FiCheckCircle size={18} style={{ color: "#22c55e", flexShrink: 0 }} />
              ) : (
                <FiXCircle size={18} style={{ color: "#9ca3af", flexShrink: 0 }} />
              )}
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.85rem",
                  color: feature.included ? "rgba(26,26,46,0.8)" : "rgba(26,26,46,0.4)",
                  textDecoration: feature.included ? "none" : "none",
                }}
              >
                {feature.name}
                {feature.detail && (
                  <span style={{ fontSize: "0.7rem", color: "#fbba59", marginLeft: 4 }}>
                    ({feature.detail})
                  </span>
                )}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          onClick={onSelect}
          whileHover={{ x: 4, background: isGold ? "#012e69" : "#fbba59", color: isGold ? "#ffffff" : "#012e69" }}
          whileTap={{ scale: 0.97 }}
          style={{
            width: "100%",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 600,
            fontSize: "0.9rem",
            color: isGold ? "#012e69" : "#ffffff",
            background: isGold ? "#fbba59" : "#012e69",
            padding: "14px 24px",
            borderRadius: 40,
            textDecoration: "none",
            transition: "all 0.3s ease",
            border: "none",
            cursor: "pointer",
          }}
        >
          Get Started <FiArrowRight size={16} />
        </motion.button>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════
   COMPARISON TABLE SECTION
   ═══════════════════════════════════════════════ */

const ALL_FEATURES = [
  "ATS-Optimized CV",
  "Tailored Cover Letter",
  "Curated Job List (LinkedIn-based)",
  "LinkedIn Revamping",
  "Active Job Applications",
  "Interview Scheduling Support",
  "Mock Interviews",
  "Internship Certificate",
  "Priority Daily Applications",
  "Direct HR & Company References",
  "Unlimited Mock Interviews",
  "1-on-1 Interview Coaching",
  "Confidence Building Sessions",
  "Job Cracking Techniques",
  "Ongoing Support Until Job",
];

function ComparisonSection() {
  return (
    <Section id="comparison">
      <div style={{ padding: "6rem 0", background: "#ffffff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem", width: "100%" }}>
          <SectionHeader tag="Compare" title="Feature Comparison" />

          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontFamily: "'Inter', sans-serif",
                minWidth: 600,
              }}
            >
              <thead>
                <tr style={{ borderBottom: "2px solid #fbba59" }}>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "16px 12px",
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 600,
                      color: "#012e69",
                    }}
                  >
                    Feature
                  </th>
                  <th
                    style={{
                      textAlign: "center",
                      padding: "16px 12px",
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 600,
                      color: "#012e69",
                    }}
                  >
                    Launch
                  </th>
                  <th
                    style={{
                      textAlign: "center",
                      padding: "16px 12px",
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 600,
                      color: "#fbba59",
                    }}
                  >
                    Accelerator
                  </th>
                  <th
                    style={{
                      textAlign: "center",
                      padding: "16px 12px",
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 600,
                      color: "#012e69",
                    }}
                  >
                    Elite
                  </th>
                 </tr>
              </thead>
              <tbody>
                {ALL_FEATURES.map((feature, idx) => {
                  const launchIncluded = LAUNCH_FEATURES.find(f => f.name === feature)?.included;
                  const accIncluded = ACCELERATOR_FEATURES.find(f => f.name === feature)?.included;
                  const eliteIncluded = ELITE_FEATURES.find(f => f.name === feature)?.included;
                  const accDetail = ACCELERATOR_FEATURES.find(f => f.name === feature)?.detail;
                  const eliteDetail = ELITE_FEATURES.find(f => f.name === feature)?.detail;

                  return (
                    <tr
                      key={idx}
                      style={{
                        borderBottom: "1px solid rgba(1,46,105,0.08)",
                        backgroundColor: idx % 2 === 0 ? "#fdf8f0" : "#ffffff",
                      }}
                    >
                      <td
                        style={{
                          padding: "14px 12px",
                          fontSize: "0.85rem",
                          color: "#012e69",
                          fontWeight: 500,
                        }}
                      >
                        {feature}
                      </td>
                      <td style={{ textAlign: "center", padding: "14px 12px" }}>
                        {launchIncluded ? (
                          <FiCheckCircle size={20} style={{ color: "#22c55e", margin: "0 auto" }} />
                        ) : (
                          <FiXCircle size={20} style={{ color: "#9ca3af", margin: "0 auto" }} />
                        )}
                      </td>
                      <td style={{ textAlign: "center", padding: "14px 12px" }}>
                        {accIncluded ? (
                          <div>
                            <FiCheckCircle size={20} style={{ color: "#22c55e", margin: "0 auto" }} />
                            {accDetail && (
                              <span style={{ fontSize: "0.65rem", color: "#fbba59", display: "block" }}>
                                {accDetail}
                              </span>
                            )}
                          </div>
                        ) : (
                          <FiXCircle size={20} style={{ color: "#9ca3af", margin: "0 auto" }} />
                        )}
                      </td>
                      <td style={{ textAlign: "center", padding: "14px 12px" }}>
                        {eliteIncluded ? (
                          <div>
                            <FiCheckCircle size={20} style={{ color: "#22c55e", margin: "0 auto" }} />
                            {eliteDetail && (
                              <span style={{ fontSize: "0.65rem", color: "#fbba59", display: "block" }}>
                                {eliteDetail}
                              </span>
                            )}
                          </div>
                        ) : (
                          <FiXCircle size={20} style={{ color: "#9ca3af", margin: "0 auto" }} />
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════════
   FAQ SECTION
   ═══════════════════════════════════════════════ */

const PRICING_FAQS = [
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards, PayPal, and bank transfers. Payment plans are available for Elite Package upon request.",
  },
  {
    q: "Is there a refund policy?",
    a: "Yes! If you're not satisfied with your initial documents, we offer unlimited revisions. For full package refunds, please refer to our terms of service.",
  },
  {
    q: "Can I upgrade my package later?",
    a: "Absolutely! You can upgrade from Launch to Accelerator or Elite at any time by paying the difference.",
  },
  {
    q: "Do you offer discounts for students?",
    a: "Yes! We have a Career Sponsorship program for deserving students. Contact us to learn more about eligibility.",
  },
];

function PricingFAQSection() {
  return (
    <Section id="faq">
      <div style={{ padding: "6rem 0", background: "#fdf8f0" }}>
        <div style={{ maxWidth: 896, margin: "0 auto", padding: "0 2rem", width: "100%" }}>
          <SectionHeader tag="Questions" title="Frequently Asked Questions" />

          <motion.div variants={staggerContainer}>
            {PRICING_FAQS.map((faq, i) => (
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
   CONTACT MODAL
   ═══════════════════════════════════════════════ */

const CONTACT_INFO = {
  phone: "+44 7883 169263",
  email: "info@careersponsorship.uk",
  whatsappLink: "https://wa.me/447883169263",
  emailLink: "mailto:info@careersponsorship.uk",
};

function ContactModal({ selectedPackage, setSelectedPackage }) {
  if (!selectedPackage) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setSelectedPackage(null)}
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
            maxWidth: 500,
            width: "100%",
            background: "#ffffff",
            borderRadius: 32,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedPackage(null)}
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "rgba(0,0,0,0.05)",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 10,
            }}
          >
            <FiX size={20} />
          </button>

          <div style={{ padding: "40px 32px" }}>
            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: 32 }}>
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: "rgba(251,186,89,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                  color: "#fbba59",
                }}
              >
                <HiOutlineSparkles size={32} />
              </div>
              <h2
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "#012e69",
                  marginBottom: 8,
                }}
              >
                Get {selectedPackage.name}
              </h2>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1rem",
                  color: "#fbba59",
                  fontWeight: 600,
                }}
              >
                {selectedPackage.price}
              </p>
            </div>

            {/* Contact Options */}
            <div style={{ marginBottom: 24 }}>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.85rem",
                  color: "rgba(26,26,46,0.6)",
                  textAlign: "center",
                  marginBottom: 24,
                }}
              >
                Choose your preferred way to get in touch:
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {/* WhatsApp Option */}
                <a
                  href={CONTACT_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    padding: "18px 20px",
                    background: "#25D366",
                    borderRadius: 16,
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 8px 20px rgba(37,211,102,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      background: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FiMessageCircle size={24} color="#25D366" />
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        color: "#ffffff",
                      }}
                    >
                      WhatsApp Us
                    </div>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.75rem",
                        color: "rgba(255,255,255,0.8)",
                      }}
                    >
                      {CONTACT_INFO.phone}
                    </div>
                  </div>
                  <FiArrowRight size={20} style={{ marginLeft: "auto", color: "#ffffff" }} />
                </a>

                {/* Email Option */}
                <a
                  href={CONTACT_INFO.emailLink}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    padding: "18px 20px",
                    background: "#012e69",
                    borderRadius: 16,
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 8px 20px rgba(1,46,105,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      background: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FiMail size={24} color="#012e69" />
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        color: "#ffffff",
                      }}
                    >
                      Email Us
                    </div>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.75rem",
                        color: "rgba(255,255,255,0.8)",
                      }}
                    >
                      {CONTACT_INFO.email}
                    </div>
                  </div>
                  <FiArrowRight size={20} style={{ marginLeft: "auto", color: "#ffffff" }} />
                </a>
              </div>
            </div>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.7rem",
                color: "rgba(26,26,46,0.4)",
                textAlign: "center",
                marginTop: 24,
              }}
            >
              We'll respond within 24 hours. Your career journey starts here.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
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