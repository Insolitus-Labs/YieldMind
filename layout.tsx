import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import type React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VIGLO",
  description: "AI-Powered Fraud Detection on Solana",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="VIGLO - AI-Powered Fraud Detection" />
        <meta property="og:description" content="VIGLO leverages AI to detect fraudulent activities on Solana." />
        <meta property="og:image" content="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/openart-image.jpg" />
        <meta property="og:url" content="https://viglo.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <script async defer src="https://www.googletagmanager.com/gtag/js?id=UA-XXXXX-X"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          rel="preload"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/openart-image_f3n-YsTm_1736231910487_raw.jpg-C8QuPQsopNG8KeRVHe1HzUk8ULBAh2.jpeg"
          as="image"
        />
        <link
          rel="icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/openart-image_f3n-YsTm_1736231910487_raw.jpg-C8QuPQsopNG8KeRVHe1HzUk8ULBAh2.jpeg"
          type="image/jpeg"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
