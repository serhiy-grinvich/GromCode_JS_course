const getPeople = obj => {
  return Object.values(obj)
    .flat()
    .map(el => Object.values(el))
    .flat(Infinity);
};
// const room = {
//   room1: [{ name: 'andrey' }, { name: 'dima' }],
//   room2: [{ name: 'igor', imya: 'valera' }, { box: 'anton' }],
// };
