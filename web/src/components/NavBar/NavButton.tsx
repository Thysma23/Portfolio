import { Link } from "react-router-dom";

type NavButtonProps = {
    children: string,
    location: string,
    onSelect?: () => void,
    link: string,
}

export default function NavButton({ children, location, onSelect, link }: NavButtonProps) {
    return (
        <li className={"h-[15%] sm:h-full flex justify-center items-center"}>
            <Link className={`sm:px-3 sm:py-2 font-medium h-full flex flex-col text-2xl sm:text-base justify-center items-center w-full sm:h-10 sm:rounded-md ${location.endsWith(link)
                ? "bg-gray-900 text-white"
                : "text-gray-300 hover:bg-gray-700 hover:text-white"}`}
                to={link} onClick={onSelect}>
                {children}
            </Link>
        </li>)
}
