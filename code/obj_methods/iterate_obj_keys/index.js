'use strict';

/**
 * @param {object} obj
 * @return {undefined}
 */
function getKeys(obj) {
  Object.keys(obj).forEach(elem => {
    console.log(elem);
  });
}

// examples
getKeys({ name: 'Denis', city: 'Warsaw', englishLevel: 'A1' });
// prints ===>
// name
// city
// englishLevel
