import Skill from "./SkillIndex";
import logoAvailable from "../logo/logoAvailable.type";
import IconeAndName from "../logo/IconeAndName";

type SkillsProps = {
    className?: Element['className'],
    skill: logoAvailable,
}

export default function HardSkill({ className, skill }: SkillsProps) {
    return (
        <Skill className={`bg-slate-300 ${className}`}>
            <IconeAndName link={skill} />
        </Skill>
    )
}
