import logoAvailable from "@/components/logo/logoAvailable.type";
import HardSkill from "@/components/skill/HardSkill";

export default function SkillsMobiles() {
    const mobileSkills: logoAvailable[] = [
        "React Native", "Android Studio"];
    return (
        <section className="mt-5">
            <h2 className="pb-2">
                Compétences Mobile
            </h2>
            {
                mobileSkills.map((skill, index) => {
                    return <HardSkill className="mr-2" skill={skill} key={index} />
                })
            }
        </section>
    )
}
