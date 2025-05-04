import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    const fileContent = JSON.stringify(updatedContacts, null, 2);
    await fs.writeFile(PATH_DB, fileContent, 'utf-8');
  } catch (error) {
    console.error('Error writing contacts:', error);
    throw new Error('Could not write contacts');
  }
};
