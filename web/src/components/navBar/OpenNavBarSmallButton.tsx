import { useState } from "react";
import NavBarSmall from "./NavBarSmall";

export default function OpenNavBarSmallButton() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <button className="sm:hidden mr-4" onClick={() => setIsOpen(o => !o)}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
            </button>
            {isOpen &&
                <NavBarSmall onSelect={() => setIsOpen(false)} />
            }
        </>
    )
}
