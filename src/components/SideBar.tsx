'use client'

import { TABS } from '@/lib/tabs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function SideBar() {
    const pathname = usePathname()

    const highlightClass =
        'bg-neutral-100 text-neutral-900 border-blue-500 dark:bg-neutral-600'

    return (
        <div className="fixed flex flex-col top-14 left-0 w-14  md:w-64 bg-white dark:bg-neutral-800 h-full text-neutral-900 dark:text-white z-10 transition-all duration-300 sidebar border-gray-200 dark:border-gray-700 border-r">
            <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow scrollbar-hide">
                <ul className="flex flex-col py-4 space-y-1">
                    {TABS.map((item, key) => (
                        <li key={key} id={item.url}>
                            <Link
                                href={`/${item.url}`}
                                title={item.title}
                                className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-neutral-100 hover:border-blue-500 hover:text-neutral-900 dark:hover:bg-neutral-600 text-neutral-900 dark:text-white border-l-4 pr-6 ${pathname === `/${item.url}` ? highlightClass : 'border-transparent'}`}
                            >
                                <span className="inline-flex justify-center items-center ml-4">
                                    {item.icon}
                                </span>
                                <span className="ml-2 text-sm tracking-wide truncate">
                                    {item.title}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
                {/* <p className="mb-14 px-5 py-3 hidden md:block text-center text-xs">
                    Copyright @2024
                </p> */}
            </div>
        </div>
    )
}

export default SideBar
