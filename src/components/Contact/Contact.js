import { useDispatch } from 'react-redux';
import { MdClose, MdPhone } from 'react-icons/md';
import { deleteContact } from 'redux/operations';
import css from './Contact.module.css';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  const tel = contact.number;
  return (
    <div
      className={`${css.wrapper} ${css.animate__animated} ${css.animate__bounceInUp}`}
    >
      <div className={css.textWrapper}>
        <p className={css.text}>
          <span className={css.name}>{contact.name}: </span>
          <span className={css.number}>{contact.number}</span>
        </p>
      </div>
      <button className={`${css.btn} ${css.btnTel}`}>
        <a href={`tel:${tel}`}>
          <MdPhone fill="#01c801" size={18} />
        </a>
      </button>

      <button className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
