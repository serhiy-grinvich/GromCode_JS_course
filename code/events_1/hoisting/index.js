// algo
// add event listner for all rectangle
// - - find the elements by class
// - - create function which check target tag and create new span
// - - add 2 listeners for diving and for hoisting for each el
// create clear func & add it to btn
// - - add listener to button which:
// - - set text content into result field to ''
// create attach handlers func & add it to btn
// create remove handlers func & add it to btn

const eventsList = document.querySelector('.events-list');

const divEl = document.querySelector('.rect_div');
const pEl = document.querySelector('.rect_p');
const spanEl = document.querySelector('.rect_span');

function logTarget(text, color) {
  eventsList.innerHTML += `<span style="color: ${color} ; margin-left: 8px">${text}</span>`;
}
const greenDiv = logTarget.bind(null, 'DIV', 'green');
const greenP = logTarget.bind(null, 'P', 'green');
const greenSpan = logTarget.bind(null, 'SPAN', 'green');

const greyDiv = logTarget.bind(null, 'DIV', 'grey');
const greyP = logTarget.bind(null, 'P', 'grey');
const greySpan = logTarget.bind(null, 'SPAN', 'grey');

divEl.addEventListener('click', greenDiv);
divEl.addEventListener('click', greyDiv, true);

pEl.addEventListener('click', greenP);
pEl.addEventListener('click', greyP, true);

spanEl.addEventListener('click', greenSpan);
spanEl.addEventListener('click', greySpan, true);

function clear() {
  eventsList.innerHTML = '';
}
const clearBttn = document.querySelector('.clear-btn');
clearBttn.addEventListener('click', clear);

//
function attachHandlers() {
  divEl.addEventListener('click', greenDiv);
  divEl.addEventListener('click', greyDiv, true);

  pEl.addEventListener('click', greenP);
  pEl.addEventListener('click', greyP, true);

  spanEl.addEventListener('click', greenSpan);
  spanEl.addEventListener('click', greySpan, true);
}
const attachBttn = document.querySelector('.attach-handlers-btn');
attachBttn.addEventListener('click', attachHandlers);
//
function removeHandlers() {
  divEl.removeEventListener('click', greenDiv);
  divEl.removeEventListener('click', greyDiv, true);

  pEl.removeEventListener('click', greenP);
  pEl.removeEventListener('click', greyP, true);

  spanEl.removeEventListener('click', greenSpan);
  spanEl.removeEventListener('click', greySpan, true);
}
const removeBttn = document.querySelector('.remove-handlers-btn');
removeBttn.addEventListener('click', removeHandlers);
