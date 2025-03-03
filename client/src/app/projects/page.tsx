import ProjectCard from '@/features/projects/Components/ProjectCard'

const Projects = () => {
    return (
        <div className="flex h-full w-full flex-col overflow-y-auto p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
            <h1 className="font-monda mb-6 text-center text-xl font-bold text-white sm:mb-8 sm:text-2xl md:mb-10 md:text-3xl lg:mb-10 lg:text-3xl xl:mb-12 xl:text-4xl">Featured Projects</h1>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-1 md:gap-6 lg:grid-cols-2 lg:gap-7 xl:grid-cols-3 xl:gap-4">
                <ProjectCard title="ProjectManager" languages={['TypeScript', 'Go', 'Dockerfile']} description="A project management tool that allows users to manage projects, tasks, teams, and users" />
                <ProjectCard languages={['TypeScript', 'Jupyter Notebook', 'Go']} title="StreamPlatform" description="A platform for streaming and sharing videos" />
                <ProjectCard languages={['TypeScript', 'Go', ' Java']} title="Trainerz" description="A platform that helps you find the best trainer for your fitness goals" />
                <ProjectCard title="PlutoniumGameEngine" languages={['C++', 'C']} description="A platform for streaming and sharing videos" />
            </div>
        </div>
    )
}

export default Projects
