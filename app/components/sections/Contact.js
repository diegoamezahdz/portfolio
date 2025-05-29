import React from 'react'
import {
    Github,
    Linkedin,
    Mail,
} from 'lucide-react';

const Contact = () => {
    return (
        <section
            id="contact"
            className="flex flex-col justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8 py-16"
        >
            {/* Section Header */}
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300 mb-4">
                    Contacto
                </h2>
                <div className="w-16 h-1 bg-orange-400 mx-auto rounded-full"></div>
            </div>

            {/* Contact Card */}
            <div className="w-full max-w-2xl">
                <div className="bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-2xl border border-gray-700/50">
                    {/* Contact Message */}
                    <div className="text-center mb-8">
                        <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-lg mx-auto">
                            Siempre me interesa saber sobre nuevos proyectos y oportunidades. Si tienes alguna pregunta o simplemente quieres saludar, ¡no dudes en contactarme!
                        </p>
                    </div>

                    {/* Email Button */}
                    <div className="text-center mb-12">
                        <a
                            href="mailto:diego.a.meza.hdz@gmail.com"
                            className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-orange-400 text-orange-400 rounded-full font-medium text-sm sm:text-base hover:bg-orange-400 hover:text-gray-800 transition-all duration-300 transform hover:scale-105"
                        >
                            <Mail className="w-5 h-5 mr-3" />
                            diego.a.meza.hdz@gmail.com
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center items-center space-x-8">
                        <a
                            href="https://github.com/diegoamezahdz"
                            target="_blank"
                            className="text-orange-400 hover:text-orange-300 transition-colors duration-300 transform hover:scale-110"
                            aria-label="GitHub"
                        >
                            <Github size={28} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/diego-meza-hern%C3%A1ndez-4b1679263"
                            target="_blank"
                            className="text-orange-400 hover:text-orange-300 transition-colors duration-300 transform hover:scale-110"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={28} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact