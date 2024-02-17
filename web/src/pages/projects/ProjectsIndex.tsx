/** 
    Copyright (C) 2024 Mathys Meunier

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You can receive a copy of the GNU General Public License
    along with this program at "http://mathysmeunier/license".
*/

import Project from "@/components/project/ProjectIndex";
import useRepos from "@/hooks/useRepos";
import useVersion from "@/hooks/useVersion";

export default function ProjectsIndex() {
    const repos = useRepos()
    const { version } = useVersion()

    return (
        <main className={version === "full" ? "pt-4 xl:pt-20 2xl:pt-24 px-5 lg:px-32 w-full pb-16" : "pt-16 px-5 w-full sm:pt-32 md:pt-16 lg:px-32 xl:pt-20 2xl:pt-24"}>
            <h1 className={version === "full" ? "" : "sm:hidden md:block"}> Mes projets publics et universitaires</h1>
            <div className={version === "full" ? "mt-10 grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-x-5 mx-0 gap-y-10 md:-mx-1 xl:-mx-16 pb-10" : "mt-5 sm:mt-0 md:mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 mx-0 md:-mx-1 xl:-mx-16 pb-16"}>
                {
                    repos.map((repo, id) => (
                        <Project key={id} repo={repo} />
                    ))
                }
            </div>
        </main >
    )
}
