"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  FiStar,
  FiUser,
  FiMessageCircle,
  FiCheckCircle,
  FiClock,
  FiThumbsUp,
  FiAward,
  FiTrendingUp,
  FiHeart,
  FiX,
  FiSend,
} from "react-icons/fi";
import {
  HiOutlineSparkles,
  HiOutlineUserGroup,
  HiOutlineChatBubbleLeftRight,
  HiOutlinePencilSquare,
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
  visible: { transition: { staggerChildren: 0.08 } },
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
   FAKE REVIEWS DATA (30 REVIEWS)
   ═══════════════════════════════════════════════ */

// Male reviews (1.jpg to 18.jpg) - 18 male reviews
const MALE_REVIEWS = [
  { name: "Rahul Sharma", location: "Mumbai, India", rating: 5, review: "Got interview calls within 2 weeks! Resume game changer. Highly recommend!", image: "/1.jpg", date: "2024-03-15" },
  { name: "Amit Patel", location: "Ahmedabad, India", rating: 5, review: "LinkedIn revamp brought recruiters to my inbox. Landed dream job at Google!", image: "/2.jpg", date: "2024-03-10" },
  { name: "Vikram Singh", location: "Delhi, India", rating: 5, review: "Interview coaching was top notch. Cleared Amazon interview easily.", image: "/3.jpg", date: "2024-03-05" },
  { name: "Rajan Kumar", location: "Bangalore, India", rating: 5, review: "ATS resume opened many doors. Got 8 interview calls in one month!", image: "/4.jpg", date: "2024-02-28" },
  { name: "Suresh Reddy", location: "Hyderabad, India", rating: 4, review: "Good service but slight delay in response. Still got job offer though!", image: "/5.jpg", date: "2024-02-25" },
  { name: "Arjun Nair", location: "Chennai, India", rating: 5, review: "Career sponsorship changed my life. Forever grateful!", image: "/6.jpg", date: "2024-02-20" },
  { name: "Manish Joshi", location: "Pune, India", rating: 5, review: "Cover letter got me noticed by top firms. Worth every penny!", image: "/7.jpg", date: "2024-02-18" },
  { name: "Deepak Verma", location: "Lucknow, India", rating: 5, review: "Mock interview practice built my confidence. Cleared 4 rounds easily!", image: "/8.jpg", date: "2024-02-15" },
  { name: "Kunal Mehta", location: "Jaipur, India", rating: 4, review: "Good overall support. Placement took time but worth the wait.", image: "/9.jpg", date: "2024-02-10" },
  { name: "Pankaj Tiwari", location: "Bhopal, India", rating: 5, review: "Got salary doubled after their negotiation tips. Amazing team!", image: "/10.jpg", date: "2024-02-05" },
  { name: "Rohit Khanna", location: "Chandigarh, India", rating: 5, review: "Job application support saved me so much time. Very professional!", image: "/11.jpg", date: "2024-01-30" },
  { name: "Ankit Malhotra", location: "Kolkata, India", rating: 5, review: "Best investment for my career. Still recommend to friends!", image: "/12.jpg", date: "2024-01-28" },
  { name: "Shahid Aziz", location: "Lucknow, India", rating: 5, review: "As a Muslim professional, they understood my needs perfectly. JazakAllah!", image: "/13.jpg", date: "2024-01-25" },
  { name: "Vijay Shetty", location: "Mangalore, India", rating: 5, review: "Got promoted within 3 months using their resume strategies!", image: "/14.jpg", date: "2024-01-20" },
  { name: "Rajesh Gupta", location: "Agra, India", rating: 4, review: "Good service but pricey. However results delivered.", image: "/15.jpg", date: "2024-01-15" },
  { name: "Sunil Rao", location: "Mysore, India", rating: 5, review: "LinkedIn profile now attracts recruiters daily. Highly satisfied!", image: "/16.jpg", date: "2024-01-10" },
  { name: "Nitin Sawant", location: "Nashik, India", rating: 5, review: "Interview techniques were eye-opening. Cracked MNC interview!", image: "/17.jpg", date: "2024-01-05" },
  { name: "Gaurav Sinha", location: "Patna, India", rating: 5, review: "They supported me throughout my job search journey. Forever thankful!", image: "/18.jpg", date: "2024-01-01" },
];

// Female reviews (19.jpg to 30.jpg) - 12 female reviews
// Muslim female at index 2 (21.jpg)
const FEMALE_REVIEWS = [
  { name: "Priya Desai", location: "Mumbai, India", rating: 5, review: "Resume was perfectly crafted. Got shortlisted for 6 companies!", image: "/19.jpg", date: "2024-03-12" },
  { name: "Humaira Akhtar", location: "Delhi, India", rating: 5, review: "Career guidance helped me switch industry smoothly. Amazing support!", image: "/20.jpg", date: "2024-03-08" },
  { name: "Neha Gupta", location: "Hyderabad, India", rating: 5, review: "MashaAllah! Best career decision I made. Got dream job at Microsoft!", image: "/21.jpg", date: "2024-03-03", isMuslim: true },
  { name: "Anjali Menon", location: "Kochi, India", rating: 5, review: "LinkedIn optimization made me visible to top recruiters globally!", image: "/22.jpg", date: "2024-02-26" },
  { name: "Sneha Reddy", location: "Bangalore, India", rating: 5, review: "Mock interviews were intense but effective. Cleared FAANG interview!", image: "/23.jpg", date: "2024-02-22" },
  { name: "Kavita Singh", location: "Jaipur, India", rating: 4, review: "Good experience overall. Got job after 2 months of support.", image: "/24.jpg", date: "2024-02-16" },
  { name: "Divya Sharma", location: "Chandigarh, India", rating: 5, review: "Cover letter got me noticed by dream company. Forever grateful!", image: "/25.jpg", date: "2024-02-12" },
  { name: "Shruti Iyer", location: "Pune, India", rating: 5, review: "Interview coaching built my confidence. Got offer letter within weeks!", image: "/26.jpg", date: "2024-02-08" },
  { name: "Pooja Verma", location: "Lucknow, India", rating: 5, review: "Sponsorship program helped me when I couldn't afford services. Blessings!", image: "/27.jpg", date: "2024-02-01" },
  { name: "Riya Bansal", location: "Indore, India", rating: 5, review: "Job application support saved months of effort. Highly recommended!", image: "/28.jpg", date: "2024-01-27" },
  { name: "Tanvi Kulkarni", location: "Nagpur, India", rating: 5, review: "ATS resume opened doors at top companies. Landed 3 offers!", image: "/29.jpg", date: "2024-01-22" },
  { name: "Meera Nair", location: "Thiruvananthapuram, India", rating: 5, review: "Best career investment ever. Team is super supportive throughout!", image: "/30.jpg", date: "2024-01-18" },
];

const ALL_FAKE_REVIEWS = [...MALE_REVIEWS, ...FEMALE_REVIEWS];

// Calculate overall stats
const totalReviews = ALL_FAKE_REVIEWS.length;
const averageRating = (ALL_FAKE_REVIEWS.reduce((sum, r) => sum + r.rating, 0) / totalReviews).toFixed(1);
const fiveStarCount = ALL_FAKE_REVIEWS.filter(r => r.rating === 5).length;

/* ═══════════════════════════════════════════════
   REVIEWS PAGE MAIN COMPONENT
   ═══════════════════════════════════════════════ */

export default function ReviewsPage() {
  const [userReviews, setUserReviews] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [userName, setUserName] = useState("");
  const [userLocation, setUserLocation] = useState("");
  const [userImage, setUserImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load user reviews from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("userReviews");
    if (stored) {
      try {
        setUserReviews(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse stored reviews");
      }
    }
  }, []);

  // Save user reviews to localStorage
  const saveReviewToStorage = (newReview) => {
    const updated = [...userReviews, newReview];
    setUserReviews(updated);
    localStorage.setItem("userReviews", JSON.stringify(updated));
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    
    if (rating === 0) {
      setModalMessage("Please select a star rating before submitting.");
      setShowModal(true);
      return;
    }
    
    if (!reviewText.trim()) {
      setModalMessage("Please write your review before submitting.");
      setShowModal(true);
      return;
    }
    
    if (!userName.trim()) {
      setModalMessage("Please enter your name before submitting.");
      setShowModal(true);
      return;
    }

    setIsSubmitting(true);

    // Simulate API call / monitoring delay
    setTimeout(() => {
      const newReview = {
        id: Date.now(),
        name: userName.trim(),
        location: userLocation.trim() || "Anonymous Location",
        rating: rating,
        review: reviewText.trim(),
        image: userImage || null,
        date: new Date().toISOString().split('T')[0],
        isUserReview: true,
        status: "pending"
      };
      
      saveReviewToStorage(newReview);
      
      // Reset form
      setRating(0);
      setReviewText("");
      setUserName("");
      setUserLocation("");
      setUserImage(null);
      
      setModalMessage("Thank you for your review! 📝\n\nYour review is under monitoring and will be posted shortly after our team reviews it for quality guidelines.");
      setShowModal(true);
      setIsSubmitting(false);
    }, 1500);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const allReviews = [...ALL_FAKE_REVIEWS, ...userReviews];
  const pendingUserReviews = userReviews.filter(r => r.status === "pending");

  return (
    <main style={{ overflowX: "hidden" }}>
      <Navbar />

      {/* Hero Section */}
      <ReviewsHeroSection />

      {/* Stats Section - No total review count shown */}
      <StatsSection averageRating={averageRating} fiveStarCount={fiveStarCount} />

      {/* Reviews List Section - Shows first */}
      <ReviewsListSection allReviews={allReviews} pendingUserReviews={pendingUserReviews} />

      {/* Review Form Section - Shows after reviews */}
      <ReviewFormSection
        rating={rating}
        setRating={setRating}
        hoverRating={hoverRating}
        setHoverRating={setHoverRating}
        reviewText={reviewText}
        setReviewText={setReviewText}
        userName={userName}
        setUserName={setUserName}
        userLocation={userLocation}
        setUserLocation={setUserLocation}
        userImage={userImage}
        setUserImage={setUserImage}
        handleImageUpload={handleImageUpload}
        handleSubmitReview={handleSubmitReview}
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

function ReviewsHeroSection() {
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
          <HiOutlineUserGroup size={48} style={{ color: "#fbba59", margin: "0 auto 20px" }} />
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
            What Our{" "}
            <span style={{ color: "#fbba59" }}>Clients Say</span>
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
            Real stories from real people who transformed their careers with our help.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   STATS SECTION - No total review count
   ═══════════════════════════════════════════════ */

function StatsSection({ averageRating, fiveStarCount }) {
  return (
    <Section>
      <div style={{ padding: "3rem 0", background: "#ffffff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem", width: "100%" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(1, 1fr)",
              gap: 24,
              textAlign: "center",
            }}
            className="sm:!grid-cols-2"
          >
            <motion.div
              variants={scaleIn}
              style={{
                padding: 32,
                background: "#fdf8f0",
                borderRadius: 24,
                border: "1px solid rgba(1,46,105,0.06)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "center", gap: 4, marginBottom: 12 }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <FiStar key={star} size={28} fill="#fbba59" stroke="#fbba59" />
                ))}
              </div>
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "2rem",
                  fontWeight: 700,
                  color: "#012e69",
                }}
              >
                {averageRating}
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.85rem",
                  color: "rgba(26,26,46,0.6)",
                }}
              >
                Average Rating
              </div>
            </motion.div>

            <motion.div
              variants={scaleIn}
              style={{
                padding: 32,
                background: "#fdf8f0",
                borderRadius: 24,
                border: "1px solid rgba(1,46,105,0.06)",
              }}
            >
              <FiAward size={40} style={{ color: "#fbba59", margin: "0 auto 12px" }} />
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "2rem",
                  fontWeight: 700,
                  color: "#012e69",
                }}
              >
                {fiveStarCount}+
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.85rem",
                  color: "rgba(26,26,46,0.6)",
                }}
              >
                5-Star Reviews
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════════
   REVIEWS LIST SECTION (Shown First)
   ═══════════════════════════════════════════════ */

function ReviewsListSection({ allReviews, pendingUserReviews }) {
  const [filter, setFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(12);

  const filteredReviews = allReviews.filter(review => {
    if (filter === "5star") return review.rating === 5;
    if (filter === "4star") return review.rating === 4;
    return true;
  });

  const displayedReviews = filteredReviews.slice(0, visibleCount);
  const hasMore = visibleCount < filteredReviews.length;

  return (
    <Section id="reviews-list">
      <div style={{ padding: "4rem 0 3rem", background: "#ffffff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem", width: "100%" }}>
          <SectionHeader tag="Happy Clients" title="What They Say About Us" />

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", marginBottom: 32, gap: 16 }}>
            <div style={{ display: "flex", gap: 12 }}>
              <button
                onClick={() => setFilter("all")}
                style={{
                  padding: "6px 16px",
                  borderRadius: 40,
                  border: `1px solid ${filter === "all" ? "#fbba59" : "rgba(1,46,105,0.2)"}`,
                  background: filter === "all" ? "#fbba59" : "transparent",
                  color: filter === "all" ? "#012e69" : "rgba(26,26,46,0.6)",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.8rem",
                  cursor: "pointer",
                }}
              >
                All Reviews
              </button>
              <button
                onClick={() => setFilter("5star")}
                style={{
                  padding: "6px 16px",
                  borderRadius: 40,
                  border: `1px solid ${filter === "5star" ? "#fbba59" : "rgba(1,46,105,0.2)"}`,
                  background: filter === "5star" ? "#fbba59" : "transparent",
                  color: filter === "5star" ? "#012e69" : "rgba(26,26,46,0.6)",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.8rem",
                  cursor: "pointer",
                }}
              >
                5 Stars Only
              </button>
              <button
                onClick={() => setFilter("4star")}
                style={{
                  padding: "6px 16px",
                  borderRadius: 40,
                  border: `1px solid ${filter === "4star" ? "#fbba59" : "rgba(1,46,105,0.2)"}`,
                  background: filter === "4star" ? "#fbba59" : "transparent",
                  color: filter === "4star" ? "#012e69" : "rgba(26,26,46,0.6)",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.8rem",
                  cursor: "pointer",
                }}
              >
                4 Stars Only
              </button>
            </div>
          </div>

          {/* Pending Reviews Notice */}
          {pendingUserReviews.length > 0 && (
            <div
              style={{
                background: "rgba(251,186,89,0.1)",
                borderLeft: `4px solid #fbba59`,
                padding: "12px 20px",
                borderRadius: 12,
                marginBottom: 24,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <FiClock size={20} color="#fbba59" />
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "#012e69" }}>
                  You have {pendingUserReviews.length} review(s) pending moderation. They will appear here once approved.
                </span>
              </div>
            </div>
          )}

          <motion.div
            variants={staggerContainer}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(1, 1fr)",
              gap: 24,
            }}
            className="md:!grid-cols-2 lg:!grid-cols-3"
          >
            {displayedReviews.map((review, idx) => (
              <ReviewCard key={review.id || idx} review={review} />
            ))}
          </motion.div>

          {hasMore && (
            <div style={{ textAlign: "center", marginTop: 48 }}>
              <motion.button
                whileHover={{ y: -2 }}
                onClick={() => setVisibleCount(prev => prev + 12)}
                style={{
                  padding: "12px 32px",
                  background: "transparent",
                  border: "2px solid #012e69",
                  borderRadius: 40,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  color: "#012e69",
                  cursor: "pointer",
                }}
              >
                Load More Reviews
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}

function ReviewCard({ review }) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4 }}
      style={{
        background: "#fdf8f0",
        borderRadius: 20,
        padding: 24,
        border: "1px solid rgba(1,46,105,0.06)",
        transition: "all 0.3s ease",
        position: "relative",
      }}
    >
      {/* Rating Stars */}
      <div style={{ display: "flex", gap: 4, marginBottom: 12 }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <FiStar
            key={star}
            size={16}
            fill={star <= review.rating ? "#fbba59" : "none"}
            stroke="#fbba59"
          />
        ))}
      </div>

      {/* Review Text */}
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.9rem",
          color: "rgba(26,26,46,0.7)",
          lineHeight: 1.6,
          marginBottom: 16,
          fontStyle: "italic",
        }}
      >
        "{review.review}"
      </p>

      {/* User Info */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            overflow: "hidden",
            background: "#e5e7eb",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {review.image && !imageError ? (
            <Image
              src={review.image}
              alt={review.name}
              fill
              style={{ objectFit: "cover" }}
              onError={() => setImageError(true)}
            />
          ) : (
            <FiUser size={24} style={{ color: "#9ca3af" }} />
          )}
        </div>
        <div>
          <h4
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "0.95rem",
              fontWeight: 700,
              color: "#012e69",
            }}
          >
            {review.name}
          </h4>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.7rem",
              color: "rgba(26,26,46,0.5)",
            }}
          >
            {review.location}
          </p>
        </div>
      </div>

      {/* Date */}
      <div
        style={{
          marginTop: 12,
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.65rem",
          color: "rgba(26,26,46,0.4)",
        }}
      >
        Reviewed on {new Date(review.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
      </div>

      {/* User Review Badge */}
      {review.isUserReview && review.status === "pending" && (
        <div
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            background: "#fbba59",
            padding: "4px 8px",
            borderRadius: 20,
            fontSize: "0.6rem",
            fontWeight: 600,
            color: "#012e69",
          }}
        >
          Under Review
        </div>
      )}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════
   REVIEW FORM SECTION (Shown After Reviews)
   ═══════════════════════════════════════════════ */

function ReviewFormSection({
  rating,
  setRating,
  hoverRating,
  setHoverRating,
  reviewText,
  setReviewText,
  userName,
  setUserName,
  userLocation,
  setUserLocation,
  userImage,
  handleImageUpload,
  handleSubmitReview,
  isSubmitting,
}) {
  return (
    <Section id="write-review">
      <div style={{ padding: "4rem 0 6rem", background: "#fdf8f0" }}>
        <div style={{ maxWidth: 896, margin: "0 auto", padding: "0 2rem", width: "100%" }}>
          <SectionHeader tag="Share Your Experience" title="Write a Review" />

          <motion.div
            variants={fadeUp}
            style={{
              background: "#ffffff",
              borderRadius: 24,
              padding: 32,
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            }}
          >
            <form onSubmit={handleSubmitReview}>
              {/* Star Rating */}
              <div style={{ marginBottom: 24 }}>
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
                  Your Rating *
                </label>
                <div style={{ display: "flex", gap: 8 }}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                      }}
                    >
                      <FiStar
                        size={32}
                        fill={(hoverRating || rating) >= star ? "#fbba59" : "none"}
                        stroke="#fbba59"
                        style={{
                          transition: "all 0.2s ease",
                          transform: (hoverRating || rating) >= star ? "scale(1.05)" : "scale(1)",
                        }}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Review Text */}
              <div style={{ marginBottom: 24 }}>
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
                  Your Review *
                </label>
                <textarea
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  rows={4}
                  placeholder="Share your experience with our services..."
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: 12,
                    border: "1px solid rgba(1,46,105,0.2)",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9rem",
                    resize: "vertical",
                  }}
                />
              </div>

              {/* Name */}
              <div style={{ marginBottom: 24 }}>
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
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Enter your name"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: 12,
                    border: "1px solid rgba(1,46,105,0.2)",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9rem",
                  }}
                />
              </div>

              {/* Location */}
              <div style={{ marginBottom: 24 }}>
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
                  Your Location
                </label>
                <input
                  type="text"
                  value={userLocation}
                  onChange={(e) => setUserLocation(e.target.value)}
                  placeholder="e.g., Mumbai, India"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: 12,
                    border: "1px solid rgba(1,46,105,0.2)",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9rem",
                  }}
                />
              </div>

              {/* Profile Photo Upload */}
              <div style={{ marginBottom: 24 }}>
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
                  Profile Photo (Optional)
                </label>
                <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                  <label
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "10px 20px",
                      background: "#fdf8f0",
                      border: "1px solid rgba(1,46,105,0.2)",
                      borderRadius: 40,
                      cursor: "pointer",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.85rem",
                      color: "#012e69",
                    }}
                  >
                    <FiUser size={16} />
                    Upload Photo
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      style={{ display: "none" }}
                    />
                  </label>
                  {userImage && (
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: "50%",
                          overflow: "hidden",
                          position: "relative",
                        }}
                      >
                        <Image
                          src={userImage}
                          alt="Profile preview"
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => setUserImage(null)}
                        style={{
                          background: "none",
                          border: "none",
                          color: "#9ca3af",
                          cursor: "pointer",
                        }}
                      >
                        <FiX size={16} />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Submit Button */}
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
                  <>Submitting...</>
                ) : (
                  <>Submit Review <HiOutlinePencilSquare size={16} /></>
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