"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";

// Updated slides data (text appears inside parallelogram)
const slides = [
  {
    image: "/uni1.jpg",
    heading: "World-Class University Admissions",
    sub: "Navigate the path to prestigious institutions with expert guidance and proven strategies.",
  },
  {
    image: "/uni2.jpg",
    heading: "Scholarship & Funding Support",
    sub: "Unlock financial opportunities and secure the sponsorship your academic journey deserves.",
  },
  {
    image: "/uni3.jpg",
    heading: "Career-Ready Graduates",
    sub: "Bridge the gap between academia and industry with tailored career preparation.",
  },
  {
    image: "/uni4.jpg",
    heading: "Global Academic Excellence",
    sub: "Join a network of professionals placed in top-tier organisations worldwide.",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const goTo = useCallback(
    (dir) => {
      setDirection(dir);
      setCurrent((prev) => {
        if (dir === 1) return (prev + 1) % slides.length;
        return (prev - 1 + slides.length) % slides.length;
      });
    },
    []
  );

  useEffect(() => {
    const timer = setInterval(() => goTo(1), 5000);
    return () => clearInterval(timer);
  }, [goTo]);

  // Preload all images
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = slides.map((slide) => {
        return new Promise((resolve, reject) => {
          const img = new window.Image();
          img.src = slide.image;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error("Failed to preload images:", error);
        setImagesLoaded(true); // Still show content even if some images fail
      }
    };

    preloadImages();
  }, []);

  const imageVariants = {
    enter: (d) => ({
      opacity: 0,
      scale: 1.1,
      x: d > 0 ? 80 : -80,
    }),
    center: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 1, ease: [0.4, 0, 0.2, 1] },
    },
    exit: (d) => ({
      opacity: 0,
      scale: 0.95,
      x: d > 0 ? -80 : 80,
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
    }),
  };

  const textVariants = {
    enter: { opacity: 0, y: 30 },
    center: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: '#012e69' }}
    >
      {/* Full Background Image (Optimized with next/image) */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={imageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 z-0"
        >
          <Image
            src={slides[current].image}
            alt={slides[current].heading}
            fill
            priority={current === 0}
            quality={75}
            sizes="100vw"
            className="object-cover"
            loading={current === 0 ? "eager" : "lazy"}
          />
          {/* Dark overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy/70 via-navy/50 to-navy/80" />
        </motion.div>
      </AnimatePresence>

      {/* Decorative gradient & grid (subtle over image) */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-tr from-navy/40 via-transparent to-gold/5" />
      <div
        className="absolute inset-0 z-[1] opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Loading indicator */}
      {!imagesLoaded && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-navy">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-white/60 text-sm">Loading...</p>
          </div>
        </div>
      )}

      {/* Content Wrapper */}
      <div className="relative z-[2] max-w-7xl mx-auto px-6 w-full py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-screen lg:min-h-0">
          
          {/* Left Side: Parallelogram with Text */}
          <div className="flex items-center justify-center order-1">
            <motion.div
              initial={{ opacity: 0, x: -60, rotate: -2 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="relative w-full max-w-md"
            >
              {/* Parallelogram shape using transforms */}
              <div className="parallelogram-text-box" style={{
                position: 'relative',
                padding: '2.5rem 2rem',
                transform: 'skewX(-5deg)',
                borderRadius: '0.5rem',
                background: 'rgba(1, 46, 105, 0.8)',
                backdropFilter: 'blur(12px)',
                borderLeft: '4px solid #fbba59',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
              }}>
                <div style={{ transform: 'skewX(5deg)' }}>
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                      key={current}
                      custom={direction}
                      variants={textVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="space-y-6"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-[2px]" style={{ backgroundColor: '#fbba59' }} />
                        <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase" style={{ fontFamily: 'var(--font-sans)' }}>
                          Premium British Services
                        </span>
                      </div>
                      
                      <h1 className="text-4xl md:text-5xl xl:text-6xl text-white font-black leading-[1.2]" style={{ fontFamily: 'var(--font-serif)' }}>
                        Your Skills Are{" "}
                        <span className="italic" style={{ color: '#fbba59' }}>Not</span> the Problem
                        <span style={{ color: '#fbba59' }}>.</span>
                      </h1>

                      <p className="text-xl md:text-2xl text-white/80 italic" style={{ fontFamily: 'var(--font-body)' }}>
                        Your presentation is.
                      </p>

                      <p className="text-white/70 text-base max-w-md leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                        We are a British company that helps you land jobs, craft your
                        professional identity, and get your career sorted elegantly
                        and efficiently.
                      </p>

                      {/* Rotating Academic Text inside parallelogram */}
                      <div className="pt-2">
                        <h2 className="text-xl md:text-2xl font-bold mb-2" style={{ color: '#fbba59', fontFamily: 'var(--font-serif)' }}>
                          {slides[current].heading}
                        </h2>
                        <p className="text-white/60 text-sm md:text-base" style={{ fontFamily: 'var(--font-body)' }}>
                          {slides[current].sub}
                        </p>
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex flex-wrap items-center gap-4 pt-4">
                        <a
                          href="#services"
                          className="px-8 py-3 font-bold text-sm rounded-full transition-all duration-300 hover:shadow-lg tracking-wide uppercase"
                          style={{
                            backgroundColor: '#fbba59',
                            color: '#012e69',
                            fontFamily: 'var(--font-sans)'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#e5a540';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '#fbba59';
                          }}
                        >
                          Our Services
                        </a>
                        <a
                          href="https://wa.me/447883169263"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-8 py-3 border-2 text-white font-semibold text-sm rounded-full transition-all duration-300 tracking-wide uppercase"
                          style={{
                            borderColor: 'rgba(255, 255, 255, 0.4)',
                            fontFamily: 'var(--font-sans)'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.borderColor = '#fbba59';
                            e.target.style.color = '#fbba59';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                            e.target.style.color = 'white';
                          }}
                        >
                          Free Consultation
                        </a>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Decorative corners */}
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 z-[3]" style={{ borderColor: 'rgba(251, 186, 89, 0.5)' }} />
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 z-[3]" style={{ borderColor: 'rgba(251, 186, 89, 0.5)' }} />
            </motion.div>
          </div>

          {/* Right Side: Empty / Spacer */}
          <div className="order-2 hidden lg:block">
            {/* This side intentionally left for balance */}
          </div>
        </div>
      </div>

      {/* Arrow Navigation & Slide Indicators */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[3] flex items-center gap-4 px-4 py-2 rounded-full"
        style={{
          background: 'rgba(1, 46, 105, 0.6)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        <button
          onClick={() => goTo(-1)}
          className="hero-arrow"
          aria-label="Previous slide"
          style={{
            width: '40px',
            height: '40px',
            border: '2px solid rgba(255, 255, 255, 0.4)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            background: 'rgba(1, 46, 105, 0.3)',
            backdropFilter: 'blur(8px)',
            color: 'white'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#fbba59';
            e.currentTarget.style.borderColor = '#fbba59';
            e.currentTarget.style.color = '#012e69';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(1, 46, 105, 0.3)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
            e.currentTarget.style.color = 'white';
          }}
        >
          <FiChevronLeft size={18} />
        </button>

        {/* Slide indicators */}
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className={`transition-all duration-500 rounded-full ${
                i === current ? "w-8" : "w-2"
              }`}
              style={{
                height: '6px',
                backgroundColor: i === current ? '#fbba59' : 'rgba(255, 255, 255, 0.4)'
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => goTo(1)}
          className="hero-arrow"
          aria-label="Next slide"
          style={{
            width: '40px',
            height: '40px',
            border: '2px solid rgba(255, 255, 255, 0.4)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            background: 'rgba(1, 46, 105, 0.3)',
            backdropFilter: 'blur(8px)',
            color: 'white'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#fbba59';
            e.currentTarget.style.borderColor = '#fbba59';
            e.currentTarget.style.color = '#012e69';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(1, 46, 105, 0.3)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
            e.currentTarget.style.color = 'white';
          }}
        >
          <FiChevronRight size={18} />
        </button>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 right-8 z-[2] flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase" style={{ fontFamily: 'var(--font-sans)' }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-[1px] h-8"
          style={{
            background: 'linear-gradient(to bottom, rgba(251, 186, 89, 0.6), transparent)'
          }}
        />
      </motion.div>
    </section>
  );
}