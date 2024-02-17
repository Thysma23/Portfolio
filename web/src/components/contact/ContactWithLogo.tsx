import { ContactInterface } from "@/interface/ContactInterface";
import { ReactComponent as GithubLogo } from "@/assets/icones/github.svg";
import { ReactComponent as GmailLogo } from "@/assets/icones/gmail.svg";
import { ReactComponent as MobileLogo } from "@/assets/icones/mobile.svg";
import { ReactComponent as LinkedInLogo } from "@/assets/icones/linkedin.svg";

type ContactWithLogoProps = {
    className?: Element['className'],
    contact: ContactInterface
}

export default function ContactWithLogo({ contact }: ContactWithLogoProps) {

    const classNameDefault = "size-5 inline-block mr-1";

    const getLogo = () => {
        switch (contact.type) {
            case "GitHub":
                return <GithubLogo title="logo GitHub" className={classNameDefault} />;
            case "Email":
                return <GmailLogo title="logo Gmail" className={classNameDefault} />;
            case "Mobile":
                return <MobileLogo title="logo Mobile" className={classNameDefault} />;
            case "LinkedIn":
                return <LinkedInLogo title="logo LinkedIn" className={classNameDefault} />;
            default:
                return null;
        }
    }
    return (
        <a href={contact.url} className="text-zinc-300 hover:underline inline-flex items-center h-5 my-1 align-middle" target="_blank" rel="noreferrer">
            {getLogo()}{contact.id}
        </a>
    )
};
