import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const montserratSemiBold = localFont({
  src: "./fonts/Montserrat-SemiBold.ttf",
  variable: "--font-montserrat-semibold",
  weight: "600",
  display: "swap",
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
    <html lang="id" className={`${montserrat.variable} ${montserratSemiBold.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen bg-oki-warm-bg text-oki-charcoal font-sans flex flex-col selection:bg-[#E31837] selection:text-white">
        {children}
      </body>
    </html>
  );
}

