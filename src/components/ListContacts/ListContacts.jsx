import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getContacts, getFilterValue } from 'redux/selectors';
import { ElementListContacts } from '../ElementListContacts/ElementListContacts';
import { List, ElementList } from './ListContactsStyled';

export const ListContacts = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilterValue);

  const visibileContacts = useMemo(() => {
    const normalyzeFilter = filterValue.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalyzeFilter)
    );
  }, [contacts, filterValue]);

  return (
    <List>
      {visibileContacts.map(({ name, number, id }) => (
        <ElementList key={id}>
          <ElementListContacts name={name} number={number} id={id} />
        </ElementList>
      ))}
    </List>
  );
};
