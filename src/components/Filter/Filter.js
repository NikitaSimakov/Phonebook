import { useDispatch } from 'react-redux';
import { setFilterState } from 'redux/filterSlice';
import { useState } from 'react';
import { TextField } from '@mui/material';
import css from './Filter.module.scss';

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
      <h2>Contacts</h2>
      <p>Find contacts by name</p>
      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
      <TextField
        size="small"
        label="Search"
        variant="outlined"
        placeholder="Search"
        className={css.filter_input}
        onChange={filterInputChange}
        value={filter}
        type="text"
      ></TextField>
    </label>
  );
};

export default Filter;
