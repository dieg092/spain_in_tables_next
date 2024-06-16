'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'

function DarkModeToggle() {
    const { darkMode, setDarkMode } = useTheme()

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
