"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowRight } from "lucide-react";
import { Product } from "@/data";

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductDetailModal({ product, onClose }: ProductDetailModalProps) {
  // Lock body scroll when modal is open and add ESC key listener
  useEffect(() => {
    if (!product) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [product, onClose]);

  return (
    <AnimatePresence>
      {product && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop with Click to Close */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm cursor-pointer"
            aria-hidden="true"
          />

          {/* Modal Content Dialog */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-product-title"
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-3xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-neutral-200 z-10 max-h-[92vh] flex flex-col pointer-events-auto my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Media */}
            <div className="relative h-56 sm:h-72 w-full shrink-0 bg-neutral-900">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20 pointer-events-none" />

              {/* Close Button - Optimized for Mobile Touch Target (44x44px+) */}
              <button
                type="button"
                onClick={onClose}
                aria-label="Tutup detail produk"
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 w-11 h-11 rounded-full bg-black/60 hover:bg-black active:bg-black/90 text-white flex items-center justify-center transition-all duration-200 shadow-lg border border-white/20 active:scale-95 cursor-pointer touch-manipulation"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Overlaid Title */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white space-y-1 pointer-events-none">
                <span className="px-2.5 py-1 rounded text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-[#D91A2A] text-white inline-block mb-1 shadow-sm">
                  {product.category}
                </span>
                <h3 id="modal-product-title" className="text-xl sm:text-2xl font-bold leading-tight drop-shadow-sm">
                  {product.name}
                </h3>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-5 sm:p-8 overflow-y-auto space-y-6 flex-1 overscroll-contain">
              {/* Product Description */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                  Deskripsi Produk
                </h4>
                <p className="text-sm text-neutral-700 leading-relaxed font-normal">
                  {product.description}
                </p>
              </div>

              {/* Features & Highlights */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                  Keunggulan & Karakteristik
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {product.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-neutral-700 bg-neutral-50 p-2.5 rounded-xl border border-neutral-100"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#D91A2A] shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications Grid */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                  Spesifikasi Teknis
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                  {product.specs.map((item, idx) => (
                    <div key={idx} className="p-3 bg-neutral-50 rounded-xl border border-neutral-100">
                      <div className="text-[11px] text-neutral-500 font-medium">{item.label}</div>
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
                    {product.applications.map((app, idx) => (
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
                    {product.certifications.map((cert, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 bg-neutral-100 text-neutral-800 text-[11px] font-semibold rounded-md"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:px-8 sm:py-4 bg-neutral-50 border-t border-neutral-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              <span className="text-[11px] sm:text-xs text-neutral-500 text-center sm:text-left">
                PT OKI Pulp & Paper Mills — Sales & Export Division
              </span>
              <a
                href="#contact"
                onClick={onClose}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#D91A2A] hover:bg-[#B31221] active:bg-[#9B101D] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors shadow-sm cursor-pointer"
              >
                <span>Minta Penawaran</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
