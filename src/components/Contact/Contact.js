import { useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';
import { deleteContact } from 'redux/contactsSlice';
import css from './Contact.module.css';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div className={css.wrapper}>
      <div className={css.text}>
        <p>{contact.name}:</p>
        <p>{contact.number}</p>
      </div>
      <button className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
