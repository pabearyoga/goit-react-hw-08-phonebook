import React from "react";
import PropTypes from 'prop-types';
import css from "./ContactList.module.css"


const ContactList  = ({contacts, onDelete }) => (

  <ul className={css.contactList}>
    {contacts.map(contact => (
      <li
        key={contact.id}
        className={css.contactItem}
      >
        {contact.name}: {contact.number}
        <button
          type="button"
          className={css.contactBtn}
          onClick={() => onDelete(contact.id)}
        >
          x
        </button>
      </li>))}
  </ul>
  );

export default ContactList

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
};