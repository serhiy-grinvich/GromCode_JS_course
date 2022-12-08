'use strict';

/**
 * @param {string} userId
 * @param {function} callback
 * @return {undefined}
 */

const randomDelay = () => {
  return Math.trunc(Math.random() * (3000 - 1000) + 1000);
};

// const testCallback = (user, error) => {
//   console.log(user ? user : error);
// };

const requestUserData = (userId, callback) => {
  const userObj = {
    userId,
    email: `${userId}@example.com`,
  };
  setTimeout(
    () => (userId === 'broken' ? callback(null, 'Failed to load user data') : callback(userObj)),
    randomDelay(),
  );
};

// algo
// create func which return random delay time
// create user Obj
// run func with delay and valid args.
