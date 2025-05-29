"use client"
import React, { useState, useEffect } from "react"
import {
    Github,
    Linkedin,
    Mail,
} from 'lucide-react';

const Home = () => {
    const fullText = "[Diego Meza Hernández]";
    const [displayedText, setDisplayedText] = useState("");
    const ifText = displayedText === fullText
    useEffect(() => {
        let index = 0;

        const interval = setInterval(() => {
            setDisplayedText(fullText.slice(0, index + 1));
            index++;
            if (index === fullText.length) clearInterval(interval);
        }, 100); // velocidad del tipeo (ms)

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="flex flex-col justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8" id="home">
            <div className="w-full max-w-2xl">
                <div className="bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-2xl border border-gray-700/50 mt-20">
                    {/* Header Text */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300 pb-4">
                            {displayedText}
                            {!ifText && <span className="animate-pulse">|</span>}
                        </h1>
                        <div className="w-16 h-1 bg-orange-400 mx-auto rounded-full mb-8"></div>
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-200 mb-6">
                            Full Stack Developer
                        </h2>

                        {/* Description */}
                        <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-lg mx-auto text-justify">
                            Desarrollador de software full stack con amplia experiencia y un enfoque autodidacta. Me mantengo actualizado en nuevas tecnologías para enriquecer mi práctica profesional y disfruto trabajar en equipo para convertir ideas en soluciones tecnológicas eficientes. He contribuido en proyectos que optimizan procesos y generan resultados de alta calidad.
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center items-center space-x-8">
                        <a
                            href="https://github.com/diegoamezahdz"
                            target="_blank"
                            className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                            aria-label="GitHub"
                        >
                            <Github size={28} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/diego-meza-hern%C3%A1ndez-4b1679263"
                            target="_blank"
                            className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={28} />
                        </a>
                        <a
                            href="mailto:diego.a.meza.hdz@gmail.com"
                            className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                            aria-label="Email"
                        >
                            <Mail size={28} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home