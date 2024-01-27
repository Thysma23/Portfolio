import useRepos from "../../hooks/useRepos"

export default function ProjectsIndex() {
    const repos = useRepos()

    return (
        <main className="pt-24 mx-32">
            <h1>Mes projets</h1>
            {
                repos.map((repo, id) => (
                    <section key={id} className="mt-10">
                        <a href={repo.url}>
                            <h2 className="text-blue-500 hover:underline">{repo.name}</h2>
                        </a>
                        <p>{repo.description}</p>

                    </section>
                ))
            }
        </main>
    )
}
