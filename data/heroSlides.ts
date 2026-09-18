/**
 * ==============================================================================
 * DATA HERO BANNER / SLIDER UTAMA
 * ==============================================================================
 * Ubah teks judul, tanggal, ringkasan, gambar latar, dan link tombol slide di sini.
 */

export interface HeroSlide {
  id: number;
  date: string;
  title: string;
  subtitle: string;
  image: string;
  link: string;
}

export const HERO_CONFIG = {
  autoPlayInterval: 7000, // Durasi rotasi slide (milidetik: 7000 = 7 detik)
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    date: "18 SEPTEMBER 2026",
    title: "Grup OKI Pulp & Paper Mengukuhkan Standar Baru Pabrik Pulp & Tisu Terintegrasi Berkelanjutan di Asia Pasifik",
    subtitle: "Menerapkan teknologi mutakhir dan energi terbarukan mandiri 100% untuk memasok serat bernilai tinggi ke pasar global.",
    image: "/images/hero/news1.jpg",
    link: "#about",
  },
  {
    id: 2,
    date: "28 AGUSTUS 2026",
    title: "Komitmen Nol Deforestasi dan Transisi Rendah Karbon Menuju Lanskap Industri Hijau Berkelanjutan",
    subtitle: "Melestarikan koridor keanekaragaman hayati dan memberdayakan komunitas desa di sekitar konsesi Sungai Baung.",
    image: "/images/hero/oki.jpg",
    link: "#sustainability",
  },
  {
    id: 3,
    date: "20 AGUSTUS 2026",
    title: "Tim Tanggap Darurat & Relawan Kemanusiaan OKI Sigap Terjun untuk Penanggulangan Bencana dan Komunitas",
    subtitle: "Kolaborasi intensif bersama pemangku kepentingan dalam penanganan kebakaran hutan dan bantuan kemanusiaan.",
    image: "/images/hero/news3.jpg",
    link: "#news",
  },
];
