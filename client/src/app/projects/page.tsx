'use client'
import ProjectCard from '@/features/projects/Components/ProjectCard'
import { motion } from 'framer-motion'

const Projects = () => {
    const projects = [
        {
            title: 'Titanium Ignis ',
            description:
                'All-in-one team management platform combining GitHub, Jira, and Heroku-like features. Real-time collaboration for development teams, including code, tracking, and deployment within a single workspace.',
            languages: ['NestJS', 'TypeScript', 'Go', 'Docker'],
            githubUrl: 'https://github.com/AALXX/Titanium-Ignis',
            liveUrl: 'https://titanium-ignis.vercel.app/'
        },
        {
            title: 'StreamPlatform',
            description: 'A modern platform for streaming and sharing videos with advanced encoding and content delivery capabilities.',
            languages: ['TypeScript', 'Jupyter Notebook', 'Go'],
            githubUrl: 'https://github.com/AALXX/StreamPlatform'
        },
        {
            title: 'Trainerz ',
            description:
                'Full-stack streaming platform built with TypeScript and Docker, designed for scalability and rapid deployment via Docker Compose. Emphasized clean, maintainable code structure and modular client-server architecture.',
            languages: ['TypeScript', 'Go', 'Java'],
            githubUrl: 'https://github.com/AALXX/Trainerz'
        },
        {
            title: 'PlutoniumGameEngine',
            description:
                'Custom 2D game engine in C++ exploring real-time graphics, game architecture, and performance optimization. Modular design allows easy integration of physics, scripting, and rendering components.',
            languages: ['C++', 'C'],
            githubUrl: 'https://github.com/AALXX/PlutoniumGameEngine'
        },
        {
            title: 'Tipo Events Website ',
            description: 'Stylish, responsive website showcasing Romanian event-planning services, highlighting creativity and professionalism.',
            languages: ['Next.js', 'TypeScript', 'Tailwind CSS'],
            liveUrl: 'https://www.tipoevents.com/'
        }
    ]

    return (
        <div className="container mx-auto max-w-6xl overflow-y-scroll px-6 py-24">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="space-y-12">
                <div className="space-y-4">
                    <h1 className="text-5xl font-bold tracking-tight">
                        Featured <span className="text-gradient">Projects</span>
                    </h1>
                    <p className="text-muted-foreground max-w-2xl text-xl">A selection of my work showcasing full-stack development, systems programming, and innovative solutions.</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </motion.div>
        </div>
    )
}

export default Projects
