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

import { ReactComponent as GithubLogo } from "@/assets/icones/github.svg";
import { ReactComponent as UnivNantesLogo } from "@/assets/icones/univ-nantes.svg";
import { useState } from "react"
import USERNAME from "@/data/USERNAME.json";

type ProjectIndexProps = {
    className?: Element['className'];
    type: "github" | "univ-nantes";
    owner?: {
        login: string;
        url: string;
        avatar: string;
    };
};

export default function LogoWithHover({ className, type, owner }: ProjectIndexProps) {
    const [isHover, setIsHover] = useState(false);
    const iAmOwner = owner && owner.login === USERNAME;

    const openModal = () => setIsHover(true);

    return (
        <div className={`relative ${className}`} onMouseLeave={() => setIsHover(false)}>
            {isHover && <p className="absolute inline-block w-40 p-3 bottom-[105%] right-0 xl:left-1/2 xl:transform xl:-translate-x-1/2 bg-gray-800 text-slate-300 rounded-md">{type === "github" ?
                <>
                    {iAmOwner ? "Projet personnel,"
                        : owner &&
                        <>
                            <img src={owner.avatar} alt={`Avatar de ${owner.login}`} className="w-4 h-4 inline-block rounded-full mb-1" />
                            <a href={owner.url} target="_blank" rel="noreferrer" className="hover:underline">
                                Auteur : {owner.login},
                            </a>
                        </>
                    }<br />
                    Les données sont mises à jour via une api toute les 30 minutes.
                </> : "Projet Universitaire"}</p>}
            {type === "github"
                ? <GithubLogo className="w-6 h-6" onMouseEnter={openModal} />
                : <UnivNantesLogo className="w-6 h-6" onMouseEnter={openModal} />}
        </div>
    );
};
