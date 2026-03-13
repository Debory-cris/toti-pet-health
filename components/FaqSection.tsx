"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const FAQS = [
    {
        question: "O plano tem período de carência?",
        answer: "Para consultas de rotina e vacinas, a carência é de apenas 24h. Para procedimentos mais complexos, o prazo varia entre 30 a 90 dias, dependendo do plano escolhido."
    },
    {
        question: "Posso adicionar mais de um pet no mesmo plano?",
        answer: "Sim! Na Toti, o segundo pet tem 10% de desconto na mensalidade. Queremos toda a família protegida."
    },
    {
        question: "Quais são as formas de pagamento?",
        answer: "Aceitamos cartão de crédito (com renovação automática para não esqueceres), boleto bancário e PIX."
    },
    {
        question: "Como encontro um veterinário credenciado?",
        answer: "Através da nossa app ou site, podes filtrar por localização e especialidade. Temos a rede mais carinhosa de Portugal e do Brasil."
    }
];

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-white">
            <div className="max-w-3xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-[var(--color-secondary)] font-bold tracking-widest uppercase text-xs">
                        Dúvidas Comuns
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold mt-4 text-[var(--color-primary)]">
                        Perguntas Frequentes
                    </h2>
                </div>

                <div className="space-y-4">
                    {FAQS.map((faq, index) => (
                        <div
                            key={index}
                            className="border-2 border-gray-50 rounded-3xl overflow-hidden transition-all duration-300"
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full p-6 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
                            >
                                <span className="font-bold text-gray-700 md:text-lg">
                                    {faq.question}
                                </span>
                                {openIndex === index ? (
                                    <FiMinus className="text-[var(--color-primary)] flex-shrink-0" />
                                ) : (
                                    <FiPlus className="text-[var(--color-secondary)] flex-shrink-0" />
                                )}
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <p className="p-6 pt-0 text-gray-600 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}