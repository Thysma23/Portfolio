import { useState } from "react";
import FolderIcons from "./FolderIcons";
import FolderIconsAvailable from "./FolderIconsAvailable";

type FolderProps = {
    name: string;
    logo: FolderIconsAvailable;
    children: React.ReactNode;
};

export default function Folder({ name, logo, children }: FolderProps) {
    const [isOpen, setOpen] = useState(false)

    const onClickhandler = () => setOpen(o => !o)
    return (
        <div className="text-white w-full px-2 hover:bg-[#37373d] inline-block" onClick={onClickhandler}>
            {isOpen ? "v" : ">"}
            <div className="mr-1 inline-block"><FolderIcons open={isOpen} folder={logo}/></div>
            {name}
        </div>
    );
};