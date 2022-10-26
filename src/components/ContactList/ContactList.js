import { useSelector } from 'react-redux';
import { Contact } from 'components/Contact/Contact';
import { getContacts, getFilters } from 'redux/selectors';
import { getError, getIsLoading } from 'redux/selectors';

import css from './ContactList.module.css';

const getFiltredContacts = (contacts, filters) => {
  const normalizeFilter = filters.toLowerCase();
  return contacts
    .filter(contact => contact.name.toLowerCase().includes(normalizeFilter))
    .sort((firstContact, secondContact) =>
      firstContact.name.localeCompare(secondContact.name)
    );
};

export const ContactList = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

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

        <p className={css.contactSum}>
          find contacts:
          <span className={css.contactSumValue}>{visibleContacts.length}</span>
        </p>
      </div>
      {isLoading && !error && (
        <p className={css.text}>Request in progress...</p>
      )}
      {contacts.length === 0 ? (
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
