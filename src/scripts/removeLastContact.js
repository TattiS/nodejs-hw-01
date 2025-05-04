import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const currentContacts = await readContacts();
    if (currentContacts.length === 0) {
      console.log('No contacts to remove');
      return;
    }
    const newContacts = currentContacts.slice(0, -1);
    await writeContacts(newContacts);
    console.log(`Removed the last contact`);
  } catch (error) {
    console.error('Error removing contacts:', error);
    throw new Error('Could not remove contacts');
  }
};

removeLastContact();
