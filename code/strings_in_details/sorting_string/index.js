function sortContacts(contactArr, direction) {
  if (!Array.isArray(contactArr)) return null;
  // eslint-disable-next-line no-param-reassign
  if (direction === undefined) direction = true;
  return contactArr.sort((a, b) => {
    return direction ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
  });
}

// 1 .if not array retern null
// 2. default direction if sort
// 3.sort the array by  alphabet

// test data
// const contList = [
//   { name: 'Kolya', phoneNumber: '111-11-111' },
//   { name: 'Clava', phoneNumber: '111-11-111' },
//   { name: 'Manya', phoneNumber: '111-11-111' },
//   { name: 'Zelenskii', phoneNumber: '111-11-111' },
//   { name: 'Boba', phoneNumber: '111-11-111' },
//   { name: 'Igor', phoneNumber: '111-11-111' },
//   { name: 'Don', phoneNumber: '111-11-111' },
//   { name: 'Alex', phoneNumber: '111-11-111' },
//   { name: 'X-zibit', phoneNumber: '111-11-111' },
//   { name: 'Yunga', phoneNumber: '111-11-111' },
// ];
