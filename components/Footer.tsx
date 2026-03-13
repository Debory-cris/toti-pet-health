"use client";

import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa"; // Ícones sociais
import LogoBranca from "@/assets/Logo-Branca.png";

export default function Footer() {
    return (
        <footer className="bg-[var(--color-secondary)] text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">

                {/* Grid Principal */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 items-start text-center md:text-left">

                    {/* Coluna 1: Logo e Frase */}
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <Image
                            src={LogoBranca}
                            alt="Logo Toti"
                            width={140}
                            height={50}
                        />
                        <p className="text-pink-100 text-sm max-w-xs">
                            Cuidando de quem te faz feliz. Planos de saúde pensados para a tranquilidade da sua família.
                        </p>
                    </div>

                    {/* Coluna 2: Links */}
                    <div className="flex flex-col gap-3">
                        <h4 className="font-bold text-lg mb-2">Navegação</h4>
                        <Link href="/" className="hover:text-pink-300 transition-colors">Início</Link>
                        <Link href="/products" className="hover:text-pink-300 transition-colors">Nossos Planos</Link>
                        <Link href="#details" className="hover:text-pink-300 transition-colors">Diferenciais</Link>
                    </div>

                    {/* Coluna 3: Redes Sociais e Contato */}
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <h4 className="font-bold text-lg mb-2">Conecte-se</h4>
                        <div className="flex gap-5 text-2xl">
                            <Link href="#" className="hover:scale-110 transition-transform"><FaInstagram /></Link>
                            <Link href="#" className="hover:scale-110 transition-transform"><FaWhatsapp /></Link>
                            <Link href="#" className="hover:scale-110 transition-transform"><FaLinkedin /></Link>
                        </div>
                        <p className="text-sm mt-2">contato@toti.com.br</p>
                    </div>

                </div>

                {/* Linha de Divisão */}
                <hr className="border-pink-300/50 mb-8" />

                {/* Créditos Finais */}
                <div className="text-center text-xs text-pink-200/80">
                    &copy; {new Date().getFullYear()} Toti. Desenvolvido com ❤️ por Débora Cristina Meireles.
                </div>
            </div>
        </footer>
    );
}