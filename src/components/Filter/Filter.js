import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilterState } from 'redux/filterSlice';
import { useState } from 'react';

const Filter = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');

  const filterInputChange = event => {
    const filter = event.target.value;
    setFilter(filter);
    dispatch(setFilterState({ filter }));
    // const { value } = event.currentTarget;
    // setFilter(value);
    // dispatch(setFilterState({ filter: value }));
  };
  return (
    <label className={css.filter_label}>
      Find contacts by name
      <input
        placeholder="Search"
        className={css.filter_input}
        onChange={filterInputChange}
        value={filter}
        type="text"
      ></input>
    </label>
  );
};

export default Filter;
