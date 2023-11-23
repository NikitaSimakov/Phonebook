import { FC, ReactNode } from 'react';
import css from './Header.module.scss';

interface HeaderProps {
  children: ReactNode;
}

const Header: FC<HeaderProps> = ({ children }) => {
  return (
    <header className={css.wrapper}>
      <nav className={css.nav}>
        <a href="./" className={css.title}>
          PhoneBook
        </a>
      </nav>
      {children}
    </header>
  );
};

export default Header;
