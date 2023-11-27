import { VscChromeClose } from 'react-icons/vsc';
import css from './Modal.module.scss';
import { createPortal } from 'react-dom';
import { ReactNode, FC, useEffect, MouseEvent } from 'react';

interface IModalProps {
  children: ReactNode;
  onClose: () => void;
}

const modalRoot = document.getElementById('modal-root') as HTMLElement;

const Modal: FC<IModalProps> = ({ children, onClose }) => {
  useEffect(() => {
    const esc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', esc);
    return () => {
      window.removeEventListener('keydown', esc);
    };
  }, [onClose]);

  const onEscTapHandler = (
    event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    if (event.target === event.currentTarget) onClose();
  };

  const Modal = (
    <div onClick={onEscTapHandler} className={css.overlay}>
      <div className={css.modal}>
        <button onClick={onClose} className={css.closeButton} type="button">
          <VscChromeClose />
        </button>
        {children}
      </div>
    </div>
  );
  return createPortal(Modal, modalRoot);
};

export default Modal;
