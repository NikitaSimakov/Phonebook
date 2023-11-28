import ContactAddForm from '../../components/Contacts/ContactAdd/ContactAddForm';
import ContactList from '../../components/Contacts/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import css from './Contacts.module.scss';

const Contacts = () => {
  return (
    <section className={css.container}>
      <Filter />
      <ContactList />
      <ContactAddForm />
    </section>
  );
};

export default Contacts;
