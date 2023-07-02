import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/thunks';
import css from './ContactForm.module.css';
import { Button, TextField } from '@mui/material';
import { selectContacts } from 'redux/selectors';
import { Notify } from 'notiflix';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (contacts.some(contact => contact.name.includes(name)))
      return Notify.failure(`Contact ${name} is already in phonebook!`);
    dispatch(addContact({ name, number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <h1>Phonebook</h1>
      <div className={css.form_label_wrapper}>
        <label className={css.form_label}>
          <p className={css.form_label_name}>Name</p>
          <TextField
            size="small"
            label="Homer Simpson"
            variant="outlined"
            className={css.form_input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleInputChange}
          />
        </label>
        <label className={css.form_label}>
          <p className={css.form_label_name}>Number</p>
          <TextField
            size="small"
            label="XXX-XX-XX"
            variant="outlined"
            className={css.form_input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleInputChange}
          />
        </label>
        <Button variant="outlined" className={css.form_button} type="submit">
          Add contact
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
