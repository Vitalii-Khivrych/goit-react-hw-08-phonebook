import PropTypes from 'prop-types';

import { useDeleteContactMutation } from 'redux/contacts/contacts-slice';
import { Text, Button, Wrapper } from './ContactItem.styled';
import { LoaderDelete } from 'components';

export function ContactItem({ name, number, id, position }) {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <>
      <Wrapper>
        <Text>
          <span>{position}. </span>
          {name}:
        </Text>

        <Text>{number}</Text>
      </Wrapper>

      {/* <Button
        type="button"
        disabled={isLoading}
        onClick={() => deleteContact(id)}
      >
        {isLoading ? <LoaderDelete /> : 'Edit'}
      </Button> */}
      <Button
        type="button"
        disabled={isLoading}
        onClick={() => deleteContact(id)}
      >
        {isLoading ? <LoaderDelete /> : 'Delete'}
      </Button>
    </>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
