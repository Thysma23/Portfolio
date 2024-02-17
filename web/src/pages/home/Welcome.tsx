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

import BlueRoundButton from "@/components/buttons/BlueRoundButton";

export default function Welcome() {
    return (
        <div className="text-slate-900 my-24 sm:mt-40 md:my-auto ml-4 min-[401px]:ml-0">
            <p className="text-4xl font-bold text-center md:text-start">
                Bonjour,&nbsp;
                <br className="hidden min-[401px]:block" />
                je suis <span className="text-blue-800">Mathys Meunier</span>,
            </p>
            <p className="text-xl font-medium text-center md:text-start">
                Étudiant en 3<span className="text-sm leading-3">e</span> année de BUT Informatique
            </p>
            <div className="flex justify-center w-full md:block">
                <a href={require("../../assets/cv/CvStageDevWebMeunierMathys.pdf")} download="CvMeunierMathys" target="_blank" rel="noreferrer">
                    <BlueRoundButton className="mt-2">Télécharger mon cv</BlueRoundButton>
                </a>
            </div>
        </div>
    )
}
