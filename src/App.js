import React, { Component } from "react";
import { nanoid } from "nanoid";
import "./App.css";

class App extends Component {
  state = {
    contacts: [    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    name: "",
    number: "",
    filter: ""
  };

  handleChange = (e) => {
    const { name, value} = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState((prev) => ({
      contacts: [
        ...prev.contacts,
        { name: this.state.name, number: this.state.number, id: nanoid() },
      ],
    }));
    console.log(this.state.contacts);
  };

  deleteItem = (id) =>
    this.setState((prev) => ({
      contacts: prev.contacts.filter((el) => el.id !== id),
    }));

  changeFilter = (e) => {
   console.log(e.currentTarget.value);
    this.setState({ filter: e.currentTarget.value });
 };


  render() {
    const { filter } = this.state;
    return (
      <>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            <span>Name</span>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleChange}
            />
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.handleChange}
            />
          </label>
          <button>Add contact</button>
        </form>
        <h2>Contacts</h2>
         <input
              type="text"
              name="filter"
              value={this.state.filter}
              onChange={this.changeFilter}
            />
        <ul>
          {this.state.contacts.map(({ name, number, id }) => (
            <li key={id}>
              <p>
                {name}: {number}
              </p>
              <button type="button" onClick={(e) => this.deleteItem(id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
