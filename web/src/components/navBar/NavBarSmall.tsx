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

import routes from "@/data/routes.json"
import NavButton from "./NavButton"
import { useLocation } from "react-router-dom"

type NavBarSmallProps = {
    onSelect: () => void,
}

export default function NavBarSmall({ onSelect }: NavBarSmallProps) {
    const location = useLocation()
    
    return (
        <ul className="flex sm:hidden flex-col h-screen fixed mt-14 bg-slate-700 w-full border-t border-gray-900 opacity-90">
            {routes.map((route, index) =>
                <NavButton key={index} location={location.pathname} link={route.link} onSelect={onSelect}>
                    {route.name}
                </NavButton>)}
        </ul>
    )
}
