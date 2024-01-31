/** 
    Copyright (C) 2024 Mathys Meunier

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You can receive a copy of the GNU General Public License
    along with this program at "http://mathysmeunier/license".
*/
import Contact from "../../components/contact/ContactIndex"
import useContacts from "../../hooks/useContacts";

export default function ContactsIndex() {
    const contacts = useContacts()

    return (
        <main className="pt-16 sm:pt-32 md:pt-16 xl:pt-20 2xl:pt-24 mx-5 sm:mx-16 md:mx-20 lg:mx-32">
            <h1 className="sm:max-md:hidden">Mes contacts</h1>
            {contacts.map((contact, index) =>
                <Contact contact={contact} key={index} />
            )}
        </main>
    )
}
