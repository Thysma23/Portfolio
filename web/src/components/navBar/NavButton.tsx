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

import { Link } from "react-router-dom";

type NavButtonProps = {
    children: string,
    location: string,
    onSelect?: () => void,
    link: string,
}

export default function NavButton({ children, location, onSelect, link }: NavButtonProps) {
    return (
        <li className={"h-[15%] sm:h-full flex justify-center items-center"}>
            <Link className={`sm:px-3 sm:py-2 font-medium h-full flex flex-col text-2xl sm:text-base justify-center items-center w-full sm:h-10 sm:rounded-md ${location.endsWith(link)
                ? "bg-gray-900 text-white"
                : "text-gray-300 hover:bg-gray-700 hover:text-white"}`}
                to={link} onClick={onSelect}>
                {children}
            </Link>
        </li>
        )
}
