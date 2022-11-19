function setButton(buttonText) {
  const buttonEl = document.createElement('button');
  buttonEl.textContent = buttonText;
  // console.log(buttonEl);
  const body = document.querySelector('body');
  body.innerHTML = buttonEl.outerHTML;
}
