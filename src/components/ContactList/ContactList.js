import { useSelector } from 'react-redux';
import { Contact } from 'components/Contact/Contact';
import { getContacts, getFilters } from 'redux/selectors';
import css from './ContactList.module.css';

const getFiltredContacts = (contacts, filters) => {
  const normalizeFilter = filters.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );
};

export const ContactList = () => {
  const { contacts } = useSelector(getContacts);
  const { filters } = useSelector(getFilters);

  const visibleContacts = getFiltredContacts(contacts, filters);

  return (
    <>
      <h2 className={css.contactSum}>
        Find:
        <span className={css.contactSumValue}>{visibleContacts.length}</span>
        contacts:
      </h2>
      {contacts.length === 0 ? (
        <p className={css.text}>...please add contact !</p>
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
