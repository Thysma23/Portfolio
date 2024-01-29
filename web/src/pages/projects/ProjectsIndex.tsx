import Project from "../../components/project/ProjectIndex";
import useRepos from "../../hooks/useRepos";

export default function ProjectsIndex() {
    const repos = useRepos()

    return (
        <main className="pt-16 sm:pt-32 md:pt-16 xl:pt-20 2xl:pt-24 mx-20 lg:mx-32">
            <h1 className="sm:max-md:hidden">Mes projets publics et universitaires</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 -mx-16 pb-16">
                {
                    repos.map((repo, id) => (
                        <Project key={id} repo={repo} />
                    ))
                }
            </div>
        </main>
    )
}
