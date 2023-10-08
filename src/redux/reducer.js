import { createReducer } from '@reduxjs/toolkit';
import { addContacts, decrement, increment, deleteContacts } from './actions';

export const myReducer = createReducer(10, {
  [increment]: (state, action) => state + action.payload,
  [decrement]: (state, action) => state - action.payload,
});

export const contactsRed = createReducer(
  [{ id: '3333', name: 'Rain', phone: '123 - 45 - 67' }],
  {
    [addContacts]: (state, action) => [...state, ...action.payload],
    [deleteContacts]: (state, action) =>
      state.filter(contact => contact.id !== action.payload),
  }
);
