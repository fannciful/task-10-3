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
        if (!name?.trim()) {
            alert('Name is required and cannot be empty.');
            return;
        }
        if (!number?.trim() || !email?.trim()) {
            alert('Both number and email are required.');
            return;
        }
        this.contacts.push({name, number, email});
        // localStorage.setItem('contacts', JSON.stringify(this.contacts)); // Removed as per requirement
    }
};

function searchContact() {
    const action = prompt('Would you like to find contact or add new one? (Type "find" or "add")');

    if (!action?.trim()) {
        alert('Operation cancelled or invalid input.');
        return;
    }

    switch (action.trim().toLowerCase()) {
        case 'find': {
            const name = prompt('Enter contact name: ');
            if (!name?.trim()) {
                alert('Name is required to find a contact.');
                return;
            }
            const contact = contactBook.findContactName(name);

            if (contact) {
                alert(`Your contact was successfully found:\nName: ${contact.name}\nNumber: ${contact.number}\nEmail: ${contact.email}`);
            } else {
                alert("You don't have this contact name!");
            }
            break;
        }
        case 'add': {
            const newName = prompt('Enter the name: ');
            const newNumber = prompt('Enter a number: ');
            const newEmail = prompt('Enter an email: ');

            if (!newName?.trim() || !newNumber?.trim() || !newEmail?.trim()) {
                alert('All fields are required to add a new contact.');
                return;
            }

            contactBook.addNewContact(newName, newNumber, newEmail);
            alert('Your contact was added successfully!');
            break;
        }
        default:
            alert('Invalid operation. Please type "find" to search a contact or "add" to add a new contact');
    }
}

searchContact();
