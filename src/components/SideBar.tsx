import {
    Book,
    Euro,
    Users,
    Hospital,
    UserPlus,
    CloudSun,
    Siren,
    Scale,
    Globe,
    Cpu,
    Home,
    PieChart
} from 'lucide-react'

const tabs = [
    { title: 'Inmigración', icon: <UserPlus /> },
    { title: 'Economía', icon: <Euro /> },
    { title: 'Salud Pública', icon: <Hospital /> },
    { title: 'Derechos Civiles', icon: <Users /> },
    { title: 'Cambio Climático', icon: <CloudSun /> },
    { title: 'Educación', icon: <Book /> },
    { title: 'Seguridad', icon: <Siren /> },
    { title: 'Justicia', icon: <Scale /> },
    { title: 'Política Exterior', icon: <Globe /> },
    { title: 'Tecnología', icon: <Cpu /> },
    { title: 'Vivienda', icon: <Home /> },
    { title: 'Democracia', icon: <PieChart /> }
]

function SideBar() {
    return (
        <div className="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-white dark:bg-neutral-800 h-full text-neutral-900 dark:text-white z-10 transition-all duration-300 sidebar border-gray-200 dark:border-gray-700 border-r">
            <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow scrollbar-hide">
                <ul className="flex flex-col py-4 space-y-1">
                    {/* <li className="px-5 hidden md:block">
                <div className="flex flex-row items-center h-8">
                    <div className="text-sm font-light tracking-wide text-neutral-400 uppercase">
                        Main
                    </div>
                </div>
            </li> */}
                    {tabs.map((item, key) => {
                        return (
                            <li key={key}>
                                <a
                                    href="#"
                                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-neutral-100 dark:hover:bg-neutral-600 text-neutral-900 hover:text-neutral-900 dark:text-white border-l-4 border-transparent hover:border-blue-500 dark:hover:border-blue-500 pr-6"
                                >
                                    <span className="inline-flex justify-center items-center ml-4">
                                        {item.icon}
                                    </span>
                                    <span className="ml-2 text-sm tracking-wide truncate">
                                        {item.title}
                                    </span>
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <p className="mb-14 px-5 py-3 hidden md:block text-center text-xs">
                    Copyright @2021
                </p>
            </div>
        </div>
    )
}

export default SideBar
