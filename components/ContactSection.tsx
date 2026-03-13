import { FiMail, FiPhone } from "react-icons/fi";
import Container from "./Container";

export default function ContactSection() {
    return (
        <section className="py-24 md:py-32 bg-white overflow-hidden">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div className="text-left">
                        <h2 className="text-4xl md:text-5xl font-black mb-6 text-[var(--color-primary)] leading-tight">
                            Entre em contato conosco
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                            Estamos aqui para ajudar! Se você tiver alguma dúvida ou precisar de mais informações, não hesite em nos contatar.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row lg:flex-col gap-6 w-full">

                        {/* Card E-mail (Verde) */}
                        <div className="flex items-center gap-5 p-6 rounded-[2rem] bg-[#42FF9B] w-full shadow-lg transition-transform hover:scale-[1.02]">
                            <div className="bg-white p-4 rounded-2xl shadow-sm flex-shrink-0">
                                <FiMail className="text-2xl text-[var(--color-primary)]" />
                            </div>
                            <div className="flex flex-col min-w-0">
                                <span className="text-[10px] font-black uppercase tracking-widest text-[var(--color-primary)] opacity-60">E-mail</span>
                                <a href="mailto:contato@toti.com" className="text-lg font-bold text-[var(--color-primary)] hover:underline truncate">
                                    contato@toti.com
                                </a>
                            </div>
                        </div>

                        {/* Card Telefone (Branco) */}
                        <div className="flex items-center gap-5 p-6 rounded-[2rem] bg-white border-2 border-gray-100 w-full shadow-lg transition-transform hover:scale-[1.02]">
                            <div className="bg-[#FFF0F7] p-4 rounded-2xl flex-shrink-0">
                                <FiPhone className="text-2xl text-[#FF69B4]" />
                            </div>
                            <div className="flex flex-col min-w-0">
                                <span className="text-[10px] font-black uppercase tracking-widest text-[#FF69B4] opacity-60">Telefone</span>
                                <a href="tel:+5511999999999" className="text-lg font-bold text-gray-800 hover:underline">
                                    (11) 99999-9999
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </Container>
        </section>
    );
}