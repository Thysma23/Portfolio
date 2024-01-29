import { Repo } from "../../hooks/useRepos"
import logoAvailable from "../logo/logoAvailable.type"
import IconeAndName from "../logo/IconeAndName"
import LogoWithHover from "../logo/LogoWithHover"

type ProjectIndexProps = {
    repo: Repo
}

export default function ProjectIndex({ repo }: ProjectIndexProps) {
    return (
        <section className={`mt-10  w-full mr-5 flex flex-col justify-between ${repo.url ? "" : "bg-blue-400"}`}>
            <a href={repo.url} target="_blank" className={`flex justify-between ${repo.url ? "text-blue-600 hover:underline" : ""}`}>
                <h2 className={`${repo.url ? "text-blue-600 hover:underline" : "text-gray-700"}`}>{repo.name}</h2>
                <LogoWithHover type={repo.url ? "github" : "univ-nantes"} />
            </a>
            <p className="text-gray-700">{repo.description}</p>
            <div className="flex justify-between md:max-xl:flex-col">
                <IconeAndName className="mt-5" link={repo.language as logoAvailable} />
                <span className="place-self-end md:max-xl:place-self-auto">
                    <span className="hidden min-[1700px]:inline-block">Dernière mise à jour :&nbsp;</span>
                    <span className="inline-block sm:hidden md:inline-block min-[1700px]:hidden">Dernière maj :&nbsp;</span>
                    <time dateTime={repo.last_update.toDateString()}>{repo.last_update.toLocaleDateString()}</time>
                </span>
            </div>
        </section>
    )
}
