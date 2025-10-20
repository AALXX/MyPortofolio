'use client'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import * as d3 from 'd3'

interface Node extends d3.SimulationNodeDatum {
    id: string
    group: string
    color: string
    x?: number
    y?: number
    fx?: number | null
    fy?: number | null
}

interface Link extends d3.SimulationLinkDatum<Node> {
    source: string | Node
    target: string | Node
}

const Skills = () => {
    const svgRef = useRef<SVGSVGElement>(null)
    const [dimensions, setDimensions] = useState({ width: 1200, height: 800 })

    useEffect(() => {
        const updateDimensions = () => {
            if (svgRef.current) {
                const container = svgRef.current.parentElement
                if (container) {
                    setDimensions({
                        width: container.clientWidth,
                        height: container.clientHeight
                    })
                }
            }
        }

        updateDimensions()
        window.addEventListener('resize', updateDimensions)
        return () => window.removeEventListener('resize', updateDimensions)
    }, [])

    useEffect(() => {
        if (!svgRef.current) return

        const { width, height } = dimensions
        const nodeRadius = Math.max(25, Math.min(40, width / 30))

        const nodes: Node[] = [
            { id: 'Developer', group: 'center', color: 'hsl(189 95% 55%)', fx: width / 2, fy: height / 2 },

            // Frontend
            { id: 'React', group: 'frontend', color: 'hsl(189 95% 55%)' },
            { id: 'Next.js', group: 'frontend', color: 'hsl(189 95% 55%)' },
            { id: 'TypeScript', group: 'frontend', color: 'hsl(189 95% 55%)' },
            { id: 'JavaScript', group: 'frontend', color: 'hsl(189 95% 55%)' },
            { id: 'Tailwind', group: 'frontend', color: 'hsl(189 95% 55%)' },

            // Backend
            { id: 'Node.js', group: 'backend', color: 'hsl(142 52% 47%)' },
            { id: 'Go', group: 'backend', color: 'hsl(189 95% 55%)' },
            { id: 'Java', group: 'backend', color: 'hsl(15 75% 56%)' },
            { id: 'Python', group: 'backend', color: 'hsl(207 51% 44%)' },

            // Systems
            { id: 'C++', group: 'systems', color: 'hsl(207 65% 59%)' },
            { id: 'C', group: 'systems', color: 'hsl(207 65% 59%)' },
            { id: 'Assembly', group: 'systems', color: 'hsl(207 65% 59%)' },

            // Tools
            { id: 'Docker', group: 'tools', color: 'hsl(189 95% 55%)' },
            { id: 'Git', group: 'tools', color: 'hsl(15 75% 56%)' },
            { id: 'PostgreSQL', group: 'tools', color: 'hsl(207 51% 44%)' }
        ]

        const links: Link[] = [
            // Center connections
            { source: 'Developer', target: 'React' },
            { source: 'Developer', target: 'Node.js' },
            { source: 'Developer', target: 'C++' },
            { source: 'Developer', target: 'Docker' },

            // Frontend connections
            { source: 'React', target: 'Next.js' },
            { source: 'React', target: 'TypeScript' },
            { source: 'TypeScript', target: 'JavaScript' },
            { source: 'React', target: 'Tailwind' },

            // Backend connections
            { source: 'Node.js', target: 'TypeScript' },
            { source: 'Node.js', target: 'Go' },
            { source: 'Go', target: 'Java' },
            { source: 'Java', target: 'Python' },

            // Systems connections
            { source: 'C++', target: 'C' },
            { source: 'C', target: 'Assembly' },

            // Tools connections
            { source: 'Docker', target: 'Git' },
            { source: 'Git', target: 'PostgreSQL' },
            { source: 'Node.js', target: 'PostgreSQL' }
        ]

        d3.select(svgRef.current).selectAll('*').remove()

        const svg = d3.select(svgRef.current)

        const simulation = d3
            .forceSimulation<Node>(nodes)
            .force(
                'link',
                d3
                    .forceLink<Node, Link>(links)
                    .id(d => d.id)
                    .distance(100)
            )
            .force('charge', d3.forceManyBody().strength(-300))
            .force('center', d3.forceCenter(width / 2, height / 2))
            .force('collision', d3.forceCollide().radius(nodeRadius * 1.5))

        const link = svg.append('g').selectAll('line').data(links).enter().append('line').attr('stroke', 'hsl(220 15% 20%)').attr('stroke-width', 2).attr('stroke-opacity', 0.6)

        const node = svg.append('g').selectAll('g').data(nodes).enter().append('g').call(d3.drag<SVGGElement, Node>().on('start', dragstarted).on('drag', dragged).on('end', dragended))

        node.append('circle')
            .attr('r', d => (d.id === 'Developer' ? nodeRadius * 1.2 : nodeRadius))
            .attr('fill', d => d.color)
            .attr('stroke', 'hsl(189 95% 55%)')
            .attr('stroke-width', d => (d.id === 'Developer' ? 3 : 2))
            .attr('stroke-opacity', 0.5)

        node.append('text')
            .attr('text-anchor', 'middle')
            .attr('dy', '0.35em')
            .attr('fill', 'hsl(220 15% 6%)')
            .attr('font-size', d => (d.id === 'Developer' ? '14px' : '12px'))
            .attr('font-weight', d => (d.id === 'Developer' ? '700' : '600'))
            .text(d => d.id)

        simulation.on('tick', () => {
            link.attr('x1', d => (d.source as Node).x || 0)
                .attr('y1', d => (d.source as Node).y || 0)
                .attr('x2', d => (d.target as Node).x || 0)
                .attr('y2', d => (d.target as Node).y || 0)

            node.attr('transform', d => `translate(${d.x || 0},${d.y || 0})`)
        })

        function dragstarted(event: d3.D3DragEvent<SVGGElement, Node, Node>) {
            if (!event.active) simulation.alphaTarget(0.3).restart()
            event.subject.fx = event.subject.x
            event.subject.fy = event.subject.y
        }

        function dragged(event: d3.D3DragEvent<SVGGElement, Node, Node>) {
            event.subject.fx = event.x
            event.subject.fy = event.y
        }

        function dragended(event: d3.D3DragEvent<SVGGElement, Node, Node>) {
            if (!event.active) simulation.alphaTarget(0)
            if (event.subject.id !== 'Developer') {
                event.subject.fx = null
                event.subject.fy = null
            }
        }

        return () => {
            simulation.stop()
        }
    }, [dimensions])

    return (
        <div className="container mx-auto max-w-7xl px-6 py-24 ">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="space-y-12">
                <div className="space-y-4 text-center">
                    <h1 className="text-5xl font-bold tracking-tight">
                        Tech <span className="text-gradient">Stack</span>
                    </h1>
                    <p className="text-muted-foreground text-xl">Interactive visualization of my technical skills and expertise</p>
                </div>

                <div className="border-border bg-card rounded-xl border p-4 md:p-8">
                    <div className="relative w-full" style={{ height: '600px' }}>
                        <svg ref={svgRef} width="100%" height="100%" />
                    </div>
                    <p className="text-muted-foreground mt-4 text-center text-sm">Drag nodes to explore connections • Skills are interconnected by usage and expertise</p>
                </div>

                <div className="grid gap-6 md:grid-cols-4">
                    {[
                        { title: 'Frontend', count: '5+', color: 'hsl(189 95% 55%)' },
                        { title: 'Backend', count: '4+', color: 'hsl(142 52% 47%)' },
                        { title: 'Systems', count: '3+', color: 'hsl(207 65% 59%)' },
                        { title: 'Tools', count: '6+', color: 'hsl(189 95% 55%)' }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="border-border bg-secondary/50 space-y-2 rounded-xl border p-6 text-center"
                        >
                            <div className="text-4xl font-bold" style={{ color: stat.color }}>
                                {stat.count}
                            </div>
                            <div className="text-muted-foreground text-sm">{stat.title}</div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}

export default Skills
