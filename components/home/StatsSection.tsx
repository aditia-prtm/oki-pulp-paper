"use client";

import React from "react";
import { motion } from "framer-motion";
import { Factory, Globe2, Zap, Users, TrendingUp, Trees } from "lucide-react";
import { statsData } from "@/data";

const iconMap = {
  Factory,
  Globe2,
  Zap,
  Users,
  TrendingUp,
  Trees,
};

export default function StatsSection() {
  const { tag, title, description, stats } = statsData;

  return (
    <section id="operations" className="py-20 bg-[#12161A] text-white relative overflow-hidden">
      {/* Decorative Grid and Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#D91A2A_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D91A2A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm border border-white/15">
            <Factory className="w-3.5 h-3.5 text-[#FF4D5E]" />
            <span>{tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-neutral-400">
            {description}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = iconMap[stat.iconName] || Factory;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-[#D91A2A]/50 hover:bg-white/[0.08] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D91A2A] to-[#B31221] flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                
                <div className="space-y-1 mb-3">
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-baseline gap-2">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#FF4D5E]">
                    {stat.unit}
                  </div>
                </div>

                <h3 className="text-sm font-bold text-neutral-200 mb-2">
                  {stat.label}
                </h3>

                <p className="text-xs text-neutral-400 leading-relaxed">
                  {stat.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
