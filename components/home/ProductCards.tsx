"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ChevronRight, X, ExternalLink, Sparkles, Box, FileText, Layers, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Product {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
  specs: { label: string; value: string }[];
  applications: string[];
  certifications: string[];
}

const PRODUCTS_DATA: Product[] = [
  {
    id: "bhkp-pulp",
    name: "Bleached Hardwood Kraft Pulp (BHKP)",
    category: "RAW FIBER & PULP",
    tagline: "Serat pulp kayu keras berkualitas tinggi dengan derajat keputihan optimal dan formasi serat homogen.",
    description: "Diproduksi dari 100% serat kayu tanaman industri terbarukan (Acacia & Eucalyptus) yang dikelola secara lestari. Memiliki daya serap, formasi lembaran, dan kekuatan tarik superior untuk bahan baku kertas cetak serta tisu kelas dunia.",
    image: "/images/products/bhkp-pulp.jpg",
    features: [
      "100% Plantation Fiber (Acacia mangium & Eucalyptus)",
      "Derajat keputihan (Brightness) > 89% ISO",
      "Kandungan resin rendah & drainase serat optimal",
      "Proses pemutihan ramah lingkungan Elemental Chlorine Free (ECF)"
    ],
    specs: [
      { label: "Kapasitas Produksi", value: "2.800.000 Ton / Tahun" },
      { label: "Brightness", value: "88% - 90% ISO" },
      { label: "Moisture Content", value: "10% ± 1.5%" },
      { label: "Dirt Count", value: "≤ 2.0 mm²/m²" }
    ],
    applications: [
      "Kertas cetak dan tulis premium (Woodfree Uncoated)",
      "Produk tisu higienis & sanitary wipes",
      "Kertas label dan kemasan fleksibel",
      "Specialty coated fine paper"
    ],
    certifications: ["PEFC CoC", "SVLK Certified", "ISO 9001", "ISO 14001", "REACH Compliant"]
  },
  {
    id: "tissue-reels",
    name: "Tissue Parent Reels & Jumbo Rolls",
    category: "HYGIENE & CONVERTING",
    tagline: "Gulungan tisu induk jumbo ultra-lembut dengan daya serap air tinggi untuk industri converting.",
    description: "Dihasilkan melalui mesin tisu mutakhir berkecepatan tinggi dengan sistem pengeringan Yankee Cylinder tercanggih. Memberikan kombinasi sempurna antara kelembutan serat murni (virgin fiber), ketahanan basah, dan efisiensi konversi optimal.",
    image: "/images/products/tissue-paper.jpg",
    features: [
      "100% Virgin Wood Pulp bebas bahan kimia optik berlebih",
      "Tekstur ultra-soft dengan kelembutan mikroskopis tinggi",
      "Daya serap air dan minyak yang luar biasa",
      "Gramatur konsisten dan kekuatan tarik merata"
    ],
    specs: [
      { label: "Kapasitas Tahunan", value: "500.000 Ton / Tahun" },
      { label: "Rentang Gramatur", value: "12.5 - 45 gsm" },
      { label: "Lebar Gulungan", value: "Hingga 5.600 mm" },
      { label: "Diameter Reel", value: "Hingga 2.500 mm" }
    ],
    applications: [
      "Facial Tissue & Pocket Tissue",
      "Bathroom Toilet Tissue (1-ply & 2-ply)",
      "Kitchen Towel & Industrial Hand Towel",
      "Napkin & Tableware Tissue"
    ],
    certifications: ["FDA Food Contact", "ISEGA Certified", "PEFC", "ISO 22000 (HACCP)", "Halal MUI"]
  },
  {
    id: "packaging-fbb",
    name: "Eco-Packaging & Folding Box Board (FBB)",
    category: "PACKAGING SOLUTIONS",
    tagline: "Karton kemasan premium berlapis ganda ramah lingkungan untuk perlindungan dan cetak grafis beresolusi tinggi.",
    description: "Solusi kemasan karton berkelanjutan (Folding Box Board / White Back) dengan kekakuan (stiffness) tinggi dan permukaan halus sempurna untuk aplikasi foil stamping, emboss, dan cetak warna kemasan makanan dan farmasi modern.",
    image: "/images/products/packaging-fbb.jpg",
    features: [
      "Struktur multi-ply untuk kekuatan tekan dan kekakuan maksimal",
      "Lapisan coating ganda untuk reproduksi cetak warna tajam",
      "Food-grade dan aman untuk kontak makanan langsung",
      "100% dapat didaur ulang dan biodegradable"
    ],
    specs: [
      { label: "Ketebalan / Caliper", value: "280 - 650 µm" },
      { label: "Gramatur", value: "190 - 400 gsm" },
      { label: "Roughness (PPS)", value: "≤ 1.5 µm" },
      { label: "Gloss 75°", value: "> 45%" }
    ],
    applications: [
      "Kemasan farmasi & kosmetik mewah",
      "Kotak makanan higienis (Food & Beverage Packaging)",
      "Kemasan produk elektronik & ritel konsumen",
      "Cover buku dan display promosi premium"
    ],
    certifications: ["FDA Approved", "BfR XXXVI Recommendation", "PEFC", "ISO 9001", "RoHS"]
  },
  {
    id: "specialty-paper",
    name: "Specialty & High-Brightness Printing Paper",
    category: "PRINTING & PUBLISHING",
    tagline: "Kertas cetak dan tulis dengan opasitas prima, kontras tajam, dan performa tinggi pada mesin percetakan modern.",
    description: "Diformulasikan khusus untuk percetakan offset komersial, buku teks, dan kertas dokumen berkekuatan tinggi. Memberikan kejernihan teks, presisi warna luar biasa, dan tidak tembus tinta pada kedua sisi kertas.",
    image: "/images/products/specialty-paper.jpg",
    features: [
      "Formasi serat rapat dengan opasitas tinggi (tidak tembus pandang)",
      "Permukaan halus (Smoothness) untuk efisiensi transfer tinta cetak",
      "Stabilitas dimensi sangat tinggi untuk pencetakan multi-warna cepat",
      "Bebas asam (Acid-free) untuk umur simpan arsip jangka panjang"
    ],
    specs: [
      { label: "Gramatur Kertas", value: "60, 70, 80, 100 gsm" },
      { label: "Brightness", value: "98% - 104% ISO" },
      { label: "Opasitas", value: "> 94%" },
      { label: "Format", value: "Sheets (Lembaran) & Rolls (Gulungan)" }
    ],
    applications: [
      "Buku literatur, ensiklopedia & novel berkualitas",
      "Majalah, brosur korporat, dan company profile",
      "Kertas formulir bisnis & continuous form",
      "Amplop, map, dan security paper stationery"
    ],
    certifications: ["ISO 9706 (Permanent Paper)", "PEFC", "SVLK", "ISO 14001"]
  }
];

export default function ProductCards() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section id="products" className="py-20 lg:py-28 bg-[#F4F5F0] border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Inspired by Merdeka Copper Gold Kabar Section Header Style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-6 h-[3px] bg-[#D91A2A]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#D91A2A]">
                Portofolio Produk Unggulan
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E232A] tracking-tight">
              Solusi Serat Kayu & Kertas Berkelanjutan
            </h2>
            <p className="text-sm sm:text-base text-neutral-600">
              Menghasilkan produk pulp dan kertas berkualitas tinggi dengan teknologi modern terintegrasi untuk memenuhi kebutuhan industri global.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D91A2A] hover:text-[#B31221] group pb-1 border-b-2 border-[#D91A2A]/40 hover:border-[#D91A2A] transition-all"
            >
              <span>Konsultasi Kebutuhan Industri</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* 4 Product Cards Grid (Replacing Copper Gold 4 News Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {PRODUCTS_DATA.map((product, idx) => (
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
                    className="w-full inline-flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#D91A2A] group-hover:text-[#B31221] py-2 px-3 rounded-lg bg-red-50/60 hover:bg-[#D91A2A] hover:text-white transition-all duration-200"
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
