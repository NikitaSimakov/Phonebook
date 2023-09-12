import css from './Button.module.scss';

export const Button = ({
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
