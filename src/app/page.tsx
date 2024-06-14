import SocialLinks from '@/components/SocialLinks'
import { readFile } from '@/lib/md'
import { DOMAIN } from '@/lib/utils'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: {
        default: 'España en tablas',
        template: 'España en tablas'
    },
    description:
        '¿No aguantas más la desinformación? ¿Te gustaría conocer la realidad de España en un simple vistazo? En España en tablas encontrarás multitud de informes para comprender el contexto de españa y cultivar con la realidad de España sin sesgos ni medios de comunicación financiados por partidos políticos.',
    robots: {
        index: true,
        follow: true,
        nocache: false
    }
}

export default async function Home() {
    const mdData = await readFile({
        fileName: 'inicio.md'
    })

    if (!mdData) {
        return
    }

    return (
        <div>
            <div
                className="prose prose-lg"
                dangerouslySetInnerHTML={{ __html: mdData?.content }}
            />
            <div className="pb-20">
                <SocialLinks />
            </div>
        </div>
    )
}
