import { FC, ReactNode } from 'react';
import css from './AuthBlock.module.scss';

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
  return (
    <section className={css.login}>
      <div className={css.container}>
        <h1 className={css.title}>{title}</h1>
        {paragraph && <p className={css.text}>{paragraph}</p>}
        {children}
      </div>
      <div className={css.rightSide}></div>
    </section>
  );
};

export default AuthBlock;
