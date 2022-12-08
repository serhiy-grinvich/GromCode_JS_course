import { getItem, setItem } from './storage.js';
import { renderTasks } from './render-list.js';

export const addNewTask = () => {
  const inputElem = document.querySelector('.task-input');
  if (inputElem.value === '') return;
  // listElem.innerHTML = ''; //- лишнее. перенесено в рендер
  const tasks = getItem('tasksList') || [];
  tasks.unshift({
    text: inputElem.value,
    done: false,
    id: tasks.length + 1,
    createDate: new Date().toISOString(),
    finishDate: null,
  });
  setItem('tasksList', tasks);
  renderTasks();
  inputElem.value = '';
};
