import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const currentContacts = await readContacts();
    const newContacts = [...currentContacts];
    newContacts.push(createFakeContact());
    await writeContacts(newContacts);
    console.log(`Generated a contact`);
  } catch (error) {
    console.error('Error generating contacts:', error);
    throw new Error('Could not generate contacts');
  }
};

addOneContact();
