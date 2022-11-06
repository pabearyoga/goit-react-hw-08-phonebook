import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from 'components/ContactList/ContactList';
import Modal from '../components/Modal/Modal';
import { fetchContacts } from 'redux/operations';
import { getError, getIsLoading } from 'redux/selectors';
import css from '../components/ContactList/ContactList.module.css';

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      {modal && <Modal onClose={toggleModal} />}
      {isLoading && !error && (
        <p className={css.text}>Request in progress...</p>
      )}
      <ContactList onOpen={toggleModal} />
    </>
  );
}
