import { createSlice } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContacts(state, action) {
      state.push(action.payload);
    },

    deleteContacts(state, action) {
      return state.filter(contact => contact.id !== action.payload.id);
    },
    /* Поветає масив з тими контактами, які мають відмінний id від
  id контакта, який видаляємою.
  Тобно повертає масив з тими контактами які не схожі за id, з тим, 
  який видаляємо. */
  },
});

export const { addContacts, deleteContacts } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;
