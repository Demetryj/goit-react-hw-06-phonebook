import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContacts } from 'redux/contactsSlice';
import { Text, Button, Circle } from './ElementListContactsStyled';

export const ElementListContacts = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContacts({ id: id }));
  };

  return (
    <>
      <Circle></Circle>
      <Text>
        {name}: {number}
      </Text>
      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
    </>
  );
};

ElementListContacts.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
