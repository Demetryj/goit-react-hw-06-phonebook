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
  },
});

export const { addContacts, deleteContacts } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;
