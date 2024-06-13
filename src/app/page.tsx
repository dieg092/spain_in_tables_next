import CategoryContent from '@/components/CategoryContent'
import SocialLinks from '@/components/SocialLinks'
import { getMdData, readFile } from '@/lib/md'

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
