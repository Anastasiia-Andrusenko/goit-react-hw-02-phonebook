
import { Component } from "react";
import '../../src/index.css';
import { ContactList } from "./ContactList/ContactList";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";


export class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    filter: '',
  }

  onAddContact = (obj) => {
    const equalName = this.state.contacts.find(
      element => element.name.toLowerCase() === obj.name.toLowerCase()
    );
    if (equalName) return alert(`${equalName.name} is already in contacts.`)
    this.setState(prevState => ({
      contacts: [...prevState.contacts, obj],
    }))
  }

  filteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedValue = filter.toLowerCase();

    const filteredContactsArray = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedValue));
    // console.log(filteredContactsArray);
    return filteredContactsArray;
  }

  onFilterInput = (value) => {
    this.setState({ filter: value });
  }

  deleteContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }));
  }


  render() {
    const contacts = this.filteredContacts();
    // console.log(contacts);
    return <div className="container">
      <div className="in_container">
      <div>
        <h2 className="title">Phonebook</h2>
          <ContactForm onAddContact={this.onAddContact}/>
          <Filter onFilterInput={this.onFilterInput} />
      </div>
      <div>
        <h2 className="title">Contacts</h2>
          <ContactList contacts={contacts} deleteContact={this.deleteContact} />
        </div>
      </div>
      <div className="circle"></div>
    </div>
  }
}

