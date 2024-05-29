'use client'

import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'

function DarkModeToggle() {
    const [darkMode, setDarkMode] = useState(false)

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
