function finishForm() {
  const loginIn = document.createElement('input');
  loginIn.setAttribute('name', 'login');
  loginIn.setAttribute('type', 'text');
  const pass = document.querySelector('input[name=password]');
  pass.setAttribute('type', 'password');
  pass.before(loginIn);
}
