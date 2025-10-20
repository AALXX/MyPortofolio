'use client'

import Image from 'next/image'
import Link from 'next/link'
import type React from 'react'
import { useState } from 'react'
import { Linkedin, Mail, Menu, X } from 'lucide-react'

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <button onClick={toggleSidebar} className="bg-card hover:bg-secondary fixed top-6 left-6 z-50 rounded-lg p-2.5 shadow-lg backdrop-blur-sm transition-all md:hidden" aria-label="Toggle menu">
                {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            <div className="flex">
                <div
                    className={`border-sidebar-border bg-sidebar/98 fixed inset-y-0 left-0 z-30 flex h-screen transform flex-col border-r backdrop-blur-xl transition-transform duration-300 ease-in-out md:relative ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-[280px] md:translate-x-0`}
                >
                    <nav className="flex h-full flex-col gap-8 px-8 pt-16 md:pt-0">
                        <div className="mt-12 flex flex-col items-center gap-6 md:mt-20">
                            <div className="border-border hover:border-primary h-28 w-28 overflow-hidden rounded-full border transition-all">
                                <Image src="/Headshot.jpeg" alt="Profile picture" width={112} height={112} className="h-full w-full object-cover" />
                            </div>
                            <div className="text-center">
                                <h1 className="text-foreground text-2xl font-bold tracking-tight">S3RBVN</h1>
                                <p className="text-muted-foreground mt-1 text-sm">Software Developer</p>
                            </div>
                        </div>

                        <div className="bg-border h-px" />

                        <div className="flex flex-col gap-2">
                            <NavLink href="/" onClick={() => setIsOpen(false)}>
                                About
                            </NavLink>
                            <NavLink href="/skills" onClick={() => setIsOpen(false)}>
                                Skills
                            </NavLink>
                            <NavLink href="/projects" onClick={() => setIsOpen(false)}>
                                Projects
                            </NavLink>
                            <NavLink href="/contact" onClick={() => setIsOpen(false)}>
                                Contact
                            </NavLink>
                        </div>

                        <div className="mt-auto mb-8 flex justify-center gap-4">
                            <SocialLink href={process.env.NEXT_PUBLIC_LINKEDIN_LINK as string} label="LinkedIn">
                                <Linkedin className="h-5 w-5" />
                            </SocialLink>
                            <SocialLink href={process.env.NEXT_PUBLIC_GITHUB_LINK as string} label="GitHub">
                                <img src="/github.svg" alt="GitHub" className="h-5 w-5 brightness-200" />
                            </SocialLink>
                            <SocialLink href={process.env.NEXT_PUBLIC_MAIL_LINK as string} label="Email">
                                <Mail className="h-5 w-5" />
                            </SocialLink>
                        </div>
                    </nav>
                </div>
            </div>

            {isOpen && <div className="bg-background/60 fixed inset-0 z-20 backdrop-blur-sm md:hidden" onClick={toggleSidebar} aria-hidden="true" />}
        </>
    )
}

const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => (
    <Link href={href} className="w-full" onClick={onClick}>
        <button className="text-muted-foreground hover:bg-secondary hover:text-foreground w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition-all">{children}</button>
    </Link>
)

const SocialLink = ({ href, label, children }: { href: string; label: string; children: React.ReactNode }) => (
    <Link href={href} target="_blank" className="text-muted-foreground hover:bg-secondary hover:text-foreground flex items-center justify-center rounded-lg p-2 transition-all">
        {children}
        <span className="sr-only">{label}</span>
    </Link>
)

export default Sidebar
