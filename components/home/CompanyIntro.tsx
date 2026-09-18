"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Leaf, Factory, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function CompanyIntro() {
  return (
    <section id="about" className="relative py-20 lg:py-28 bg-[#FCFCFA] border-b border-neutral-200/70 overflow-hidden">
      {/* Subtle Background Paper Grain Texture & Ambient Accents */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Big Editorial Statement (Merdeka Copper Gold Style) */}
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
                Tentang PT OKI Pulp & Paper Mills
              </span>
            </div>

            {/* Editorial Headline Statement */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1E232A] leading-relaxed sm:leading-relaxed lg:leading-[1.4] tracking-tight">
              <span className="font-bold text-[#D91A2A]">PT OKI Pulp & Paper Mills</span> memproduksi bubur kertas (pulp), tisu premium, dan kemasan berbasis serat kayu yang esensial bagi kehidupan masyarakat global. Beroperasi dengan fasilitas terintegrasi kelas dunia di Sumatera Selatan, kami menetapkan standar keunggulan operasional berlandaskan keberlanjutan dan tata kelola hijau (ESG).
            </h2>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-3xl font-normal">
              Sebagai bagian dari APP Group, seluruh pasokan kayu serat kami berasal dari 100% hutan tanaman industri bersertifikasi legal dan lestari. Dengan pemanfaatan energi terbarukan biomassa mandiri, kami bertekad menjadi pelopor dekarbonisasi industri pulp dan kertas dunia.
            </p>

            {/* Action CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6">
              <Link
                href="#products"
                className="inline-flex items-center gap-2 bg-[#D91A2A] hover:bg-[#B31221] text-white px-6 py-3.5 rounded-lg text-sm font-semibold tracking-wide shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Jelajahi Produk Kami</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#sustainability"
                className="inline-flex items-center gap-2 text-neutral-800 hover:text-[#D91A2A] px-5 py-3.5 rounded-lg text-sm font-semibold tracking-wide border border-neutral-200 hover:border-[#D91A2A] bg-white transition-all duration-200"
              >
                <span>Laporan Keberlanjutan</span>
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
            <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-[#D91A2A] mb-4">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-1.5">
                Forest Conservation Policy
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Komitmen nol deforestasi sejak 2013 dengan pemantauan satelit real-time dan perlindungan keanekaragaman hayati gambut.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-900 mb-4">
                <Factory className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-1.5">
                Pabrik Terintegrasi Mutakhir
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Efisiensi termal tinggi dan daur ulang bahan kimia recovery boiler untuk mewujudkan sirkularitas energi tanpa limbah.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#1E232A] text-white p-6 shadow-md">
              <div className="flex items-center gap-3 mb-2">
                <Award className="w-5 h-5 text-[#FF4D5E]" />
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                  Sertifikasi Global
                </span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                PEFC, SVLK (Indonesia Timber Legality Assurance), ISO 9001, ISO 14001, ISO 50001, dan OHSAS 18001.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
