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

type ProfilPictureProps = {
    className?: Element['className'],
}

export default function ProfilPicture({ className }: ProfilPictureProps) {
    return (
        <div className={`bg-blue-500 rounded-full overflow-hidden my-0 md:my-auto mx-0 ${className}`}>
            <img
                className="transform translate-y-[6%] w-[130%] h-[130%]"
                src={require("../../assets/images/profil_picture.png")}
                alt="tếte de Mathys Meunier"
            />
        </div>
    )
}
