import logoAvailable from "@/components/logo/logoAvailable.type"
import HardSkill from "@/components/skill/HardSkill"

export default function SkillsLanguage() {
    const languageSKills: logoAvailable[] = [
        "Python", "TypeScript", "JavaScript", "Kotlin", "SQL", "PHP", "OCaml", "Golang"];

    return (
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
    )
}
