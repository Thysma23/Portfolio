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
        <main className="pt-16 sm:pt-32 md:pt-16 xl:pt-20 2xl:pt-24 mx-5 sm:mx-16 md:mx-20 lg:mx-32">
            <h1 className="block sm:hidden md:block">Mes compétences</h1>
            <div className="flex flex-col-reverse mt-5 sm:mt-0 md:mt-5 2xl:flex-row 2xl:space-x-4 ">
                <div className="w-full">
                    <section className="mt-5 2xl:mt-0">
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
                <section className="2xl:w-[50vh]">
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
