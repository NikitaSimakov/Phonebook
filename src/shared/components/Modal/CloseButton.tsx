import { VscChromeClose } from 'react-icons/vsc';
import css from './Modal.module.scss';
import { FC } from 'react';

interface ICloseButtonProps {
  onClose: () => void;
}

export const CloseButton: FC<ICloseButtonProps> = ({ onClose }) => {
  return (
    <button onClick={onClose} className={css.closeButton} type="button">
      <VscChromeClose />
    </button>
  );
};
