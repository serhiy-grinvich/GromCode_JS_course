const tasks = [
  { text: 'Buy milk', done: false, id: 1, createDate: Date.now(), finishDate: Date.now() },
  {
    text: 'Pick up Tom from airport',
    done: false,
    id: 2,
    createDate: Date.now(),
    finishDate: Date.now(),
  },
  { text: 'Visit party', done: false, id: 3, createDate: Date.now(), finishDate: Date.now() },
  { text: 'Visit doctor', done: true, id: 4, createDate: Date.now(), finishDate: Date.now() },
  { text: 'Buy meat', done: true, id: 5, createDate: Date.now(), finishDate: Date.now() },
];

const listElem = document.querySelector('.list');

const renderTasks = tasksList => {
  listElem.innerHTML = '';
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done || b.finishDate - a.finishDate)
    // .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }, index) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.dataset.taskId = id;
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      } else {
        tasks[index].finishDate = null;
      }

      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);
//
const createTaskBtn = document.querySelector('.create-task-btn');
const inputElem = document.querySelector('.task-input');
//
const addNewTask = () => {
  if (inputElem.value === '') return;
  // listElem.innerHTML = ''; //- лишнее. перенесено в рендер
  tasks.unshift({
    text: inputElem.value,
    done: false,
    id: tasks.length + 1,
    createDate: Date.now(),
    finishDate: null,
  });
  renderTasks(tasks);
  inputElem.value = '';
};
createTaskBtn.addEventListener('click', addNewTask);

//
const onCheckboxChange = event => {
  if (!event.target.dataset.taskId) return;
  // const changedTask = tasks.find(
  //   ({ text }) => text === event.target.closest('.list__item').textContent,
  // );
  const changedTask = tasks.find(({ id }) => id == event.target.dataset.taskId);
  changedTask.done = event.target.checked;
  changedTask.finishDate = changedTask.done ? new Date() : null;
  // listElem.innerHTML = ''; //- лишнее. перенесено в рендер
  renderTasks(tasks);
};
listElem.addEventListener('click', onCheckboxChange);

// put your code here
// algo
// add listener to creteBtn which:
// - get input values
// - push new task to tasksArr
// - update  render call
// do checkbox interactive
// - set id for each checkbox
// - add listener for list of tasks which:
// - - find dom element by id
// - - find this element by name in array of tasks
// - - change status of arr elem
// - render update list
