import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import { Layout } from 'components';

const Home = lazy(() => import('../pages/Home'));
const SignIn = lazy(() => import('../pages/SignIn'));
const Register = lazy(() => import('../pages/Register'));
const Contacts = lazy(() => import('../pages/Contacts'));
const NotFound = lazy(() => import('../pages/NotFound'));

// import { ToastContainer } from 'react-toastify';
// import { ContactForm, Filter, ContactList } from 'components';
// import { useGetContactsQuery } from 'redux/contacts/contactsSlice';

export function App() {
  // const { data: contacts = [] } = useGetContactsQuery();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<SignIn />} />
        <Route path="contacts" element={<Contacts />} />
        {/* <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} /> */}
        {/* </Route> */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

// {
/* <>
      <h1>Phonebook</h1>
      <ContactForm />
      {contacts.length > 0 && <h2>Contacts</h2>}
      {contacts.length > 1 && <Filter />}
      <ContactList />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={'colored'}
      />
    </> */
// }
