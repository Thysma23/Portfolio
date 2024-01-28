import { Repo } from "../../hooks/useRepos"
import HardSkill from "../skill/HardSkill"
import logoAvailable from "../skill/logoAvailable.type"

type ProjectIndexProps = {
    repo: Repo
}

export default function ProjectIndex({ repo }: ProjectIndexProps) {
    return (
        <section className={`mt-10  w-full md:w-[45%] 2xl:w-[30%] mr-5 flex flex-col justify-between ${repo.url ? "" : "bg-orange-400"}`}>
            <a href={repo.url}>
                <h2 className={`hover:underline w-fit ${repo.url ? "text-blue-600" : "text-gray-700"}`}>{repo.name}</h2>
            </a>
            <p>{repo.description}</p>
            <div className="flex justify-between md:max-xl:flex-col">
                <HardSkill className="mt-5" skill={repo.language as logoAvailable} />
                <span className="place-self-end md:max-xl:place-self-auto">
                    <span className="hidden sm:inline-block md:max-xl:mt-2 2xl:max-[1700px]:hidden">Dernière mise à jour :&nbsp;</span>
                    <span className="inline-block sm:hidden 2xl:max-[1700px]:inline-block">Dernière maj :&nbsp;</span>
                    <time dateTime={repo.last_update.toDateString()}>{repo.last_update.toLocaleDateString()}</time>
                </span>
            </div>
        </section>
    )
}
