import routes from "../../router/routes.json";
import NavButton from "./NavButton";
import { useLocation } from "react-router-dom";

export default function NavBarMedium() {
    const location = useLocation();

    return (
        <ul className="hidden absolute border-t border-gray-900 mr-4 px-4 justify-between bg-slate-700 h-14 mt-14 w-full
        sm:flex md:static md:border-0 md:justify-normal md:px-0 md:space-x-4 md:mt-0 md:w-auto">

            {routes.map((route, index) =>
                <NavButton key={index} location={location.pathname} link={route.link}>
                    {route.name}
                </NavButton>)}
        </ul>
    );
};
