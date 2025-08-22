import type React from "react";
import type { Metadata } from "next";
import { Orbitron, Exo_2 } from "next/font/google";
import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { Providers } from "../providers/providers";

const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbitron",
  weight: ["400", "700", "900"],
});

const exo = Exo_2({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-exo",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "TokenBricks - Tokenize Your Property Investment",
  description:
    "Revolutionary platform for buying, selling, and renting real estate as NFTs on the blockchain. Secure, transparent, and innovative property investment with TokenBricks.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${orbitron.variable} ${exo.variable} antialiased`}
    >
      <body className='font-sans'>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
