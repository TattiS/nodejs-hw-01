import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const currentContacts = await readContacts();
    const newContacts = [...currentContacts];
    for (let index = 0; index < number; index++) {
      newContacts.push(createFakeContact());
    }
    await writeContacts(newContacts);
    console.log(`Generated ${number} contacts`);
  } catch (error) {
    console.error('Error generating contacts:', error);
    throw new Error('Could not generate contacts');
  }
};

generateContacts(5);
