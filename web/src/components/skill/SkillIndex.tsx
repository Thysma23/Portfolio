/*
https://www.julienthibeaut.xyz/blog/create-shine-effect-on-card-with-tailwind-css
*/

import { ReactNode } from "react";

type SkillProps = {
    className?: Element['className'];
    children?: ReactNode;
    inProgress?: boolean;
};

export default function Skill({ className, children, inProgress=false }: SkillProps) {
    return (
        <div className={`items-center border ${inProgress && "border-dashed"} border-slate-700 rounded-xl w-fit py-1 px-2 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,.2)_50%,transparent_75%,transparent_100%)] transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] hover:duration-[1500ms] overflow-hidden bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat inline-block ` + className} >
            {children}
        </div>
    );
};
