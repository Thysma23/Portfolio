import contacts from '@/data/contacts.json';
import ContactWithLogo from '../contact/ContactWithLogo';
import ToggleVersion from './ToggleVersion';

export default function FooterIndex() {
    return (
        <footer className="bg-slate-800 w-screen min-h-50 flex flex-col justify-between mt-auto">
            <div className='p-4 pt-0'>
                <h1 className="text-zinc-400">Contacts :</h1>
                <div className="pt-2 space-y-1 md:grid grid-cols-2 gap-4 ">
                    <div className='flex flex-col items-start'>
                        <ContactWithLogo contact={contacts.Email} />
                        <ContactWithLogo contact={contacts.Mobile} />
                    </div>
                    <div className='flex flex-col items-start'>
                        <ContactWithLogo contact={contacts.GitHub} />
                        <ContactWithLogo contact={contacts.LinkedIn} />
                    </div>
                </div>
            </div>
            <div className="text-center text-zinc-400 flex justify-around items-center w-full h-12 bg-slate-900">
                <ToggleVersion />
                <p>© 2024 Mathys Meunier</p>
            </div>
        </footer>
    )
}
