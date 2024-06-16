'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'

function DarkModeToggle() {
    const { mounted, darkMode, setDarkMode } = useTheme()

    if (mounted) {
        return null
    }

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
