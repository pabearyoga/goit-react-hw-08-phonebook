import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { ContactsFilter } from 'components/ContactsFilter/ContactsFilter.js';
import { MdPersonAdd } from 'react-icons/md';
import css from './AppBar.module.css';
import cssBtn from '../Button/Button.module.css';

export const AppBar = ({ onOpen }) => {
  const { contacts } = useSelector(getContacts);

  return (
    <header className={css.wrapper}>
      <section className={css.section}>
        <h2 className={css.title}>
          Contacts: <span className={css.counter}>{contacts.length}</span>
        </h2>
        <button type="button" className={cssBtn.btn} onClick={() => onOpen()}>
          <MdPersonAdd size={16} />
        </button>
      </section>

      <section className={css.section}>
        <ContactsFilter />
      </section>
    </header>
  );
};

AppBar.propTypes = {
  onOpen: PropTypes.func.isRequired,
};
