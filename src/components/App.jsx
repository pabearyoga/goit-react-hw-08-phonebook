import React, { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import  Filter  from "./Filter/Filter";

class App extends Component {

    state = {
        contacts: [],
        filter: '',
    }

    formSubmitHandler = newContact => {
        this.setState(prevState => ({
            contacts: [...prevState.contacts, newContact],
        }));
    }

    handleDelete = contactId => {
        this.setState(ps => (
            {
            contacts: ps.contacts.filter(contact => contact.id !== contactId),
        }
        ))
    }

    changeFilter = e => {
        this.setState({filter: e.currentTarget.value})
    }

    getFiltredContacts = () => {
        const { filter, contacts } = this.state;

        const normalizeFilter = filter.toLowerCase();

        return contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter))

    }

    render() {

        const filtredContacts = this.getFiltredContacts()

        return (
            <div>
                <ContactForm onSubmit={this.formSubmitHandler} />
                <Filter onChange={this.changeFilter} value={this.state.filter} />
                <ContactList contacts={filtredContacts} onDelete={this.handleDelete}  />
            </div>
        );
    }
    
}

export default App