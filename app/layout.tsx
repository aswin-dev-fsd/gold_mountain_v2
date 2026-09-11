import type { Metadata, Viewport } from "next";
import { Outfit, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const seasonsFallback = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-seasons",
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#214D33",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://goldmountainresort.com"),
  title: {
    default: "Gold Mountain Wellness Resort | Tiruvannamalai, India",
    template: "%s | Gold Mountain Wellness Resort",
  },
  description:
    "A peaceful wellness resort in the sacred presence of Arunachala and Parvati Malai. Traditional Ayurvedic therapies, wholesome farm-to-table nourishment, restorative yoga, and tranquil stays.",
  keywords: [
    "Gold Mountain Wellness Resort",
    "Tiruvannamalai wellness resort",
    "Arunachala retreat",
    "Ayurveda Tamil Nadu",
    "Yoga and meditation resort India",
    "Sattvic food resort",
    "Healing holidays India",
  ],
  authors: [{ name: "Gold Mountain Wellness Resort" }],
  creator: "Gold Mountain Wellness Resort",
  publisher: "Gold Mountain Wellness Resort",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Gold Mountain Wellness Resort | In the Presence of Arunachala",
    description:
      "Heal the body and mind through traditional therapy and healthy food amidst nature, in the presence of divine Arunachala.",
    url: "https://goldmountainresort.com",
    siteName: "Gold Mountain Wellness Resort",
    images: [
      {
        url: "/assets/images/hero-arunachala.png",
        width: 1200,
        height: 630,
        alt: "Gold Mountain Wellness Resort overlooking Arunachala",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gold Mountain Wellness Resort | Tiruvannamalai",
    description:
      "A peaceful wellness resort in the sacred presence of Arunachala and Parvati Malai.",
    images: ["/assets/images/hero-arunachala.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/assets/logos/logo-primary.png",
    apple: "/assets/logos/logo-primary.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${seasonsFallback.variable}`}>
      <body className="bg-ivory text-green font-sans min-h-screen flex flex-col antialiased selection:bg-gold/30 selection:text-green-deep">
        <Header />
        <main className="flex-grow pt-[84px]">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
