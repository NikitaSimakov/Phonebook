// import ContactForm from './ContactForm/ContactForm';
// import Filter from './Filter/Filter';
// import ContactList from './ContactList/ContactList';
import { fetchContacts } from 'redux/thunks';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Registration } from './Registration/Registration';
import { Route, Routes } from 'react-router-dom';
import { Login } from './Login/Login';
import Layout from './Outlet/Outlet';
import Contacts from './Contacts/Contacts';
import NotFound from './NotFound/NotFound';
import { WelcomePage } from './WelcomePage/WelcomePage';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';

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
        <Route path="/" element={<Layout />}>
          <Route index element={<WelcomePage />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
      {/* <Routes>
        <Route path="/" element={<Contacts />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes> */}
    </div>
  );
};

export default App;
