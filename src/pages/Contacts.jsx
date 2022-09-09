import React from 'react';
import { ContactForm, Filter, ContactList } from 'components';
import { useGetContactsQuery } from 'redux/contacts/contacts-slice';

function Contacts() {
  const { data: contacts = [] } = useGetContactsQuery();
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      {contacts.length > 0 && <h2>Contacts</h2>}
      {contacts.length > 1 && <Filter />}
      <ContactList />
    </>
  );
}

export default Contacts;
