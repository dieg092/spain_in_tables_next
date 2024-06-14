import { TABS } from '@/lib/tabs'
import { DOMAIN } from '@/lib/utils'

export default async function sitemap() {
    const allRoutes: any = []

    TABS.map((tab) => {
        const tab_url = DOMAIN + `/${tab.url}`

        allRoutes.push({
            url: tab_url,
            changeFrequency: 'weekly',
            priority: 1,
            lastModified: new Date()
        })
    })

    return [
        {
            url: DOMAIN,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1
        },
        ...allRoutes
    ]
}
