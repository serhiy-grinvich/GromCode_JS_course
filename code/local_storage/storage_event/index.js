const counterEl = document.querySelector('.counter');
const counterValue = document.querySelector('.counter__value');
//
const onCounterClick = event => {
  if (!event.target.classList.contains('counter__button')) return;
  const { action } = event.target.dataset;
  // console.log(action);
  const oldValue = Number(counterValue.textContent);
  const newValue = action === 'decrease' ? oldValue - 1 : oldValue + 1;
  localStorage.setItem('counterValue', newValue);
  counterValue.textContent = newValue;
};
counterEl.addEventListener('click', onCounterClick);
//
const onStorageChange = event => {
  counterValue.textContent = event.newValue;
};
window.addEventListener('storage', onStorageChange);
//
const onLoadChange = () => {
  counterValue.textContent = localStorage.getItem('counterValue') || 0;
};
document.addEventListener('DOMContentLoaded', onLoadChange);
// algo
// create couner
// add listner for counter
// find target of click
// - - if - decrease
// - - if + increase / counter value
// add count value to localStorage
// sync between pages with 'storage' event
