import { FC } from 'react';
import css from './ButtonsBox.module.scss';

interface IButtonsBoxProps {
  isFavorite: boolean;
  setIsFavorite: React.Dispatch<React.SetStateAction<boolean>>;
}

const ButtonsBox: FC<IButtonsBoxProps> = ({ isFavorite, setIsFavorite }) => {
  const handleButtonClick = () => {
    setIsFavorite(prev => !prev);
  };
  return (
    <div className={css.buttonsBox}>
      <button
        className={isFavorite ? css.favBtn : `${css.favBtn} active`}
        onClick={handleButtonClick}
        type="button"
      >
        All
      </button>
      <button
        className={isFavorite ? `${css.favBtn} active` : css.favBtn}
        onClick={handleButtonClick}
        type="button"
      >
        Favorites
      </button>
    </div>
  );
};

export default ButtonsBox;
