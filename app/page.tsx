import React from "react";
import Header from "@/components/layout/Header";
import HeroSlider from "@/components/home/HeroSlider";
import CompanyIntro from "@/components/home/CompanyIntro";
import ProductCards from "@/components/home/ProductCards";
import StatsSection from "@/components/home/StatsSection";
import SustainabilitySection from "@/components/home/SustainabilitySection";
import NewsSection from "@/components/home/NewsSection";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header with Top Red Utility Bar & Sticky Navigation */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Section with Parallax, Scale-in Smooth Zoom & News Carousel (without bottom floating boxes) */}
        <HeroSlider />

        {/* Company Statement & Core Pillars (Merdeka Copper Gold Style) */}
        <CompanyIntro />

        {/* 4 Product Cards Grid with "Read More" CTA (Replacing Copper Gold 4 News Cards) */}
        <ProductCards />

        {/* Operational Capabilities & Mill Scale Metrics */}
        <StatsSection />

        {/* Sustainability & ESG Commitment */}
        <SustainabilitySection />

        {/* Latest News & Press Releases */}
        <NewsSection />
      </main>

      {/* Corporate Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}
