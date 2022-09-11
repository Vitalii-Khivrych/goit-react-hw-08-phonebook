import { useSelector } from 'react-redux';
import { useMemo } from 'react';

import { ContactItem } from '../ContactItem/ContactItem';
import { useGetContactsQuery } from 'redux/contacts/contacts-slice';
import { getFilter } from 'redux/filter/filter-selectors';
import { List, Item } from './ContactList.styled';

export function ContactList() {
  const { data: contacts } = useGetContactsQuery();
  const filter = useSelector(getFilter);

  const filteredContacts = useMemo(
    () =>
      contacts?.filter(
        ({ name }) => name.toLowerCase().includes(filter.toLowerCase()) ?? []
      ),
    [contacts, filter]
  );

  return (
    <List>
      {contacts &&
        filteredContacts.map(({ id, name, number }, index) => (
          <Item key={id}>
            <ContactItem
              id={id}
              name={name}
              number={number}
              position={index + 1}
            />
          </Item>
        ))}
    </List>
  );
}
