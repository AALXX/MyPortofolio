import React from 'react'

interface ProjectCardProps {
    language: string
}

const LanguageTag: React.FC<ProjectCardProps> = ({ language }) => {
    const truncateText = (text: string, maxLength: number) => {
        if (text.length <= maxLength) return text
        return text.slice(0, maxLength) + '...'
    }
    return (
        <div className="mr-2 flex h-[2rem] min-w-[5rem] items-center self-center rounded-lg bg-[#00000067] p-1">
            <h1 className="font-monda m-auto text-sm font-bold text-white 2xl:hidden" title={language}>
                {truncateText(language, 10)}
            </h1>
            <h1 className="font-monda m-auto text-sm font-bold text-white hidden 2xl:block">{language}</h1>
        </div>
    )
}

export default LanguageTag
