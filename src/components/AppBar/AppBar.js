import PropTypes from 'prop-types';
import { ContactsFilter } from 'components/ContactsFilter/ContactsFilter.js';
import { MdPersonAdd } from 'react-icons/md';
import css from './AppBar.module.css';
import cssBtn from '../Button/Button.module.css';

export const AppBar = ({ onOpen }) => {
  return (
    <header className={css.wrapper}>
      <section className={css.section}>
        <h2 className={css.logo}>Phonebook</h2>
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
