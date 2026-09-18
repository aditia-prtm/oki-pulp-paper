/**
 * ==============================================================================
 * DATA STATISTIK & METRIK OPERASIONAL PABRIK
 * ==============================================================================
 * Ubah angka statistik kapasitas produksi, energi mandiri, dan jangkauan ekspor di sini.
 */

export interface StatItem {
  iconName: "Factory" | "TrendingUp" | "Zap" | "Globe2" | "Users" | "Trees";
  value: string;
  unit: string;
  label: string;
  desc: string;
}

export interface StatsSectionData {
  title: string;
  description: string;
  stats: StatItem[];
}

export const statsData: StatsSectionData = {
  title: "Kekuatan Produksi Terintegrasi Skala Global",
  description: "Fasilitas mill terpadu di Sungai Baung, Ogan Komering Ilir, memadukan inovasi teknik mutakhir dengan sirkularitas energi hijau.",
  
  stats: [
    {
      iconName: "Factory",
      value: "2,8 Juta",
      unit: "Ton / Tahun",
      label: "Kapasitas Pulp (BHKP)",
      desc: "Salah satu lini tunggal pabrik bubur kertas terbesar & paling efisien di dunia.",
    },
    {
      iconName: "TrendingUp",
      value: "500.000",
      unit: "Ton / Tahun",
      label: "Kapasitas Produksi Tisu",
      desc: "Memasok pasar domestik dan ekspor dengan teknologi converting berkecepatan tinggi.",
    },
    {
      iconName: "Zap",
      value: "100%",
      unit: "Energi Mandiri",
      label: "Energi Bersih Terbarukan",
      desc: "Pembangkit listrik berbasis biomassa kulit kayu & black liquor tanpa bahan bakar fosil.",
    },
    {
      iconName: "Globe2",
      value: "50+",
      unit: "Negara Tujuan",
      label: "Jangkauan Ekspor Global",
      desc: "Didistribusikan ke Asia Pasifik, Eropa, Timur Tengah, Amerika Utara & Afrika.",
    },
  ],
};
