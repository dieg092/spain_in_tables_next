import { MDType } from '@/lib/md'

const CategoryContent: React.FC<MDType> = ({
    titulo,
    fecha,
    descripcion,
    objetivo,
    content
}) => {
    return (
        <div className="dark:text-neutral-300 mb-10">
            <h2
                id={titulo}
                className="text-3xl font-bold mb-1 dark:text-white pt-16"
            >
                {titulo}
            </h2>
            <div className="mb-6">{fecha}</div>

            <div className="mb-6">
                <p className="font-bold">Descripción</p>
                <p className="text-gray-600 dark:text-neutral-300">
                    {descripcion}
                </p>
            </div>
            <div className="mb-6">
                <p className="font-bold">Objetivo</p>
                <p className="text-gray-600 dark:text-neutral-300">
                    {objetivo}
                </p>
            </div>
            <div
                className="prose prose-lg"
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </div>
    )
}

export default CategoryContent
