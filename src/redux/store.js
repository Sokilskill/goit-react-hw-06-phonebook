import { configureStore } from '@reduxjs/toolkit';
import { myReducer, contactsRed } from './reducer';

export const store = configureStore({
  reducer: {
    myValue: myReducer,
    contacts: contactsRed,
  },
});
