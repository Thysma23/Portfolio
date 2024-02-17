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

import logoAvailable from "@/components/logo/logoAvailable.type"
import IconeAndName from "@/components/logo/LogoAndName"
import LogoWithHover from "@/components/logo/LogoWithHover"
import { RepositoryInterface } from "@/interface/RepositoryInterface"

type ProjectIndexProps = {
    repo: RepositoryInterface
}

export default function ProjectIndex({ repo }: ProjectIndexProps) {
    return (
        <section className={`w-full mr-5 flex flex-col justify-between ${repo.url ? "" : "bg-blue-400"}`}>
            <a href={repo.url} target="_blank" rel="noreferrer" className={`flex justify-between ${repo.url ? "text-blue-600 hover:underline" : ""}`}>
                <h2 className={`${repo.url ? "text-blue-600 hover:underline" : "text-gray-700"}`}>{repo.name}</h2>
                <div className="flex">
                    {repo.url && <LogoWithHover type="github" owner={repo.owner} />}
                    {repo.is_university_project && <LogoWithHover type="univ-nantes" />}
                </div>
            </a>
            <p className="text-gray-700">{repo.description}</p>
            <div className="flex justify-between md:max-xl:flex-col">
                <IconeAndName className="mt-5" link={repo.language as logoAvailable} />
                <span className="place-self-end md:max-xl:place-self-auto">
                    <span className="hidden min-[1700px]:inline-block">Dernière mise à jour :&nbsp;</span>
                    <span className="hidden min-[350px]:inline-block sm:hidden md:inline-block min-[1700px]:hidden">Dernière maj :&nbsp;</span>
                    <time dateTime={repo.last_update.toDateString()}>{repo.last_update.toLocaleDateString()}</time>
                </span>
            </div>
        </section>
    )
}
