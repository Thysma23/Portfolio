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
