import { useLocation } from "react-router-dom"
import routes from "../../router/routes.json"
import NavButton from "./NavButton"
import NavButtonMain from "./NavButtonMain"

export default function NavBarIndex() {
    const location = useLocation()

    return <nav className="bg-slate-700 flex flex-row justify-between px-4">
        <NavButtonMain />
        <ul className="flex space-x-4 h-14">
            {routes.map((route, index) =>
                <NavButton key={index} location={location.pathname} link={route.link}>
                    {route.name}
                </NavButton>)}
        </ul>
    </nav>
}
