"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Leaf, Droplets, Sun, Trees, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function SustainabilitySection() {
  const pillars = [
    {
      icon: Trees,
      title: "Kebijakan Konservasi Hutan (FCP)",
      desc: "Proteksi penuh terhadap hutan bernilai konservasi tinggi (HCV) dan stok karbon tinggi (HCS) dengan nol deforestasi dalam rantai pasok serat.",
    },
    {
      icon: Sun,
      title: "Transisi Energi Hijau & Net Zero",
      desc: "Memanfaatkan 100% residu biomassa kayu dan recovery boiler canggih untuk menghasilkan listrik mandiri tanpa bahan bakar fosil batu bara.",
    },
    {
      icon: Droplets,
      title: "Pengelolaan & Daur Ulang Air Tertutup",
      desc: "Fasilitas pengolahan air limbah biologis modern yang memenuhi standar baku mutu ketat dengan sirkulasi tertutup untuk meminimalkan konsumsi air tawar.",
    },
    {
      icon: Leaf,
      title: "Pemberdayaan Desa Makmur Peduli Api (DMPA)",
      desc: "Membina ribuan keluarga petani di sekitar konsesi melalui agroforestri, hortikultura, dan pencegahan kebakaran hutan berbasis masyarakat.",
    }
  ];

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
                src="/images/hero/sustainability-hero.jpg"
                alt="OKI Sustainable Forestry & Mill"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="px-3 py-1 bg-emerald-600 text-white text-[11px] font-bold uppercase tracking-wider rounded-md mb-2 inline-block shadow-md">
                  Inisiatif Hijau APP Group
                </span>
                <p className="text-sm sm:text-base font-semibold text-white/95">
                  Menjaga Keseimbangan Ekosistem & Pertumbuhan Ekonomi Berkelanjutan
                </p>
              </div>
            </div>

            {/* Floating Metric Card */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-xl border border-neutral-100 max-w-xs items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Trees className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xl font-bold text-neutral-900">100% Lolos</div>
                <div className="text-xs text-neutral-500">Uji Legalitas Kayu & Sertifikasi Lestari PEFC / SVLK</div>
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
                Komitmen Keberlanjutan & ESG
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E232A] tracking-tight leading-tight">
              Membangun Masa Depan Rendah Karbon Bersama Alam
            </h2>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Keberlanjutan bukan sekadar target operasional bagi PT OKI Pulp & Paper Mills, melainkan fondasi integritas dalam setiap lembar serat dan kertas yang kami ciptakan.
            </p>

            {/* Pillars list */}
            <div className="space-y-4 pt-2">
              {pillars.map((item, idx) => {
                const Icon = item.icon;
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
                href="#sustainability"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 hover:text-emerald-900 group"
              >
                <span>Unduh Laporan Keberlanjutan ESG Terbaru</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
