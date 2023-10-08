import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import MainTitle from './MainTitle/MainTitle';
import { addContact } from 'redux/contacts/contactsSlice';

export const App = () => {
  const CONTACTS = JSON.parse(localStorage.getItem('CONTACTS'));

  // const [contacts, setContacts] = useState(CONTACTS ?? []);
  const [isInitializedTemplate, setIsInitializedTemplate] = useState(
    CONTACTS && CONTACTS.length > 0 ? true : false
  );
  const [timer, setTimer] = useState(0);

  const dispatch = useDispatch();
  const contacts = useSelector(({ contacts }) => contacts);
  // console.log('contactsSlice', contacts);

  // useEffect(() => {
  //   //якщо в пустий локал сторедж задати таймер 3 (використовується для відображення таймеру зворотнього відліку на сторінці),
  //   // і запустити setTimout => завантажить шаблон контактів і виведе на екран

  //   if (!isInitializedTemplate) {
  //     setTimer(3);

  //     setTimeout(() => {
  //       // setContacts(contactsTemplate);
  //       dispatch(addContact(...contactsTemplate));
  //       setIsInitializedTemplate(true);
  //     }, 3000);
  //   }
  // }, [dispatch, isInitializedTemplate]);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timer]);

  useEffect(() => {
    window.localStorage.setItem('CONTACTS', JSON.stringify(contacts));
  }, [contacts]);

  const addNewContacts = (name, number) => {
    const showAlert = true;
    const similarElement = element => element.name === name;
    if (contacts.find(similarElement)) {
      alert(name + ' is already in contacts.');
      return showAlert;
    }

    // setContacts(prevState => [{ id: nanoid(), name, number }, ...prevState]);
    dispatch(addContact({ name, number }));
  };

  return (
    <div className="container">
      <MainTitle title="Phonebook" />
      <ContactForm addNewContacts={addNewContacts} />
      <MainTitle title="Contacts" />
      <Filter />
      {true ? (
        <ContactList
        // contacts={filterContacts()}
        // onButtonDelete={handlerButtonDelete}
        />
      ) : (
        <>
          <p>
            You don't have any saved contacts, templates for contacts will be
            loaded
          </p>
          <p>
            Ви не маєте збережених контактів, будуть завантажені шаблони
            контактів
          </p>
          <p>{timer}</p>
        </>
      )}
    </div>
  );
};
