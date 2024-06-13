import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import gfm from 'remark-gfm'
import { CONTENT_URL } from './utils'

export type FileType = {
    name: string
    path: string
}

export type MDType = {
    titulo: string
    fecha: string
    descripcion: string
    objetivo: string
    content: string
}

const readDirectory = (
    category: string,
    directoryPath: string
): Promise<FileType[]> => {
    return new Promise((resolve, reject) => {
        fs.readdir(directoryPath, (err, files) => {
            if (err) {
                return reject(err)
            }
            const fileList = files.map((file) => ({
                name: file,
                path: path.join(`${CONTENT_URL}${category}`, file)
            }))
            resolve(fileList)
        })
    })
}

export const readFile = async ({
    category = '',
    fileName
}: {
    category?: string
    fileName: string
}): Promise<MDType> => {
    const filePath = path.join(
        process.cwd(),
        `${CONTENT_URL}${category}`,
        fileName
    )
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)
    const htmlContent = await mdToHtml(content)

    return {
        titulo: data.titulo,
        fecha: data.fecha,
        descripcion: data.descripcion,
        objetivo: data.objetivo,
        content: htmlContent
    }
}

export const getMdData = async (category: string): Promise<MDType[] | null> => {
    const directoryPath = path.join(process.cwd(), CONTENT_URL, category)

    try {
        const files: FileType[] = await readDirectory(category, directoryPath)
        const allContent: MDType[] = []

        await Promise.all(
            files.map(async (file) => {
                const content = await readFile({
                    category: category,
                    fileName: file.name
                })
                allContent.push(content)
            })
        )

        return allContent
    } catch (err) {
        return null
    }
}

export default async function mdToHtml(file: string): Promise<string> {
    const result = await remark().use(html).use(gfm).process(file)
    return result.toString()
}
