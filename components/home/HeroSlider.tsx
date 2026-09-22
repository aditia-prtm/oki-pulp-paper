"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

import { HERO_SLIDES, HERO_CONFIG } from "@/data";

export default function HeroSlider() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Minimum swipe distance in px
  const minSwipeDistance = 50;

  // Parallax Scroll Effect
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 800], [0, 180]);
  const opacityText = useTransform(scrollY, [0, 600], [1, 0.2]);

  // Auto slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % HERO_SLIDES.length);
    }, HERO_CONFIG.autoPlayInterval);

    return () => clearInterval(timer);
  }, [currentIdx]);

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  // Touch Swipe Handlers for Mobile
  const onTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  const activeSlide = HERO_SLIDES[currentIdx];

  return (
    <section 
      id="hero"
      ref={containerRef}
      className="relative w-full h-[88vh] min-h-[620px] max-h-[920px] overflow-hidden bg-[#12161A]"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Background Images with Scale-in and Parallax */}
      <motion.div 
        style={{ y: yBg }} 
        className="absolute inset-0 w-full h-[120%] -top-[10%] pointer-events-none"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.id}
            initial={{ opacity: 0, scale: 1.0 }}
            animate={{ 
              opacity: 1, 
              scale: 1.08,
              transition: { 
                opacity: { duration: 1.2, ease: "easeInOut" },
                scale: { duration: 8.5, ease: "easeOut" }
              } 
            }}
            exit={{ 
              opacity: 0, 
              transition: { duration: 0.9, ease: "easeInOut" } 
            }}
            className="absolute inset-0 w-full h-full pointer-events-none"
          >
            <Image
              src={activeSlide.image}
              alt={activeSlide.title}
              fill
              priority
              className="object-cover object-center transform-gpu"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Modern Gradient Overlays for Readability & Cinematic Look */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/30 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent z-10 pointer-events-none" />

      {/* Main Content Area */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-16 sm:pb-20 md:pb-24 pointer-events-auto">
        <motion.div 
          style={{ opacity: opacityText }}
          className="max-w-3xl"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-4"
            >
              {/* Date Badge */}
              <div className="flex items-center gap-3 flex-wrap">
                <span className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-white/80 uppercase">
                  {activeSlide.date}
                </span>
              </div>

              {/* Editorial Title */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight md:leading-[1.18] tracking-tight drop-shadow-md">
                {activeSlide.title}
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base md:text-lg text-white/85 line-clamp-2 max-w-2xl font-light leading-relaxed">
                {activeSlide.subtitle}
              </p>

              {/* Interactive CTA Link */}
              <div className="pt-2">
                <Link
                  href={activeSlide.link}
                  className="group inline-flex items-center gap-3 text-sm font-semibold tracking-wide text-white hover:text-[#FF4D5E] transition-all relative z-20"
                >
                  <span className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center group-hover:border-[#FF4D5E] group-hover:bg-[#D91A2A] transition-all duration-300 transform group-hover:scale-110">
                    <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
                  </span>
                  <span className="border-b border-transparent group-hover:border-[#FF4D5E] pb-0.5">
                    Lihat Selengkapnya
                  </span>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Navigation Controls: Arrows, Progress & Pagination */}
        <div className="mt-8 pt-6 border-t border-white/15 flex items-center justify-between gap-3 sm:gap-4 relative z-20">
          {/* Progress Indicators */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            {HERO_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setCurrentIdx(idx)}
                aria-label={`Pindah ke slide ${idx + 1}`}
                className="group py-2 sm:py-3 px-0.5 sm:px-1 focus:outline-none flex items-center cursor-pointer"
              >
                <div 
                  className={`h-1.5 sm:h-2 rounded-full transition-all duration-500 relative overflow-hidden ${
                    currentIdx === idx 
                      ? "w-8 sm:w-16 bg-[#D91A2A]" 
                      : "w-4 sm:w-8 bg-white/30 group-hover:bg-white/50"
                  }`}
                >
                  {currentIdx === idx && (
                    <motion.div
                      key={`progress-${idx}-${currentIdx}`}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: HERO_CONFIG.autoPlayInterval / 1000, ease: "linear" }}
                      className="absolute top-0 left-0 bottom-0 bg-white"
                    />
                  )}
                </div>
              </button>
            ))}
            <span className="text-[11px] sm:text-xs font-semibold text-white/70 ml-1.5 sm:ml-2 tracking-wider whitespace-nowrap">
              0{currentIdx + 1} <span className="text-white/30">/</span> 0{HERO_SLIDES.length}
            </span>
          </div>

          {/* Left / Right Nav Arrows (Positioned to the Right) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Slide sebelumnya"
              className="w-10 h-10 sm:w-10 sm:h-10 rounded-full border border-white/25 bg-black/40 backdrop-blur-md text-white flex items-center justify-center hover:bg-[#D91A2A] hover:border-[#D91A2A] active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Slide berikutnya"
              className="w-10 h-10 sm:w-10 sm:h-10 rounded-full border border-white/25 bg-black/40 backdrop-blur-md text-white flex items-center justify-center hover:bg-[#D91A2A] hover:border-[#D91A2A] active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
