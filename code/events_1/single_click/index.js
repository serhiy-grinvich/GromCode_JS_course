const btn = document.querySelector('.single-use-btn');
function clicked() {
  console.log('clicked');
  btn.removeEventListener('click', clicked);
}
btn.addEventListener('click', clicked);
