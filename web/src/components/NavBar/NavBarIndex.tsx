import NavButtonMain from "./NavButtonMain"
import OpenNavBarSmallButton from "./OpenNavBarSmallButton"
import NavBarMedium from "./NavBarMedium"

export default function NavBarIndex() {

    return (
        <nav className="bg-slate-700 flex flex-row justify-between absolute w-full h-14">
            <NavButtonMain />
            <NavBarMedium />
            <OpenNavBarSmallButton />
        </nav>
    )
}
