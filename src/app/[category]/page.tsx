import { notFound } from 'next/navigation'
import { TABS } from '@/lib/tabs'
import { PageProps } from '../../../.next/types/app/[category]/page'

export async function generateStaticParams() {
    return TABS.map((tab) => ({
        category: tab.url
    }))
}
export default function Category({ params }: PageProps) {
    const { category } = params

    const TAB = TABS.find((tab) => tab.url === category)

    if (!TAB) {
        notFound()
    }

    return (
        <>
            <h1>{TAB.title}</h1>
        </>
    )
}
