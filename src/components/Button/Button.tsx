import css from './Button.module.scss';
import { FC, SyntheticEvent, ReactNode } from 'react';

interface ButtonProps {
  stylish?: String | Boolean;
  event?: (event: SyntheticEvent) => void;
  children?: String | ReactNode | undefined;
  buttonType?: 'button' | 'submit' | 'reset' | undefined;
  id?: string;
  className?: string;
  disabled?: boolean;
  form?: string;
}

const Button: FC<ButtonProps> = ({
  stylish,
  event,
  children,
  buttonType = 'button',
  id,
  form = '',
}) => {
  return (
    <button
      onClick={event}
      type={buttonType}
      id={id}
      form={form}
      className={stylish === 'redButton' ? css.redButton : css.button}
    >
      {children}
    </button>
  );
};

export default Button;
