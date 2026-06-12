// src/app/page.js
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootPage() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace("/home");
  }, [router]);
  
  // Show a loading spinner or null while redirecting
  return (
    <div style={{ 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center", 
      minHeight: "100vh",
      background: "#012e69"
    }}>
      <div style={{ color: "#fbba59", fontFamily: "'Inter', sans-serif" }}>
        Loading...
      </div>
    </div>
  );
}