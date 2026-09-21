/**
 * ==============================================================================
 * DATA PRODUK & SPESIFIKASI TEKNIS
 * ==============================================================================
 * Ubah katalog produk, fitur, spesifikasi teknis, aplikasi industri,
 * dan sertifikasi produk di sini.
 */

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
  specs: ProductSpec[];
  applications: string[];
  certifications: string[];
}

export interface ProductsSectionData {
  tag: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  products: Product[];
}

export const productsData: ProductsSectionData = {
  tag: "Portofolio Produk Unggulan",
  title: "Solusi Serat Kayu & Kertas Berkelanjutan",
  description: "Menghasilkan produk pulp dan kertas berkualitas tinggi dengan teknologi modern terintegrasi untuk memenuhi kebutuhan industri global.",
  ctaText: "Konsultasi Kebutuhan Industri",
  ctaHref: "#contact",

  products: [
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
        "Proses pemutihan ramah lingkungan Elemental Chlorine Free (ECF)",
      ],
      specs: [
        { label: "Kapasitas Produksi", value: "2.800.000 Ton / Tahun" },
        { label: "Brightness", value: "88% - 90% ISO" },
        { label: "Moisture Content", value: "10% ± 1.5%" },
        { label: "Dirt Count", value: "≤ 2.0 mm²/m²" },
      ],
      applications: [
        "Kertas cetak dan tulis premium (Woodfree Uncoated)",
        "Produk tisu higienis & sanitary wipes",
        "Kertas label dan kemasan fleksibel",
        "Specialty coated fine paper",
      ],
      certifications: ["PEFC CoC", "SVLK Certified", "ISO 9001", "ISO 14001", "REACH Compliant"],
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
        "Gramatur konsisten dan kekuatan tarik merata",
      ],
      specs: [
        { label: "Kapasitas Tahunan", value: "500.000 Ton / Tahun" },
        { label: "Rentang Gramatur", value: "12.5 - 45 gsm" },
        { label: "Lebar Gulungan", value: "Hingga 5.600 mm" },
        { label: "Diameter Reel", value: "Hingga 2.500 mm" },
      ],
      applications: [
        "Facial Tissue & Pocket Tissue",
        "Bathroom Toilet Tissue (1-ply & 2-ply)",
        "Kitchen Towel & Industrial Hand Towel",
        "Napkin & Tableware Tissue",
      ],
      certifications: ["FDA Food Contact", "ISEGA Certified", "PEFC", "ISO 22000 (HACCP)", "Halal MUI"],
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
        "100% dapat didaur ulang dan biodegradable",
      ],
      specs: [
        { label: "Ketebalan / Caliper", value: "280 - 650 µm" },
        { label: "Gramatur", value: "190 - 400 gsm" },
        { label: "Roughness (PPS)", value: "≤ 1.5 µm" },
        { label: "Gloss 75°", value: "> 45%" },
      ],
      applications: [
        "Kemasan farmasi & kosmetik mewah",
        "Kotak makanan higienis (Food & Beverage Packaging)",
        "Kemasan produk elektronik & ritel konsumen",
        "Cover buku dan display promosi premium",
      ],
      certifications: ["FDA Approved", "BfR XXXVI Recommendation", "PEFC", "ISO 9001", "RoHS"],
    },
  ],
};
