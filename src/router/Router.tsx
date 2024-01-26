import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/HomeIndex';
import NavBar from '../components/NavBar/NavBarIndex';
import Objectives from '../pages/Objectives/ObjectivesIndex';

export default function Router() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="objectives" element={<Objectives />} />
      </Routes>
    </BrowserRouter>
  )
}
