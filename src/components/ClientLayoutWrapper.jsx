// src/components/ClientLayoutWrapper.jsx
"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ReviewsCarouselDialog from "@/components/ReviewsCarouselDialog";

export default function ClientLayoutWrapper({ children }) {
  const pathname = usePathname();
  const [key, setKey] = useState(0);

  useEffect(() => {
    // Force re-render when route changes to reset animations
    setKey(prev => prev + 1);
    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <>
      <div key={key}>{children}</div>
      <ReviewsCarouselDialog />
    </>
  );
}