import React, { Component } from "react";
import { nanoid } from "nanoid"
import css from "./ContactForm.module.css"


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

    loginInputId = nanoid();

    render() {
        const { name, number } = this.state;

        return (
            <form onSubmit={this.handleSubmit} className={css.contactForm}>
                <label htmlFor={this.loginInputId} className={css.contactLabel}>Name:
                    <input
                        type="text"
                        className={css.contactInput}
                        name="name"
                        id={this.loginInputId}
                        value={name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        onChange={this.handleChange}
                        required
                        />
                </label>
                <label htmlFor={this.loginInputId} className={css.contactLabel}>Number:
                    <input
                        type="tel"
                        className={css.contactInput}
                        name="number"
                        id={this.loginInputId}
                        value={number}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        onChange={this.handleChange}
                        required
                        />
                </label>

                <button type="submit" className={css.formBtn}>Add contact</button>

            </form>
        )

    }

}

export default ContactForm