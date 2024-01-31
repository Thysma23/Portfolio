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

import routes from "@/router/routes.json";
import NavButton from "./NavButton";
import { useLocation } from "react-router-dom";

export default function NavBarMedium() {
    const location = useLocation();

    return (
        <ul className="hidden absolute border-t border-gray-900 mr-4 px-4 justify-between bg-slate-700 h-14 mt-14 w-full
        sm:flex md:static md:border-0 md:justify-normal md:px-0 md:space-x-4 md:mt-0 md:w-auto">

            {routes.filter(route => route.link !== "").map((route, index) =>
                <NavButton key={index} location={location.pathname} link={route.link}>
                    {route.name}
                </NavButton>)}
        </ul>
    );
};
