import { Link } from "react-router-dom";

type NavButtonProps = {
    children: string,
    location: string,
    link: string,
}

export default function NavButton({ children, location, link }: NavButtonProps) {
    return (
        <li className={"h-full flex justify-center items-center"}>
            <Link className={location.endsWith(link)
                ? "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium h-10"
                : "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"} to={link}>
                {children}
            </Link>
        </li>)
}