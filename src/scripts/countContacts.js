import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const currentContacts = await readContacts();
    return currentContacts.length;
  } catch (error) {
    console.error('Error counting contacts:', error);
    throw new Error('Could not count contacts');
  }
};

console.log(await countContacts());
