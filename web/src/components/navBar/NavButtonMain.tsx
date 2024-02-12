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

export default function NavButtonMain() {
    return (
        <Link className="font-bold ml-4 justify-start hover:bg-gray-700 hover:text-white rounded-md text-gray-300 my-auto text-2xl" to="/home">
            <div>
                Mathys Meunier
            </div>
        </Link>
    )
}
