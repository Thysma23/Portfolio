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

import SkillsLanguage from "./SkillsLanguage"
import SkillsWebs from "./SkillsWeb"
import SkillsMobiles from "./SkillsMobiles"
import SkillsDataBase from "./SkillsDataBase"
import SkillOthers from "./SkillsOthers"
import SkillsSofts from "./SkillsSofts"

export default function SkillsIndex() {

    return (
        <main className="pt-16 sm:pt-32 md:pt-16 xl:pt-20 2xl:pt-24 px-5 sm:px-16 md:px-20 lg:px-32 pb-5 w-full">
            <h1 className="block sm:hidden md:block">Mes compétences</h1>
            <div className="flex flex-col mt-5 sm:mt-0 md:mt-5 2xl:flex-row 2xl:space-x-4 ">
                <SkillsLanguage />
                <div className="w-full">
                    <SkillsWebs />
                    <SkillsMobiles />
                    <SkillsDataBase />
                    <SkillOthers />
                </div>
            </div>
            <SkillsSofts />
        </main>
    )
}
