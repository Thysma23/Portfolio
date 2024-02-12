import contacts from '@/data/contacts.json';
import ContactWithLogo from '../contact/ContactWithLogo';

export default function FooterIndex() {
    return (
        <footer className="bg-slate-800 w-full h-64 p-4">
            {/* <h1 className="text-zinc-400">Contacts :</h1>
            <div className="grid grid-cols-2 gap-4">
                <div className='flex flex-col'>
                    <ContactWithLogo contact={contacts.Email} />
                    <ContactWithLogo contact={contacts.Mobile} />
                </div>
                <div className='flex flex-col'>
                    <ContactWithLogo contact={contacts.GitHub} />
                    <ContactWithLogo contact={contacts.Linkedin} />
                </div>
            </div> */}

        </footer>
    )
}
