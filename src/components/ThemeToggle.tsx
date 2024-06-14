'use client'

import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'

const getSystemTheme = () => {
    if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
        return true
    }
    return false
}

function DarkModeToggle() {
    const [darkMode, setDarkMode] = useState(getSystemTheme)

    useEffect(() => {
        const matchMedia = window.matchMedia('(prefers-color-scheme: dark)')

        const handleChange = (e) => {
            setDarkMode(e.matches)
        }

        matchMedia.addEventListener('change', handleChange)

        return () => {
            matchMedia.removeEventListener('change', handleChange)
        }
    }, [])

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])

    return (
        <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full"
        >
            {darkMode ? <Moon /> : <Sun />}
        </button>
    )
}

export default DarkModeToggle
