// import { useState, useEffect } from 'react'
// import { Layout } from "components/Layout/Layout";
// import { AppBar } from "components/AppBar/AppBar";
// import { ContactList } from "components/ContactList/ContactList";
// import Modal from "./Modal/Modal";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchContacts } from "redux/operations";
// import { getError, getIsLoading } from "redux/selectors";
// import css from './ContactList/ContactList.module.css';



// export const App = () => {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(getIsLoading);
//   const error = useSelector(getError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);


//   const [modal, setModal] = useState(false);

//   const toggleModal = () => {
//       setModal(!modal)
//   };
  
//   return (
//     <Layout>
//       <AppBar/>
//       {isLoading && !error && <p className={css.text}>Request in progress...</p>}
//       <ContactList onOpen={toggleModal}/>
//       {modal && <Modal onClose={toggleModal} />}
//     </Layout>

//   );
// };


import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { PrivateRoute } from '../PrivateRoute'
import { RestrictedRoute } from '../RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const TasksPage = lazy(() => import('../pages/Tasks'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contact" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contact" component={<LoginPage />} />
          }
        />
        <Route
          path="/contact"
          element={
            <PrivateRoute redirectTo="/login" component={<TasksPage />} />
          }
        />
      </Route>
    </Routes>
  );
};
