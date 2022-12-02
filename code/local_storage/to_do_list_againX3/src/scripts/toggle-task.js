//
import { getItem, setItem } from './storage.js';
import { renderTasks } from './render-list.js';

export const onCheckboxChange = event => {
  const oldTasks = getItem('tasksList');
  if (!event.target.dataset.taskId) return;
  const newTasks = oldTasks.map(task => {
    if (task.id === Number(event.target.dataset.taskId)) {
      task.done = event.target.checked;
      task.finishDate = task.done ? new Date().toISOString() : null;
      //   debugger;
    }

    return task;
  });
  //   const changedTask = tasks.find(({ id }) => id == event.target.dataset.taskId);
  //   changedTask.done = event.target.checked;
  //   changedTask.finishDate = changedTask.done ? new Date() : null;
  // listElem.innerHTML = ''; //- лишнее. перенесено в рендер
  setItem('tasksList', newTasks);

  renderTasks();
};
