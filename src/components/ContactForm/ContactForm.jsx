import React, { Component } from "react";
import {nanoid} from "nanoid"

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
        id: '',
    }

    handleChange = evt => {
        const { name, value } = evt.target;
        this.setState({ [name]: value, id: nanoid() });
    };

    handleSubmit = evt => {

        evt.preventDefault();
        this.props.onSubmit(this.state)
        this.reset();
    };

    reset = () => {
        this.setState({
            name: '',
            number: ''
        });
    };


    render() {
            const { name, number } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor={nanoid()}>Name
                    <input
                        type="text"
                        name="name"
                        value={name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        onChange={this.handleChange}
                        required
                        />
                </label>
                <label htmlFor={nanoid()}>Number
                    <input
                        type="tel"
                        name="number"
                        value={number}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        onChange={this.handleChange}
                        required
                        />
                </label>

                <button type="submit">Add contact</button>

            </form>
        )

    }

}

export default ContactForm