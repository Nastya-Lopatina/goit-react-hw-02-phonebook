import React from 'react';
import PropTypes from 'prop-types';

const ContactList = ({contacts,onDeleteContact}) => (
    <ul>
        {contacts.map(({name,number,id}) => (
        <li key = {id}>
            {name + ':' + number}
            
            {<button
                type = 'button'
                name = 'delete'
                onClick = {() => onDeleteContact(id) }>
                    Удалить
            </button>
            }
           
        </li>
          
         ))}
     
    </ul>
)

ContactList.propTypes = {
    onDeleteContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        })
    )
}

export default ContactList;