function finishList() {
  const list = document.querySelector('.list');
  const el1 = document.createElement('li');
  el1.textContent = '1';
  list.prepend(el1);
  const el4 = document.createElement('li');
  el4.textContent = '4';
  document.querySelector('.special').before(el4);
  const el6 = document.createElement('li');
  el6.textContent = '6';
  document.querySelector('.special').after(el6);
  const el8 = document.createElement('li');
  el8.textContent = 8;
  list.append(el8);
}
