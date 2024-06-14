import { useEffect, useState } from 'react'

const getSystemTheme = (): boolean => {
    if (typeof window !== 'undefined' && window.matchMedia) {
        return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
}

export function useTheme() {
    const [darkMode, setDarkMode] = useState<boolean>(false)
    const [mounted, setMounted] = useState<boolean>(false)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setDarkMode(getSystemTheme())
            setMounted(true)

            const matchMedia = window.matchMedia('(prefers-color-scheme: dark)')

            const handleChange = (e: MediaQueryListEvent) => {
                setDarkMode(e.matches)
            }

            matchMedia.addEventListener('change', handleChange)

            return () => {
                matchMedia.removeEventListener('change', handleChange)
            }
        }
    }, [])

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode, mounted])

    return {
        darkMode,
        setDarkMode
    }
}
