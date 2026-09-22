"use client";

import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const companyIntroSection = document.getElementById("about");
      if (companyIntroSection) {
        const rect = companyIntroSection.getBoundingClientRect();
        const isBelowCompanyIntro = rect.top < 0;
        setIsVisible(isBelowCompanyIntro);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-oki-red hover:bg-oki-red-dark active:bg-oki-red-light text-white flex items-center justify-center cursor-pointer touch-manipulation shadow-lg hover:shadow-xl z-40"
          aria-label="Kembali ke atas"
        >
          <motion.div
            initial={{ rotate: 0 }}
            whileHover={{ rotate: -10 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronUp className="w-5 h-5" />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
