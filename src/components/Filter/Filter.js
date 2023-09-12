import { useDispatch } from 'react-redux';
import { setFilterState } from 'redux/filterSlice';
import { useState } from 'react';
import css from './Filter.module.scss';

const Filter = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');

  const filterInputChange = event => {
    const filter = event.target.value;
    setFilter(filter);
    dispatch(setFilterState({ filter }));
  };
  return (
    <label className={css.label}>
      <h2 className={css.title}>Contacts</h2>
      <p className={css.text}>Find contacts by name</p>
      <input
        placeholder="Search a friend"
        className={css.input}
        onChange={filterInputChange}
        value={filter}
        type="text"
      ></input>
    </label>
  );
};

export default Filter;
