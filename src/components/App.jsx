import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import MainTitle from './MainTitle/MainTitle';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selector';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <div className="container">
      <MainTitle title="Phonebook" />
      <ContactForm />
      <MainTitle title="Contacts" />
      <Filter />
      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <>
          <p>You don't have any saved contacts</p>
          <p>Ви не маєте збережених контактів</p>
          {/* <p>{timer}</p> */}
        </>
      )}
    </div>
  );
};
