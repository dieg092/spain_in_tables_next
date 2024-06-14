import Link from 'next/link'

type CategoryIndexProps = {
    titles: string[]
}
const CategoryIndex: React.FC<CategoryIndexProps> = ({ titles }) => {
    return (
        <>
            <h2 className="text-4xl mt-12 mb-8 text-black dark:text-white underline">
                ÍNDICE
            </h2>
            <ul className="list-disc grid 2xl:grid-cols-3 xl:grid-cols-2 grid-cols-1 gap-2 md:pl-12 pl-3 sm:pl-6 pb-12 border-b border-gray-300">
                {titles?.map((title, key) => {
                    return (
                        <li
                            key={key}
                            className="text-xl dark:text-white hover:underline"
                        >
                            <Link
                                href={`#${title}`}
                                className="fornt-extrabold pointer"
                            >
                                {title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default CategoryIndex
