import { useReducer } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { HomePage } from './components/HomePage';
import { ContactForm } from './components/ContactForm';
import { ContactList } from './components/ContactList';

const initState = JSON.parse(localStorage.getItem('contact')) || [] 

console.log(initState)

function reducer(state, action) {
  let contacts
  switch (action.type) {
    case 'ADD_CONTACT':
      contacts = [...state, action.payload];
      localStorage.setItem('contact', JSON.stringify(contacts));
      return contacts;
    case 'DELETE_CONTACT':
      contacts = state.filter(item => item.id !== action.payload);
      localStorage.setItem('contact', JSON.stringify(contacts));
      return contacts;
    default:
      return state;
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index 
            element={<HomePage state = {state}/>}
          />
          <Route
            path='add-contact'
            element={<ContactForm
              funcAddContact = { (contact) => dispatch({type: 'ADD_CONTACT', payload: contact}) }/>}
          />
          <Route
            path='contacts'
            element={<ContactList state = { state }
              funcDelContact = { (contact) => dispatch({type: 'DELETE_CONTACT', payload: contact}) }/>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
