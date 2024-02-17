/** 
    Copyright (C) 2024 Mathys Meunier

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You can receive a copy of the GNU General Public License
    along with this program at "http://mathysmeunier/license".
*/

import logoAvailable from "./logoAvailable.type"
import { ReactComponent as KotlinLogo } from "@/assets/icones/skills/kotlin.svg"
import { ReactComponent as PythonLogo } from "@/assets/icones/skills/python.svg"
import { ReactComponent as PhpLogo } from "@/assets/icones/skills/php.svg"
import { ReactComponent as ReactLogo } from "@/assets/icones/skills/react.svg"
import { ReactComponent as ReactNativeLogo } from "@/assets/icones/skills/reactNative.svg"
import { ReactComponent as CodeIgniterLogo } from "@/assets/icones/skills/codeIgniter.svg"
import { ReactComponent as CssLogo } from "@/assets/icones/skills/css.svg"
import { ReactComponent as HtmlLogo } from "@/assets/icones/skills/html.svg"
import { ReactComponent as JavaScriptLogo } from "@/assets/icones/skills/javascript.svg"
import { ReactComponent as NodeJSLogo } from "@/assets/icones/skills/nodejs.svg"
import { ReactComponent as TypeScriptLogo } from "@/assets/icones/skills/typescript.svg"
import { ReactComponent as GitLogo } from "@/assets/icones/skills/git.svg"
import { ReactComponent as MongoDBLogo } from "@/assets/icones/skills/mongoDB.svg"
import { ReactComponent as MySQLLogo } from "@/assets/icones/skills/mysql.svg"
import { ReactComponent as OracleDatabaseLogo } from "@/assets/icones/skills/oracle.svg"
import { ReactComponent as TailwindCSSLogo } from "@/assets/icones/skills/tailwind.svg"
import { ReactComponent as OcamlLogo } from "@/assets/icones/skills/ocaml.svg"
import { ReactComponent as AndroidLogo } from "@/assets/icones/skills/android.svg"
import { ReactComponent as ApiLogo } from "@/assets/icones/skills/api.svg"
import { ReactComponent as GoLogo } from "@/assets/icones/skills/go.svg"
import { ReactComponent as SqlLogo } from "@/assets/icones/skills/sql.svg"
import { ReactComponent as AngularLogo } from "@/assets/icones/skills/angular.svg"
import { ReactComponent as NextLogo } from "@/assets/icones/skills/next.svg"
import { ReactComponent as MariaDBLogo } from "@/assets/icones/skills/mariadb.svg"
import { ReactComponent as VSCODELOGO } from "@/assets/icones/skills/vscode.svg"
import { ReactComponent as JETBRAINSLOGO } from "@/assets/icones/skills/jetbrains.svg"

type IconeProps = {
    className?: Element['className'],
    link: logoAvailable,
}

export default function IconeAndName({ className, link }: IconeProps) {
    const classNameDefault = "size-4 inline-block";
    const getLogo = () => {
        switch (link) {
            case "Kotlin":
                return <KotlinLogo title="logo Kotlin" className={classNameDefault} />;
            case "Python":
                return <PythonLogo title="logo Python" className={classNameDefault} />;
            case "PHP":
                return <PhpLogo title="logo PHP" className={"inline-block -mt-[0.12rem] w-6 h-6"} />;
            case "ReactJS":
                return <ReactLogo title="logo React" className={classNameDefault} />;
            case "React Native":
                return <ReactNativeLogo title="logo React Native" className={classNameDefault} />;
            case "CodeIgniter":
                return <CodeIgniterLogo title="logo CodeIgniter" className={"inline-block size-6"} />;
            case "CSS":
                return <CssLogo title="logo CSS" className={classNameDefault} />;
            case "HTML":
                return <HtmlLogo title="logo HTML" className={classNameDefault} />;
            case "JavaScript":
                return <JavaScriptLogo title="logo JavaScript" className={"inline-block w-4 h-4 mr-[0.12rem]"} />;
            case "NodeJS":
                return <NodeJSLogo title="logo NodeJS" className={"inline-block w-6 h-6 mr-1"} />;
            case "TypeScript":
                return <TypeScriptLogo title="logo TypeScript" className={classNameDefault} />;
            case "Git":
                return <GitLogo title="logo Git" className={classNameDefault} />;
            case "MongoDB":
                return <MongoDBLogo title="logo MongoDB" className={"inline-block size-5 mr-[0.12rem] "} />;
            case "MySQL":
                return <MySQLLogo title="logo MySQL" className={"inline-block size-12 -mt-3 -mb-2 -mr-1"} />;
            case "Oracle Database":
                return <OracleDatabaseLogo title="logo Oracle Database" className={"inline-block -mt-2  mr-[0.12rem] -mb-2 r- size-12"} />;
            case "TailwindCSS":
                return <TailwindCSSLogo title="logo TailwindCSS" className={classNameDefault} />;
            case "OCaml":
                return <OcamlLogo title="logo OCaml" id="abdabz" className={classNameDefault} />;
            case "Android Studio":
                return <AndroidLogo title="logo Android Studio" className={"inline-block size-6"} />;
            case "Api RESTful":
                return <ApiLogo title="logo API" className={"inline-block size-6"} />;
            case "Golang":
                return <GoLogo title="logo Go" className={"inline-block w-4 h-4 mr-[0.12rem]"} />;
            case "SQL":
                return <SqlLogo title="logo SQL" className={classNameDefault} />;
            case "AngularJS":
                return <AngularLogo title="logo AngularJS" className={classNameDefault} />;
            case "NextJS":
                return <NextLogo title="logo NextJS" className={classNameDefault} />;
            case "MariaDB":
                return <MariaDBLogo title="logo MariaDB" className={"inline-block size-7"} />;
            case "VSCode":
                return <VSCODELOGO title="logo VSCode" className={classNameDefault} />;
            case "Suite JetBrains":
                return <JETBRAINSLOGO title="logo JetBrains" className={"inline-block size-7 mr-1"} />;
        }
    };

    return (
        <span className={`inline-flex items-center h-5 my-1 align-middle  ${className}`}>
            {getLogo()}{link}
        </span>
    );
};
