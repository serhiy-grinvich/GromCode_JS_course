'use strict';

export const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

/**
 * @param {object[]} tasksList
 * @return {undefined}
 */
const renderTasks = tasksList => {
  const listElem = document.querySelector('.list');
  const listItemElements = tasksList.map(({ text, done }) => {
    const listItemEl = document.createElement('li');
    listItemEl.classList.add('list__item');
    if (done) listItemEl.classList.add('list__item_done');
    const checkboxEl = document.createElement('input');
    checkboxEl.setAttribute('type', 'checkbox');
    // if (done) checkboxEl.setAttribute('checked', done);
    checkboxEl.checked = done;
    listItemEl.append(checkboxEl, text);
    // console.log(listItemEl);
    return listItemEl;
  });
  //   console.log(listItemElements);
  listElem.append(...listItemElements);
};

// algo
// itterate array of tascs
// - - create new DOM elem with class
// - - - get text of tasc from obj
// - - - put text to DOM element
// - - do it with done status
// - - - add modifier class on done-true elem

renderTasks(tasks);
