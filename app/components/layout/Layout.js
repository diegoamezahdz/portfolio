import React from 'react'

const Layout = ({ children }) => {
    const currentYear = new Date().getFullYear();
    const classTextHeaderBtn = "text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
    return (
        <>
            {/* Navbar */}
            <header className="text-lg bg-gray-800/90 backdrop-blur-sm shadow-2xl border border-gray-700/50 text-white py-4 position">
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <h1 className="text-3xl font-semibold">Diego Dev</h1>
                    <nav>
                        <ul className="flex space-x-6">
                            <li><a href="#home" className={classTextHeaderBtn}>Sobre mí</a></li>
                            <li><a href="#projects" className={classTextHeaderBtn}>Proyectos</a></li>
                            <li><a href="#skills" className={classTextHeaderBtn}>Skills</a></li>
                            <li><a href="#contact" className={classTextHeaderBtn}>Contacto</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            {children}
            <footer className="bg-gray-800/90 backdrop-blur-sm shadow-2xl border border-gray-700/50 text-white py-4">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p>&copy; {currentYear} Diego Meza Hernández. Todos los derechos reservados.</p>
                </div>
            </footer>
        </>

    )
}

export default Layout