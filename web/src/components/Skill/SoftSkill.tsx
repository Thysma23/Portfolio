import Skill from "./Skill";

type SkillsProps = {
    className?: Element['className'],
    skill: string,
}

export default function SoftSkill({ className, skill }: SkillsProps) {
    return (
        <Skill className={`bg-orange-300 ${className}`}>
            <span className="my-1 h-5">{skill}</span>
        </Skill>
    )
}
