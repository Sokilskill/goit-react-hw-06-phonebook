import React from 'react';
import PropTypes from 'prop-types';
import css from './MainTitle.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  increment,
  decrement,
  addContacts,
  deleteContacts,
} from 'redux/actions';

const MainTitle = ({ title }) => {
  const dispatch = useDispatch();

  const value = useSelector(state => state.myValue);
  console.log('value', value);
  const contactsValue = useSelector(state => state.contacts);

  console.log(' contactsValue', contactsValue);

  return (
    <>
      <h2 className={css.title}>{title}</h2>;
      <button onClick={() => dispatch(increment(10))}>
        MyAction Increment
      </button>
      <button onClick={() => dispatch(decrement(10))}>
        MyAction Decrement
      </button>
      <button
        onClick={() =>
          dispatch(
            addContacts([
              { id: '444', name: 'Renni', phone: '099 - 876 - 54 ' },
              { id: '555', name: 'Jane', phone: '099 - 876 - 54 ' },
            ])
          )
        }
      >
        addContacts
      </button>
      <button onClick={() => dispatch(deleteContacts('555'))}>
        Delete Contact
      </button>
    </>
  );
};

MainTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MainTitle;
