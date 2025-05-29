import { skillCategories } from '@/app/helpers/Data'
import React from 'react'

const Skills = () => {
    return (
        <section
            id="skills"
            className="flex flex-col justify-center items-center min-h-scree px-4 sm:px-6 lg:px-8 py-16"
        >
            {/* Section Header */}
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300 mb-4">
                    Skills
                </h2>
                <div className="w-16 h-1 bg-orange-400 mx-auto rounded-full"></div>
            </div>

            {/* Skills Grid */}
            <div className="w-full max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category) => (
                        <div
                            key={category.id}
                            className="bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-700/50 hover:transform hover:scale-105 transition-all duration-300"
                        >
                            {/* Category Header */}
                            <div className="flex items-center mb-6">
                                <div className="text-orange-400 mr-3">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-orange-400">
                                    {category.title}
                                </h3>
                            </div>
                            <div className="w-12 h-0.5 bg-orange-400 mb-6 rounded-full"></div>

                            {/* Skills Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                {category.skills.map((skill, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700/70 transition-colors duration-300"
                                    >
                                        <span className="text-lg mr-3 text-white">
                                            {skill.icon}
                                        </span>
                                        <span className="text-gray-200 text-sm sm:text-base font-medium">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills