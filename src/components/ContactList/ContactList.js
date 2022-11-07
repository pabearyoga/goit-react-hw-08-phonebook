import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Contact } from 'components/Contact/Contact';
import {
  getContacts,
  getFilters,
  getIsLoading,
} from 'redux/contacts/selectors';
import { ContactsFilter } from 'components/ContactsFilter/ContactsFilter.js';
import { MdPersonAdd } from 'react-icons/md';
import { Button } from 'components/Button/Button';

import css from './ContactList.module.css';

const getFiltredContacts = (contacts, filters) => {
  const normalizeFilter = filters.toLowerCase();
  return contacts
    .filter(contact => contact.name.toLowerCase().includes(normalizeFilter))
    .sort((firstContact, secondContact) =>
      firstContact.name.localeCompare(secondContact.name)
    );
};

export const ContactList = ({ onOpen }) => {
  const isLoading = useSelector(getIsLoading);
  const contacts = useSelector(getContacts);
  const { filters } = useSelector(getFilters);

  const visibleContacts = getFiltredContacts(contacts, filters);

  return (
    <>
      <div className={css.countInfo}>
        <p className={css.contactSum}>
          all contacts:
          <span className={css.contactSumValue}>{contacts.length}</span>
        </p>

        <section className={css.section}>
          <div className={css.wrapperBtn}>
            <ContactsFilter />
            <Button onClick={() => onOpen()}>
              <MdPersonAdd size={16} />
            </Button>
          </div>
        </section>
      </div>

      {contacts.length === 0 && !isLoading ? (
        <p className={css.text}>
          The contact list is empty, please add a contact !
        </p>
      ) : (
        <ul className={css.list}>
          {visibleContacts.map(contact => (
            <li key={contact.id}>
              <Contact contact={contact} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

ContactList.propTypes = {
  onOpen: PropTypes.func.isRequired,
};
