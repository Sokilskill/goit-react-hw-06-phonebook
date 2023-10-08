import { createSlice, nanoid } from '@reduxjs/toolkit';
import contactsTemplate from '../../data/contactsTemplate.json';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [...contactsTemplate],
  reducers: {
    addContact(state, { payload }) {
      return [{ id: nanoid(), ...payload }, ...state];
    },
    deleteContact(state, { payload }) {
      return state.filter(contact => contact.id !== payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
