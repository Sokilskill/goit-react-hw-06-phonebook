import { createAction } from '@reduxjs/toolkit';

export const increment = createAction('myValue/increment');
export const decrement = createAction('myValue/decrement');

export const addContacts = createAction('contacts/add');
export const deleteContacts = createAction('contacts/delete');
