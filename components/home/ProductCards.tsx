"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ChevronRight, X, ExternalLink, Sparkles, Box, FileText, Layers, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { productsData, Product } from "@/data";

export default function ProductCards() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { tag, title, description, ctaText, ctaHref, products } = productsData;

  return (
    <section id="products" className="py-20 lg:py-28 bg-[#F4F5F0] border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-6 h-[3px] bg-[#D91A2A]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#D91A2A]">
                {tag}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E232A] tracking-tight">
              {title}
            </h2>
            <p className="text-sm sm:text-base text-neutral-600">
              {description}
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <a
              href={ctaHref}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D91A2A] hover:text-[#B31221] group pb-1 border-b-2 border-[#D91A2A]/40 hover:border-[#D91A2A] transition-all"
            >
              <span>{ctaText}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* 4 Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-neutral-200/90 shadow-sm hover:shadow-xl hover:border-neutral-300 transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Card Image Container with Hover Zoom */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-white/95 text-neutral-900 rounded-md shadow-sm backdrop-blur-sm">
                    {product.category}
                  </span>
                </div>

                {/* Subtle Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-[#1E232A] group-hover:text-[#D91A2A] transition-colors leading-snug line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed line-clamp-3">
                    {product.tagline}
                  </p>
                </div>

                {/* CTA Button: READ MORE */}
                <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="w-full inline-flex items-center justify-between text-xs font-bold uppercase tracking-wider text-white py-2 px-3 rounded-lg bg-[#D91A2A] hover:bg-[#B31221] transition-all duration-200"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Interactive Detail Modal for "Read More" */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-neutral-200 z-10 max-h-[90vh] flex flex-col"
            >
              {/* Modal Header Image */}
              <div className="relative h-60 sm:h-72 w-full">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black text-white flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Overlaid Title */}
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="px-3 py-1 rounded text-[11px] font-bold uppercase tracking-wider bg-[#D91A2A] text-white inline-block mb-1">
                    {selectedProduct.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold leading-tight">
                    {selectedProduct.name}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                    Deskripsi Produk
                  </h4>
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    {selectedProduct.description}
                  </p>
                </div>

                {/* Features & Highlights */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                    Keunggulan & Karakteristik
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedProduct.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-700 bg-neutral-50 p-2.5 rounded-lg border border-neutral-100">
                        <CheckCircle2 className="w-4 h-4 text-[#D91A2A] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specifications Grid */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                    Spesifikasi Teknis
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {selectedProduct.specs.map((item, idx) => (
                      <div key={idx} className="p-3 bg-neutral-50 rounded-xl border border-neutral-100">
                        <div className="text-[11px] text-neutral-500">{item.label}</div>
                        <div className="text-xs font-bold text-neutral-900 mt-1">{item.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Applications & Certifications */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-neutral-100">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                      Aplikasi Penggunaan
                    </h4>
                    <ul className="space-y-1.5 text-xs text-neutral-600">
                      {selectedProduct.applications.map((app, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D91A2A]" />
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                      Sertifikasi Standar
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.certifications.map((cert, idx) => (
                        <span key={idx} className="px-2.5 py-1 bg-neutral-100 text-neutral-800 text-[11px] font-semibold rounded-md">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:px-8 sm:py-4 bg-neutral-50 border-t border-neutral-200/80 flex items-center justify-between">
                <span className="text-xs text-neutral-500">
                  PT OKI Pulp & Paper Mills — Sales & Export Division
                </span>
                <a
                  href="#contact"
                  onClick={() => setSelectedProduct(null)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#D91A2A] hover:bg-[#B31221] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors shadow-sm"
                >
                  <span>Minta Penawaran</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
