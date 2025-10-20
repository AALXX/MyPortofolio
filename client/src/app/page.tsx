'use client'
import { motion } from 'framer-motion'
import { Code2, Sparkles, Target } from 'lucide-react'

const About = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    }

    return (
        <div className="container mx-auto max-w-5xl overflow-y-scroll px-6 py-24">
            <motion.div variants={container} initial="hidden" animate="show" className="space-y-16">
                <motion.div variants={item} className="space-y-6">
                    <div className="border-primary/20 bg-primary/5 text-primary inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm">
                        <Sparkles className="h-4 w-4" />
                        <span>Available for opportunities</span>
                    </div>

                    <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
                        Hi, I'm <span className="text-gradient">Serban Alexandru</span>
                    </h1>

                    <p className="text-muted-foreground max-w-3xl text-xl leading-relaxed">
                        An indie software developer and tech enthusiast with a passion for creating innovative digital experiences. I specialize in building high-performance web applications and exploring the depths of
                        low-level programming.
                    </p>
                </motion.div>

                <motion.div variants={item} className="grid gap-6 md:grid-cols-2">
                    <div className="group border-border bg-card hover:border-primary/50 relative overflow-hidden rounded-xl border p-8 transition-all">
                        <div className="from-primary/5 absolute inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                        <div className="relative space-y-4">
                            <div className="bg-primary/10 inline-flex rounded-lg p-3">
                                <Code2 className="text-primary h-6 w-6" />
                            </div>
                            <h3 className="text-2xl font-bold">Coding Journey</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Started with game development, evolved through web technologies, systems programming with Assembly and C++, and now exploring AI/ML. Every challenge is an opportunity to grow.
                            </p>
                        </div>
                    </div>

                    <div className="group border-border bg-card hover:border-primary/50 relative overflow-hidden rounded-xl border p-8 transition-all">
                        <div className="from-primary/5 absolute inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                        <div className="relative space-y-4">
                            <div className="bg-primary/10 inline-flex rounded-lg p-3">
                                <Target className="text-primary h-6 w-6" />
                            </div>
                            <h3 className="text-2xl font-bold">Philosophy</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Believing in adaptability, continuous learning, clean code, and user-focused design. Building technology that creates meaningful and impactful experiences.
                            </p>
                        </div>
                    </div>
                </motion.div>

                <motion.div variants={item} className="space-y-8">
                    <h2 className="text-3xl font-bold">What I Do</h2>
                    <div className="grid gap-4 md:grid-cols-3">
                        {[
                            { title: 'Web Development', desc: 'Fast, responsive, and intuitive applications' },
                            { title: 'Systems Programming', desc: 'Low-level programming with C++ and Assembly' },
                            { title: 'AI & Machine Learning', desc: 'Exploring endless possibilities in AI' }
                        ].map((focus, index) => (
                            <div key={index} className="border-border bg-secondary/50 space-y-2 rounded-lg border p-6">
                                <h4 className="text-foreground font-semibold">{focus.title}</h4>
                                <p className="text-muted-foreground text-sm">{focus.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default About
