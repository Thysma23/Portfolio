import { ContactInterface } from "../../interface/ContactInterface"
import { useState } from "react"

type ContactIndexProps = {
    className?: Element['className'],
    contact: ContactInterface
}

export default function ContactIndex({ contact }: ContactIndexProps) {
    const [isHover, setIsHover] = useState(false)

    return (
        <a href={contact.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-left bg-slate-300 rounded-lg p-4 shadow-md hover:shadow-2xl w-80 -z-30 relative" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            {typeof contact.avatar === 'string'
                ? <img src={contact.avatar} alt={contact.id} className="w-12 h-12" />
                : contact.avatar
            }
            <div className="flex flex-col">
                <span className="text-lg">{contact.type}</span>
                <span className={`text-md ${isHover ? "underline" : ""}`}>{contact.id}</span>
            </div>
        </a>
    )
}
