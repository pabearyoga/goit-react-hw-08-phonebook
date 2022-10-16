import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ContactForm } from 'components/ContactForm/ContactForm';
import css from './Modal.module.css';
import animate from 'animate.css/animate.module.css';

const Modal = ({ onClose }) => {
  useEffect(() => {
    window.addEventListener('keydown', event => {
      if (event.code === 'Escape' || event.target.id === 'Overlay') {
        onClose();
      }
    });

    return window.removeEventListener('keydown', event => {
      if (event.code === 'Escape') {
        onClose();
      }
    });
  }, [onClose]);

  const handelCloseModal = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return (
    <div className={css.Overlay} id="Overlay" onClick={handelCloseModal}>
      <div
        className={`${css.Modal} ${animate.animate__animated} ${animate.animate__bounceInUp}`}
      >
        <ContactForm />
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Modal;
