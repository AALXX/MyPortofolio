'use client'

import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'

interface Node {
    id: string
    group: string
    color: string
    textColor: string
    isBlack?: boolean
    fx?: number
    fy?: number
    x?: number
    y?: number
}

interface Link {
    source: string
    target: string
}

export default function SkillTree() {
    const svgRef = useRef<SVGSVGElement>(null)
    const [dimensions, setDimensions] = useState({ width: 1000, height: 700 })

    useEffect(() => {
        const updateDimensions = () => {
            if (svgRef.current) {
                const { width, height } = svgRef.current.getBoundingClientRect()
                setDimensions({ width, height })
            }
        }

        window.addEventListener('resize', updateDimensions)
        updateDimensions()

        return () => window.removeEventListener('resize', updateDimensions)
    }, [])

    useEffect(() => {
        if (!svgRef.current) return

        const width = dimensions.width
        const height = dimensions.height

        const calculateResponsiveSize = () => {
            const baseRadius = 40
            const baseTextSize = 0.65

            const minDimension = Math.min(width, height)

            const radiusScale = minDimension / 1000
            const nodeRadius = Math.max(20, Math.min(40, baseRadius * radiusScale))
            const textSize = Math.max(0.6, Math.min(1, baseTextSize * radiusScale * 0.8)) 

            return { nodeRadius, textSize }
        }

        const { nodeRadius, textSize } = calculateResponsiveSize()

        const nodes: Node[] = [
            { id: 'center', group: 'center', color: '#b0b0b0', textColor: '#ffffff', x: width / 2, y: height / 2 },

            // Front-End
            { id: 'NextJs', group: 'frontend', color: '#b0b0b0', textColor: '#ffffff', x: width * 0.15, y: height * 0.15 },
            {
                id: 'TypeScript',
                group: 'frontend',
                color: '#b0b0b0',
                textColor: '#4da6ff',
                x: width * 0.15,
                y: height * 0.35
            },
            { id: 'ReactJs', group: 'frontend', color: '#b0b0b0', textColor: '#61dafb', x: width * 0.3, y: height * 0.25 },
            {
                id: 'JavaScript',
                group: 'frontend',
                color: '#b0b0b0',
                textColor: '#f7df1e',
                x: width * 0.4,
                y: height * 0.45
            },
            { id: 'HTML', group: 'frontend', color: '#b0b0b0', textColor: '#e34c26', x: width * 0.45, y: height * 0.4 },
            { id: 'CSS', group: 'frontend', color: '#b0b0b0', textColor: '#264de4', x: width * 0.45, y: height * 0.3 },
            { id: 'Tailwind', group: 'frontend', color: '#b0b0b0', textColor: '#38bdf8', x: width * 0.4, y: height * 0.15 },

            // Back-End
            { id: 'ExpressJs', group: 'backend', color: '#b0b0b0', textColor: '#ffff00', x: width * 0.7, y: height * 0.15 },
            { id: 'NodeJs', group: 'backend', color: '#b0b0b0', textColor: '#3c873a', x: width * 0.6, y: height * 0.15 },
            { id: 'Go', group: 'backend', color: '#b0b0b0', textColor: '#00add8', x: width * 0.65, y: height * 0.25 },
            { id: 'Java', group: 'backend', color: '#b0b0b0', textColor: '#f89820', x: width * 0.6, y: height * 0.4 },
            { id: 'Python', group: 'backend', color: '#b0b0b0', textColor: '#ffde57', x: width * 0.7, y: height * 0.45 },

            // Databases
            { id: 'CASANDRA', group: 'databases', color: '#b0b0b0', textColor: '#ffffff', x: width * 0.15, y: height * 0.7 },
            {
                id: 'PostgreSQL',
                group: 'databases',
                color: '#b0b0b0',
                textColor: '#ffffff',
                x: width * 0.2,
                y: height * 0.6
            },
            { id: 'SQL', group: 'databases', color: '#b0b0b0', textColor: '#ffffff', x: width * 0.25, y: height * 0.75 },
            { id: 'AWS', group: 'databases', color: '#b0b0b0', textColor: '#ffffff', x: width * 0.4, y: height * 0.55 },
            { id: 'Database', group: 'databases', color: '#b0b0b0', textColor: '#ffffff', x: width * 0.3, y: height * 0.6 },
            { id: 'GIT', group: 'databases', color: '#b0b0b0', textColor: '#ffffff', x: width * 0.45, y: height * 0.6 },
            { id: 'Docker', group: 'databases', color: '#b0b0b0', textColor: '#ffffff', x: width * 0.45, y: height * 0.75 },
            {
                id: 'Kubernetes',
                group: 'databases',
                color: '#b0b0b0',
                textColor: '#ffffff',
                x: width * 0.45,
                y: height * 0.85
            },

            // Systems
            { id: 'ASM', group: 'systems', color: '#b0b0b0', textColor: '#ffffff', x: width * 0.65, y: height * 0.6 },
            { id: 'C', group: 'systems', color: '#b0b0b0', textColor: '#5c6bc0', x: width * 0.55, y: height * 0.65 },
            { id: 'C++', group: 'systems', color: '#b0b0b0', textColor: '#659ad2', x: width * 0.65, y: height * 0.75 }
        ]

        const originalPositions = nodes.map(node => ({
            id: node.id,
            x: node.x,
            y: node.y
        }))

        const links: Link[] = [
            { source: 'center', target: 'NodeJs' },
            { source: 'center', target: 'Database' },
            { source: 'center', target: 'C' },
            { source: 'center', target: 'Docker' },
            { source: 'center', target: 'ASM' },
            { source: 'center', target: 'CSS' },
            { source: 'center', target: 'Java' },
            { source: 'center', target: 'Python' },
            { source: 'center', target: 'Go' },
            { source: 'center', target: 'HTML' },
            { source: 'center', target: 'CSS' },
            { source: 'center', target: 'JavaScript' },
            { source: 'center', target: 'GIT' },
            { source: 'center', target: 'AWS' }
        ]

        const additionalLinks: Link[] = [
            { source: 'NextJs', target: 'ReactJs' },
            { source: 'TypeScript', target: 'NextJs' },
            { source: 'JavaScript', target: 'ReactJs' },
            { source: 'JavaScript', target: 'TypeScript' },
            { source: 'CSS', target: 'Tailwind' },
            { source: 'NodeJs', target: 'ExpressJs' },
            { source: 'CASANDRA', target: 'Database' },
            { source: 'PostgreSQL', target: 'Database' },
            { source: 'Database', target: 'SQL' },
            { source: 'C', target: 'C++' },
            { source: 'Docker', target: 'Kubernetes' }
        ]

        links.push(...additionalLinks)

        d3.select(svgRef.current).selectAll('*').remove()

        const simulation = d3
            .forceSimulation<d3.SimulationNodeDatum & Node>()
            .force(
                'link',
                d3
                    .forceLink<d3.SimulationNodeDatum & Node, d3.SimulationLinkDatum<d3.SimulationNodeDatum> & Link>()
                    .id(d => (d as Node).id)
                    .distance(100)
                    .strength(0.01) 
            )
            .force('charge', d3.forceManyBody().strength(-100)) 
            .force('center', d3.forceCenter(width / 2, height / 2).strength(0.03)) 
            .force(
                'x',
                d3
                    .forceX()
                    .x(d => {
                        const node = d as Node
                        if (node.group === 'center') return width / 2
                        if (node.group === 'frontend') return width * 0.25
                        if (node.group === 'backend') return width * 0.75
                        if (node.group === 'databases') return width * 0.25
                        if (node.group === 'systems') return width * 0.75
                        return width / 2
                    })
                    .strength(0.05) 
            )
            .force(
                'y',
                d3
                    .forceY()
                    .y(d => {
                        const node = d as Node
                        if (node.group === 'center') return height / 2
                        if (node.group === 'frontend') return height * 0.25
                        if (node.group === 'backend') return height * 0.25
                        if (node.group === 'databases') return height * 0.75
                        if (node.group === 'systems') return height * 0.75
                        return height / 2
                    })
                    .strength(0.05) 
            )

        const centerNode = nodes.find(node => node.id === 'center')
        if (centerNode) {
            centerNode.fx = width / 2
            centerNode.fy = height / 2
        }

        nodes.forEach(node => {
            node.fx = node.x
            node.fy = node.y
        })

        const svg = d3.select(svgRef.current)

        const quadrantLabels = [
            { text: 'Front-End', x: width * 0.25, y: height * 0.25 },
            { text: 'Back-End', x: width * 0.75, y: height * 0.25 },
            { text: 'Databases', x: width * 0.25, y: height * 0.75 },
            { text: 'Systems', x: width * 0.75, y: height * 0.75 }
        ]

        svg.selectAll('.quadrant-label')
            .data(quadrantLabels)
            .enter()
            .append('text')
            .attr('class', 'quadrant-label')
            .attr('x', d => d.x)
            .attr('y', d => d.y)
            .attr('text-anchor', 'middle')
            .attr('fill', '#9c9c9c')
            .attr('font-size', `${Math.max(1, Math.min(2.5, 2 * (Math.min(width, height) / 1000)))}rem`)
            .attr('font-weight', 'bold')
            .text(d => d.text)

        svg.append('line')
            .attr('x1', 0)
            .attr('y1', height / 2)
            .attr('x2', width)
            .attr('y2', height / 2)
            .attr('stroke', 'white')
            .attr('stroke-width', 1)

        svg.append('line')
            .attr('x1', width / 2)
            .attr('y1', 0)
            .attr('x2', width / 2)
            .attr('y2', height)
            .attr('stroke', 'white')
            .attr('stroke-width', 1)

        const link = svg.append('g').selectAll('line').data(links).enter().append('line').attr('stroke', '#666').attr('stroke-width', 1).attr('stroke-opacity', 0.6)

        const node = svg
            .append('g')
            .selectAll('g')
            .data(nodes)
            .enter()
            .append('g')
            .call(d3.drag<SVGGElement, Node>().on('start', dragstarted).on('drag', dragged).on('end', dragended) as any)

        node.append('circle')
            .attr('r', nodeRadius)
            .attr('fill', d => d.color)
            .attr('stroke', '#fff')
            .attr('stroke-width', 1)

        node.append('text')
            .attr('text-anchor', 'middle')
            .attr('dy', '.35em')
            .attr('fill', d => d.textColor)
            .attr('font-size', `${textSize}rem`)
            .text(d => d.id)

        simulation.nodes(nodes as (d3.SimulationNodeDatum & Node)[])
        ;(simulation.force('link') as d3.ForceLink<d3.SimulationNodeDatum & Node, d3.SimulationLinkDatum<d3.SimulationNodeDatum & Node> & Link>).links(links as (d3.SimulationLinkDatum<d3.SimulationNodeDatum & Node> & Link)[])

        simulation.on('tick', () => {
            const centerNode = nodes.find(node => node.id === 'center')
            if (centerNode) {
                centerNode.x = width / 2
                centerNode.y = height / 2
            }

            link.attr('x1', d => (d.source as unknown as Node).x || 0)
                .attr('y1', d => (d.source as unknown as Node).y || 0)
                .attr('x2', d => (d.target as unknown as Node).x || 0)
                .attr('y2', d => (d.target as unknown as Node).y || 0)

            node.attr('transform', d => `translate(${d.x || 0},${d.y || 0})`)
        })

        function dragstarted(event: d3.D3DragEvent<SVGGElement, Node, Node>) {
            if (!event.active) simulation.alphaTarget(0.3).restart()
            event.subject.fx = undefined
            event.subject.fy = undefined
        }


        function dragged(event: d3.D3DragEvent<SVGGElement, Node, Node>) {
            event.subject.fx = event.x
            event.subject.fy = event.y
        }

        function dragended(event: d3.D3DragEvent<SVGGElement, Node, Node>) {
            if (!event.active) simulation.alphaTarget(0)

            const original = originalPositions.find(pos => pos.id === event.subject.id)
            if (original) {
                d3.select(event.sourceEvent.target.parentNode)
                    .transition()
                    .duration(500)
                    .attr('transform', `translate(${original.x},${original.y})`)
                    .on('end', () => {
                        event.subject.fx = original.x
                        event.subject.fy = original.y
                    })
            } else {
                event.subject.fx = undefined
                event.subject.fy = undefined
            }
        }

        simulation.alpha(1).restart()
        for (let i = 0; i < 100; ++i) simulation.tick()

        setTimeout(() => {
            nodes.forEach(node => {
                if (node.id !== 'center') {
                    node.fx = node.x
                    node.fy = node.y
                }
            })
        }, 1000)

        return () => {
            simulation.stop()
        }
    }, [dimensions])

    return (
        <div className="flex h-screen w-full flex-col items-center">
            <h1 className="my-4 text-3xl font-bold text-white">Skill Tree</h1>
            <div className="h-[calc(100vh-6rem)] w-full border border-white">
                <svg ref={svgRef} width="100%" height="100%"></svg>
            </div>
        </div>
    )
}
