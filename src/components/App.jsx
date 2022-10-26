import { useState, useEffect } from 'react'
import { Layout } from "components/Layout/Layout";
import { AppBar } from "components/AppBar/AppBar";
import { ContactList } from "components/ContactList/ContactList";
import Modal from "./Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { getError, getIsLoading } from "redux/selectors";
import css from './ContactList/ContactList.module.css';



export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  const [modal, setModal] = useState(false);

  const toggleModal = () => {
      setModal(!modal)
  };
  
  return (
    <Layout>
      <AppBar onOpen={toggleModal}  />
      {modal && <Modal onClose={toggleModal} />}
      {isLoading && !error && <p className={css.text}>Request in progress...</p>}
      <ContactList />
    </Layout>
  );
};
