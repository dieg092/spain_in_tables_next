import { notFound } from 'next/navigation'
import { TABS } from '@/lib/tabs'
import { PageProps } from '../../../.next/types/app/[category]/page'
import { getMdData } from '@/lib/md'
import CategoryContent from '@/components/CategoryContent'
import CategoryHeader from '@/components/CategoryHeader'

export async function generateStaticParams() {
    return TABS.map((tab) => ({
        category: tab.url
    }))
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

    return (
        <>
            <CategoryHeader {...tab} />
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
