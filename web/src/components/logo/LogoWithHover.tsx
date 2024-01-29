import { ReactComponent as GithubLogo } from "../../assets/icones/github.svg"
import { ReactComponent as UnivNantesLogo } from "../../assets/icones/univ-nantes.svg"
import { useState } from "react"

type ProjectIndexProps = {
    className?: Element['className'],
    type: "github" | "univ-nantes"
}

export default function LogoWithHover({ className, type }: ProjectIndexProps) {
    const [isHover, setIsHover] = useState(false)
    return (
        <div className={`relative ${className}`} onMouseLeave={() => setIsHover(false)}>
            {isHover && <p className="absolute w-40 p-3 bottom-[105%] left-1/2 transform -translate-x-1/2 bg-gray-800 text-slate-300 rounded-md">{type === "github" ?
                <>
                    Projet personnel.<br />
                    Les données sont mises à jour via une api toute les 30 minutes"
                </> : "Projet Universitaire"}</p>}
            {type === "github"
                ? <GithubLogo className="w-6 h-6" onMouseEnter={() => setIsHover(true)} />
                : <UnivNantesLogo className="w-6 h-6" onMouseEnter={() => setIsHover(true)} />}
        </div>
    )
}
