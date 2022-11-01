const reverseString = str => {
  if (typeof str !== 'string') return null;
  return str.split('').reverse().join('');
};

// test
// const word = 'ulibok tebe ded m0kar';
