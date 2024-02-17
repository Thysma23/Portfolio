import { useLocation, Link } from "react-router-dom";
import { ReactComponent as ReactLogo } from "@/assets/icones/skills/react.svg";

type FileRouteProps = {
    route: {
        name: string;
        link: string;
    }
};

export default function FileRoute({ route }: FileRouteProps) {
    const location = useLocation();

    return (
        <Link className={(location.pathname.endsWith(route.link) ? "bg-[#303035]" : "hover:bg-[#37373d]") + " text-slate-200 inline-block align-middle"} to={route.link}>
            <ReactLogo title="Logo ReactJS" className="size-4 inline-block align-middle mb-1 mr-1" />{route.name}.tsx
        </Link>
    );
};
