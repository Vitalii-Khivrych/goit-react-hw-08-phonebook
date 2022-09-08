import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useLocalStorage } from 'hooks/useLocalStorage';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'redux/contacts/contactsSlice';
import optionsNotify from 'helpers/toastConfig';

import {
  SearchForm,
  SearchLabel,
  SearchInput,
  SearchBtn,
} from './ContactForm.styled';
import { LoaderCreate } from 'components';

export function ContactForm() {
  const [name, setName] = useLocalStorage('name', '');
  const [number, setNumber] = useLocalStorage('number', '');

  const { data: contacts = [] } = useGetContactsQuery();
  const [addContact, { error, isLoading }] = useAddContactMutation();

  const handleSubmit = evt => {
    evt.preventDefault();

    const isFindCopyContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isFindCopyContact) {
      toast.info(`${name} is already in contacts`, optionsNotify);
      return;
    }

    const newContact = { name, number };
    addContact(newContact);

    toast.success(`Contact ${name} add.`, optionsNotify);
    reset();

    error && toast.warning(`${error}`, optionsNotify);
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchLabel>
        Name
        <SearchInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={evt => setName(evt.target.value)}
        />
      </SearchLabel>
      <SearchLabel>
        Number
        <SearchInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={evt => setNumber(evt.target.value)}
        />
      </SearchLabel>

      <SearchBtn type="submit" disabled={isLoading}>
        {isLoading ? <LoaderCreate /> : 'Add contact'}
      </SearchBtn>
    </SearchForm>
  );
}
