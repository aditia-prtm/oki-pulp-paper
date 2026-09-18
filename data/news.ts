/**
 * ==============================================================================
 * DATA BERITA, KABAR MEDIA & SIARAN PERS
 * ==============================================================================
 * Tambah, edit, atau hapus artikel berita, tanggal terbit, kategori,
 * serta ringkasan berita di sini.
 */

export interface NewsArticle {
  id: number | string;
  date: string;
  category: string;
  title: string;
  snippet: string;
  image: string;
  href: string;
}

export interface NewsSectionData {
  tag: string;
  title: string;
  viewAllText: string;
  viewAllHref: string;
  readMoreText: string;
  articles: NewsArticle[];
}

export const newsData: NewsSectionData = {
  tag: "Pusat Informasi & Media",
  title: "Kabar & Siaran Pers Terkini",
  viewAllText: "Lihat Semua Berita",
  viewAllHref: "#news",
  readMoreText: "Baca Selengkapnya",

  articles: [
    {
      id: 1,
      date: "12 SEPTEMBER 2026",
      category: "KORPORAT",
      title: "PT OKI Pulp & Paper Raih Penghargaan Efisiensi Energi Industri Hijau Nasional 2026",
      snippet: "Pengakuan atas dedikasi penerapan sistem recovery boiler sirkular dan pengurangan intensitas emisi karbon secara konsisten.",
      image: "/images/hero/news1.jpg",
      href: "#news",
    },
    {
      id: 2,
      date: "28 AGUSTUS 2026",
      category: "KOMUNITAS & DMPA",
      title: "Pemberdayaan Program Petani Binaan Desa Makmur Peduli Api Capai Hasil Panen Rekor",
      snippet: "Inisiatif kemitraan agroforestri berkelanjutan meningkatkan kesejahteraan ratusan kepala keluarga di sekitar area konsesi.",
      image: "/images/hero/news2.jpg",
      href: "#news",
    },
    {
      id: 3,
      date: "15 AGUSTUS 2026",
      category: "INOVASI PRODUK",
      title: "Ekspansi Jalur Produksi Tisu Higienis Berkecepatan Tinggi untuk Permintaan Global",
      snippet: "Peningkatan kapasitas mesin converting modern memenuhi standar internasional pasar Asia Timur dan Amerika Utara.",
      image: "/images/products/tissue-paper.jpg",
      href: "#news",
    },
  ],
};
