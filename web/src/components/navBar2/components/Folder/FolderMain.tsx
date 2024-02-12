import React, { useState } from "react";

type FolderProps = {
    children?: React.ReactNode;
};


export default function FolderMain({ children }: FolderProps) {
    const [isOpen, setOpen] = useState(true)

    const onClickhandler = () => setOpen(o => !o)
    return (
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
            <div className="text-white w-full px-2 text-xl hover:bg-[#37373d] inline-block align-middle h-8" onClick={onClickhandler}>
                {isOpen
                    ? <span className="material-symbols-outlined align-middle">
                        expand_more
                    </span>
                    : <span className="material-symbols-outlined align-middle">
                        chevron_right
                    </span>}
                Portfolio
            </div>
            <div className={`ml-[1.12rem] pl-2 border-l-2 border-gray-400 flex flex-col ${isOpen || "hidden"}`}>
                {children}
            </div>

        </>
    );
};
