"use client"; // Важно!

import { Nunito } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "lenis/react";

const nunito = Nunito({ 
  subsets: ["latin", "cyrillic"],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800']
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={`${nunito.variable} font-nunito bg-[#f8fafc] text-[#1e293b] overflow-x-hidden antialiased`}>
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}