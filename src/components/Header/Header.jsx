import { UserMenu } from 'components/UserMenu/UserMenu';
import { Navigate } from 'components/Navigate/Navigate';
import css from './Header.module.css';

const Header = () => {
  return (
    <div className={css.header_wrapper}>
      <nav className={css.header_nav}>
        <Navigate />
      </nav>
      <UserMenu />
    </div>
  );
};

export default Header;
