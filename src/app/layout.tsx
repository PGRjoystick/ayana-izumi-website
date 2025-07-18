import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  description: "Meet Ayana Izumi, your AI-powered WhatsApp companion who can chat, sing, speak, and create stunning images. Experience the future of AI conversation.",
  keywords: "AI bot, WhatsApp bot, AI assistant, voice AI, image generation, AI chat",
  authors: [{ name: "PGRjoystick" }],
  openGraph: {
    title: "Ayana Izumi - AI WhatsApp Bot",
    description: "Your AI-powered WhatsApp companion for conversations, music, voice, and creative image generation.",
    url: "https://ayana.izumi.id",
    siteName: "Ayana Izumi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayana Izumi - AI WhatsApp Bot",
    description: "Your AI-powered WhatsApp companion for conversations, music, voice, and creative image generation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
