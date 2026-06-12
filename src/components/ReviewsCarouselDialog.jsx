"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FiStar, FiX, FiUser } from "react-icons/fi";

/* ═══════════════════════════════════════════════
   SELECTED REVIEWS (from reviews page data)
   ═══════════════════════════════════════════════ */

const CAROUSEL_REVIEWS = [
  {
    name: "Humaira Akhtar",
    location: "Delhi, India",
    rating: 5,
    review:
      "Career guidance helped me switch industry smoothly. Amazing support!",
    image: "/20.jpg",
  },
  {
    name: "Arjun Nair",
    location: "Chennai, India",
    rating: 5,
    review: "Career sponsorship changed my life. Forever grateful!",
    image: "/6.jpg",
  },
  {
    name: "Sneha Reddy",
    location: "Bangalore, India",
    rating: 5,
    review:
      "Mock interviews were intense but effective. Cleared FAANG interview!",
    image: "/23.jpg",
  },
];

/* ═══════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════ */

export default function ReviewsCarouselDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const slideTimerRef = useRef(null);

  // TODO: Restore localStorage check for production
  // For testing: show on every page load / refresh
  useEffect(() => {
    const openTimer = setTimeout(() => {
      setIsOpen(true);
    }, 600);
    return () => clearTimeout(openTimer);
  }, []);

  // NO auto-close — user must manually close via X button

  // Slide carousel every 2.5 seconds
  useEffect(() => {
    if (isOpen) {
      slideTimerRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % CAROUSEL_REVIEWS.length);
      }, 2500);
      return () => clearInterval(slideTimerRef.current);
    }
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    clearInterval(slideTimerRef.current);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleClose}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(1, 20, 50, 0.6)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            onClick={(e) => e.stopPropagation()}
            className="reviews-dialog-card"
          >
            {/* ── Header Bar — Clean White ── */}
            <div
              style={{
                background: "#ffffff",
                padding: "18px 24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid rgba(1,46,105,0.08)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{
                    display: "flex",
                    gap: 3,
                  }}
                >
                  {[1, 2, 3, 4, 5].map((s) => (
                    <FiStar key={s} size={14} fill="#fbba59" stroke="#fbba59" />
                  ))}
                </div>
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "#012e69",
                    letterSpacing: "0.02em",
                  }}
                >
                  Client Reviews
                </span>
              </div>
              <button
                onClick={handleClose}
                aria-label="Close reviews dialog"
                style={{
                  background: "rgba(1,46,105,0.06)",
                  border: "none",
                  borderRadius: "50%",
                  width: 36,
                  height: 36,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "#012e69",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(1,46,105,0.12)";
                  e.currentTarget.style.transform = "rotate(90deg)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(1,46,105,0.06)";
                  e.currentTarget.style.transform = "rotate(0deg)";
                }}
              >
                <FiX size={18} />
              </button>
            </div>

            {/* ── Carousel Body ── */}
            <div
              style={{
                padding: "32px 28px 28px",
                position: "relative",
                overflow: "hidden",
              }}
              className="reviews-dialog-body"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -80 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <ReviewSlide review={CAROUSEL_REVIEWS[activeIndex]} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ── Dots ── */}
            <div
              style={{
                padding: "0 28px 24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
              }}
            >
              {CAROUSEL_REVIEWS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  style={{
                    width: activeIndex === i ? 28 : 10,
                    height: 10,
                    borderRadius: 5,
                    background:
                      activeIndex === i ? "#fbba59" : "rgba(1,46,105,0.12)",
                    transition: "all 0.35s ease",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* ── Responsive Styles ── */}
          <style>{`
            .reviews-dialog-card {
              position: relative;
              width: 100%;
              max-width: 580px;
              background: #ffffff;
              border-radius: 28px;
              overflow: hidden;
              box-shadow:
                0 30px 80px rgba(0,0,0,0.3),
                0 0 0 1px rgba(251,186,89,0.1);
            }

            .reviews-dialog-body {
              min-height: 220px;
            }

            /* ── Mobile (< 640px) ── */
            @media (max-width: 639px) {
              .reviews-dialog-card {
                max-width: 92vw;
                border-radius: 20px;
              }
              .reviews-dialog-body {
                padding: 24px 20px 20px !important;
                min-height: 200px;
              }
              .review-slide-text {
                font-size: 0.95rem !important;
              }
              .review-slide-avatar {
                width: 50px !important;
                height: 50px !important;
              }
              .review-slide-name {
                font-size: 0.95rem !important;
              }
            }

            /* ── Tablet (640px - 1023px) ── */
            @media (min-width: 640px) and (max-width: 1023px) {
              .reviews-dialog-card {
                max-width: 520px;
              }
              .reviews-dialog-body {
                min-height: 230px;
              }
            }

            /* ── Desktop (1024px+) ── */
            @media (min-width: 1024px) {
              .reviews-dialog-card {
                max-width: 640px;
              }
              .reviews-dialog-body {
                padding: 40px 36px 32px !important;
                min-height: 260px;
              }
              .review-slide-stars {
                margin-bottom: 20px !important;
              }
              .review-slide-stars svg {
                width: 22px !important;
                height: 22px !important;
              }
              .review-slide-text {
                font-size: 1.15rem !important;
                line-height: 1.75 !important;
                margin-bottom: 28px !important;
              }
              .review-slide-avatar {
                width: 60px !important;
                height: 60px !important;
              }
              .review-slide-name {
                font-size: 1.08rem !important;
              }
              .review-slide-location {
                font-size: 0.82rem !important;
              }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ═══════════════════════════════════════════════
   REVIEW SLIDE
   ═══════════════════════════════════════════════ */

function ReviewSlide({ review }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div>
      {/* Stars */}
      <div
        className="review-slide-stars"
        style={{ display: "flex", gap: 4, marginBottom: 16 }}
      >
        {[1, 2, 3, 4, 5].map((star) => (
          <FiStar
            key={star}
            size={18}
            fill={star <= review.rating ? "#fbba59" : "none"}
            stroke="#fbba59"
          />
        ))}
      </div>

      {/* Review text */}
      <p
        className="review-slide-text"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "1.02rem",
          color: "rgba(26,26,46,0.72)",
          lineHeight: 1.7,
          marginBottom: 22,
          fontStyle: "italic",
          margin: "0 0 22px 0",
        }}
      >
        &ldquo;{review.review}&rdquo;
      </p>

      {/* User row */}
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <div
          className="review-slide-avatar"
          style={{
            width: 52,
            height: 52,
            borderRadius: "50%",
            overflow: "hidden",
            background: "#f3f4f6",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            border: "2.5px solid rgba(251,186,89,0.4)",
            flexShrink: 0,
          }}
        >
          {review.image && !imgError ? (
            <Image
              src={review.image}
              alt={review.name}
              fill
              style={{ objectFit: "cover" }}
              onError={() => setImgError(true)}
              sizes="60px"
            />
          ) : (
            <FiUser size={22} style={{ color: "#9ca3af" }} />
          )}
        </div>
        <div>
          <h4
            className="review-slide-name"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "1rem",
              fontWeight: 700,
              color: "#012e69",
              margin: 0,
              lineHeight: 1.3,
            }}
          >
            {review.name}
          </h4>
          <p
            className="review-slide-location"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.76rem",
              color: "rgba(26,26,46,0.5)",
              margin: "2px 0 0 0",
            }}
          >
            {review.location}
          </p>
        </div>
      </div>
    </div>
  );
}