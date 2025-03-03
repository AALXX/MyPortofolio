import { Inter } from 'next/font/google'
import './globals.css'
import Meta from '@/Meta'
import type React from 'react' // Added import for React
import Sidebar from '@/features/sideBar/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <Meta title="S3RBVN" description="S3RBVN portofolio website" keywords="portofolio, s3rbvn, s3rbvn.com, Serban Alexandru" />
            <body className={`${inter.className} flex h-screen flex-col`}>
                <Sidebar />
                {children}
            </body>
        </html>
    )
}
