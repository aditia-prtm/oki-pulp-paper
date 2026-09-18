# 📁 Panduan Pengelolaan Data Konten Website (OKI Pulp & Paper)

Semua konten teks, gambar, spesifikasi produk, kontak, dan statistik website telah dipisahkan ke dalam folder `/data` ini agar mudah diedit tanpa perlu mengubah kode komponen UI.

---

## 🗂️ Struktur File & Fungsi

| File | Konten yang Dapat Diubah |
| :--- | :--- |
| **`siteConfig.ts`** | - Nama perusahaan & logo<br>- Menu navigasi header & dropdown<br>- Bar merah paling atas (pengumuman & link)<br>- Kontak (alamat pabrik, kantor pusat, telepon, email)<br>- Daftar link navigasi footer & sertifikasi |
| **`heroSlides.ts`** | - Banner slider utama beranda (judul, ringkasan, tanggal, foto, link tujuan)<br>- Durasi rotasi otomatis slide (`autoPlayInterval`) |
| **`companyIntro.ts`** | - Pernyataan profil utama tentang PT OKI Pulp & Paper Mills<br>- Teks tombol Call To Action (CTA)<br>- Kartu nilai/pilar perusahaan (FCP, Pabrik Terintegrasi)<br>- Kartu sertifikasi global |
| **`products.ts`** | - Katalog produk lengkap (BHKP, Tissue Jumbo Rolls, Eco-Packaging FBB, Specialty Paper)<br>- Tagline & deskripsi tiap produk<br>- Poin fitur unggulan<br>- Spesifikasi teknis (kapasitas, brightness, gramatur, dll.)<br>- Aplikasi kegunaan industri & sertifikasi produk |
| **`stats.ts`** | - Metrik operasional pabrik (2,8 Juta Ton Pulp, 500k Ton Tisu, 100% Energi Mandiri, 50+ Negara Ekspor)<br>- Ikon, label, dan ringkasan penjelasan angka |
| **`sustainability.ts`** | - Komitmen keberlanjutan & ESG<br>- Foto hero lingkungan & lencana uji legalitas kayu<br>- 4 Pilar keberlanjutan (FCP Hutan, Energi Hijau, Pengolahan Air, Program DMPA)<br>- Tombol unduh laporan ESG |
| **`news.ts`** | - Berita dan siaran pers terkini<br>- Tanggal publikasi, kategori (KORPORAT, KOMUNITAS, dsb.)<br>- Judul berita, ringkasan snippet, gambar, dan link |
| **`index.ts`** | Barrel export untuk memudahkan impor data di komponen UI |

---

## 💡 Cara Menambah / Mengubah Data

### 1. Menambah Produk Baru
Buka [`products.ts`](./products.ts) lalu tambahkan item baru ke dalam array `products`:
```typescript
{
  id: "produk-baru",
  name: "Nama Produk",
  category: "KATEGORI",
  tagline: "Slogan singkat produk",
  description: "Penjelasan lengkap produk...",
  image: "/images/products/nama-gambar.jpg",
  features: ["Fitur 1", "Fitur 2"],
  specs: [
    { label: "Gramatur", value: "80 gsm" }
  ],
  applications: ["Penggunaan 1", "Penggunaan 2"],
  certifications: ["ISO 9001", "PEFC"]
}
```

### 2. Mengubah Kontak / Alamat
Buka [`siteConfig.ts`](./siteConfig.ts) dan edit properti `contact`:
```typescript
contact: {
  millSite: {
    title: "Mill Site (Pabrik):",
    address: "Alamat baru..."
  },
  phones: ["+62 711 753 8888"],
  email: "info@okipulpandpaper.com"
}
```

### 3. Mengubah Slide Banner Utama
Buka [`heroSlides.ts`](./heroSlides.ts) dan sesuaikan isi array `HERO_SLIDES`.
