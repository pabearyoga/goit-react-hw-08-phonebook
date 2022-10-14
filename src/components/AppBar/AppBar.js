import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { ContactsFilter } from 'components/ContactsFilter/ContactsFilter.js';
import css from './AppBar.module.css';

export const AppBar = () => {
  const contacts = useSelector(getContacts);

  return (
    <header className={css.wrapper}>
      <section className={css.section}>
        <h2 className={css.title}>
          Contacts: <span className={css.counter}>{contacts.length}</span>
        </h2>
      </section>
      <section className={css.section}>
        {/* <h2 className={css.title}>Find contacts by name:</h2> */}
        <ContactsFilter />
      </section>
    </header>
  );
};
