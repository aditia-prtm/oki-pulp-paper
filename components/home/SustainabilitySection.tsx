"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Leaf, Droplets, Sun, Trees, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { sustainabilityData } from "@/data";

const iconMap = {
  Trees,
  Sun,
  Droplets,
  Leaf,
};

export default function SustainabilitySection() {
  const { 
    tag, 
    title, 
    description, 
    heroImage, 
    floatingMetric, 
    pillars, 
    reportCta 
  } = sustainabilityData;

  return (
    <section id="sustainability" className="py-20 lg:py-28 bg-[#FCFCFA] border-b border-neutral-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with ESG Metrics Floating Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="px-3 py-1 bg-emerald-600 text-white text-[11px] font-bold uppercase tracking-wider rounded-md mb-2 inline-block shadow-md">
                  {heroImage.badge}
                </span>
                <p className="text-sm sm:text-base font-semibold text-white/95">
                  {heroImage.caption}
                </p>
              </div>
            </div>

            {/* Floating Metric Card */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-xl border border-neutral-100 max-w-xs items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Trees className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xl font-bold text-neutral-900">{floatingMetric.value}</div>
                <div className="text-xs text-neutral-500">{floatingMetric.label}</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Content and 4 ESG Pillars */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="flex items-center gap-2">
              <span className="w-6 h-[3px] bg-emerald-600" />
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                {tag}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E232A] tracking-tight leading-tight">
              {title}
            </h2>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              {description}
            </p>

            {/* Pillars list */}
            <div className="space-y-4 pt-2">
              {pillars.map((item, idx) => {
                const Icon = iconMap[item.iconName] || Leaf;
                return (
                  <div key={idx} className="flex items-start gap-4 p-3.5 rounded-xl bg-neutral-50 hover:bg-white border border-transparent hover:border-neutral-200 transition-all">
                    <div className="w-9 h-9 rounded-lg bg-emerald-100/60 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-neutral-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-neutral-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2">
              <Link
                href={reportCta.href}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 hover:text-emerald-900 group"
              >
                <span>{reportCta.label}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
