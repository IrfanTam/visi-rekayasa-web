import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

// Menggunakan Font Montserrat sesuai identitas visual PT VRN
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

// Metadata SEO & Social Sharing untuk PT Visi Rekayasa Nusantara
export const metadata: Metadata = {
  title: "PT Visi Rekayasa Nusantara | Solusi Rekayasa Teknologi, AI & Hardware",
  description:
    "Layanan rekayasa sistem end-to-end: AI, Machine Learning, Embedded Software, IoT Hardware, dan 3D Prototyping di Jakarta Timur.",
  keywords: [
    "PT Visi Rekayasa Nusantara",
    "Rekayasa Teknologi",
    "Artificial Intelligence",
    "Computer Vision",
    "IoT",
    "Robotic Microscopy",
    "Hardware Prototyping",
    "Jakarta Timur",
  ],
  authors: [{ name: "Muhammad Irfan Tam Tomo" }],
  icons: {
    icon: "/pt visi rekayasa half.png",
    shortcut: "/pt visi rekayasa half.png",
    apple: "/pt visi rekayasa half.png",
  },
  openGraph: {
    title: "PT Visi Rekayasa Nusantara",
    description: "Solusi Rekayasa Teknologi, AI, & Hardware Terintegrasi",
    images: ["/pt visi rekayasa half.png"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${montserrat.className} antialiased bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-white`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
