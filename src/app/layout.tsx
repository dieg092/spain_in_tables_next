import type { Metadata } from 'next'
import TopBar from '@/components/TopBar'
import SideBar from '@/components/SideBar'
import { Fellix } from '@/styles/fonts'
import { DOMAIN } from '@/lib/utils'
import '@/styles/globals.css'

export const metadata: Metadata = {
    metadataBase: new URL(DOMAIN),
    icons: '/images/favicon.png',
    openGraph: {
        images: '/images/logo@300.webp'
    }
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="es" suppressHydrationWarning>
            <body
                className={`${Fellix.className} bg-neutral-100 dark:bg-neutral-900 transition-all duration-300`}
            >
                <TopBar />
                <SideBar />
                <main
                    className={
                        'h-full ml-14 pt-20 px-6  min-h-screen md:ml-72 overflow-y-hidden'
                    }
                >
                    {children}
                </main>
            </body>
        </html>
    )
}
