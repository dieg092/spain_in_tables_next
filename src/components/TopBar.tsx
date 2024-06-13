import Link from 'next/link'
import DarkModeToggle from './ThemeToggle'

function TopBar() {
    return (
        <div className="fixed w-screen flex items-center justify-between h-14 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white z-10 border-b dark:border-gray-700 transition-all duration-300">
            <div className="ml-5 rounded flex items-center max-w-xl mr-4 ">
                <Link className="font-bold" href="/">
                    ESPAÑA EN TABLAS
                </Link>
            </div>
            <div className="header-right mr-3">
                <ul className="flex items-center ">
                    <li>
                        <DarkModeToggle />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default TopBar
