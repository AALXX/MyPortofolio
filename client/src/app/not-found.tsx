'use client'

const NotFound = () => {
    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-center text-white">
            <div className="relative mb-8 flex items-center justify-center">
                <div className="absolute animate-ping opacity-30">
                    <span className="text-primary/50 font-mono text-9xl font-black">404</span>
                </div>
                <span className="text-primary font-mono text-9xl font-black">404</span>
            </div>

            <h1 className="font-monda mb-4 text-center text-3xl font-bold sm:text-4xl md:text-5xl">Page Not Found</h1>

            <p className="mb-8 max-w-md text-center text-lg text-gray-400">The page you're looking for doesn't exist or has been moved to another location.</p>
        </div>
    )
}

export default NotFound
