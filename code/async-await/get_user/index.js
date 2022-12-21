'use strict';

const baseUrl = 'https://api.github.com/users';
// export
const fetchUser = async userId => {
  try {
    const response = await fetch(`${baseUrl}/${userId}`);
    if (response.status === 404) return null;
    const userData = await response.json();
    return userData;
  } catch (err) {
    throw new Error('Failed to get user data');
  }
};
