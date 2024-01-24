import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/HomeIndex';
import NavBar from '../components/NavBar/NavBarIndex';

export default function Router() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}