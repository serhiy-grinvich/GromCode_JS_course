import { getItem, setItem } from './storage.js';

const listElem = document.querySelector('.list');

export const renderTasks = () => {
  const tasks = getItem('tasksList') || [];
  listElem.innerHTML = '';
  const tasksElems = tasks
    // .sort((a, b) => a.done - b.done)(
    .sort(
      (a, b) =>
        a.done - b.done ||
        new Date(b.finishDate) - new Date(a.finishDate) ||
        new Date(b.createDate) - new Date(a.createDate),
    )
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.dataset.taskId = id;
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      //   console.log(tasks);

      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};
