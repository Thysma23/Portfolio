import IconeAndName from "../../components/Skills/IconeAndName"
import Skill from "../../components/Skills/Skill"
import logoAvailable from "../../components/Skills/logoAvailable.type"

export default function SkillsIndex() {
    const webSkills: logoAvailable[] = [
        "HTML", "CSS", "ReactJS", "NodeJS", "TailwindCSS", "CodeIgniter"];
    const mobileSkills: logoAvailable[] = [
        "React Native"];
    const databaseSkills: logoAvailable[] = [
        "MySQL", "MongoDB", "Oracle Database"];
    const otherSkills: logoAvailable[] = [
        "Git"];
    const languageSKills: logoAvailable[] = [
        "Python", "PHP", "Kotlin", "TypeScript", "JavaScript", "OCaml"];
    return (
        <main className="pt-24 mx-32">
            <h1>Mes compétences</h1>
            <div className="flex flex-col-reverse xl:flex-row xl:space-x-4 mt-5">
                <div>
                    <section className="mt-5 xl:mt-0">
                        <h2>
                            Compétences Web
                        </h2>
                        <p>
                            {
                                webSkills.map((skill, index) => {
                                    return <Skill className="mr-2" link={skill} key={index} />
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
                                    return <Skill className="mr-2" link={skill} key={index} />
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
                                    return <Skill className="mr-2" link={skill} key={index} />
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
                                    return <Skill className="mr-2" link={skill} key={index} />
                                })
                            }
                        </p>
                    </section>
                </div>
                <section>
                    <h2>
                        Languages de programmation
                    </h2>
                    <p>
                        {
                            languageSKills.map((skill, index) => {
                                return <Skill className="mr-2" link={skill} key={index} />
                            })
                        }
                    </p>
                </section>
            </div>
        </main>
    )
}
