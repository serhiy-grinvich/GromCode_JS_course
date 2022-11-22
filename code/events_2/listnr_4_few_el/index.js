// algo
// create dom elem of inputs &  submit btn
// check validation of inputs
// - - create validator
// - - - create error if input not required
// - - - create error if input not mail
// - -  create error message in validator from this ^^^
// alert obj of login

const mailInputElem = document.querySelector('#email');
const passwordInputElem = document.querySelector('#password');
const submitBtnElem = document.querySelector('.submit-button');
const emailErrorElem = document.querySelector('.error-text_email');
const passwordErrorElem = document.querySelector('.error-text_password');
function isEmail(value) {
  return value.includes('@') ? undefined : 'Should be an email';
}
function isRequired(value) {
  return value ? undefined : 'Required';
}
const validators = {
  email: [isRequired, isEmail],
  password: [isRequired],
};
function errorMessageCreater(inputField, value) {
  return validators[inputField]
    .map(validation => validation(value))
    .filter(errorText => errorText)
    .join(', ');
}

function onEmailChange(event) {
  const errorMessage = errorMessageCreater('email', event.target.value);
  emailErrorElem.textContent = errorMessage;
}
function onPasswordChange(event) {
  const errorMessage = errorMessageCreater('password', event.target.value);
  passwordErrorElem.textContent = errorMessage;
}
mailInputElem.addEventListener('input', onEmailChange);
passwordInputElem.addEventListener('input', onPasswordChange);

//

const formElem = document.querySelector('.login-form');
function onFormSubmit(event) {
  // так можно получить данные формы - ВАРИАНТ 1:
  // eslint-disable-next-line no-undef
  const formFields = [...new FormData(formElem)];
  // formFields => [["email", "значение поля email"], ["password", "значение поля password"]]

  const formData = formFields.reduce(function (acc, formField) {
    const prop = formField[0]; // здесь "name" инпута
    const value = formField[1]; // здесь "value" инпута
    // если использовать деструктуризацию, то можно предыдущие 2 строки записать короче
    // const [prop, value] = formField;
    return {
      // используем оператор расширения, чтобы в acc добвить свойства все предыдущих итераций
      ...acc,
      // используем вычислимое свойство объекта, чтобы добавить в аккумулятор новое свойство
      [prop]: value,
    };
  }, {});
  3;

  event.preventDefault();
  alert(JSON.stringify(formData));
}
formElem.addEventListener('submit', onFormSubmit);
// более простой формат считывания формы - ВАРИАНТ 2:
// const formData = Object.fromEntries(new FormData(formElem));
