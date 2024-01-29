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

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/HomeIndex';
import NavBar from '../components/navBar/NavBarIndex';
import Objectives from '../pages/objectives/ObjectivesIndex';
import Projects from "../pages/projects/ProjectsIndex"
import Skills from "../pages/skills/SkillsIndex"
import Contacts from '../pages/contacts/ContactsIndex';

export default function Router() {
  return (
    <BrowserRouter>
      <header>
        <NavBar />
      </header>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="objectives" element={<Objectives />} />
        <Route path="projects" element={<Projects />} />
        <Route path="skills" element={<Skills />} />
        <Route path="contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  )
}
