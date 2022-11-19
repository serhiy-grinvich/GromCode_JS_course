function squaredNumbers() {
  const arr = Array.from(document.querySelectorAll('.number')).map(el => {
    el.dataset.squaredNumber = el.dataset.number ** 2;
    return el;
  });
  // const list = document.querySelector('.list');
}
