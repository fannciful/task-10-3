'use strict'

const contactBook = {
    
    contacts: [
        {
            name: 'Anna',
            number: '097998141',
            email: 'annaanna@gmail.com'
        },
        {
            name: 'Leo',
            number: '098123432',
            email: 'loenardo12@gmail.com'
        },
        {
            name: 'Leyla',
            number: '097654321',
            email: 'leeeeyla@gmail.com'
        }
    ],

    findContactName: function(name) {
        return this.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
    },

    addNewContact: function(name, number, email) {
        this.contacts.push({name, number, email});
        localStorage.setItem('contacts', JSON.stringify(this.contacts));
    }
};

function searchContact() {
    const action = prompt('Would you like to find contact or add new one? (Type "find" or "add")');

    if (action === null || action.trim() === '') {
        alert('Operation cancelled or invalid input.');
        return;
    }

    if (action === 'find') {
        const name = prompt('Enter contact name: ');
        const contact = contactBook.findContactName(name);

        if (contact) {
            alert(`Your contact was successfully found:\nName: ${contact.name}\nNumber: ${contact.number}\nEmail: ${contact.email}`);
        }
        else {
            alert("You don't have this contact name!");
        }
    }
    else if (action === 'add') {
        const newName = prompt('Enter the name: ');
        const newNumber = prompt('Enter a number');
        const newEmail = prompt('Enter an email');

        contactBook.addNewContact(newName, newNumber, newEmail);
        alert('Your contact was added successfully!');
    }
    else {
        alert('Invalid operation. Please type "find" to search a contact or "add" to add new contact');
    }
}

searchContact();


