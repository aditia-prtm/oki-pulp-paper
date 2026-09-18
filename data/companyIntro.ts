/**
 * ==============================================================================
 * DATA TENTANG PERUSAHAAN (COMPANY INTRO & VALUES)
 * ==============================================================================
 * Ubah pernyataan profil perusahaan, misi, pilar keunggulan, dan sertifikasi di sini.
 */

export interface CompanyValueCard {
  id: string;
  iconName: "Leaf" | "Factory" | "Award" | "ShieldCheck";
  title: string;
  description: string;
}

export interface CompanyIntroData {
  tag: string;
  companyNameHighlighted: string;
  headlineRest: string;
  description: string;
  buttons: {
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
  };
  cards: CompanyValueCard[];
  certificationsCard: {
    badgeTag: string;
    title: string;
    description: string;
    standards: string[];
  };
}

export const companyIntroData: CompanyIntroData = {
  tag: "Tentang PT OKI Pulp & Paper Mills",
  companyNameHighlighted: "PT OKI Pulp & Paper Mills",
  headlineRest: "memproduksi bubur kertas (pulp), tisu premium, dan kemasan berbasis serat kayu yang esensial bagi kehidupan masyarakat global. Beroperasi dengan fasilitas terintegrasi kelas dunia di Sumatera Selatan, kami menetapkan standar keunggulan operasional berlandaskan keberlanjutan dan tata kelola hijau (ESG).",
  description: "Sebagai bagian dari APP Group, seluruh pasokan kayu serat kami berasal dari 100% hutan tanaman industri bersertifikasi legal dan lestari. Dengan pemanfaatan energi terbarukan biomassa mandiri, kami bertekad menjadi pelopor dekarbonisasi industri pulp dan kertas dunia.",
  
  buttons: {
    primary: {
      label: "Jelajahi Produk Kami",
      href: "#products",
    },
    secondary: {
      label: "Laporan Keberlanjutan",
      href: "#sustainability",
    },
  },

  cards: [
    {
      id: "fcp",
      iconName: "Leaf",
      title: "Forest Conservation Policy",
      description: "Komitmen nol deforestasi sejak 2013 dengan pemantauan satelit real-time dan perlindungan keanekaragaman hayati gambut.",
    },
    {
      id: "integrated-mill",
      iconName: "Factory",
      title: "Pabrik Terintegrasi Mutakhir",
      description: "Efisiensi termal tinggi dan daur ulang bahan kimia recovery boiler untuk mewujudkan sirkularitas energi tanpa limbah.",
    },
  ],

  certificationsCard: {
    badgeTag: "Sertifikasi Global",
    title: "Standar Mutu & Lingkungan Terakreditasi",
    description: "Memenuhi regulasi ketat pasar ekspor internasional untuk keselamatan pangan, mutu, dan legalitas hutan.",
    standards: ["PEFC CoC", "SVLK", "ISO 9001", "ISO 14001", "ISO 50001", "FDA Food Contact"],
  },
};
