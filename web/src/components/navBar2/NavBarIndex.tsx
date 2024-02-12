import Folder from "./components/Folder/Folder";

export default function NavBarIndex(){
    return (
        <div className="flex bg-gray-800 flex-col w-[16vw] h-screen">
            <Folder name="Pages" logo="Pages">
            </Folder>
        </div>
    )
}