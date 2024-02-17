import Folder from "./components/folder/Folder";
import File from "./components/file/FileRoute";
import routes from "@/data/routes.json";
import FolderMain from "./components/folder/FolderMain";
import ToggleVersion from "./ToggleVersion";

export default function NavBarIndex() {
    return (
        <aside className="flex bg-zinc-800 flex-col w-[15vw] min-w-[240px] h-screen overflow-x-hidden select-none">

            <div className="h-16 flex flex-col justify-center border-b border-zinc-600">
                <span className="block text-slate-200 text-2xl text-center">Mathys Meunier</span>
            </div>

            <FolderMain>
                <nav>
                    <Folder name="Pages" logo="Pages" open>
                        {routes.map((route, index) => {
                            return (
                                <File key={index} route={route} />
                            )
                        })}
                    </Folder>
                </nav>
            </FolderMain>
            <ToggleVersion />
        </aside>
    )
}
