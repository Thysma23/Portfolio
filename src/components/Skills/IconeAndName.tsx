import logoAvailable from "./logoAvailable.type"
import { ReactComponent as KotlinLogo } from "../../assets/icones/kotlin.svg"
import { ReactComponent as PythonLogo } from "../../assets/icones/python.svg"
import { ReactComponent as PhpLogo } from "../../assets/icones/php.svg"
import { ReactComponent as ReactLogo } from "../../assets/icones/react.svg"

type IconeProps = {
    link: logoAvailable,
}

export default function IconeAndName({ link }: IconeProps) {
    const className = "w-4 h-4 inline-block mb-1";
    const getLogo = () => {
        switch (link) {
            case "Kotlin":
                return <KotlinLogo title="logo Kotlin" className={className} />;
            case "Python":
                return <PythonLogo title="logo Python" className={className} />;
            case "PHP":
                return <PhpLogo title="logo PHP" className={className} />;
            case "ReactJS":
                return <ReactLogo title="logo React" className={className} />;
            case "React Native":
                return <ReactLogo title="logo React Native" className={className} />;
        }
    };

    return (
        <span className="inline-block underline">
            {getLogo()}{link}
        </span>
    );
};
