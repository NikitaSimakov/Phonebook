import { FC, ReactNode } from 'react';
import css from './AuthBlock.module.scss';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../../../redux/selectors';
import { Navigate } from 'react-router-dom';

interface AuthBlockInterface {
  children: ReactNode;
  title: string;
  paragraph?: string;
}

const AuthBlock: FC<AuthBlockInterface> = ({
  children,
  title,
  paragraph = '',
}) => {
  const navigate = useNavigate();
  const isAuth = useSelector(selectIsAuth);

  // if (isAuth) navigate('/contacts');
  return (
    <>
      {isAuth && navigate('/contacts')}
      <section className={css.login}>
        <div className={css.container}>
          <h1 className={css.title}>{title}</h1>
          {paragraph && <p className={css.text}>{paragraph}</p>}
          {children}
        </div>
        <div className={css.rightSide}></div>
      </section>
    </>
  );
};

export default AuthBlock;
