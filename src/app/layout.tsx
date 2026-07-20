import type { Metadata } from "next";
import { Manrope, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-cormorant", weight: ["400", "500", "600"] });

export const metadata: Metadata = { title: "Dr. Sergio Grava | Pneumologista em Maringá", description: "Pneumologia e Endoscopia Respiratória em Maringá. Consultas, exames e cuidado respiratório especializado." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR" className={`${manrope.variable} ${cormorant.variable}`}><body>{children}</body></html>;
}
