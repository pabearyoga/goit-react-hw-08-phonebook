import { useSelector } from 'react-redux';
import { Contact } from 'components/Contact/Contact';
import { getContacts, getStatusFilter } from 'redux/selectors';
import { statusFilters } from 'redux/constants';
import css from './ContactList.module.css';

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const statusFilter = useSelector(getStatusFilter);
  const visibleTasks = getVisibleTasks(contacts, statusFilter);

  return (
    <ul className={css.list}>
      {visibleTasks.map(contact => (
        <li className={css.listItem} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};
