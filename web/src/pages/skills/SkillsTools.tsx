import logoAvailable from "@/components/logo/logoAvailable.type";
import HardSkill from "@/components/skill/HardSkill";

export default function SkillOthers() {
    const otherSkills: logoAvailable[] = [
        "VSCode", "Git", "NodeJS", "Suite JetBrains"]; //TODO: add vscode et suite intellij
    return (
        <section className="mt-5">
            <h2 className="pb-2">
                Compétences Outils
            </h2>
            {
                otherSkills.map((skill, index) => {
                    return <HardSkill className="mr-2" skill={skill} key={index} />
                })
            }
        </section>
    )
}
