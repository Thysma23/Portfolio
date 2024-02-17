import { ReactComponent as PagesOpen } from "@/assets/icones/folders/pagesOpen.svg";
import { ReactComponent as PagesClose } from "@/assets/icones/folders/pagesClose.svg";
import { ReactComponent as ContactsOpen } from "@/assets/icones/folders/contactsOpen.svg";
import { ReactComponent as ContactsClose } from "@/assets/icones/folders/contactsClose.svg";
import { ReactComponent as AssetsOpen } from "@/assets/icones/folders/assetsOpen.svg";
import { ReactComponent as AssetsClose } from "@/assets/icones/folders/assetsClose.svg";
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
            case "Contacts":
                return open ? <ContactsOpen title="dossier Contacts Ouvert" /> : <ContactsClose title="dossier Contacts fermé" />
            case "Assets":
                return open ? <AssetsOpen title="dossier Assets Ouvert" /> : <AssetsClose title="dossier Assets fermé" />
            default:
                return null;
        }
    })()

    return <div className="inline-block size-6">{getIcone}</div>
};
