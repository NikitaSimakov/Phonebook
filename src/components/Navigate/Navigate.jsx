import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectIsAuth } from 'redux/selectors';
import css from './Navigate.module.css';

const { Button } = require('@mui/material');

export const Navigate = () => {
  const navigate = useNavigate();
  const isAuth = useSelector(selectIsAuth);

  return (
    <>
      <Button
        onClick={() => {
          navigate('/');
        }}
        className={css.nav_button}
        variant="outlined"
      >
        Home
      </Button>
      {isAuth ? (
        <Button
          onClick={() => {
            navigate('/contacts');
          }}
          className={css.nav_button}
          variant="outlined"
        >
          Contacts
        </Button>
      ) : null}
    </>
  );
};
