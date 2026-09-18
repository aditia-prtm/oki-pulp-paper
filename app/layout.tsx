import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "PT OKI Pulp & Paper Mills | Sustainable Fiber & Paper Excellence",
  description:
    "PT OKI Pulp & Paper Mills - Salah satu produsen bubur kertas (pulp) dan tisu terintegrasi terbesar dan paling ramah lingkungan di dunia, bagian dari APP Group.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen bg-[#FCFCFA] text-[#1E232A] font-sans flex flex-col selection:bg-[#E31837] selection:text-white">
        {children}
      </body>
    </html>
  );
}

