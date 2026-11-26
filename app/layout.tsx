import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Skill-Swap | BYU-Pathway",
  description: "Connecting senior students with freshmen for academic success.",
  applicationName: "Skill-Swap"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen flex flex-col bg-white text-neutral-900 antialiased selection:bg-[#FFC72C] selection:text-neutral-900`}
      >
        {/* Topo fixo/estrutural */}
        <Header />

        {/* Área central limpa para o conteúdo de cada page.tsx */}
        <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {children}
        </main>

        {/* Rodapé sempre na base da tela */}
        <Footer />
      </body>
    </html>
  );
}