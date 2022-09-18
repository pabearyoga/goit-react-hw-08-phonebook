import React, { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import css from "./App.module.css"

class App extends Component {

    state = {
        contacts: [],
        filter: '',
    }

    formSubmitHandler = newContact => {
        if (this.state.contacts.some(value => value.name === newContact.name)) {
            alert(`${newContact.name} is already in contacts`)
        } else {
            this.setState(prevState => ({
            contacts: [...prevState.contacts, newContact],
            }));
        }
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
            <div className={css.main}>
                <h1 className={css.title}>Phonebook</h1>
                <ContactForm onSubmit={this.formSubmitHandler} />
                <h2 className={css.upperTitle}>Contacts</h2>
                <Filter onChange={this.changeFilter} value={this.state.filter} />
                <ContactList contacts={filtredContacts} onDelete={this.handleDelete}  />
            </div>
        );
    }
    
}

export default App