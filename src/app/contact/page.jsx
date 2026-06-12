"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  FiMapPin,
  FiMail,
  FiPhone,
  FiMessageCircle,
  FiSend,
  FiClock,
  FiCheckCircle,
  FiArrowRight,
  FiUser,
  FiEdit2,
} from "react-icons/fi";
import {
  HiOutlineBuildingOffice2,
  HiOutlineGlobeAlt,
  HiOutlineSparkles,
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
   CONTACT PAGE MAIN COMPONENT
   ═══════════════════════════════════════════════ */

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setModalMessage("Please fill in all required fields (Name, Email, and Message).");
      setShowModal(true);
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setModalMessage("Thank you for reaching out! 📧\n\nOur team will get back to you within 24 hours.");
      setShowModal(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <main style={{ overflowX: "hidden" }}>
      <Navbar />

      {/* Hero Section */}
      <ContactHeroSection />

      {/* Contact Info Cards */}
      <ContactInfoSection />

      {/* Google Maps Section */}
      <MapsSection />

      {/* Contact Form Section */}
      <ContactFormSection
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
      />

      {/* Modal */}
      <Modal showModal={showModal} setShowModal={setShowModal} message={modalMessage} />

      <Footer />
      <WhatsAppButton />
      <GridStyles />
    </main>
  );
}

/* ═══════════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════════ */

function ContactHeroSection() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "45vh",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(135deg, #012e69 0%, #0a1a3a 100%)",
        overflow: "hidden",
      }}
    >
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
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 1280,
          margin: "0 auto",
          padding: "4rem 2rem",
          width: "100%",
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <HiOutlineGlobeAlt size={48} style={{ color: "#fbba59", margin: "0 auto 20px" }} />
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
            Get In{" "}
            <span style={{ color: "#fbba59" }}>Touch</span>
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
            We're here to help! Reach out to us anytime — our team is ready to assist you with your career journey.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   CONTACT INFO SECTION
   ═══════════════════════════════════════════════ */

const CONTACT_INFO = {
  phone: "+44 7883 169263",
  email: "info@careersponsorship.uk",
  whatsapp: "+44 7883 169263",
  whatsappLink: "https://wa.me/447883169263",
  address: "123 Career Avenue, London, UK",
  businessHours: "Monday - Friday: 9:00 AM - 6:00 PM (GMT)",
};

function ContactInfoSection() {
  return (
    <Section id="contact-info">
      <div style={{ padding: "4rem 0", background: "#ffffff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem", width: "100%" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(1, 1fr)",
              gap: 24,
            }}
            className="sm:!grid-cols-2 lg:!grid-cols-4"
          >
            {/* Phone Card */}
            <motion.a
              href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
              variants={scaleIn}
              whileHover={{ y: -8 }}
              style={{
                display: "block",
                textDecoration: "none",
                background: "#fdf8f0",
                borderRadius: 20,
                padding: 28,
                textAlign: "center",
                border: "1px solid rgba(1,46,105,0.06)",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: "rgba(1,46,105,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                  color: "#012e69",
                }}
              >
                <FiPhone size={28} />
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
                Call Us
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.9rem",
                  color: "#fbba59",
                  fontWeight: 600,
                }}
              >
                {CONTACT_INFO.phone}
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.7rem",
                  color: "rgba(26,26,46,0.5)",
                  marginTop: 8,
                }}
              >
                Mon-Fri, 9AM-6PM
              </p>
            </motion.a>

            {/* Email Card */}
            <motion.a
              href={`mailto:${CONTACT_INFO.email}`}
              variants={scaleIn}
              whileHover={{ y: -8 }}
              style={{
                display: "block",
                textDecoration: "none",
                background: "#fdf8f0",
                borderRadius: 20,
                padding: 28,
                textAlign: "center",
                border: "1px solid rgba(1,46,105,0.06)",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: "rgba(1,46,105,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                  color: "#012e69",
                }}
              >
                <FiMail size={28} />
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
                Email Us
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.85rem",
                  color: "#fbba59",
                  fontWeight: 600,
                  wordBreak: "break-all",
                }}
              >
                {CONTACT_INFO.email}
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.7rem",
                  color: "rgba(26,26,46,0.5)",
                  marginTop: 8,
                }}
              >
                Response within 24h
              </p>
            </motion.a>

            {/* WhatsApp Card */}
            <motion.a
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              variants={scaleIn}
              whileHover={{ y: -8 }}
              style={{
                display: "block",
                textDecoration: "none",
                background: "#fdf8f0",
                borderRadius: 20,
                padding: 28,
                textAlign: "center",
                border: "1px solid rgba(1,46,105,0.06)",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: "rgba(37,211,102,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                  color: "#25D366",
                }}
              >
                <FiMessageCircle size={28} />
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
                WhatsApp
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.85rem",
                  color: "#25D366",
                  fontWeight: 600,
                }}
              >
                {CONTACT_INFO.whatsapp}
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.7rem",
                  color: "rgba(26,26,46,0.5)",
                  marginTop: 8,
                }}
              >
                Quickest response
              </p>
            </motion.a>

            {/* Location Card */}
            <motion.div
              variants={scaleIn}
              whileHover={{ y: -8 }}
              style={{
                background: "#fdf8f0",
                borderRadius: 20,
                padding: 28,
                textAlign: "center",
                border: "1px solid rgba(1,46,105,0.06)",
              }}
            >
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: "rgba(1,46,105,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                  color: "#012e69",
                }}
              >
                <FiMapPin size={28} />
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
                Visit Us
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.85rem",
                  color: "rgba(26,26,46,0.7)",
                }}
              >
                {CONTACT_INFO.address}
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.7rem",
                  color: "rgba(26,26,46,0.5)",
                  marginTop: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 4,
                }}
              >
                <FiClock size={12} /> {CONTACT_INFO.businessHours}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════════
   GOOGLE MAPS SECTION
   ═══════════════════════════════════════════════ */

function MapsSection() {
  // London office coordinates (example - replace with your actual office location)
  const officeLocation = {
    lat: 51.5074,
    lng: -0.1278,
    address: "123 Career Avenue, London, UK"
  };

  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodeURIComponent(officeLocation.address)}&zoom=15`;

  // Note: For production, you need to get a Google Maps API key
  // For now, using a free static map with OpenStreetMap fallback
  const staticMapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${officeLocation.lat},${officeLocation.lng}&zoom=14&size=1200x400&markers=color:red%7C${officeLocation.lat},${officeLocation.lng}&key=YOUR_API_KEY`;

  return (
    <Section id="map">
      <div style={{ padding: "4rem 0", background: "#fdf8f0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem", width: "100%" }}>
          <SectionHeader tag="Find Us" title="Our Office Location" />

          <motion.div
            variants={fadeUp}
            style={{
              borderRadius: 24,
              overflow: "hidden",
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              border: "1px solid rgba(1,46,105,0.1)",
            }}
          >
            {/* Google Maps Iframe - Replace with your actual Google Maps embed code */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.354042519634!2d-0.12775838422989673!3d51.50739597963492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ceb7d78e8d%3A0xa7392e2a69e0bb8f!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location Map"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            style={{
              marginTop: 24,
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <FiMapPin size={18} color="#fbba59" />
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9rem",
                color: "#012e69",
              }}
            >
              {CONTACT_INFO.address}
            </span>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(CONTACT_INFO.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "0.8rem",
                color: "#fbba59",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Get Directions <FiArrowRight size={12} />
            </a>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════════
   CONTACT FORM SECTION
   ═══════════════════════════════════════════════ */

function ContactFormSection({ formData, handleChange, handleSubmit, isSubmitting }) {
  return (
    <Section id="contact-form">
      <div style={{ padding: "4rem 0 6rem", background: "#ffffff" }}>
        <div style={{ maxWidth: 896, margin: "0 auto", padding: "0 2rem", width: "100%" }}>
          <SectionHeader tag="Send a Message" title="We'd Love to Hear From You" />

          <motion.div
            variants={fadeUp}
            style={{
              background: "#fdf8f0",
              borderRadius: 24,
              padding: 40,
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            }}
          >
            <form onSubmit={handleSubmit}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(1, 1fr)",
                  gap: 24,
                }}
                className="sm:!grid-cols-2"
              >
                <div>
                  <label
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: "#012e69",
                      marginBottom: 8,
                      display: "block",
                    }}
                  >
                    Your Name *
                  </label>
                  <div style={{ position: "relative" }}>
                    <FiUser
                      size={18}
                      style={{
                        position: "absolute",
                        left: 14,
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: "#9ca3af",
                      }}
                    />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      style={{
                        width: "100%",
                        padding: "12px 12px 12px 42px",
                        borderRadius: 12,
                        border: "1px solid rgba(1,46,105,0.2)",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.9rem",
                        background: "#ffffff",
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: "#012e69",
                      marginBottom: 8,
                      display: "block",
                    }}
                  >
                    Email Address *
                  </label>
                  <div style={{ position: "relative" }}>
                    <FiMail
                      size={18}
                      style={{
                        position: "absolute",
                        left: 14,
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: "#9ca3af",
                      }}
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="hello@example.com"
                      style={{
                        width: "100%",
                        padding: "12px 12px 12px 42px",
                        borderRadius: 12,
                        border: "1px solid rgba(1,46,105,0.2)",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.9rem",
                        background: "#ffffff",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 24, marginBottom: 24 }}>
                <label
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "#012e69",
                    marginBottom: 8,
                    display: "block",
                  }}
                >
                  Subject
                </label>
                <div style={{ position: "relative" }}>
                  <FiEdit2
                    size={18}
                    style={{
                      position: "absolute",
                      left: 14,
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "#9ca3af",
                    }}
                  />
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    style={{
                      width: "100%",
                      padding: "12px 12px 12px 42px",
                      borderRadius: 12,
                      border: "1px solid rgba(1,46,105,0.2)",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.9rem",
                      background: "#ffffff",
                    }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: 32 }}>
                <label
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "#012e69",
                    marginBottom: 8,
                    display: "block",
                  }}
                >
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your career goals, questions, or how we can assist you..."
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: 12,
                    border: "1px solid rgba(1,46,105,0.2)",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9rem",
                    resize: "vertical",
                    background: "#ffffff",
                  }}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                style={{
                  width: "100%",
                  padding: "14px 28px",
                  background: "#012e69",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: 40,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                  opacity: isSubmitting ? 0.7 : 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                }}
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>Send Message <FiSend size={16} /></>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════════
   MODAL COMPONENT
   ═══════════════════════════════════════════════ */

function Modal({ showModal, setShowModal, message }) {
  if (!showModal) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setShowModal(false)}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0,0,0,0.7)",
          backdropFilter: "blur(4px)",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
        }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            maxWidth: 400,
            width: "100%",
            background: "#ffffff",
            borderRadius: 24,
            padding: 32,
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              background: "rgba(251,186,89,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
              color: "#fbba59",
            }}
          >
            <FiCheckCircle size={32} />
          </div>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.95rem",
              color: "rgba(26,26,46,0.7)",
              lineHeight: 1.6,
              whiteSpace: "pre-line",
            }}
          >
            {message}
          </p>
          <motion.button
            whileHover={{ y: -2 }}
            onClick={() => setShowModal(false)}
            style={{
              marginTop: 24,
              padding: "10px 24px",
              background: "#012e69",
              color: "#ffffff",
              border: "none",
              borderRadius: 40,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Close
          </motion.button>
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