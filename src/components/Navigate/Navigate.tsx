import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectIsAuth } from '../../redux/selectors';
import css from './Navigate.module.scss';
import { Button } from '../../components/Button/Button';

export const Navigate = (): JSX.Element => {
  const navigate = useNavigate();
  const isAuth = useSelector(selectIsAuth);
  const navigator = (path: string) => navigate(`/${path}`);
  return (
    <>
      <Button event={() => navigator('')} className={css.navButton}>
        Home
      </Button>
      {isAuth ? (
        <Button event={() => navigator('contacts')} className={css.navButton}>
          Contacts
        </Button>
      ) : null}
    </>
  );
};
