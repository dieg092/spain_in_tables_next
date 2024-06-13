'use client'

export default function Error({
    error,
    reset
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <div>
            <h1>Ups! Algo ha ido mal</h1>
            <button onClick={() => reset()}>Volver a cargar</button>
        </div>
    )
}
