const { v4 } = require('uuid');

// eslint-disable-next-line prefer-const
let contacts = [
  {
    id: v4(),
    name: 'Lucas Santos',
    email: 'lucas@gmail.com',
    phone: '23423434',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'marcos Santos',
    email: 'marcos@gmail.com',
    phone: '23423434',
    category_id: v4(),
  },
];

class ContactRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.id === id));
    });
  }

  findByEmail(email) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.email === email));
    });
  }

  create(contact) {
    return new Promise((resolve) => {
      const newContact = {
        ...contact,
        id: v4(),
      };
      contacts = [...contacts, newContact];

      resolve(newContact);
    });
  }

  update(id, contact) {
    return new Promise((resolve) => {
      let updatedContact = contacts.find((con) => con.id === id);
      updatedContact = {
        ...contact,
        id,
      };

      contacts = contacts.map((con) => (con.id === id ? updatedContact : con));

      resolve(updatedContact);
    });
  }

  deleteById(id) {
    return new Promise((resolve) => {
      resolve((contacts = contacts.filter((contact) => contact.id !== id)));
    });
  }
}

module.exports = new ContactRepository();
