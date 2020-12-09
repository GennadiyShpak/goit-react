import React, { Component } from 'react';

import ContactList from './ContactList';
import Form from './Form';
import Filter from './Filter';
import contactList from './contactList.json';

class App extends Component {
  state = {
    contacts: contactList,
    filter: '',
  };

  formSubmitHandler = data => {
    const { id, name, number } = data;
    const contact = {
      id,
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  onFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  getFilterName = () => {
    const { filter, contacts } = this.state;
    const normalizedName = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedName),
    );
  };

  render() {
    const { filter } = this.state;
    const {
      formSubmitHandler,
      onFilterChange,
      getFilterName,
      deleteContact,
    } = this;

    const visibleContactName = getFilterName();

    return (
      <>
        <Form onSubmit={formSubmitHandler} />

        <Filter filter={filter} onChange={onFilterChange} />

        <ContactList contacts={visibleContactName} onDelete={deleteContact} />
      </>
    );
  }
}

export default App;
