import logoAvailable from "./logoAvailable.type"
import { ReactComponent as KotlinLogo } from "../../assets/icones/kotlin.svg"
import { ReactComponent as PythonLogo } from "../../assets/icones/python.svg"
import { ReactComponent as PhpLogo } from "../../assets/icones/php.svg"
import { ReactComponent as ReactLogo } from "../../assets/icones/react.svg"
import { ReactComponent as ReactNativeLogo } from "../../assets/icones/reactNative.svg"
import { ReactComponent as CodeIgniterLogo } from "../../assets/icones/codeIgniter.svg"
import { ReactComponent as CssLogo } from "../../assets/icones/css.svg"
import { ReactComponent as HtmlLogo } from "../../assets/icones/html.svg"
import { ReactComponent as JavaScriptLogo } from "../../assets/icones/javascript.svg"
import { ReactComponent as NodeJSLogo } from "../../assets/icones/nodejs.svg"
import { ReactComponent as TypeScriptLogo } from "../../assets/icones/typescript.svg"
import { ReactComponent as GitLogo } from "../../assets/icones/git.svg"
import { ReactComponent as MongoDBLogo } from "../../assets/icones/mongoDB.svg"
import { ReactComponent as MySQLLogo } from "../../assets/icones/mysql.svg"
import { ReactComponent as OracleDatabaseLogo } from "../../assets/icones/oracle.svg"
import { ReactComponent as TailwindCSSLogo } from "../../assets/icones/tailwind.svg"
import { ReactComponent as OcamlLogo } from "../../assets/icones/ocaml.svg"

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
                return <ReactNativeLogo title="logo React Native" className={className} />;
            case "CodeIgniter":
                return <CodeIgniterLogo title="logo CodeIgniter" className={className} />;
            case "CSS":
                return <CssLogo title="logo CSS" className={className} />;
            case "HTML":
                return <HtmlLogo title="logo HTML" className={className} />;
            case "JavaScript":
                return <JavaScriptLogo title="logo JavaScript" className={className} />;
            case "NodeJS":
                return <NodeJSLogo title="logo NodeJS" className={className} />;
            case "TypeScript":
                return <TypeScriptLogo title="logo TypeScript" className={className} />;
            case "Git":
                return <GitLogo title="logo Git" className={className} />;
            case "MongoDB":
                return <MongoDBLogo title="logo MongoDB" className={className} />;
            case "MySQL":
                return <MySQLLogo title="logo MySQL" className={className} />;
            case "Oracle Database":
                return <OracleDatabaseLogo title="logo Oracle Database" className={className} />;
            case "TailwindCSS":
                return <TailwindCSSLogo title="logo TailwindCSS" className={className} />;
            case "OCaml":
                return <OcamlLogo title="logo OCaml" className={className} />;
            
        }
    };

    return (
        <span className="inline-block underline">
            {getLogo()}{link}
        </span>
    );
};
