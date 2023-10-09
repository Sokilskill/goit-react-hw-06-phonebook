import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import MainTitle from './MainTitle/MainTitle';

export const App = () => {
  // const CONTACTS = JSON.parse(localStorage.getItem('persist:root'));
  // console.log('CONTACTS', CONTACTS);

  // const [isInitializedTemplate, setIsInitializedTemplate] = useState(
  //   CONTACTS && CONTACTS.length > 0 ? true : false
  // );
  // const [timer, setTimer] = useState(0);

  // useEffect(() => {
  //   //якщо пустий локал сторедж => тоді задати таймер 3 (використовується для відображення таймеру зворотнього відліку на сторінці),
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

  // useEffect(() => {
  //   if (timer > 0) {
  //     const interval = setInterval(() => {
  //       setTimer(prevTimer => prevTimer - 1);
  //     }, 1000);

  //     return () => clearInterval(interval);
  //   }
  // }, [timer]);

  // useEffect(() => {
  //   window.localStorage.setItem('CONTACTS', JSON.stringify(contacts));
  // }, [contacts]);

  // addNewContacts не залишив тут форма може бути перевикористана

  // const addNewContacts = (name, number) => {
  //   const noClearInputForm = true;
  //   const similarElement = element => element.name === name;
  //   if (contacts.find(similarElement)) {
  //     alert(name + ' is already in contacts.');
  //     return noClearInputForm;
  //   }
  //   dispatch(addContact({ name, number }));
  // };

  return (
    <div className="container">
      <MainTitle title="Phonebook" />
      <ContactForm />
      <MainTitle title="Contacts" />
      <Filter />
      {true ? (
        <ContactList />
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
          {/* <p>{timer}</p> */}
        </>
      )}
    </div>
  );
};
