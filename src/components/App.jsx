import { useState } from 'react'
import { Layout } from "components/Layout/Layout";
import { AppBar } from "components/AppBar/AppBar";
import { ContactList } from "components/ContactList/ContactList";
import Modal from "./Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";
import { getError, getIsLoading } from "redux/selectors";


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
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </Layout>
  );
};
