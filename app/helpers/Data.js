import { FaCode, FaServer, FaCloud, FaReact, FaNodeJs, FaPython, FaDocker, FaGitAlt, FaAws, FaDatabase, FaGitlab, FaBitbucket, FaGoogle, FaPhone } from "react-icons/fa";
import { SiOllama, SiClaude, SiTypescript, SiJavascript, SiRedux, SiMongodb, SiPostgresql, SiVite, SiAngular, SiCreatereactapp, SiFirebase, SiTailwindcss, SiStyledcomponents } from "react-icons/si";
import { LuBot } from "react-icons/lu";
import { RiGeminiLine } from "react-icons/ri";
import { GiSpermWhale } from "react-icons/gi";
import { CiChat1 } from "react-icons/ci";
import { IoPhonePortraitOutline } from "react-icons/io5";
import muuappImage from '@/app/assets/muuapp.jpg'

export const projects = [
  {
    id: 1,
    img: muuappImage,
    title: "Muu App",
    description: "Aplicación diseñada para simplificar y optimizar la gestión del ganado bovino en una o varias fincas. Pensada para ganaderos, veterinarios y administradores rurales, permite llevar un control detallado y en tiempo real del estado de cada animal",
    technologies: ["React Native", "Styled Components", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/diegoamezahdz/muuapp",
    liveUrl: "#"
  },
  {
    id: 2,
    img: muuappImage,
    title: "La mejor ruta",
    description: "Aplicación web diseñada para ayudarte a encontrar la mejor ruta entre dos o más puntos, optimizando tiempo, distancia o preferencias específicas del usuario.",
    technologies: ["Next.js", "JavaScript", "React", "Tailwind"],
    githubUrl: "https://github.com/diegoamezahdz/form-map",
    liveUrl: "#"
  },
  {
    id: 3,
    img: muuappImage,
    title: "La mejor ruta",
    description: "Aplicación web diseñada para ayudarte a encontrar la mejor ruta entre dos o más puntos, optimizando tiempo, distancia o preferencias específicas del usuario.",
    technologies: ["Next.js", "JavaScript", "React", "Tailwind"],
    githubUrl: "https://github.com/diegoamezahdz/form-map",
    liveUrl: "#"
  }
];

export const skillCategories = [
  {
    id: 1,
    title: "Frontend",
    icon: <FaCode className="w-6 h-6" />,
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "Vite", icon: <SiVite /> },
      { name: "Angular", icon: <SiAngular /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Styled Components", icon: <SiStyledcomponents /> }
    ]
  },
  {
    id: 2,
    title: "Backend",
    icon: <FaServer className="w-6 h-6" />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Python", icon: <FaPython /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "SQL Server", icon: <FaDatabase /> },
      { name: "Firebase", icon: <SiFirebase /> },

    ]
  },
  {
    id: 3,
    title: "DevOps",
    icon: <FaCloud className="w-6 h-6" />,
    skills: [
      { name: "Docker", icon: <FaDocker /> },
      { name: "Git", icon: <FaGitAlt /> },
      { name: "Git Lab", icon: <FaGitlab /> },
      { name: "BitBucket", icon: <FaBitbucket /> },
      { name: "Google Cloud", icon: <FaGoogle /> },
    ]
  },

  {
    id: 4,
    title: "Móvil",
    icon: <IoPhonePortraitOutline className="w-6 h-6" />,
    skills: [
      { name: "React Native", icon: <SiCreatereactapp /> },
    ]
  },
  {
    id: 5,
    title: "IA",
    icon: <LuBot className="w-6 h-6" />,
    skills: [
      { name: "Vertex IA", icon: <LuBot /> },
      { name: "Gemini", icon: <RiGeminiLine /> },
      { name: "Ollama", icon: <SiOllama /> },
      { name: "OpenIa", icon: <CiChat1 /> },
      { name: "DeepSeek", icon: <GiSpermWhale /> },
      { name: "Cursor", icon: <SiClaude /> },

    ]
  }
];