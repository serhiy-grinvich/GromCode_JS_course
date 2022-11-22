const [btn1, btn2, btn3] = [...document.querySelectorAll('.pagination__page')];
function handleClick(event) {
  console.log(event.target.dataset.pageNumber);
}
btn1.addEventListener('click', handleClick);
btn2.addEventListener('click', handleClick);
btn3.addEventListener('click', handleClick);
