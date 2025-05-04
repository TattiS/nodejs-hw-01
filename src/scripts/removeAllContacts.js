import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    const currentContacts = await readContacts();
    if (currentContacts.length === 0) {
      console.log('No contacts to remove');
      return;
    }
    const newContacts = [];
    await writeContacts(newContacts);
    console.log(`Removed all contacts`);
  } catch (error) {
    console.error('Error removing contacts:', error);
    throw new Error('Could not remove contacts');
  }
};

removeAllContacts();
