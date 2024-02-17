import ContactInterface from "@/interface/ContactInterface";
import { ReactComponent as MobileLogo } from "@/assets/icones/contacts/mobile.svg";
import { ReactComponent as GMailLogo } from "@/assets/icones/contacts/gmail.svg";
import { ReactComponent as LinkedInLogo } from "@/assets/icones/contacts/linkedin.svg";
import { ReactComponent as GitHubLogo } from "@/assets/icones/github.svg";

type FileContactProps = {
    contact: ContactInterface
};

export default function FileContact({ contact }: FileContactProps) {
    const classNameDefault = "size-5 inline-block align-middle mb-1 mr-1";
    const getLogo = () => {
        switch (contact.type) {
            case "Mobile":
                return <MobileLogo title="Logo Mobile" className={classNameDefault} />;
            case "Email":
                return <GMailLogo title="Logo Gmail" className={classNameDefault} />;
            case "LinkedIn":
                return <LinkedInLogo title="Logo LinkedIn" className={classNameDefault} />;
            case "GitHub":
                return <GitHubLogo title="Logo GitHub" className={classNameDefault} />;
            default:
                return null;
        }
    }
    return (
        <a className="text-slate-200 hover:bg-[#37373d] inline-block align-middle" href={contact.url}>
            {getLogo()}{contact.id}
        </a>
    );
};
