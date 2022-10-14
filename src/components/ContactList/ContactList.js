import { useSelector } from 'react-redux';
import { Contact } from 'components/Contact/Contact';
import { getContacts, getFilters } from 'redux/selectors';
import css from './ContactList.module.css';

const getFiltredContacts = (contacts, filters) => {
  const normalizeFilter = filters.filters.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filters = useSelector(getFilters);

  const visibleContacts = getFiltredContacts(contacts, filters);

  return (
    <ul className={css.list}>
      {visibleContacts.map(contact => (
        <li className={css.listItem} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};
