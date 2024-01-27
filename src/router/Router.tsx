import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/HomeIndex';
import NavBar from '../components/NavBar/NavBarIndex';
import Objectives from '../pages/Objectives/ObjectivesIndex';
import Projects from "../pages/projects/ProjectIndex"
import Skills from "../pages/skills/SkillsIndex"

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
      </Routes>
    </BrowserRouter>
  )
}
