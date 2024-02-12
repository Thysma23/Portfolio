import { ReactComponent as PagesOpen } from "./assets/pagesOpen.svg";
import { ReactComponent as PagesClose } from "./assets/pagesClose.svg";
import FolderIconsAvailable from "./FolderIconsAvailable";

type FolderIconsProps = {
    folder: FolderIconsAvailable;
    open: boolean
};

export default function FolderIcons({ folder, open }: FolderIconsProps) {
    const getIcone = (() => {
        switch (folder) {
            case "Pages":
                return open ? <PagesOpen title="dossier Pages Ouvert" /> : <PagesClose title="dossier Pages fermé" />
        }
    })()

    return <div className="inline-block size-6">{getIcone}</div>
};
