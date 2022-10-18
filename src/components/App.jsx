import { useState } from 'react'
import { Layout } from "components/Layout/Layout";
import { AppBar } from "components/AppBar/AppBar";
import { ContactList } from "components/ContactList/ContactList";
import Modal from "./Modal/Modal";


export const App = () => {

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
