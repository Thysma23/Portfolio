import Folder from "./components/folder/Folder";
import FileRoute from "./components/file/FileRoute";
import FileContact from "./components/file/FileContact";
import routes from "@/data/routes.json";
import FolderMain from "./components/folder/FolderMain";
import ToggleVersion from "./ToggleVersion";
import contacts from "@/data/contacts.json";
import { useState } from "react";

export default function NavBarIndex() {
    const [isOpen, setOpen] = useState(true)

    const onClickhandler = () => setOpen(o => !o)
    return (
        <aside className={`flex bg-zinc-800 ${isOpen ? "w-[18vw] min-w-[350px]" : ""} h-screen overflow-x-hidden select-none`
        } >
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
            {isOpen && <div className="flex flex-col w-full h-full">
                <div className="h-16 flex flex-col justify-center border-b border-zinc-600">
                    <span className="block text-slate-200 text-2xl text-center">Mathys Meunier</span>
                </div>

                <FolderMain>
                    <nav>
                        <Folder name="Pages" logo="Pages" open>
                            {routes.map((route, index) => {
                                return (
                                    <FileRoute key={index} route={route} />
                                )
                            })}
                        </Folder>
                    </nav>
                    <Folder name="Contacts" logo="Contacts" open>
                        {Object.values(contacts).map((contact, index) => {
                            return (
                                <FileContact key={index} contact={contact} />
                            )
                        })}
                    </Folder>
                </FolderMain>
                <ToggleVersion />
            </div>
            }
            <div className="flex items-center border-l border-zinc-600" onClick={onClickhandler}>
                {isOpen ?
                    <span className="material-symbols-outlined align-middle">
                        {isOpen ? "chevron_left" : "chevron_right"}
                    </span>
                    : <span className="material-symbols-outlined align-middle">
                        chevron_right
                    </span>
                }

            </div>
        </aside>
    )
}
