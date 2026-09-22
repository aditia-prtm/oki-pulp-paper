"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Globe, 
  ChevronDown, 
  Search, 
  Menu, 
  X, 
  PhoneCall, 
  ArrowUpRight
} from "lucide-react";
import { siteConfig } from "@/data";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<"ID" | "EN">("ID");
  const [expandedMenus, setExpandedMenus] = useState<number[]>([]);

  const { navigation, topBar, logo } = siteConfig;

  const toggleMenu = (idx: number) => {
    setExpandedMenus((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [mobileMenuOpen]);

  return (
    <header className="sticky font-montserrat top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Red Utility Bar (Matching OKI & Corporate Brand Style) */}
      <div 
        className={`bg-[#D91A2A] text-white text-xs font-medium tracking-wide transition-all duration-300 ${
          isScrolled ? "h-0 opacity-0 overflow-hidden py-0" : "py-2 opacity-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="hidden sm:inline-block font-semibold uppercase tracking-wider text-[11px] text-white/90">
              {topBar.announcement}
            </span>
          </div>
          
          <div className="flex items-center space-x-5">
            <a 
              href="#network" 
              className="hover:text-white/80 transition-colors uppercase tracking-wider text-[11px] flex items-center gap-1.5"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{topBar.globalNetworkText}</span>
            </a>
            
            <span className="text-white/40">|</span>
            
            <a 
              href="#contact" 
              className="hover:text-white/80 transition-colors uppercase tracking-wider text-[11px] flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>{topBar.contactText}</span>
            </a>
            
            <span className="text-white/40">|</span>
            
            {/* Language Switcher */}
            <div className="relative">
              <button 
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1 uppercase tracking-wider text-[11px] font-semibold hover:text-white/80 focus:outline-none"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-300 inline-block animate-pulse"></span>
                <span>Language: {currentLang === "ID" ? "Indonesia" : "English"}</span>
                <ChevronDown className="w-3 h-3 ml-0.5" />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white text-neutral-800 rounded-lg shadow-xl border border-neutral-100 py-1.5 text-xs z-50">
                  <button 
                    onClick={() => { setCurrentLang("ID"); setLangDropdownOpen(false); }}
                    className={`w-full text-left px-4 py-2 flex items-center justify-between hover:bg-neutral-50 ${currentLang === "ID" ? "font-bold text-[#D91A2A]" : ""}`}
                  >
                    <span>Bahasa Indonesia</span>
                    {currentLang === "ID" && <span className="w-1.5 h-1.5 rounded-full bg-[#D91A2A]"></span>}
                  </button>
                  <button 
                    onClick={() => { setCurrentLang("EN"); setLangDropdownOpen(false); }}
                    className={`w-full text-left px-4 py-2 flex items-center justify-between hover:bg-neutral-50 ${currentLang === "EN" ? "font-bold text-[#D91A2A]" : ""}`}
                  >
                    <span>English</span>
                    {currentLang === "EN" && <span className="w-1.5 h-1.5 rounded-full bg-[#D91A2A]"></span>}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Navbar */}
      <div 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-neutral-200/80" 
            : "bg-white/90 backdrop-blur-sm py-4 border-b border-neutral-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center group relative z-10">
            <div className="relative w-48 sm:w-56 h-10 transition-transform group-hover:scale-[1.02]">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navigation.map((item, idx) => (
              <div key={idx} className="relative group">
                <Link
                  href={item.href}
                  className="px-3 py-2 text-[14px] font-medium text-neutral-700 hover:text-[#D91A2A] transition-colors flex items-center gap-1 rounded-md hover:bg-neutral-50"
                >
                  <span>{item.name}</span>
                  {item.dropdown && (
                    <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-200" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-2xl border border-neutral-100 py-2.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                    <div className="px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                      {item.name}
                    </div>
                    {item.dropdown.map((subItem, sIdx) => (
                      <Link
                        key={sIdx}
                        href={item.href}
                        className="block px-4 py-2 text-[13px] text-neutral-600 hover:text-[#D91A2A] hover:bg-neutral-50/80 transition-colors"
                      >
                        {subItem}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Search */}
          <div className="hidden lg:flex items-center space-x-4">
            <button 
              aria-label="Pencarian" 
              className="p-2 rounded-full text-neutral-600 hover:text-[#D91A2A] hover:bg-neutral-100 transition-colors"
            >
              <Search strokeWidth={3} className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button 
              aria-label="Pencarian" 
              className="p-2 text-neutral-700 hover:text-[#D91A2A]"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-700 hover:text-[#D91A2A] hover:bg-neutral-100 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      <div 
        className={`lg:hidden fixed inset-0 bg-black/60 backdrop-blur-xs z-40 transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Right Drawer */}
      <div 
        className={`lg:hidden fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-50 shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-in-out border-l border-neutral-200/60 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header with Close Button */}
        <div className="flex items-center justify-between px-6 pt-6 pb-2">
          <div className="relative w-32 h-7">
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              className="object-contain object-left"
            />
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="w-10 h-10 rounded-lg border border-neutral-300/60 bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-500 hover:text-neutral-900 focus:outline-none transition-colors cursor-pointer shadow-xs"
            aria-label="Tutup Menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Navigation List with Accordion Sub-menus */}
        <div className="flex-1 overflow-y-auto px-6 sm:px-8 py-5 space-y-4 overscroll-contain">
          {navigation.map((item, idx) => {
            const hasSubmenu = Boolean(item.dropdown && item.dropdown.length > 0);
            const isExpanded = expandedMenus.includes(idx);

            return (
              <div key={idx} className="transition-colors">
                <div className="flex items-center justify-between py-1">
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[17px] sm:text-[18px] text-neutral-800 hover:text-[#D91A2A] transition-colors font-normal tracking-tight"
                  >
                    {item.name}
                  </Link>

                  {hasSubmenu && (
                    <button
                      type="button"
                      onClick={() => toggleMenu(idx)}
                      aria-label={`Toggle sub menu ${item.name}`}
                      aria-expanded={isExpanded}
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-md bg-neutral-100 hover:bg-neutral-200 active:bg-neutral-400 flex items-center justify-center transition-colors cursor-pointer text-neutral-800"
                    >
                      <ChevronDown
                        className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* Animated Dropdown Submenu */}
                <AnimatePresence initial={false}>
                  {hasSubmenu && isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-3 pb-2 pl-2 space-y-3.5">
                        {item.dropdown!.map((sub, sIdx) => (
                          <Link
                            key={sIdx}
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-[14.5px] text-neutral-700 hover:text-[#D91A2A] transition-colors leading-relaxed font-normal"
                          >
                            {sub}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          {/* Language Switcher (ID EN) */}
          <div className="flex items-center gap-4 text-[16px] pt-8 pb-4 text-neutral-800 border-t border-neutral-200/60 mt-4">
            <button
              type="button"
              onClick={() => setCurrentLang("ID")}
              className={`transition-colors cursor-pointer ${
                currentLang === "ID" ? "font-bold text-neutral-900" : "font-normal text-neutral-500 hover:text-neutral-800"
              }`}
            >
              ID
            </button>
            <button
              type="button"
              onClick={() => setCurrentLang("EN")}
              className={`transition-colors cursor-pointer ${
                currentLang === "EN" ? "font-bold text-neutral-900" : "font-normal text-neutral-500 hover:text-neutral-800"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
