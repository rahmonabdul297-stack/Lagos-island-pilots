"use client";

import { useState, useEffect } from "react";
import SplashScreen from "@/components/SplashScreen";

export default function AppWrapper({ children }) {
  const [showSplash, setShowSplash] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if user has already seen the splash screen during this browser session
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");

    if (!hasSeenSplash) {
      setShowSplash(true);
    }
    setIsLoaded(true);
  }, []);

  const handleSplashComplete = () => {
    // Mark splash screen as seen so reloads skip it
    sessionStorage.setItem("hasSeenSplash", "true");
    setShowSplash(false);
  };

  // Prevent UI flashing before reading sessionStorage
  if (!isLoaded) {
    return <div className="min-h-screen bg-bg" />;
  }

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      {children}
    </>
  );
}