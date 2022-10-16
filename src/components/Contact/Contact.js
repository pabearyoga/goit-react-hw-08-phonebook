import { useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';
import { deleteContact } from 'redux/contactsSlice';
import css from './Contact.module.css';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div
      className={`${css.wrapper} ${css.animate__animated} ${css.animate__bounceInUp}`}
    >
      <div className={css.textWrapper}>
        <p className={css.text}>{contact.name}:</p>
        <p className={css.text}>{contact.number}</p>
      </div>
      <button className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
