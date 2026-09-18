"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Leaf, Factory, Award } from "lucide-react";
import { motion } from "framer-motion";
import { companyIntroData } from "@/data";

const iconMap = {
  Leaf,
  Factory,
  Award,
  ShieldCheck,
};

export default function CompanyIntro() {
  const { 
    tag, 
    companyNameHighlighted, 
    headlineRest, 
    description, 
    buttons, 
    cards, 
    certificationsCard 
  } = companyIntroData;

  return (
    <section id="about" className="relative py-20 lg:py-28 bg-[#FCFCFA] border-b border-neutral-200/70 overflow-hidden">
      {/* Subtle Background Paper Grain Texture & Ambient Accents */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Big Editorial Statement */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 space-y-6"
          >
            {/* Section Tag */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-[3px] bg-[#D91A2A]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#D91A2A]">
                {tag}
              </span>
            </div>

            {/* Editorial Headline Statement */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1E232A] leading-relaxed sm:leading-relaxed lg:leading-[1.4] tracking-tight">
              <span className="font-bold text-[#D91A2A]">{companyNameHighlighted}</span> {headlineRest}
            </h2>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-3xl font-normal">
              {description}
            </p>

            {/* Action CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6">
              <Link
                href={buttons.primary.href}
                className="inline-flex items-center gap-2 bg-[#D91A2A] hover:bg-[#B31221] text-white px-6 py-3.5 rounded-lg text-sm font-semibold tracking-wide shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>{buttons.primary.label}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={buttons.secondary.href}
                className="inline-flex items-center gap-2 text-neutral-800 hover:text-[#D91A2A] px-5 py-3.5 rounded-lg text-sm font-semibold tracking-wide border border-neutral-200 hover:border-[#D91A2A] bg-white transition-all duration-200"
              >
                <span>{buttons.secondary.label}</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Key Pillars / Values Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 space-y-4"
          >
            {cards.map((card) => {
              const IconComponent = iconMap[card.iconName] || Leaf;
              return (
                <div key={card.id} className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-[#D91A2A] mb-4">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-1.5">
                    {card.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              );
            })}

            {/* Certifications Card */}
            <div className="p-6 rounded-2xl bg-[#1E232A] text-white shadow-md space-y-2">
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-[#FF4D5E]" />
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                  {certificationsCard.badgeTag}
                </span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                {certificationsCard.standards.join(", ")}.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
