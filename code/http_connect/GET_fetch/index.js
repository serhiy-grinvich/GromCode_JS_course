// algo
// create DOM elements for needed elems
// add listener for searching button
// send http request with fetch() - method
// take info from result of request
// add ava/ name/ location

const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');

const showButtonElem = document.querySelector('.name-form__btn');
const inputSearchNameElem = document.querySelector('.name-form__input');

const onRenderUserInfo = userData => {
  const { avatar_url, name, location } = userData;
  userAvatarElem.src = avatar_url;
  userNameElem.textContent = name;
  userLocationElem.textContent = location ? `from ${location}` : '';
};
//
const fetchUserData = userName => {
  fetch(`https://api.github.com/users/${userName}`)
    .then(response => {
      //   console.log(response);
      return response.json();
    })
    .then(userDataBody => {
      //   console.log(userDataBody);
      onRenderUserInfo(userDataBody);
    });
};

const onSearch = () => {
  const userName = inputSearchNameElem.value;
  fetchUserData(userName);
};
showButtonElem.addEventListener('click', onSearch);
