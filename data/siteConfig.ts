/**
 * ==============================================================================
 * KONFIGURASI SITUS, NAVIGASI & KONTAK
 * ==============================================================================
 * File ini berisi informasi umum perusahaan, navigasi menu header,
 * kontak alamat pabrik & kantor pusat, serta sertifikasi footer.
 */

export interface NavLink {
  name: string;
  href: string;
  dropdown?: string[];
}

export interface SiteConfig {
  companyName: string;
  companySubtitle: string;
  logo: {
    src: string;
    alt: string;
  };
  navigation: NavLink[];
  topBar: {
    announcement: string;
    globalNetworkText: string;
    contactText: string;
  };
  contact: {
    millSite: {
      title: string;
      address: string;
    };
    headOffice: {
      title: string;
      address: string;
    };
    phones: string[];
    email: string;
  };
  affiliations: {
    title: string;
    name: string;
  };
  certifications: string[];
  footerLinks: {
    quickLinks: { name: string; href: string }[];
    productLinks: { name: string; href: string }[];
    legalLinks: { name: string; href: string }[];
  };
}

export const siteConfig: SiteConfig = {
  companyName: "PT OKI Pulp & Paper Mills",
  companySubtitle: "APP Group",
  logo: {
    src: "/images/logo/logo_OKI_white.svg",
    alt: "PT OKI Pulp & Paper Mills",
  },
  
  // Top utility bar (bar merah paling atas)
  topBar: {
    announcement: "PT OKI Pulp & Paper Mills — APP Group",
    globalNetworkText: "Jaringan Global",
    contactText: "Hubungi Kami",
  },

  // Menu Navigasi Header
  navigation: [
    { name: "Beranda", href: "#hero" },
    { 
      name: "Perusahaan", 
      href: "#about",
      dropdown: ["Tentang OKI", "Visi & Misi", "Struktur Manajemen", "Tata Kelola", "Sertifikasi"] 
    },
    { 
      name: "Produk & Solusi", 
      href: "#products",
      dropdown: ["Bleached Hardwood Kraft Pulp (BHKP)", "Tissue Paper Reels", "Packaging & FBB", "Specialty Paper"] 
    },
    { 
      name: "Keberlanjutan", 
      href: "#sustainability",
      dropdown: ["Komitmen ESG", "Konservasi Hutan", "Energi Bersih", "Pemberdayaan Masyarakat"] 
    },
    { name: "Operasional", href: "#operations" },
    { name: "Kabar & Media", href: "#news" },
    { name: "Karir", href: "#careers" },
  ],

  // Kontak & Alamat Perusahaan
  contact: {
    millSite: {
      title: "Mill Site (Pabrik):",
      address: "Desa Bukit Batu, Kec. Air Sugihan, Kab. Ogan Komering Ilir, Sumatera Selatan 30656, Indonesia",
    },
    headOffice: {
      title: "Head Office:",
      address: "Sinar Mas Land Plaza, Jl. M.H. Thamrin No.51, Jakarta Pusat 10350, Indonesia",
    },
    phones: ["+62 711 753 8888", "+62 21 2965 0800"],
    email: "info@okipulpandpaper.com",
  },

  // Afiliasi Grup
  affiliations: {
    title: "Afiliasi Korporasi",
    name: "Anggota dari APP Group (Asia Pulp & Paper)",
  },

  // Daftar Badge Sertifikasi di Footer
  certifications: [
    "PEFC CoC",
    "SVLK Kayu Lestari",
    "ISO 9001 / 14001 / 50001",
    "PROPER Hijau",
  ],

  // Link Navigasi Footer
  footerLinks: {
    quickLinks: [
      { name: "Beranda", href: "#hero" },
      { name: "Tentang Kami", href: "#about" },
      { name: "Visi & Misi", href: "#about" },
      { name: "Struktur Manajemen", href: "#about" },
      { name: "Tata Kelola Perusahaan", href: "#about" },
      { name: "Karir & Rekrutmen", href: "#careers" },
    ],
    productLinks: [
      { name: "BHKP Pulp Kayu Keras", href: "#products" },
      { name: "Tissue Jumbo Rolls", href: "#products" },
      { name: "Folding Box Board (FBB)", href: "#products" },
      { name: "Specialty Paper", href: "#products" },
      { name: "Kebijakan Hutan (FCP)", href: "#sustainability" },
      { name: "Sertifikasi PEFC & SVLK", href: "#sustainability" },
    ],
    legalLinks: [
      { name: "Kebijakan Privasi", href: "#privacy" },
      { name: "Syarat & Ketentuan", href: "#terms" },
      { name: "Whistleblowing & Speak Up", href: "#whistleblowing" },
    ],
  },
};
