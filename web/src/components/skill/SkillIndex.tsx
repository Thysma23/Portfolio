/** 
    Copyright (C) 2023 Mathys Meunier

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

import { ReactNode } from "react"
type SkillProps = {
    className?: Element['className'],
    children?: ReactNode,
}

export default function Skill({ className, children }: SkillProps) {
    return (
        <div className={"items-center border border-slate-700 rounded-xl w-fit py-1 px-2 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,.2)_50%,transparent_75%,transparent_100%)] transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] hover:duration-[1500ms] overflow-hidden bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat inline-block " + className} >
            {children}
        </div>
    )
}
