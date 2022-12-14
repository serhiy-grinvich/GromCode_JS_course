'use strict';

/**
 * @param {string} userId
 * @return {promise}
 */
const requestUserData = userId => {
  return new Promise((resolve, reject) => {
    const userObj = {
      name: 'John',
      age: 17,
      userId,
      email: `${userId}@example.com`,
    };
    if (userId === 'broken') {
      setTimeout(() => reject(new Error('User not found')), 500);
    } else {
      setTimeout(() => resolve(userObj), 1000);
    }
  });
};

// // test data
// requestUserData('broken')
//   .then(userObj => console.log(userObj))
//   .catch(err => console.log(err));
