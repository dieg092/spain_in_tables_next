import { getMdData } from '@/lib/md'
import { TABS } from '@/lib/tabs'
import { DOMAIN } from '@/lib/utils'
import RSS from 'rss'

const title = `España en tablas`

export async function GET() {
    try {
        const feed = new RSS({
            title: title,
            description: '',
            site_url: DOMAIN,
            feed_url: DOMAIN + '/feed.xml',
            copyright: `${new Date().getFullYear()} ${title}`,
            language: 'es',
            pubDate: new Date()
        })

        const promises = TABS.map(async (tab, key) => {
            const mdData = await getMdData(tab.url)
            return mdData?.map((item) => item.titulo)
        })

        const results = await Promise.all(promises)

        results.forEach((titles, key) => {
            const category = TABS[key].url
            const category_title = TABS[key].title
            const category_description = TABS[key].description

            const category_url = DOMAIN + `/${category}`

            feed.item({
                title: category_title,
                guid: category_url,
                url: category_url,
                date: new Date(),
                description: category_description,
                author: 'Diego Barranco Moliner',
                categories: titles
            })
        })

        return new Response(feed.xml({ indent: true }), {
            headers: {
                'Content-Type': 'application/rss+xml; charset=utf-8'
            }
        })
    } catch (error) {
        console.error('Error generating RSS feed:', error)
        return new Response('Error generating RSS feed', { status: 500 })
    }
}
