import { DOMAIN } from '@/lib/utils'
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {},
        sitemap: DOMAIN + '/sitemap.xml'
    }
}
