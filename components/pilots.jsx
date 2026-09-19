"use client";

import { useRef, useState } from "react";
import { FaBus, FaChevronLeft, FaChevronRight, FaUserShield } from "react-icons/fa";

export default function PilotsSlider({ pilots = [] }) {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Scroll handler for Previous / Next buttons
  const scrollToSlide = (index) => {
    if (!sliderRef.current) return;
    const width = sliderRef.current.offsetWidth;
    sliderRef.current.scrollTo({
      left: width * index,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  // Update pagination indicator on manual swipe
  const handleScroll = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, offsetWidth } = sliderRef.current;
    const newIndex = Math.round(scrollLeft / offsetWidth);
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <div className="relative mt-8">
      {/* Navigation Controls */}
      <div className="mb-4 flex items-center justify-between">
        {/* Slide Counter Indicator */}
        <p className="text-xs font-semibold text-muted">
          Showing <span className="text-brand font-bold">{activeIndex + 1}</span> of {pilots.length} Pilots
        </p>

        {/* Prev / Next Arrow Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollToSlide(Math.max(0, activeIndex - 1))}
            disabled={activeIndex === 0}
            className="grid size-10 place-items-center rounded-full border border-line bg-surface text-ink shadow-xs transition-all duration-200 hover:border-brand hover:text-brand disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Previous Pilot"
          >
            <FaChevronLeft className="text-sm" />
          </button>
          <button
            type="button"
            onClick={() => scrollToSlide(Math.min(pilots.length - 1, activeIndex + 1))}
            disabled={activeIndex === pilots.length - 1}
            className="grid size-10 place-items-center rounded-full border border-line bg-surface text-ink shadow-xs transition-all duration-200 hover:border-brand hover:text-brand disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Next Pilot"
          >
            <FaChevronRight className="text-sm" />
          </button>
        </div>
      </div>

      {/* Touch-scrollable Slider Container */}
      <div
        ref={sliderRef}
        onScroll={handleScroll}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 no-scrollbar"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {pilots.map((pilot) => (
          <article
            key={pilot.id}
            className="group relative flex w-[90%] shrink-0 snap-center flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
          >
            {/* Pilot Image Container */}
            <div className="relative w-full overflow-hidden bg-brand/5">
              <img
                src={pilot.image}
                alt={pilot.name}
                className="transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />

              {/* Fallback avatar icon container */}
              <div className="absolute inset-0 -z-10 grid place-items-center bg-brand/10 text-brand/40">
                <FaUserShield className="text-6xl" />
              </div>
            </div>

            {/* Pilot Information */}
            <div className="flex flex-1 flex-col justify-between p-5">
              <div>
                <h3 className="font-display text-lg font-bold capitalize tracking-tight text-ink transition-colors group-hover:text-brand">
                  {pilot.name}
                </h3>
                <p className="mt-1 text-xs font-semibold capitalize text-brand">
                  {pilot.role}
                </p>
              </div>

              <div className="mt-4 space-y-1.5 border-t border-line/60 pt-3 text-xs text-muted">
                <p className="flex items-center gap-1.5">
                  <FaBus className="shrink-0 text-brand" />
                  <span>{pilot.route}</span>
                </p>
                <p className="font-medium text-ink/80">
                  {pilot.experience}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="mt-4 flex items-center justify-center gap-2">
        {pilots.map((pilot, idx) => (
          <button
            key={pilot.id}
            type="button"
            onClick={() => scrollToSlide(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeIndex === idx ? "w-6 bg-brand" : "w-2 bg-line hover:bg-brand/50"
            }`}
            aria-label={`Go to pilot ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}