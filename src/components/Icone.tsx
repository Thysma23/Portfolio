import { HTMLAttributes } from "react"
import { ReactComponent as KotlinLogo } from "../assets/icones/kotlin.svg"
import { ReactComponent as PythonLogo } from "../assets/icones/python.svg"
import { ReactComponent as PhpLogo } from "../assets/icones/php.svg"
import { ReactComponent as ReactLogo } from "../assets/icones/react.svg"

type IconeProps = {
    props?: HTMLAttributes<HTMLSpanElement>,
    link: "Kotlin" | "Python" | "PHP" | "React Native" | "ReactJS",
}

const Icone = ({ props, link }: IconeProps) => {
    const getLogo = () => {
        switch (link) {
            case "Kotlin":
                return <KotlinLogo title="logo Kotlin" className="w-4 h-4 inline-block mb-1" />
            case "Python":
                return <PythonLogo title="logo Python" className="w-4 h-4 inline-block mb-1" />
            case "PHP":
                return <PhpLogo title="logo PHP" className="w-4 h-4 inline-block mb-1" />
            case "ReactJS":
                return <ReactLogo title="logo React" className="w-4 h-4 inline-block mb-1" />
            case "React Native":
                return <ReactLogo title="logo React Native" className="w-4 h-4 inline-block mb-1" />
        }
    }

    return (
        <span className="inline-block underline">
            {getLogo()}{link}
        </span>
    )
}

export default Icone
