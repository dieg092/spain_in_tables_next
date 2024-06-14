import Link from 'next/link'
import DarkModeToggle from './ThemeToggle'
import Image from 'next/image'

function TopBar() {
    return (
        <div className="fixed w-screen flex items-center justify-between h-14 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white z-10 border-b dark:border-gray-700 transition-all duration-300">
            <div className="ml-5 rounded flex items-center max-w-xl mr-4 ">
                <Link className="font-bold flex items-center " href="/">
                    <Image
                        width={45}
                        height={45}
                        src={'/images/logo.webp'}
                        alt="Logo de España en Tablas, peninusla con gráficos"
                        className="mr-4"
                        style={{
                            width: 'auto',
                            height: 'auto'
                        }}
                    />
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
