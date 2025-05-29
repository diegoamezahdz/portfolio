import React from 'react'
import {
    Github,
    ExternalLink,
} from 'lucide-react';
import { projects } from '../../helpers/Data';
import Image from 'next/image'

const Projects = () => {
    return (
        <section id="projects" className="flex flex-col justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8 py-16"
        >
            {/* Section Header */}
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300 pb-4">
                    Proyectos
                </h2>
                <div className="w-16 h-1 bg-orange-400 mx-auto rounded-full"></div>
            </div>

            {/* Projects Grid */}
            <div className="w-full max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-700/50 hover:transform hover:scale-105 transition-all duration-300"
                        >
                            {/* Project Image */}
                            <div className="w-full h-48 relative mb-6 rounded-xl overflow-hidden">
                                <Image
                                    src={project.img}
                                    alt="Imagen del proyecto"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-xl"
                                    priority // Opcional: mejora el rendimiento para imágenes importantes
                                />
                            </div>

                            {/* Project Content */}
                            <div className="space-y-4">
                                <h3 className="text-xl sm:text-2xl font-bold text-orange-400">
                                    {project.title}
                                </h3>

                                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 text-xs sm:text-sm bg-orange-500/20 text-orange-300 rounded-full border border-orange-500/30"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Project Links */}
                                <div className="flex items-center space-x-4 pt-4">
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        className="text-gray-400 hover:text-orange-400 transition-colors duration-300 transform hover:scale-110"
                                        aria-label="View GitHub Repository"
                                    >
                                        <Github size={24} />
                                    </a>
                                    {/* <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        className="text-gray-400 hover:text-orange-400 transition-colors duration-300 transform hover:scale-110"
                                        aria-label="View Live Project"
                                    >
                                        <ExternalLink size={24} />
                                    </a> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects