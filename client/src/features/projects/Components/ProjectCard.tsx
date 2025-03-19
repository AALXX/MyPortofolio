'use client'

import Link from 'next/link'
import LanguageTag from './LanguageTag'
import { useEffect, useState } from 'react'
import { ExternalLink } from 'lucide-react'

interface ProjectCardProps {
    title?: string
    description?: string
    githubUrl?: string
    languages?: string[]
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, githubUrl, languages }) => {
    const [projectName, setProjectName] = useState<string>(title || '')
    const [projectLanguages, setProjectLanguages] = useState<string[]>(languages || [])
    const [projectDescription, setProjectDescription] = useState<string>(description || '')
    const [projectUrl, setProjectUrl] = useState<string>('')

    useEffect(() => {
        setProjectUrl(`https://github.com/AALXX/${projectName}`)
    }, [])

    return (
        <div className="3xl:h-[20rem] flex h-[14rem] w-full flex-col overflow-hidden rounded-lg bg-[#00000067] transition-transform hover:scale-105 sm:h-[18rem] md:h-[20rem] lg:h-[18rem]">
            <div className="3xl:h-[8rem] flex flex-col pt-3 pr-3 pb-0 pl-3 sm:pt-4 sm:pr-4 sm:pb-0 sm:pl-4 md:h-[10rem] md:pt-5 md:pr-5 md:pb-0 md:pl-5 lg:pt-6 lg:pr-6 lg:pb-0 lg:pl-6">
                <h3 className="mb-1 text-base font-semibold text-white sm:mb-2 sm:text-lg md:mb-3 md:text-xl lg:text-2xl">{projectName}</h3>
                <p className="line-clamp-3 text-xs text-gray-300 sm:line-clamp-4 sm:text-sm md:text-base">{projectDescription}</p>
            </div>

            <div className="flex h-[3.5rem] w-[90%] self-center">
                {projectLanguages.map((language, index) => (
                    <LanguageTag key={index} language={language} />
                ))}
            </div>

            <Link href={projectUrl} target="_blank" className="mt-auto mb-4 flex h-10 w-[90%] items-center justify-center self-center rounded-lg border-2 border-white transition-colors hover:bg-white/10 sm:h-11 md:h-12">
                <ExternalLink className="mr-2 h-4 w-4 text-white" />
                <h1 className="font-monda text-sm font-bold text-white sm:text-base md:text-lg">View Project</h1>
            </Link>
        </div>
    )
}

export default ProjectCard
