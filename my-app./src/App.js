import React, { Component } from 'react';
import ContactForm from './components/ СontactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import {v4 as uuidv4} from 'uuid';


class App extends Component{
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  addContact = (search) => {
    const searchName = this.state.contacts
    .map((contact) => contact.name)
    .includes(search.name);

    if(searchName) {
      alert (`${search.name} уже есть в контактах`);

    } else if (search.name.length === 0) {
      alert(`Поля обязательны для заполнения!`);

    } else {
      const contact = {
        ...search,
        id: uuidv4(),
            };

      this.setState(({contacts}) => ({
        contacts: [...contacts,contact],
      }));
    }

};

 changeFilter = (filter) => {
this.setState({filter});

};

 getVisibleContacts = () => {
  const {contacts,filter} = this.state;
  return contacts.filter((contacts)=> contacts.name.toLowerCase().includes(filter.toLowerCase())) 
};

 deleteContact = (contactId) =>{
  this.setState(({contacts}) => ({
    contacts: contacts.filter(contact => contact.id !== contactId)
  }))
};

render(){
  const {contacts, filter} = this.state;
  return(
  <div>
      <h1>Phonebook</h1>
      <ContactForm AddContact = {this.addContact}/>

      <h2>Contacts</h2>
      {contacts.length > 1 && (
        <Filter value = {filter} onChange = {this.changeFilter} />
      )}
      {contacts.length > 0 && (
        <ContactList 
        contacts = {this.getVisibleContacts()}
        onDeleteContact = {this.deleteContact}/>
      ) }

  </div>

  )
}

}
export default App;

