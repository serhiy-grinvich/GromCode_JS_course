import { addNewTask } from './create-task.js';
import { onCheckboxChange } from './toggle-task.js';

export const todoListInitHandlers = () => {
  const createTaskBtn = document.querySelector('.create-task-btn');
  createTaskBtn.addEventListener('click', addNewTask);

  const listElem = document.querySelector('.list');
  listElem.addEventListener('click', onCheckboxChange);
};
