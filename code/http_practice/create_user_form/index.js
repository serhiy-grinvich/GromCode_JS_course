// algo
// realize validation form
// - - set listener for form
// - - if all inputs is valid - undisabled  registr btn
// send data on server
// get from server
//
// alert data

const baseUrl = `https://639db0201ec9c6657baffddd.mockapi.io/api/v1/user-validation`;

const registerBtnElem = document.querySelector('.submit-button');
const formElem = document.querySelector('.login-form');

const onChangeForm = () => {
  //  const isValidForm = formElem.reportValidity();
  // registerBtnElem.removeAttribute('disabled');
  registerBtnElem.disabled = !formElem.reportValidity();
};
formElem.addEventListener('input', onChangeForm);
//
const onSubmitForm = event => {
  event.preventDefault();
  //   const form = new FormData(formElem);
  //   console.log(form);

  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      //   'Content-Type': 'form/multipart',
    },
    // body: form,
    body: JSON.stringify(Object.fromEntries(new FormData(formElem))),
  })
    .then(response => response.json())
    .then(({ id, ...rest }) => {
      alert(JSON.stringify(rest));
      formElem.reset();
    });
};
formElem.addEventListener('submit', onSubmitForm);

// fetch(baseUrl)
//   .then(response => response.json())
//   .then(result => {
//     console.log(result);
//     // alert(result);
//   });
