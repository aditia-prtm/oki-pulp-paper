"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  ArrowUp, 
  ExternalLink, 
  ShieldCheck, 
  Award,
  ChevronRight 
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#12161A] text-white pt-16 pb-8 border-t border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          
          {/* Col 1: Brand & Overview (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="w-56 h-12 relative bg-white/95 rounded-lg p-2.5">
              <Image
                src="/images/logo/logo_OKI.svg"
                alt="PT OKI Pulp & Paper Mills"
                fill
                className="object-contain object-left px-2"
              />
            </div>
            
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm">
              PT OKI Pulp & Paper Mills adalah salah satu produsen pulp dan tisu terpadu berteknologi mutakhir terbesar di dunia, berkomitmen menghadirkan produk serat kayu berkualitas tinggi dengan prinsip keberlanjutan global.
            </p>

            <div className="space-y-2 pt-1">
              <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                Afiliasi Korporasi
              </div>
              <div className="text-xs text-neutral-300 font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D91A2A]" />
                <span>Anggota dari APP Group (Asia Pulp & Paper)</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-l-2 border-[#D91A2A] pl-2.5">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              {["Beranda", "Tentang Kami", "Visi & Misi", "Struktur Manajemen", "Tata Kelola Perusahaan", "Karir & Rekrutmen"].map((item, idx) => (
                <li key={idx}>
                  <a href="#about" className="hover:text-white transition-colors flex items-center gap-1.5">
                    <ChevronRight className="w-3 h-3 text-[#D91A2A]" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Products & ESG (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-l-2 border-[#D91A2A] pl-2.5">
              Produk & Solusi
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              {[
                "BHKP Pulp Kayu Keras", 
                "Tissue Jumbo Rolls", 
                "Folding Box Board (FBB)", 
                "Specialty Paper", 
                "Kebijakan Hutan (FCP)", 
                "Sertifikasi PEFC & SVLK"
              ].map((item, idx) => (
                <li key={idx}>
                  <a href="#products" className="hover:text-white transition-colors flex items-center gap-1.5">
                    <ChevronRight className="w-3 h-3 text-[#D91A2A]" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Location & Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-l-2 border-[#D91A2A] pl-2.5">
              Lokasi & Kontak
            </h4>
            
            <div className="space-y-3.5 text-xs text-neutral-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D91A2A] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Mill Site (Pabrik):</span>
                  <span>Desa Bukit Batu, Kec. Air Sugihan, Kab. Ogan Komering Ilir, Sumatera Selatan 30656, Indonesia</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D91A2A] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Head Office:</span>
                  <span>Sinar Mas Land Plaza, Jl. M.H. Thamrin No.51, Jakarta Pusat 10350, Indonesia</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D91A2A] shrink-0" />
                <span>+62 711 753 8888 / +62 21 2965 0800</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#D91A2A] shrink-0" />
                <span>info@okipulpandpaper.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Certifications and Governance Bar */}
        <div className="py-6 border-b border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="font-semibold text-white flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Sertifikasi & Kepatuhan:
            </span>
            <span className="px-2 py-0.5 rounded bg-white/10 text-[11px]">PEFC CoC</span>
            <span className="px-2 py-0.5 rounded bg-white/10 text-[11px]">SVLK Kayu Lestari</span>
            <span className="px-2 py-0.5 rounded bg-white/10 text-[11px]">ISO 9001 / 14001 / 50001</span>
            <span className="px-2 py-0.5 rounded bg-white/10 text-[11px]">PROPER Hijau</span>
          </div>

          <div className="flex items-center gap-3">
            <a href="#whistleblowing" className="hover:text-white transition-colors flex items-center gap-1 text-[11px]">
              <span>Whistleblowing & Speak Up</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} PT OKI Pulp & Paper Mills. Hak Cipta Dilindungi Undang-Undang.
          </div>

          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-neutral-300 transition-colors">
              Kebijakan Privasi
            </a>
            <a href="#terms" className="hover:text-neutral-300 transition-colors">
              Syarat & Ketentuan
            </a>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D91A2A] text-white flex items-center justify-center transition-all duration-300"
              aria-label="Kembali ke atas"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
