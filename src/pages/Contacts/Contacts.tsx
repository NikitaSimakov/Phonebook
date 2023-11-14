import ContactForm from '../../components/Contacts/ContactForm/ContactForm';
import ContactList from '../../components/Contacts/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import css from './Contacts.module.scss';

const Contacts = () => {
  return (
    <section className={css.container}>
      <Filter />
      <ContactList />
      <ContactForm />
    </section>
  );
};

export default Contacts;
