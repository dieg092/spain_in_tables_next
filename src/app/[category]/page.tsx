import { Metadata } from 'next'
import CategoryContent from '@/components/CategoryContent'
import CategoryHeader from '@/components/CategoryHeader'
import { notFound } from 'next/navigation'
import { PageProps } from '../../../.next/types/app/page'
import { TABS } from '@/lib/tabs'
import { getMdData } from '@/lib/md'
import { DOMAIN } from '@/lib/utils'
import Link from 'next/link'

export async function generateStaticParams() {
    return TABS.map((tab) => ({
        category: tab.url
    }))
}

export async function generateMetadata({
    params
}: PageProps): Promise<Metadata> {
    const category_slug = params.category
    const category =
        category_slug.charAt(0).toUpperCase() + category_slug.slice(1)

    return {
        title: {
            default: 'España en tablas',
            template: 'España en tablas',
            absolute: 'España en tablas |  ' + category
        },
        description:
            'Aquí puedes conocer el contexto de ' +
            category +
            ' en España con tablas sin sesgos y sin medios, ni bulos ni medios de comunicación de por medio.',
        alternates: {
            canonical: `${DOMAIN}/${category_slug}`
        },
        robots: {
            index: true,
            follow: true,
            nocache: false
        }
    }
}

const findCategory = (category: string) => {
    return TABS.find((tab) => tab.url === category)
}

export default async function Category({ params }: PageProps) {
    const { category } = params

    const tab = findCategory(category)

    if (!tab) {
        notFound()
    }

    const mdData = await getMdData(tab.url)
    const titles = mdData?.map((item) => item.titulo)

    return (
        <>
            <CategoryHeader {...tab} />
            <h2 className="text-4xl mt-12 mb-8 text-black dark:text-white underline">
                ÍNDICE
            </h2>
            <ul className="list-disc grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 pl-12 pb-12 border-b border-gray-300 ">
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
            {mdData ? (
                mdData.map((file, key) => {
                    return <CategoryContent {...file} key={key} />
                })
            ) : (
                <p className="my-3 dark:text-white text-neutral-900">
                    No hay contenido.
                </p>
            )}
        </>
    )
}
