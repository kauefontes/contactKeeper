import { useReducer } from 'react'
import contactReducer from './ContactReducer'
import uuid from 'uuid'
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types'
import ContactContext from './ContactContext'

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Jill Johnson',
        email: 'jill@gmail.com',
        phone: '111-111-1111',
        type: 'personal',
      },
      {
        id: 2,
        name: 'Sara Watson',
        email: 'sara@gmail.com',
        phone: '222-222-2222',
        type: 'personal',
      },
      {
        id: 3,
        name: 'Harry White',
        email: 'harry@gmail.com',
        phone: '333-333-3333',
        type: 'professional',
      },
    ],
  }

  const [state, dispatch] = useReducer(contactReducer, initialState)

  //add contacts

  //delete contact

  // set current contact

  //clear current contact

  // update contact

  //filter contact

  // clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  )
}

export default ContactState
