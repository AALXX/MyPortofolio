import { ExternalLink, Github } from 'lucide-react'
import { motion } from 'framer-motion'

interface ProjectCardProps {
    title: string
    description: string
    languages: string[]
    githubUrl?: string
    liveUrl?: string
}

const ProjectCard = ({ title, description, languages, githubUrl, liveUrl }: ProjectCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group border-border bg-card hover:border-primary/50 hover:shadow-primary/10 relative overflow-hidden rounded-xl border p-6 transition-all duration-300 hover:shadow-lg"
        >
            {/* Gradient overlay on hover */}
            <div className="from-primary/5 absolute inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

            <div className="relative space-y-4">
                <div className="flex items-start justify-between">
                    <h3 className="text-foreground text-xl font-bold">{title}</h3>
                    <div className="flex gap-2">
                        {githubUrl && (
                            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <Github className="h-5 w-5" />
                            </a>
                        )}
                        {liveUrl && (
                            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <ExternalLink className="h-5 w-5" />
                            </a>
                        )}
                    </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>

                <div className="flex flex-wrap gap-2 pt-2">
                    {languages.map((lang, index) => (
                        <span key={index} className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-xs font-medium">
                            {lang}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectCard
