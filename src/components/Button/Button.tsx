import css from './Button.module.scss';
import { FC, SyntheticEvent } from 'react';

interface ButtonProps {
  stylish?: String | Boolean;
  event?: (event: SyntheticEvent) => void;
  children?: String;
  buttonType?: "button" | "submit" | "reset" | undefined;
  id?: string;
}

export const Button: FC<ButtonProps> = ({
  stylish,
  event,
  children,
  buttonType = 'button',
  id,
}) => {
  return (
    <button
      onClick={event}
      type={buttonType}
      id={id}
      className={stylish === 'redButton' ? css.redButton : css.button}
    >
      {children}
    </button>
  );
};
