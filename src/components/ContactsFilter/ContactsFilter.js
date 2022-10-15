import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filtersSlice';
import css from './ContactsFilter.module.css';

export const ContactsFilter = () => {
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
        autoComplete="off"
        // value={value}
        placeholder="Find contacts by name"
        onChange={handleFilterChange}
        required
      />
    </div>
  );
};
