"use strict";

const contacts = {
  contactsInfo: [
    {
      name: "Ann",
      number: "+123242678",
      email: "ann@gmail.com",
    },
    {
      name: "Kate",
      number: "+146445789",
      email: "kate@gmail.com",
    },
    {
      name: "Alex",
      number: "+198765443",
      email: "alex@gmail.com",
    },
    {
      name: "Kate",
      number: "+146445789",
      email: "katy@gmail.com",
    },
  ],

  findContact(name) {
    const contact = this.contactsInfo.filter(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    return contact;
  },

  addNewContact(name, number, email) {
    this.contactsInfo.push({
      name,
      number,
      email,
    });

    return `Contact ${name} was successfully saved`;
  },
};

console.log(contacts.findContact("kate"));
console.log(contacts.addNewContact("Jack", "+145678934", "Jack@gmail.com"));
console.log(contacts.contactsInfo);
