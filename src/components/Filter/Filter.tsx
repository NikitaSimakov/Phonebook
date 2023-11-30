import { setFilterState } from '../../redux/filterSlice';
import { useState, ChangeEvent } from 'react';
import css from './Filter.module.scss';
import { useAppDispatch } from '../../redux/hooks';
import { CloseButton } from '../../shared/components/Modal/CloseButton';

const Filter = () => {
  const dispatch = useAppDispatch();
  const [filter, setFilter] = useState<string>('');

  const filterInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const filter = event.target.value;
    setFilter(filter);
    dispatch(setFilterState(filter));
  };
  const onClose = () => {
    setFilter('');
    dispatch(setFilterState(''));
  };
  return (
    <label className={css.label} htmlFor="filter">
      <h2 className={css.title}>Contacts</h2>
      <p className={css.text}>Find contacts by name</p>
      <input
        placeholder="Search a friend"
        className={css.input}
        onChange={filterInputChange}
        value={filter}
        id="filter"
        type="text"
      ></input>
      <CloseButton onClose={onClose} />
    </label>
  );
};

export default Filter;
