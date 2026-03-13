"use client";

import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import Lottie from "lottie-react";
import animationData from "../public/Cat.json";

const PLANS = [
    {
        name: "Essencial",
        price: "39,90",
        description: "O cuidado básico e indispensável para o dia a dia.",
        features: ["Consultas em horário comercial", "Vacinas anuais (V10/V8)", "Exames laboratoriais simples", "Atendimento clínico"],
        color: "var(--color-tertiary)",
        buttonVariant: "outline"
    },
    {
        name: "Toti Plus",
        price: "69,90",
        description: "O plano mais amado, com cobertura para imprevistos.",
        features: ["Tudo do Essencial", "Consultas de emergência 24h", "Especialistas (Dermato/Cardio)", "Exames de imagem (Raio-X/USG)", "Limpeza de tártaro"],
        color: "var(--color-primary)",
        featured: true
    },
    {
        name: "Toti Premium",
        price: "129,90",
        description: "A tranquilidade absoluta para quem quer o melhor.",
        features: ["Tudo do Plus", "Cirurgias complexas", "Internação inclusa", "Fisioterapia e Acupuntura", "Auxílio funeral e cremação"],
        color: "var(--color-secondary)",
        buttonVariant: "outline"
    }
];

export default function ProductsSection() {
    return (
        <section className="py-20 flex flex-col items-center bg-[var(--background-color)] min-h-screen relative overflow-hidden">

            <div className="text-center mb-16 relative z-10">
                <h1 className="text-4xl md:text-5xl font-black text-[var(--color-primary)] mb-2 py-8">
                    Escolha o plano ideal <br /> para o seu melhor amigo
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto px-4">
                    Proteção sob medida com a rede credenciada mais carinhosa do mercado.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mx-10 mb-32 relative z-10">
                {PLANS.map((plan) => (
                    <div
                        key={plan.name}
                        className={`relative p-8 rounded-[2.5rem] transition-all duration-300 bg-white shadow-xl hover:-translate-y-2 ${plan.featured ? "border-4 border-[var(--color-primary)] scale-105 z-10" : "border border-gray-100"
                            }`}
                    >
                        {plan.featured && (
                            <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[var(--color-primary)] text-white px-6 py-1 rounded-full text-sm font-bold uppercase tracking-widest">
                                Mais Escolhido
                            </span>
                        )}

                        <h3 className="text-2xl font-bold mb-2" style={{ color: plan.color }}>{plan.name}</h3>

                        <div className="flex items-baseline gap-1 mb-4">
                            <span className="text-sm font-semibold text-gray-500">R$</span>
                            <span className="text-4xl font-black text-gray-800">{plan.price}</span>
                            <span className="text-gray-400">/mês</span>
                        </div>

                        <p className="text-gray-500 text-sm mb-8">{plan.description}</p>

                        <ul className="space-y-4 mb-10 text-left">
                            {plan.features.map((feature) => (
                                <li key={feature} className="flex items-start gap-3 text-gray-600 text-sm">
                                    <FaCheck className="mt-1 flex-shrink-0" style={{ color: plan.color }} />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <button
                            className={`w-full py-4 rounded-2xl font-bold transition-all ${plan.featured
                                ? "bg-[var(--color-primary)] text-white hover:brightness-110 shadow-lg"
                                : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                                }`}
                        >
                            <Link href="/subscribe">Assinar Agora</Link>
                        </button>
                    </div>
                ))}
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full flex justify-center pointer-events-none z-0">
                <div className="w-[300px] md:w-[480px]">
                    <Lottie
                        animationData={animationData}
                        loop={true}
                    />
                </div>
            </div>

        </section>
    );
}