"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function SplashScreen({ onComplete }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Hold logo visible for 1.5 seconds, then trigger fade-out animation
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 4000);

    // Completely unmount after fade-out transition (2 seconds total)
    const removeTimer = setTimeout(() => {
      onComplete();
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-bg transition-opacity duration-500 ${
        fadeOut ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center">
        <Image
          src="/images/logo.png"
          alt="Lagos Island Pilots Logo"
          width={120}
          height={120}
          priority
          className="h-28 w-28 animate-pulse object-contain sm:h-32 sm:w-32"
        />
        <h1 className="mt-4 font-display text-lg font-bold uppercase tracking-wider text-blue-800 sm:text-xl">
          Lagos Island Pilots
        </h1>
        <p className="mt-1 text-xs text-soft-blue">
          Subsidiary of FSTCY School Bus Shuttle Operators Association
        </p>
      </div>
    </div>
  );
}