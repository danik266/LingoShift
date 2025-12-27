import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "./components/SmoothScrolling"; // Импортируем ваш компонент

const nunito = Nunito({ 
  subsets: ["latin", "cyrillic"],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800']
});

// 👇 ВОТ ЗДЕСЬ УКАЗЫВАЕТСЯ НАЗВАНИЕ САЙТА
export const metadata: Metadata = {
  title: "LingoShift",
  description: "Learn languages ​​in context.",
  icons: {
    icon: '/favicon.ico', 
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={`${nunito.variable} font-nunito bg-[#f8fafc] text-[#1e293b] overflow-x-hidden antialiased`}>
        {/* Оборачиваем контент в клиентский компонент */}
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}