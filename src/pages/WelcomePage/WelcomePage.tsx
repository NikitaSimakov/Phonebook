import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { selectIsAuth } from '../../redux/selectors';
import css from './WelcomePage.module.scss';
import Button from '../../components/Button/Button';
import { ReactComponent as ReactLogo } from './book.svg';

const WelcomePage = () => {
  const navigate = useNavigate();
  const isAuth = useSelector(selectIsAuth);
  return (
    <>
      {isAuth ? (
        <Navigate to="/contacts" />
      ) : (
        <section className={css.wrapper}>
          <div className={css.iconWrapper}>
            <ReactLogo />
          </div>
          <div className={css.textWrapper}>
            <h1 className={css.title}>We welcome to our application!</h1>
            <p className={css.paragraph}>Here you can save your contacts</p>
            {isAuth ? null : (
              <div className={css.loginButtonWrapper}>
                <Button event={() => navigate('/login')}>Log In</Button>
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default WelcomePage;
