import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { Button } from 'components/Button/Button';
import { addContact } from 'redux/contactsSlice';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    if (contacts.some(value => value.name === form.elements.name.value)) {
      alert(`"${form.elements.name.value}" is already in contacts`);
    } else if (form.elements.number.value === '') {
      alert('Please enter phone number !');
    } else {
      dispatch(
        addContact(form.elements.name.value, form.elements.number.value)
      );
    }

    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="name"
        placeholder="Enter name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
      <input
        className={css.field}
        type="tel"
        name="number"
        placeholder="Enter phone number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      />
      <Button type="submit">Add contact</Button>
    </form>
  );
};
