import { ReactNode, FC, useEffect, MouseEvent } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.scss';
import { CloseButton } from './CloseButton';

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
      <section className={css.modal}>
        <CloseButton onClose={onClose} />
        {children}
      </section>
    </div>
  );
  return createPortal(Modal, modalRoot);
};

export default Modal;
