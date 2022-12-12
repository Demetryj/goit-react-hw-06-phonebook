import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    initialContacts: [{ id: '1', name: 'qwe', number: '256352456' }],
  },
  /* при використанні бібліотеки "redux-persist" при записі у Local Storage - записується об'єкт, тому
  потрібно в початковий стан записувати не просто масив, а об'єкт із властивістю,
  значенням якої буде потрібний масивю І при pверненні до стану (частини стану) через
  селектор useSelector(selector) отримаємо об'єкт, із заданою властивісью,
  значенням якоє буде заданий об'єкт, та властивістю "_persist".
  Для отримання значення заданої властивості (об'єкта), потрібно буде звернутися до неї
  після отримання відповіді через селектор. */

  reducers: {
    addContacts(state, action) {
      state.initialContacts.push(action.payload);
    },

    deleteContacts(state, action) {
      state.initialContacts = state.initialContacts.filter(
        contact => contact.id !== action.payload.id
      );
    },
    /* Поветає масив з тими контактами, які мають відмінний id від
  id контакта, який видаляємою.
  Тобно повертає масив з тими контактами які не схожі за id, з тим, 
  який видаляємо. */
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);

export const { addContacts, deleteContacts } = contactSlice.actions;
// export const contactsReducer = contactSlice.reducer;
