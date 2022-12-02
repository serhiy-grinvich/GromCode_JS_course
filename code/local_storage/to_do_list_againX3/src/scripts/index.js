import { todoListInitHandlers } from './todo-init.js';
import { renderTasks } from './render-list.js';

const onPageLoaded = () => {
  todoListInitHandlers();
  renderTasks();
};
document.addEventListener('DOMContentLoaded', onPageLoaded);

const onStorageChange = event => {
  if (event.key === 'tasksList') {
    renderTasks();
  }
};
window.addEventListener('storage', onStorageChange);
