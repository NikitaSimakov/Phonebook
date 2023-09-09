import { UserMenu } from 'components/UserMenu/UserMenu';
import css from './Header.module.scss';

const Header = () => {
  return (
    <header className={css.wrapper}>
      <nav className={css.nav}>
        <a href="./" className={css.title}>
          PhoneBook
        </a>
      </nav>
      <UserMenu />
    </header>
  );
};

export default Header;
