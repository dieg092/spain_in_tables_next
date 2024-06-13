'use client'

import { Fellix } from '@/styles/fonts'

export default function GlobalError({
    error,
    reset
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <html lang="es" suppressHydrationWarning>
            <body className={Fellix.className}>
                <h1>Ups! Algo ha ido mal</h1>
                <button onClick={() => reset()}>Volver a cargar</button>
            </body>
        </html>
    )
}
