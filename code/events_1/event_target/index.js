const [btn1, btn2] = [...document.querySelectorAll('.btn')];
function handleClick(event) {
  console.log(event.target.textContent);
}
btn1.addEventListener('click', handleClick);
btn2.addEventListener('click', handleClick);
