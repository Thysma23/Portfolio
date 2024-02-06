import logoAvailable from "@/components/logo/logoAvailable.type";
import HardSkill from "@/components/skill/HardSkill";

export default function SkillsWebs() {
    const webSkills: logoAvailable[] = [
        "HTML", "CSS", "ReactJS", "TailwindCSS"];
    return (
        <section className="mt-5 2xl:mt-0">
            <h2 className="pb-2">
                Compétences Web
            </h2>

            {
                webSkills.map((skill, index) => {
                    return <HardSkill className="mr-2" skill={skill} key={index} />
                })
            }

        </section>
    )
}
