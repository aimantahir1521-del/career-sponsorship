"use client";
import { motion } from "framer-motion";

const words = [
  "ATS Resumes",
  "Cover Letters",
  "LinkedIn Revamping",
  "Interview Coaching",
  "Job Applications",
  "Mock Interviews",
  "Career Guidance",
  "Internship Certificates",
  "Professional References",
  "Confidence Building",
];

export default function MarqueeSection() {
  const doubled = [...words, ...words];

  return (
    <section className="relative py-8 bg-navy overflow-hidden">
      <div className="relative">
        <motion.div 
          className="marquee-track flex gap-12 whitespace-nowrap"
          animate={{ x: [0, -1920] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {doubled.map((word, i) => (
            <span key={i} className="flex items-center gap-12">
              <span className="font-heading text-base md:text-lg font-semibold text-white/40 hover:text-gold transition-colors duration-300 tracking-wider uppercase">
                {word}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold/60" />
            </span>
          ))}
        </motion.div>
      </div>

      {/* Fade edges */}
      <div className="absolute top-0 left-0 w-32 h-full bg-navy pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-full bg-navy pointer-events-none" />
    </section>
  );
}