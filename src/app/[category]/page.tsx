import { Metadata } from 'next'
import CategoryContent from '@/components/CategoryContent'
import CategoryHeader from '@/components/CategoryHeader'
import { notFound } from 'next/navigation'
import { TABS } from '@/lib/tabs'
import { getMdData } from '@/lib/md'
import CategoryIndex from '@/components/CategoryIndex'
import { PageProps } from '../../../.next/types/app/[category]/page'

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
            {mdData ? (
                <>
                    <CategoryIndex titles={titles || []} />

                    {mdData.map((file, key) => {
                        return <CategoryContent {...file} key={key} />
                    })}
                </>
            ) : (
                <p className="my-3 dark:text-white text-neutral-900">
                    No hay contenido.
                </p>
            )}
        </>
    )
}
