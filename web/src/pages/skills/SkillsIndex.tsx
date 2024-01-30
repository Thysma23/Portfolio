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

import HardSkill from "../../components/skill/HardSkill"
import logoAvailable from "../../components/logo/logoAvailable.type"
import SoftSkill from "../../components/skill/SoftSkill"

export default function SkillsIndex() {
    const webSkills: logoAvailable[] = [
        "HTML", "CSS", "ReactJS", "NodeJS", "TailwindCSS", "CodeIgniter"];
    const mobileSkills: logoAvailable[] = [
        "React Native", "Android Studio"];
    const databaseSkills: logoAvailable[] = [
        "MySQL", "MongoDB", "Oracle Database"];
    const otherSkills: logoAvailable[] = [
        "Git", "Api RESTful"];
    const languageSKills: logoAvailable[] = [
        "Python", "TypeScript", "JavaScript", "Kotlin", "SQL", "PHP", "OCaml", "Golang"];
    const softSkills: string[] = [
        "Travail en équipe", "Curiosité", "Autonomie", "Polyvalence", "Esprit logique", "Facilité d'apprentissage", "Bienveillance"]

    return (
        <main className="pt-16 sm:pt-32 md:pt-16 xl:pt-20 2xl:pt-24 mx-5 sm:mx-16 md:mx-20 lg:mx-32 h-full pb-5">
            <h1 className="block sm:hidden md:block">Mes compétences</h1>
            <div className="flex flex-col mt-5 sm:mt-0 md:mt-5 2xl:flex-row 2xl:space-x-4 ">
                <section className="2xl:w-[50vh]">
                    <h2>
                        Langages de programmation
                    </h2>
                    <p>
                        {
                            languageSKills.map((skill, index) => {
                                return <HardSkill className="mr-2" skill={skill} key={index} />
                            })
                        }
                    </p>
                </section>
                <div className="w-full">
                    <section className="mt-5 2xl:mt-0">
                        <h2>
                            Compétences Web
                        </h2>
                        <p>
                            {
                                webSkills.map((skill, index) => {
                                    return <HardSkill className="mr-2" skill={skill} key={index} />
                                })
                            }
                        </p>
                    </section>
                    <section className="mt-5">
                        <h2>
                            Compétences Mobile
                        </h2>
                        <p>
                            {
                                mobileSkills.map((skill, index) => {
                                    return <HardSkill className="mr-2" skill={skill} key={index} />
                                })
                            }
                        </p>
                    </section>
                    <section className="mt-5">
                        <h2>
                            Compétences en Base de données
                        </h2>
                        <p>
                            {
                                databaseSkills.map((skill, index) => {
                                    return <HardSkill className="mr-2" skill={skill} key={index} />
                                })
                            }
                        </p>
                    </section>
                    <section className="mt-5">
                        <h2>
                            Autres compétences
                        </h2>
                        <p>
                            {
                                otherSkills.map((skill, index) => {
                                    return <HardSkill className="mr-2" skill={skill} key={index} />
                                })
                            }
                        </p>
                    </section>
                </div>
            </div>
            <section className="mt-5 mb-10">
                <h2>
                    SoftSkills
                </h2>
                <p>
                    {
                        softSkills.map((skill, index) => {
                            return <SoftSkill className="mr-2" skill={skill} key={index} />
                        })
                    }
                </p>
            </section>
        </main>
    )
}
