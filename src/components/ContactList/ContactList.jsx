import React from 'react';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsSlice';
import { getContacts, getFilter } from 'redux/selector';

const ContactList = () => {
  const dispatch = useDispatch();

  // const { contacts, filter } = useSelector(state => state);

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filterContacts = () => {
    const lowerCaseFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerCaseFilter)
    );
  };
  const contactsList = filterContacts();

  return (
    <ul className={css.list}>
      {contactsList.map(contact => {
        const { id, name, number } = contact;
        return (
          <li className={css.item} key={id}>
            <p>
              {name}: {number}
            </p>

            <button type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
