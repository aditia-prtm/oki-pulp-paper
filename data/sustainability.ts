/**
 * ==============================================================================
 * DATA INISIATIF KEBERLANJUTAN & ESG
 * ==============================================================================
 * Ubah pilar konservasi hutan, energi hijau, pengelolaan air,
 * program masyarakat (DMPA), serta laporan ESG di sini.
 */

export interface SustainabilityPillar {
  iconName: "Trees" | "Sun" | "Droplets" | "Leaf";
  title: string;
  desc: string;
}

export interface SustainabilityData {
  tag: string;
  title: string;
  description: string;
  heroImage: {
    src: string;
    alt: string;
    badge: string;
    caption: string;
  };
  floatingMetric: {
    value: string;
    label: string;
  };
  pillars: SustainabilityPillar[];
  reportCta: {
    label: string;
    href: string;
  };
}

export const sustainabilityData: SustainabilityData = {
  tag: "Komitmen Keberlanjutan & ESG",
  title: "Membangun Masa Depan Rendah Karbon Bersama Alam",
  description: "Keberlanjutan bukan sekadar target operasional bagi PT OKI Pulp & Paper Mills, melainkan fondasi integritas dalam setiap lembar serat dan kertas yang kami ciptakan.",
  
  heroImage: {
    src: "/images/hero/news2.jpg",
    alt: "OKI Sustainable Forestry & Mill",
    badge: "Inisiatif Hijau APP Group",
    caption: "Menjaga Keseimbangan Ekosistem & Pertumbuhan Ekonomi Berkelanjutan",
  },

  floatingMetric: {
    value: "100% Lolos",
    label: "Uji Legalitas Kayu & Sertifikasi Lestari PEFC / SVLK",
  },

  pillars: [
    {
      iconName: "Trees",
      title: "Kebijakan Konservasi Hutan (FCP)",
      desc: "Proteksi penuh terhadap hutan bernilai konservasi tinggi (HCV) dan stok karbon tinggi (HCS) dengan nol deforestasi dalam rantai pasok serat.",
    },
    {
      iconName: "Sun",
      title: "Transisi Energi Hijau & Net Zero",
      desc: "Memanfaatkan 100% residu biomassa kayu dan recovery boiler canggih untuk menghasilkan listrik mandiri tanpa bahan bakar fosil batu bara.",
    },
    {
      iconName: "Droplets",
      title: "Pengelolaan & Daur Ulang Air Tertutup",
      desc: "Fasilitas pengolahan air limbah biologis modern yang memenuhi standar baku mutu ketat dengan sirkulasi tertutup untuk meminimalkan konsumsi air tawar.",
    },
    {
      iconName: "Leaf",
      title: "Pemberdayaan Desa Makmur Peduli Api (DMPA)",
      desc: "Membina ribuan keluarga petani di sekitar konsesi melalui agroforestri, hortikultura, dan pencegahan kebakaran hutan berbasis masyarakat.",
    },
  ],

  reportCta: {
    label: "Unduh Laporan Keberlanjutan ESG Terbaru",
    href: "#sustainability",
  },
};
