import GitHubIcon from './icons/GithubIcon'
import DiscordIcon from './icons/DiscordIcon'

const SocialLinks = () => {
    return (
        <div className="flex justify-center mt-5 gap-5 text-black dark:text-white">
            <a
                href={'https://github.com/dieg092/spain_in_tables_next'}
                target="_blank"
            >
                <GitHubIcon width="75" height="75" />
            </a>

            <a href={'https://discord.gg/GDevXEmg'} target="_blank">
                <DiscordIcon width="75" height="75" />
            </a>
        </div>
    )
}

export default SocialLinks
