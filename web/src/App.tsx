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

import Router from "./router/Router";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.body.classList.add(
      "bg-gray-500",
      "h-screen",
      "overflow-x-hidden")
  })

  return (
    <Router />
  );
}

export default App;
