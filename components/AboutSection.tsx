"use client";

import Image from "next/image";
import Container from "./Container";

export default function AboutSection() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <Container>
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">

                    <div className="flex-1 relative">
                        <div className="absolute -top-10 -left-10 w-64 h-64 bg-[var(--color-tertiary)]/20 rounded-full blur-3xl" />
                        <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
                            <img
                                src="/tutor-pet.png"
                                alt="Cuidado e amor com os pets"
                                className="w-full h-full object-cover"
                                style={{ width: 600, height: 600 }}
                            />
                        </div>
                    </div>

                    <div className="flex-1 text-center md:text-left">
                        {/* Subtítulo */}
                        <span className="text-[var(--color-secondary)] font-bold tracking-[0.2em] uppercase text-xs mb-3 block">
                            Nossa Essência
                        </span>

                        <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-[var(--color-primary)] leading-tight">
                            Muito mais que um plano, <br className="hidden md:block" />
                            um compromisso com o amor.
                        </h2>

                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                            <p>
                                A <strong className="text-[var(--color-primary)]">Toti</strong> nasceu de um sentimento que todo tutor conhece: o desejo de ver quem amamos sempre bem. Percebemos que a saúde pet precisava de algo mais — menos burocracia e mais humanidade.
                            </p>
                            <p>
                                Não somos apenas uma rede credenciada; somos o porto seguro para os momentos de imprevisto. Acreditamos que cada ronrom e cada abanar de rabo merece o cuidado mais atento do mundo.
                            </p>
                            <p className="font-medium text-gray-800 italic border-l-4 border-[var(--color-tertiary)] pl-4">
                                "Nosso propósito é garantir que a única preocupação do tutor seja retribuir o amor que recebe."
                            </p>
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
}