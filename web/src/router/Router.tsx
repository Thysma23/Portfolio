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
import Home from "@/pages/home/HomeIndex"
import NavBarSimplified from '@/components/navBar/NavBarIndex';
import NavBarFull from '@/components/navBar2/NavBarIndex';
import Objectives from '@/pages/objectives/ObjectivesIndex';
import Projects from "@/pages/projects/ProjectsIndex"
import Skills from "@/pages/skills/SkillsIndex"
import useVersion from '@/hooks/useVersion';
import Footer from '@/components/footer/FooterIndex';
import Redirect from './Redirect';

export default function Router() {
  const { version } = useVersion()
  
  return (
    <BrowserRouter>
      <div className='flex h-full w-screen'>
        {version === 'simplified'
          ? <NavBarSimplified />
          : <NavBarFull />
        }
        <div className={"h-full flex flex-col justify-between " + (version === "full" ? "w-[85vw]" : "w-screen")}>
          <Routes>
            <Route path="Portfolio/home" element={<Home />} />
            <Route path="Portfolio/objectives" element={<Objectives />} />
            <Route path="Portfolio/projects" element={<Projects />} />
            <Route path="Portfolio/skills" element={<Skills />} />
            <Route path="*" element={<Redirect />} />
          </Routes>
          {version === "simplified" && <Footer />}
        </div>
      </div>
    </BrowserRouter>
  )
}
