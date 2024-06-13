import SocialLinks from './SocialLinks'

type TabType = {
    title: string
}

const CategoryHeader: React.FC<TabType> = (props) => {
    return (
        <>
            <h1 className="text-4xl font-bold mb-1 dark:text-white">
                {props.title}
            </h1>

            <div className="text-gray-600 my-6 dark:text-neutral-300">
                <p className="mb-9">
                    💬 ¿Crees que puedes ayudarnos a crear contenido? ¡Únete a
                    nuestra comunidad y ayúdanos a mejorar! 🙌 Con tu
                    participación, haremos que la información sea más completa
                    para todos. 🚀
                </p>
                <SocialLinks />
            </div>
        </>
    )
}

export default CategoryHeader
