import routes from "../../router/routes.json"
import NavButton from "./NavButton"
import { useLocation } from "react-router-dom"

type NavBarSmallProps = {
    onSelect: () => void,
}

export default function NavBarSmall({ onSelect }: NavBarSmallProps) {
    const location = useLocation()
    
    return (
        <ul className="flex sm:hidden flex-col h-screen absolute mt-14 bg-slate-700 w-full border-t border-gray-900 opacity-90">
            {routes.map((route, index) =>
                <NavButton key={index} location={location.pathname} link={route.link} onSelect={onSelect}>
                    {route.name}
                </NavButton>)}
        </ul>
    )
}
