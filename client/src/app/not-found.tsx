'use client'

import { Home, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const NotFound = () => {
    return (
        <div className="bg-background flex min-h-screen items-center justify-center px-6">
            <div className="max-w-md space-y-6 text-center">
                <div className="space-y-2">
                    <h1 className="text-gradient text-8xl font-bold">404</h1>
                    <h2 className="text-foreground text-2xl font-semibold">Page Not Found</h2>
                    <p className="text-muted-foreground">The page you're looking for doesn't exist or has been moved.</p>
                </div>

                <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
                    <Link href="/" className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold transition-all">
                        <Home className="h-4 w-4" />
                        Go Home
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="border-border bg-card text-foreground hover:bg-secondary inline-flex items-center justify-center gap-2 rounded-lg border px-6 py-3 font-semibold transition-all"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NotFound
