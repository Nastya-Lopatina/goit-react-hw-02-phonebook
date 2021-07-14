import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
      }

handleChange =(e) => {
    const {name,value} = e.target;
    this.setState({[name]: value,})
};

handleSubmit = (e) => {
    e.preventDefault();
    
    this.props.AddContact(this.state);
    this.setState({name: '', number: ''});
};


render(){
    
    return (
        <form onSubmit = {this.handleSubmit}>
            <label>
                Name
               <input
                type = "text"
                name = "name"
                value = {this.state.name}
                onChange = {this.handleChange}
                />
            </label>
            <label>
                Number
               <input
                type = "text"
                name = "number"
                value = {this.state.number}
                onChange = {this.handleChange}
                />
            </label>
            <button  type="submit">
            Добавить контакт
          </button>
        </form>
    )
}

    }

    ContactForm.propTypes = {
        AddContact: PropTypes.func.isRequired,
      };

export default ContactForm;