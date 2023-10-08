import { configureStore } from '@reduxjs/toolkit';
import contactsSliceReducer from './contacts/contactsSlice';
import filterSliceReducer from './filterSlice.js/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSliceReducer,
    filter: filterSliceReducer,
  },
});
