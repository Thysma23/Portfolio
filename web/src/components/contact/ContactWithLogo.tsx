import { ContactInterface } from "@/interface/ContactInterface";
import { ReactComponent as GithubLogo } from "@/assets/icones/github.svg";
import { ReactComponent as GmailLogo } from "@/assets/icones/gmail.svg";
import {ReactComponent as MobileLogo } from "@/assets/icones/mobile.svg";
type ContactWithLogoProps = {
    className?: Element['className'],
    contact: ContactInterface
}

export default function ContactWithLogo({ contact }: ContactWithLogoProps) {
    const getLogo = () => {
        switch (contact.type) {
            case "GitHub":
                return <GithubLogo className="w-4 h-4 inline-block mr-1" />
            case "Email":
                return <GmailLogo className="w-4 h-4 inline-block mr-1" />
            case "Mobile":
                return <MobileLogo className="w-4 h-4 inline-block mr-1" />
            default:
                return <></>
        }
    }

    return (
        <a href={contact.url} className="text-zinc-300 hover:underline" target="_blank" rel="norefferer">
            {getLogo()}{contact.id}
        </a>
    )
};
