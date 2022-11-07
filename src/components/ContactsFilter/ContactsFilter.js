import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filtersSlice';
import { getFilters } from 'redux/contacts/selectors';

import { MdSearch } from 'react-icons/md';

import css from './ContactsFilter.module.css';

export const ContactsFilter = () => {
  const { filters } = useSelector(getFilters);

  const dispatch = useDispatch();

  const handleFilterChange = event => {
    const filterInput = event.target;
    dispatch(setFilter(filterInput.value));
  };

  return (
    <div className={css.wrapper}>
      <input
        type="text"
        className={css.inputFilter}
        name="filter"
        value={filters}
        placeholder="Find contacts by name"
        onChange={handleFilterChange}
        required
      />

      <div className={css.searchImg}>
        <MdSearch size={16} fill="#010101" />
      </div>
    </div>
  );
};
