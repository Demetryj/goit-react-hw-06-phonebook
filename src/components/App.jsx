// import { useEffect, useRef } from 'react';
import { Forma } from 'components/Forma/Forma';
import { ListContacts } from 'components/ListContacts/ListContacts';
import { Filter } from 'components/Filter/Filter';
import { Box } from './Box';
import { Title, TitleContacts } from './Titles/TitlesStyled';

// const LS_KEY = 'contacts';

export const App = () => {
  // const isFirstRender = useRef(true);

  // useEffect(() => {
  //   if (isFirstRender.current) {
  //     isFirstRender.current = false;
  //     return;
  //   }

  //   localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <Box p={[4]}>
      <Title>Phonebook</Title>
      <Forma />

      <TitleContacts>Contacts</TitleContacts>
      <Filter />
      <ListContacts />
    </Box>
  );
};
