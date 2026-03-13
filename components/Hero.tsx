"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Container from "./Container";
import dogAnimation from "../public/dog.json";
import catAnimation from "../public/Lovely-cat.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const BANNERS = [
    {
        id: 1,
        title: <>Cuidado real para <br /> o seu cão.</>,
        subtitle: <>Planos de saúde com ampla rede credenciada. <br />Sem burocracia, acesso imediato aos melhores veterinários.</>,
        animationData: dogAnimation,
        color: "var(--color-primary)",
        background: "var(--color-tertiary)",
    },
    {
        id: 2,
        title: <>Cuidado real para <br /> o seu gato.</>,
        subtitle: <>Planos de saúde com ampla rede credenciada. <br />Sem burocracia, acesso imediato aos melhores veterinários.</>,
        animationData: catAnimation,
        color: "var(--color-primary)",
        background: "var(--color-secondary)",
    },
];

export default function Hero() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev === BANNERS.length - 1 ? 0 : prev + 1));
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    return (

        <section className="relative h-[780px] md:h-[650px] overflow-hidden bg-[var(--background-color)]">
            {BANNERS.map((banner, index) => (
                <div
                    key={banner.id}
                    style={{ backgroundColor: banner.background }}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out flex items-center pt-20 md:pt-0
                    ${index === current
                            ? "opacity-100 translate-x-0 z-10"
                            : index < current
                                ? "opacity-0 -translate-x-full z-0"
                                : "opacity-0 translate-x-full z-0"
                        }`}
                >
                    <Container>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 px-4">


                            <div className={`flex-1 flex justify-center order-1 md:order-2 ${index === current ? "animate-float" : ""}`}>
                                <Lottie
                                    animationData={banner.animationData}
                                    loop={true}
                                    className="w-[300px] h-[300px] md:w-[550px] md:h-[550px]"
                                />
                            </div>

                            {/* 2. Área do Texto */}
                            <div className="flex-1 text-center md:text-left order-2 md:order-1">
                                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight" style={{ color: banner.color }}>
                                    {banner.title}
                                </h1>
                                <p className="mt-4 text-base md:text-lg opacity-90 max-w-md mx-auto md:mx-0">
                                    {banner.subtitle}
                                </p>
                                <Link href="/products" className="mt-8 inline-block bg-[var(--color-primary)] text-white px-8 py-3 rounded-full font-bold hover:brightness-110 transition-all shadow-lg">
                                    Ver Planos
                                </Link>
                            </div>

                        </div>
                    </Container>
                </div>
            ))}
        </section>
    );
}