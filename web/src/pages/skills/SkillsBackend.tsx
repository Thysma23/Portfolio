import logoAvailable from "@/components/logo/logoAvailable.type";
import HardSkill from "@/components/skill/HardSkill";

export default function SkillsBackEnd() {
    const backendSkills: logoAvailable[] = [
        "Api RESTful", "CodeIgniter", "MariaDB", "MySQL", "MongoDB", "Oracle Database"];
    
    return (
        <section className="mt-5">
            <h2 className="pb-2">
                Compétences en Back-end
            </h2>
            {
                backendSkills.map((skill, index) => {
                    return <HardSkill className="mr-2" skill={skill} key={index} />
                })
            }
        </section>
    )
}
