import { UserMenu } from '../UserMenu/UserMenu';
import css from './Header.module.scss';

const Header = (): JSX.Element => {
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
