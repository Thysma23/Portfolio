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

import SkillsLanguage from "./SkillsLanguage";
import SkillsWebs from "./SkillsWeb";
import SkillsMobiles from "./SkillsMobiles";
import SkillsBackend from "./SkillsBackend";
import SkillOthers from "./SkillsTools";
import SkillsSofts from "./SkillsSofts";
import useVersion from "@/hooks/useVersion";

export default function SkillsIndex() {
    const { version } = useVersion()
    return (
        <main className={version === "full" ? "pt-4 xl:pt-20 2xl:pt-24 px-5 lg:px-32 w-full pb-16" : "pt-16 sm:pt-32 md:pt-16 xl:pt-20 2xl:pt-24 px-5 sm:px-16 md:px-20 lg:px-32 w-full"}>
            <h1 className={version === "full" ? "" : "sm:hidden md:block"}>Mes compétences</h1>
            <div className={version === "full" ? "flex flex-col mt-5 2xl:flex-row 2xl:space-x-4" : "flex flex-col mt-5 sm:mt-0 md:mt-5 2xl:flex-row 2xl:space-x-4 "}>
                <SkillsLanguage />
                <div className="w-full">
                    <SkillsWebs />
                    <SkillsBackend />
                    <SkillsMobiles />
                    <SkillOthers />
                </div>
            </div>
            <div className="pb-5">
                <SkillsSofts />
            </div>
        </main>
    )
}
