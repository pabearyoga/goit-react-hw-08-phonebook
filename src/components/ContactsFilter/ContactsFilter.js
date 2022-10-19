import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filtersSlice';
import { getFilters } from 'redux/selectors';

import css from './ContactsFilter.module.css';

export const ContactsFilter = () => {
  const { filters } = useSelector(getFilters);

  const dispatch = useDispatch();

  const handleFilterChange = event => {
    const filterInput = event.target;
    dispatch(setFilter(filterInput.value));
  };

  return (
    <div
      className={`${css.wrapper} ${css.animate__animated} ${css.animate__bounceInDown}`}
    >
      <input
        type="text"
        className={css.inputFilter}
        name="filter"
        autoFocus="on"
        autoComplete="off"
        value={filters}
        placeholder="Find contacts by name"
        onChange={handleFilterChange}
        required
      />
    </div>
  );
};
