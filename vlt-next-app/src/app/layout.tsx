import type { Metadata } from "next";
import { Geist, Geist_Mono, Itim } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const itim = Itim({
  variable: "--font-itim",
  subsets: ["latin", "thai"],
  weight: "400", 
});

export const metadata: Metadata = {
  title: "Happy Valentine's day",
  description: "Happy Valentine's day from Tung to Tarn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${itim.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 py-20 gap-16 sm:p-20 font-[family-name:var(--font-itim)]">
          <header className="row-start-1 flex gap-6 flex-wrap items-center justify-center">
            Header
          </header>
          <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
            {children}
          </main>
          <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
            Footer
          </footer>
        </div>
      </body>
    </html>
  );
}
