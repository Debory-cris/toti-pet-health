import type { Metadata } from "next";
import { Chiron_GoRound_TC } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const chironGoRoundTC = Chiron_GoRound_TC({
  variable: "--font-chiron-go-round-tc ",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Toti | Planos de Saúde para seu Pet 🐾",
  description: "Cuidando de quem te faz feliz. Planos de saúde pensados para a tranquilidade da sua família.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${chironGoRoundTC.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
