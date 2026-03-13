"use client";

import Link from "next/link";
import { HiChip } from "react-icons/hi";
import { PiDogBold, PiDogFill } from "react-icons/pi";
import { MdAttachMoney } from "react-icons/md";

export default function Details() {
    return (

        <section className="py-20 bg-[var(--background-color)] w-full flex flex-col items-center">

            {/* 1. Cabeçalho */}
            <div className="w-full max-w-4xl text-center px-4 mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--text-color)]">
                    Cuidado em cada detalhe:
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                    Na Toti, entendemos que seu pet é parte da família. Por isso, oferecemos planos de saúde personalizados, com ampla cobertura e uma rede credenciada de confiança.
                </p>
            </div>

            {/* 2. Grid de Cards */}
            <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-8 w-full px-4 mb-16">

                {/* Card 1: Microchipagem */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 flex flex-col items-center md:items-start text-center md:text-left w-full max-w-[380px]">
                    <div className="bg-[var(--color-tertiary)]/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                        <HiChip className="text-3xl text-[var(--color-secondary)]" />
                    </div>
                    <h3 className="text-xl font-bold text-[var(--color-secondary)] leading-tight mb-4">
                        Microchipagem: <br />
                        Segurança para o seu pet
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed text-justify">
                        Você sabia que a microchipagem é uma das formas mais eficazes de garantir a segurança do seu pet? Na Toti, oferecemos essa tecnologia para proporcionar tranquilidade para você e proteção para o seu melhor amigo.
                    </p>
                </div>

                {/* Card 2: Desconto Família */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 flex flex-col items-center md:items-start text-center md:text-left w-full max-w-[380px]">
                    <div className="bg-[var(--color-tertiary)]/20 px-4 h-14 rounded-2xl flex items-center justify-center mb-6 gap-1">
                        <PiDogBold className="text-3xl text-[var(--color-secondary)]" />
                        <PiDogFill className="text-3xl text-[var(--color-secondary)]" />
                    </div>
                    <h3 className="text-xl font-bold text-[var(--color-secondary)] leading-tight mb-4">
                        Desconto <br />
                        para toda família!
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed text-justify">
                        A partir do segundo pet, oferecemos um desconto especial para que toda a sua família possa desfrutar dos benefícios da Toti. Cuidar de mais de um pet nunca foi tão vantajoso!
                    </p>
                </div>

                {/* Card 3: Valor Fixo */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 flex flex-col items-center md:items-start text-center md:text-left w-full max-w-[380px]">
                    <div className="bg-[var(--color-tertiary)]/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                        <MdAttachMoney className="text-3xl text-[var(--color-secondary)]" />
                    </div>
                    <h3 className="text-xl font-bold text-[var(--color-secondary)] leading-tight mb-4">
                        Valor fixo!
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed text-justify">
                        Seu pet não paga nada a mais por conta da idade ou raça. Na Toti, oferecemos um valor fixo para todos os nossos planos, garantindo que seu melhor amigo tenha acesso ao cuidado que merece.
                    </p>
                </div>

            </div>

            {/* 3. Botão Final */}
            <div className="w-full flex justify-center px-4 pb-10">
                <Link
                    href="/products"
                    className="bg-[var(--color-primary)] text-white px-10 py-4 rounded-full font-bold hover:bg-[var(--color-secondary)] transition-all shadow-md hover:shadow-xl text-center"
                >
                    Conheça nossos planos
                </Link>
            </div>

        </section>
    );
}