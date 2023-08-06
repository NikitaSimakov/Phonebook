import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectIsAuth } from 'redux/selectors';

import css from './WelcomePage.module.css';
import { Button } from '@mui/material';

export const WelcomePage = () => {
  const navigate = useNavigate();
  const isAuth = useSelector(selectIsAuth);
  return (
    <>
      <h1 className={css.title}>We are welcome in our application!</h1>
      <p className={css.paragraph}>Here you can save your contacts</p>
      {isAuth ? null : (
        <div className={css.login_button_wrapper}>
          <Button variant="outlined" onClick={() => navigate('/login')}>
            Log In
          </Button>
        </div>
      )}
    </>
  );
};
