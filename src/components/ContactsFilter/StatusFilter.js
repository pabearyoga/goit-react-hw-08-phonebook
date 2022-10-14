import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filtersSlice';
import css from './StatusFilter.module.css';

export const StatusFilter = () => {
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
        // value={value}
        onChange={handleFilterChange}
        required
      />
    </div>
  );
};
