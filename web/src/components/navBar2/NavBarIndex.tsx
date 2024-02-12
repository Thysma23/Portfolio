import Folder from "./components/Folder/Folder";
import File from "./components/file/FileRoute";
import routes from "@/router/routes.json";
import FolderMain from "./components/Folder/FolderMain";
import ToggleVersion from "./ToggleVersion";

export default function NavBarIndex() {
    return (
        <div className="flex bg-zinc-800 flex-col w-[15vw] h-screen overflow-x-hidden select-none">
            <div className="h-16 flex flex-col justify-center">
                <span className="block text-white text-2xl text-center">Mathys Meunier</span>
            </div>
            <FolderMain>
                <nav>
                    <Folder name="Pages" logo="Pages">
                        {routes.map((route, index) => {
                            return (
                                <File key={index} route={route} />
                            )
                        })}
                    </Folder>
                </nav>
            </FolderMain>
            <ToggleVersion />
        </div>
    )
}
