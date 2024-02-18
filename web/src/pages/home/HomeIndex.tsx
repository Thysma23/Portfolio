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

import ProfilPicture from "@/components/contact/ProfilPicture";
import Welcome from "./Welcome";

export default function HomeIndex() {
    return (
        <main className="flex flex-col md:flex-row md:justify-around align-middle items-center w-full mb-10 md:mb-0 h-screen">
            {/* <main className="bg-[#292929] w-full overflow-hidden"
            style={
                {
                    backgroundImage: `url(${require('@/assets/background/home.png')}`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "left",
                }
            } POUR UN PROCHAIN BG
            >
                <div className="flex flex-col md:flex-row md:justify-around align-middle items-center w-full mb-10 md:mb-0 h-screen blur-0 overflow-hidden backdrop-blur-md"> */}
            <Welcome />
            <ProfilPicture className="w-72 h-72 bg-blue-800 shadow-2xl" />
        </main>
    )
}
