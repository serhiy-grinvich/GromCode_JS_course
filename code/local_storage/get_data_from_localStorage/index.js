const getLocalStorageData = () => {
  return Object.entries(localStorage).reduce((acc, [key, value]) => {
    let newValue;
    try {
      newValue = JSON.parse(value);
    } catch (err) {
      newValue = value;
    }
    return { ...acc, [key]: newValue };
  }, {});
};

// data tests
// localStorage.setItem(
//   'obj',
//   JSON.stringify({
//     name: 'tommy',
//     age: 17,
//   }),
// );
// localStorage.setItem('num', 18);
// localStorage.setItem('str', JSON.stringify('number '));
// localStorage.setItem('bool', true);

// localStorage.setItem('nullVariable', null);
