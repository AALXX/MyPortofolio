import { Inter } from 'next/font/google'
import './globals.css'
import type React from 'react'
import Sidebar from '@/features/SideBar/Sidebar'
import Meta from '@/Meta'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <Meta title="S3RBVN" description="S3RBVN portfolio website" keywords="portfolio, s3rbvn, s3rbvn.com, Serban Alexandru" />
            <body className={`${inter.className} flex h-screen flex-col md:flex-row`}>
                <Sidebar />
                <main className="flex-1 overflow-scroll">{children}</main>
            </body>
        </html>
    )
}
