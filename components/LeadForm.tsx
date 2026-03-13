"use client";

import { useState } from "react";
import { FiCheckCircle, FiHeart } from "react-icons/fi";

export default function LeadForm() {
    const [status, setStatus] = useState<"idle" | "enviando" | "sucesso">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("enviando");

        // Simulação de envio para a API
        setTimeout(() => {
            setStatus("sucesso");
        }, 2000);
    };

    // TELA DE SUCESSO 
    if (status === "sucesso") {
        return (
            <div className="py-10 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-[var(--color-tertiary)]/20 rounded-full flex items-center justify-center mb-6">
                    <FiCheckCircle className="text-5xl text-[var(--color-primary)] animate-bounce" />
                </div>
                <h3 className="text-2xl font-black text-[var(--color-primary)] mb-2">
                    Solicitação Enviada!
                </h3>
                <p className="text-gray-500 font-medium max-w-xs mx-auto">
                    Um corretor da Toti entrará em contato com você em breve. Prepara o pet! 🐾
                </p>
                <button
                    onClick={() => setStatus("idle")}
                    className="mt-8 text-sm font-bold text-[var(--color-secondary)] hover:underline flex items-center gap-2"
                >
                    <FiHeart /> Enviar outra solicitação
                </button>
            </div>
        );
    }

    // FORMULÁRIO 
    return (
        <form onSubmit={handleSubmit} className="space-y-5 text-left transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                    <label className="text-xs font-black uppercase text-[var(--color-primary)] ml-2 italic">Seu Nome</label>
                    <input
                        required
                        type="text"
                        placeholder="Ex: João Silva"
                        className="p-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[var(--color-tertiary)] focus:bg-white outline-none transition-all shadow-sm"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-xs font-black uppercase text-[var(--color-primary)] ml-2 italic">WhatsApp</label>
                    <input
                        required
                        type="tel"
                        placeholder="(11) 99999-9999"
                        className="p-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[var(--color-tertiary)] focus:bg-white outline-none transition-all shadow-sm"
                    />
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <label className="text-xs font-black uppercase text-[var(--color-primary)] ml-2 italic">Plano Desejado</label>
                <div className="relative">
                    <select className="w-full p-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[var(--color-tertiary)] focus:bg-white outline-none transition-all appearance-none cursor-pointer shadow-sm text-gray-600">
                        <option>Plano Essencial</option>
                        <option>Plano Plus</option>
                        <option>Plano Premium</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">▼</div>
                </div>
            </div>

            <button
                disabled={status === "enviando"}
                type="submit"
                className="w-full py-5 bg-[var(--color-primary)] text-white font-black text-lg rounded-2xl hover:brightness-110 shadow-lg shadow-purple-200/50 transition-all active:scale-95 disabled:opacity-70 disabled:cursor-wait"
            >
                {status === "enviando" ? (
                    <span className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin" />
                        Processando...
                    </span>
                ) : "Solicitar Contato do Corretor"}
            </button>

            <p className="text-[10px] text-gray-400 text-center uppercase tracking-[0.2em] font-bold">
                🔒 Seus dados estão 100% protegidos
            </p>
        </form>
    );
}