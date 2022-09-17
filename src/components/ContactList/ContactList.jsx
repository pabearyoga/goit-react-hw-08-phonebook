import React from "react";

const ContactList  = ({contacts, onDelete }) => (

            <ul>
                {contacts.map(contact => (<li key={contact.id}>{contact.name}: {contact.number} <button type="button" onClick={() => onDelete(contact.id)}>x</button></li>))}
            </ul>
        );

export default ContactList