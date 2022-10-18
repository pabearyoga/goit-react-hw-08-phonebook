import { useDispatch } from 'react-redux';
import { MdClose, MdOutlinePhoneIphone } from 'react-icons/md';
import { deleteContact } from 'redux/contactsSlice';
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
          {contact.name}: {contact.number}
        </p>
        {/* <p className={css.text}>{contact.number}</p> */}
      </div>
      <button className={css.btn} onClick={handleDelete}>
        <a href={`tel:${tel}`}>
          <MdOutlinePhoneIphone fill="#4169e1" size={20} />
        </a>
      </button>

      <button className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
