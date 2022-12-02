// export const tasks = {
//   tasksList: [
//     { text: 'Buy milk', done: false, id: 1, createDate: Date.now() },
//     {
//       text: 'Pick up Tom from airport',
//       done: false,
//       id: 2,
//       createDate: Date.now(),
//     },
//     { text: 'Visit party', done: false, id: 3, createDate: Date.now() },
//     { text: 'Visit doctor', done: false, id: 4, createDate: Date.now() },
//     { text: 'Buy meat', done: false, id: 5, createDate: Date.now() },
//   ],
// };
// localStorage.setItem('tasksList', JSON.stringify(tasks.tasksList));
export const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
  //   Object.assign(tasks, { [key]: value });
  //   tasks = { ...tasks, [key]: value };
};
export const getItem = key => {
  return JSON.parse(localStorage.getItem(key));
};
