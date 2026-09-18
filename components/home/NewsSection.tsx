"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, ArrowUpRight, Newspaper } from "lucide-react";
import { motion } from "framer-motion";

export default function NewsSection() {
  const newsItems = [
    {
      id: 1,
      date: "12 SEPTEMBER 2026",
      category: "KORPORAT",
      title: "PT OKI Pulp & Paper Raih Penghargaan Efisiensi Energi Industri Hijau Nasional 2026",
      snippet: "Pengakuan atas dedikasi penerapan sistem recovery boiler sirkular dan pengurangan intensitas emisi karbon secara konsisten.",
      image: "/images/hero/news1.jpg",
      href: "#",
    },
    {
      id: 2,
      date: "28 AGUSTUS 2026",
      category: "KOMUNITAS & DMPA",
      title: "Pemberdayaan Program Petani Binaan Desa Makmur Peduli Api Capai Hasil Panen Rekor",
      snippet: "Inisiatif kemitraan agroforestri berkelanjutan meningkatkan kesejahteraan ratusan kepala keluarga di sekitar area konsesi.",
      image: "/images/hero/news2.jpg",
      href: "#",
    },
    {
      id: 3,
      date: "15 AGUSTUS 2026",
      category: "INOVASI PRODUK",
      title: "Ekspansi Jalur Produksi Tisu Higienis Berkecepatan Tinggi untuk Permintaan Global",
      snippet: "Peningkatan kapasitas mesin converting modern memenuhi standar internasional pasar Asia Timur dan Amerika Utara.",
      image: "/images/products/tissue-paper.jpg",
      href: "#",
    }
  ];

  return (
    <section id="news" className="py-20 lg:py-28 bg-[#FCFCFA] border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-[3px] bg-[#D91A2A]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#D91A2A]">
                Pusat Informasi & Media
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E232A] tracking-tight">
              Kabar & Siaran Pers Terkini
            </h2>
          </div>

          <Link
            href="#news"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-800 hover:text-[#D91A2A] transition-colors"
          >
            <span>Lihat Semua Berita</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((news, idx) => (
            <motion.article
              key={news.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-white/95 text-[#D91A2A] rounded-md shadow-sm">
                    {news.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2 text-xs text-neutral-500 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-[#D91A2A]" />
                    <span>{news.date}</span>
                  </div>
                  <h3 className="text-base font-bold text-neutral-900 group-hover:text-[#D91A2A] transition-colors leading-snug line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed line-clamp-2">
                    {news.snippet}
                  </p>
                </div>

                <div className="pt-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D91A2A] group-hover:underline">
                    <span>Baca Artikel</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
