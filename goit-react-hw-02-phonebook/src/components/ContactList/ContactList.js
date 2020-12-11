import React from 'react';

import propTypes from 'prop-types';

function ContactList({ contacts, onDelete }) {
  console.log(contacts);
  if (contacts.length === 0) {
    return null;
  }
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
          <button type="button" onClick={() => onDelete(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  options: propTypes.arrayOf(propTypes.object),
};

export default ContactList;
