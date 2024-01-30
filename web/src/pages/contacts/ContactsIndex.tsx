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
import { ContactInterface } from "../../interface/ContactInterface"
import ProfilPicture from "../../components/contact/ProfilPicture";

export default function ContactsIndex() {
    const contacts: ContactInterface[] = [{
        id: "mathysmeunier.pro@gmail.com",
        avatar: <ProfilPicture className="w-12"/>,
        url: "mailto:mathysmeunier.pro@gmail.com",
        type: "Email"
    },
    {
        id: "+33 6 25 80 09 15",
        avatar: "https://avatars.githubusercontent.com/u/87235242?s=80&v=4",
        url: "tel:+33625800915",
        type: "Téléphone"
    }
    ];

    return (
        <main className="flex flex-col justify-center items-center">
            {contacts.map((contact, index) =>
                <Contact contact={contact} key={index} />
            )}
        </main>
    )
}
