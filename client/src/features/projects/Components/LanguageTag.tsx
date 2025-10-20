import type React from 'react'

interface ProjectCardProps {
    language: string
}

const LanguageTag: React.FC<ProjectCardProps> = ({ language }) => {
    return <div className="bg-secondary text-secondary-foreground rounded-md px-3 py-1 text-xs font-medium">{language}</div>
}

export default LanguageTag
