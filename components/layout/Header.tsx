"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Globe, 
  ChevronDown, 
  Search, 
  Menu, 
  X, 
  PhoneCall, 
  ArrowUpRight,
  ChevronRight
} from "lucide-react";
import { siteConfig } from "@/data";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<"ID" | "EN">("ID");

  const { navigation, topBar, logo } = siteConfig;

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
    <header className="fixed font-montserrat top-0 left-0 right-0 z-50 transition-all duration-300">
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

          {/* Right Action CTA & Search */}
          <div className="hidden lg:flex items-center space-x-4">
            <button 
              aria-label="Pencarian" 
              className="p-2 rounded-full text-neutral-600 hover:text-[#D91A2A] hover:bg-neutral-100 transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>

            <Link
              href="#products"
              className="inline-flex items-center gap-2 bg-[#D91A2A] hover:bg-[#B31221] text-white text-xs font-semibold uppercase tracking-wider px-4 py-2.5 rounded-lg shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Katalog Produk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
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

      {/* Mobile Right Drawer (75% Width, Right-Aligned) */}
      <div 
        className={`lg:hidden fixed top-0 right-0 bottom-0 w-[75%] max-w-sm bg-white z-50 shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-in-out border-l border-neutral-200 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-100 bg-neutral-50/50">
          <div className="relative w-36 h-8">
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              className="object-contain object-left"
            />
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 rounded-lg text-neutral-600 hover:text-[#D91A2A] hover:bg-neutral-100 focus:outline-none transition-colors"
            aria-label="Tutup Menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Navigation List */}
        <div className="flex-1 overflow-y-auto px-5 py-5 space-y-4 overscroll-contain">
          {navigation.map((item, idx) => (
            <div key={idx} className="border-b border-neutral-100 pb-3 last:border-0">
              <Link
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-base font-semibold text-neutral-800 hover:text-[#D91A2A] py-1"
              >
                <span>{item.name}</span>
                <ChevronRight className="w-4 h-4 text-neutral-400" />
              </Link>
              {item.dropdown && (
                <div className="mt-2 pl-3 space-y-1.5 border-l-2 border-neutral-100">
                  {item.dropdown.map((sub, sIdx) => (
                    <Link
                      key={sIdx}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-xs text-neutral-600 hover:text-[#D91A2A] py-1 transition-colors"
                    >
                      {sub}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Drawer Footer Actions */}
        <div className="p-5 border-t border-neutral-100 bg-neutral-50/60 space-y-3">
          <Link
            href="#products"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full block text-center bg-[#D91A2A] hover:bg-[#B31221] text-white py-2.5 rounded-xl font-semibold text-xs uppercase tracking-wider shadow-md transition-colors"
          >
            Lihat Produk & Spesifikasi
          </Link>
          
          <div className="flex items-center justify-between px-1 text-xs text-neutral-500">
            <span className="font-medium">Bahasa:</span>
            <div className="flex gap-1.5">
              <button 
                onClick={() => setCurrentLang("ID")} 
                className={`px-2.5 py-1 rounded text-xs transition-colors ${currentLang === "ID" ? "bg-[#D91A2A] text-white font-bold" : "bg-white border border-neutral-200 text-neutral-700"}`}
              >
                ID
              </button>
              <button 
                onClick={() => setCurrentLang("EN")} 
                className={`px-2.5 py-1 rounded text-xs transition-colors ${currentLang === "EN" ? "bg-[#D91A2A] text-white font-bold" : "bg-white border border-neutral-200 text-neutral-700"}`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
