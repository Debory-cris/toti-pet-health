"use client";

import { FiCheckCircle, FiArrowLeft } from "react-icons/fi";
import LeadForm from "./LeadForm";

export default function Subscribe() {
    return (
        <section
            className="relative py-24 md:py-32 min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/bg.png')" }}
        >
            <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px] -z-10" />

            <div className="max-w-3xl mx-auto text-center px-6 relative z-10">

                <button
                    onClick={() => window.history.back()}
                    className="group mb-8 flex items-center gap-2 mx-auto text-sm font-bold text-gray-400 hover:text-[var(--color-primary)] transition-all"
                >
                    <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                    Voltar para o início
                </button>

                <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-tertiary)]/30 text-[var(--color-primary)] font-bold text-xs uppercase tracking-[0.2em] mb-6">
                    Família Toti 🐾
                </span>

                <h2 className="text-4xl md:text-6xl font-black mb-6 text-[var(--color-primary)] leading-tight">
                    Assine a Toti
                </h2>

                <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
                    Aproveite todos os benefícios de ter a rede mais carinhosa do mercado cuidando de quem você mais ama.
                </p>

                <div className="flex flex-wrap justify-center gap-6 mb-12">
                    {["Atendimento 24h", "Sem carência", "Cancelamento grátis"].map((item) => (
                        <div key={item} className="flex items-center gap-2 text-gray-500 font-semibold text-sm">
                            <FiCheckCircle className="text-[var(--color-tertiary)]" />
                            {item}
                        </div>
                    ))}
                </div>

                <div className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-2xl shadow-purple-200/50 border border-gray-100">
                    <LeadForm />
                </div>
            </div>
        </section>
    );
}