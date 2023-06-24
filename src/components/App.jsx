// import ContactForm from './ContactForm/ContactForm';
// import Filter from './Filter/Filter';
// import ContactList from './ContactList/ContactList';
import { fetchContacts } from 'redux/thunks';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Registration } from './Registration/Registration';
import { Route, Routes } from 'react-router-dom';
import Contacts from './Contacts/Contacts';
import { Login } from './Login/Login';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div
      style={{
        height: '100vh',
        fontSize: 30,
        color: '#010101',
        padding: 30,
      }}
    >
      <Routes>
        <Route path="/" element={<Contacts />}></Route>
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
