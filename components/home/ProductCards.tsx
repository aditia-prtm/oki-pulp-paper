"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { productsData, Product } from "@/data";
import ProductDetailModal from "./ProductDetailModal";

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
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-[#1E232A] group-hover:text-[#D91A2A] transition-colors leading-snug line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed line-clamp-3">
                    {product.tagline}
                  </p>
                </div>

                {/* CTA Button: READ MORE */}
                <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(product)}
                    className="w-full inline-flex items-center justify-between text-sm font-bold uppercase tracking-wider text-white py-2.5 px-3.5 rounded-lg bg-[#1E232A] hover:bg-[#D91A2A] active:bg-[#B31221] transition-all duration-200 cursor-pointer touch-manipulation shadow-sm"
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
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}

