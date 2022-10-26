import { useState, useEffect } from 'react'
import { Layout } from "components/Layout/Layout";
import { AppBar } from "components/AppBar/AppBar";
import { ContactList } from "components/ContactList/ContactList";
import Modal from "./Modal/Modal";
import { useDispatch } from "react-redux";
import { fetchContacts } from "redux/operations";


export const App = () => {
  const dispatch = useDispatch();

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
      <ContactList />
    </Layout>
  );
};
