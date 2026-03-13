"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/Logo-principal.png";
import Container from "./Container";

export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (

        <header className="fixed top-0 w-full z-50 bg-white shadow-sm py-2 flex justify-between items-center ">

            <Container>

                <div className="flex items-center justify-between gap-40 md:gap-12">
                    <Link href="/">
                        <Image src={Logo}
                            alt="Logo da Toti"
                            width={180}
                            height={60}
                            priority />
                    </Link>

                    <nav className="flex hidden md:flex gap-14 text-sm font-bold tracking-tight items-center justify-between">

                        <Link href="/" className="hover:text-[var(--color-secondary)] transition-colors">Home</Link>
                        <Link href="/about" className="hover:text-[var(--color-secondary)] transition-colors">Quem somos</Link>
                        <Link href="/products" className="hover:text-[var(--color-secondary)] transition-colors">Nossos planos</Link>
                        <Link href="/faq" className="hover:text-[var(--color-secondary)] transition-colors">Perguntas Frequentes</Link>
                        <Link href="/contact" className="hover:text-[var(--color-tertiary)] transition-colors">Contato</Link>

                        <Link href="/subscribe" className="px-4 py-2 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-secondary)] transition-colors">
                            Escolher meu plano
                        </Link>

                    </nav>

                    <button
                        className="md:hidden text-3xl z-50 
                        text-[var(--color-primary)] 
                        hover:text-[var(--color-secondary)] 
                        transition-colors duration-300"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? "✕" : "☰"}
                    </button>
                </div>

                {menuOpen && (
                    <div
                        className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden"
                        onClick={() => setMenuOpen(false)}
                    />
                )}

                {/* MENU MOBILE*/}
                <div className={`
    fixed top-0 right-0 h-screen w-[70%] bg-white shadow-2xl z-50 p-10
    transition-transform duration-300 ease-in-out md:hidden
    ${menuOpen ? "translate-x-0" : "translate-x-full"}
`}>
                    {/* Botão de Fechar dentro do Menu */}
                    <button
                        className="absolute top-6 right-10 text-3xl text-[var(--color-primary)]"
                        onClick={() => setMenuOpen(false)}
                    >
                        ✕
                    </button>

                    <nav className="flex flex-col gap-6 mt-20 text-lg font-bold">

                        <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-[var(--color-secondary)]">
                            Home
                        </Link>
                        <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-[var(--color-secondary)]">
                            Quem somos
                        </Link>
                        <Link href="/products" onClick={() => setMenuOpen(false)} className="hover:text-[var(--color-secondary)]">
                            Nossos planos
                        </Link>
                        <Link href="/faq" onClick={() => setMenuOpen(false)} className="hover:text-[var(--color-secondary)]">
                            Perguntas Frequentes
                        </Link>
                        <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-[var(--color-tertiary)]">
                            Contato
                        </Link>
                        <Link href="/subscribe" onClick={() => setMenuOpen(false)} className="px-4 py-2 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-secondary)] transition-colors text-center">
                            Escolher meu plano
                        </Link>
                    </nav>
                </div>


            </Container>

        </header >
    );
}