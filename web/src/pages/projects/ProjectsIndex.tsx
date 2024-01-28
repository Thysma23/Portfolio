import Project from "../../components/project/ProjectIndex";
import useRepos from "../../hooks/useRepos";

export default function ProjectsIndex() {
    const repos = useRepos()

    return (
        <main className="pt-16 sm:pt-32 md:pt-16 xl:pt-20 2xl:pt-24 mx-5 sm:mx-16 md:mx-20 lg:mx-32">
            <h1 className="sm:max-md:hidden">Mes projets publics</h1>
            <div className="flex flex-wrap">
                {
                    repos.map((repo, id) => (
                        <Project key={id} repo={repo} />
                    ))
                }
            </div>
        </main>
    )
}
