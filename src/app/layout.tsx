import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { StructuredData } from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ayana Izumi - AI WhatsApp Bot",
  description: "Teman AI Paling Gemes di WhatsApp! Bikin Chat-mu Makin Seru & Berwarna! 🌈.",
  keywords: "AI bot, WhatsApp bot, AI assistant, voice AI, image generation, AI chat, Indonesia AI, virtual assistant, chatbot",
  authors: [{ name: "PGRjoystick" }],
  creator: "PGRjoystick",
  publisher: "Latent Space Explorer",
  robots: "index, follow",
  metadataBase: new URL("https://ayana.izumi.id"),
  
  // Open Graph metadata for social media sharing
  openGraph: {
    title: "Ayana Izumi - AI WhatsApp Bot Paling Gemes! 💖",
    description: "Teman AI yang bisa ngobrol, nyanyi, ngomong, dan bikin gambar keren! Chat sama Ayana sekarang di WhatsApp! 🌈✨",
    url: "https://ayana.izumi.id",
    siteName: "Ayana Izumi",
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "/og-image.png", // PNG version for better compatibility
        width: 1200,
        height: 630,
        alt: "Ayana Izumi - AI WhatsApp Bot yang Gemes dan Pintar",
        type: "image/png",
      },
      {
        url: "/screenshots/chat-demo.jpg", // Fallback to existing screenshot
        width: 800,
        height: 600,
        alt: "Screenshot chat WhatsApp dengan Ayana Izumi",
        type: "image/jpeg",
      }
    ],
  },
  
  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    site: "@ayana_izumi", // Add your Twitter handle if you have one
    creator: "@pgrjoystick", // Your Twitter handle
    title: "Ayana Izumi - AI WhatsApp Bot Paling Gemes! 💖",
    description: "Teman AI yang bisa ngobrol, nyanyi, ngomong, dan bikin gambar keren! Chat sama Ayana sekarang! 🌈✨",
    images: {
      url: "/og-image.png",
      alt: "Ayana Izumi - AI WhatsApp Bot yang Gemes dan Pintar",
    },
  },
  
  // Additional metadata for better SEO
  category: "Technology",
  classification: "AI Assistant, Chatbot, WhatsApp Bot",
  applicationName: "Ayana Izumi Website",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  
  // Verification tags (add these if you have them)
  // verification: {
  //   google: "your-google-verification-code",
  //   other: {
  //     "facebook-domain-verification": "your-facebook-verification-code"
  //   }
  // },
  
  // Alternate languages if you plan to add English version
  alternates: {
    canonical: "https://ayana.izumi.id",
    languages: {
      "id-ID": "https://ayana.izumi.id",
      // "en-US": "https://ayana.izumi.id/en", // Future English version
    },
  },
  
  // Icons and favicons
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-touch-icon.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/favicon.svg",
        color: "#0891b2",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
