"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, ArrowUpRight, Newspaper } from "lucide-react";
import { motion } from "framer-motion";
import { newsData } from "@/data";

export default function NewsSection() {
  const { tag, title, viewAllText, viewAllHref, readMoreText, articles } = newsData;

  return (
    <section id="news" className="py-20 lg:py-28 bg-[#FCFCFA] border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-[3px] bg-[#D91A2A]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#D91A2A]">
                {tag}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E232A] tracking-tight">
              {title}
            </h2>
          </div>

          <Link
            href={viewAllHref}
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-800 hover:text-[#D91A2A] transition-colors"
          >
            <span>{viewAllText}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((news, idx) => (
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
                    <span>{readMoreText}</span>
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
