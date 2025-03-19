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
            <button onClick={toggleSidebar} className="fixed top-4 left-4 z-50 rounded-full bg-[#00000067] p-2 text-white md:hidden" aria-label="Toggle menu">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="flex">
                <div
                    className={`bg-navbar-grey fixed inset-y-0 left-0 z-30 flex h-screen transform flex-col bg-[#00000067] shadow-lg transition-transform duration-300 ease-in-out md:relative ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-[75vw] sm:w-[16rem] md:w-[18rem] md:translate-x-0`}
                >
                    <nav className="flex h-full flex-col gap-4 px-4 pt-16 md:gap-6 md:pt-0">
                        <div className="mt-8 h-28 w-28 self-center overflow-hidden rounded-full border-3 border-white sm:h-32 sm:w-32 md:mt-14 md:h-36 md:w-36 lg:h-40 lg:w-40">
                            <Image src="/Headshot.jpeg" alt="Profile picture" width={200} height={200} className="h-full w-full object-cover" />
                        </div>

                        <h1 className="font-monda self-center text-xl font-bold text-white sm:text-2xl md:text-3xl">S3RBVN</h1>

                        <hr className="h-1 bg-white" />

                        <div className="flex flex-col gap-4 md:gap-6">
                            <NavLink href="/" onClick={() => setIsOpen(false)}>
                                About me
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
                        <div className="mt-auto mb-4 flex w-full justify-around">
                            <Link href={process.env.NEXT_PUBLIC_LINKEDIN_LINK as string} target="_blank" className="flex cursor-pointer items-center">
                                <Linkedin className="h-5 w-5 text-white" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                            <Link href={process.env.NEXT_PUBLIC_GITHUB_LINK as string} target="_blank" className="flex cursor-pointer items-center">
                                <img src="/github.svg" alt="LinkedIn" className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>
                            </Link>
                            <Link href={process.env.NEXT_PUBLIC_MAIL_LINK as string} className="flex cursor-pointer items-center">
                                <Mail className="h-5 w-5 text-white" />
                                <span className="sr-only">Email</span>
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>

            {isOpen && <div className="bg-opacity-50 fixed inset-0 z-20 bg-black/55 md:hidden" onClick={toggleSidebar} aria-hidden="true" />}
        </>
    )
}

const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => (
    <Link href={href} className="w-full" onClick={onClick}>
        <button className="font-monda h-10 w-full cursor-pointer rounded-xl border-3 bg-none text-base font-bold text-white transition-colors hover:bg-white/10 sm:h-12 sm:text-lg md:h-14 md:text-lg">{children}</button>
    </Link>
)

export default Sidebar
