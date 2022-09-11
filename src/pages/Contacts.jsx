import React from 'react';
import {
  ContactForm,
  Filter,
  ContactList,
  Container,
  Wrapper,
  Title,
  ContactTitle,
  Text,
} from 'components';
import { useGetContactsQuery } from 'redux/contacts/contacts-slice';

function Contacts() {
  const { data: contacts = [] } = useGetContactsQuery();

  return (
    <>
      <Title>Your phonebook</Title>
      <Container>
        <ContactForm />

        <Wrapper textPosition={contacts.length > 0}>
          {contacts.length > 0 && <ContactTitle>Contacts</ContactTitle>}
          {contacts.length > 1 && <Filter />}
          {contacts.length > 0 ? (
            <ContactList />
          ) : (
            <Text>There is no contact in your contacts list!</Text>
          )}
        </Wrapper>
      </Container>
    </>
  );
}

export default Contacts;
