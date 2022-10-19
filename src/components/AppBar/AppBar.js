import { useDispatch, useSelector } from 'react-redux';
import { setFilter, setIsOpen } from 'redux/filtersSlice';
import { getFilters } from 'redux/selectors';

import PropTypes from 'prop-types';
import { useState } from 'react';
import { ContactsFilter } from 'components/ContactsFilter/ContactsFilter.js';
import { MdPersonAdd, MdSearch } from 'react-icons/md';
import css from './AppBar.module.css';
import cssBtn from '../Button/Button.module.css';

export const AppBar = ({ onOpen }) => {
  const { isOpen } = useSelector(getFilters);

  const [search, setSearch] = useState(isOpen);

  const dispatch = useDispatch();

  dispatch(setIsOpen(search));

  const toggleSearch = () => {
    setSearch(!search);

    if (search) {
      dispatch(setFilter(''));
    }
  };

  return (
    <header className={css.wrapper}>
      <section className={css.section}>
        <h2 className={css.logo}>Phonebook</h2>
      </section>

      <section className={css.section}>
        {search && <ContactsFilter />}

        <div className={css.wrapperBtn}>
          <button
            type="button"
            className={cssBtn.btn}
            onClick={() => toggleSearch()}
          >
            <MdSearch size={16} />
          </button>
          <button type="button" className={cssBtn.btn} onClick={() => onOpen()}>
            <MdPersonAdd size={16} />
          </button>
        </div>
      </section>
    </header>
  );
};

AppBar.propTypes = {
  onOpen: PropTypes.func.isRequired,
};
