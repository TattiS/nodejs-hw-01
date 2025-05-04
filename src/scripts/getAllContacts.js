import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const currentContacts = await readContacts();
    return currentContacts;
  } catch (error) {
    console.error('Error getting contacts:', error);
    throw new Error('Could not get contacts');
  }
};

console.log(await getAllContacts());
