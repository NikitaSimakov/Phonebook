import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contact/thunks';
import css from './ContactForm.module.scss';
import { Button } from '@mui/material';
import { selectContacts } from 'redux/selectors';
import { Notify } from 'notiflix';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [isActive, setIsActive] = useState(false);

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

  const modalOpen = () => setIsActive(true);
  const modalClose = () => setIsActive(false);

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      {isActive && (
        <section className={css.add_contact}>
          <div className={css.container}>
            <form className={css.form} onSubmit={handleSubmit}>
              <h1 className={css.title}>Add new contact</h1>
              <div className={css.label_wrapper}>
                <label className={css.label}>
                  <p className={css.label_name}>Name</p>
                  <input
                    label="Homer Simpson"
                    className={css.input}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                    onChange={handleInputChange}
                  />
                </label>
                <label className={css.label}>
                  <p className={css.label_name}>Number</p>
                  <input
                    label="XXX-XX-XX"
                    className={css.input}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                    onChange={handleInputChange}
                  />
                </label>
                <Button variant="outlined" className={css.button} type="submit">
                  Add contact
                </Button>
              </div>
              <button
                onClick={modalClose}
                className={css.closeButton}
                type="button"
              >
                X
              </button>
            </form>
          </div>
        </section>
      )}
      <button onClick={modalOpen} className={css.openButton} type="button">
        Add contact
      </button>
    </>
  );
};

export default ContactForm;
