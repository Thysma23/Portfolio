import SoftSkill from "@/components/skill/SoftSkill"

export default function SkillsSofts() {
    const softSkills: string[] = [
        "Travail en équipe", "Curiosité", "Autonomie", "Polyvalence", "Esprit logique", "Facilité d'apprentissage", "Bienveillance"]

    return (
        <section className="mt-5 mb-10">
            <h2 className="pb-2">
                SoftSkills
            </h2>
            {
                softSkills.map((skill, index) => {
                    return <SoftSkill className="mr-2" skill={skill} key={index} />
                })
            }
        </section>
    )
}
