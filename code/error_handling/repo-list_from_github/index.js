import { fetchUserData, fetchUserRepos } from './gateways.js';
import { renderUserInfo, renderUserRepos, clearRepoList } from './render-user.js';
import { showSpinner, hideSpinner } from './spinner.js';
// algo
// create DOM elements for needed elems
// add listener for searching button
// send http request with fetch() - method
// take info from result of request
// add ava/ name/ location

const showButtonElem = document.querySelector('.name-form__btn');
const inputSearchNameElem = document.querySelector('.name-form__input');
//
const defaultUser = {
  avatar_url: 'https://avatars3.githubusercontent.com/u10001',
  name: '',
  location: '',
};
renderUserInfo(defaultUser);

const onSearch = () => {
  clearRepoList();
  showSpinner();
  const userName = inputSearchNameElem.value;
  fetchUserData(userName)
    .then(userDataBody => {
      renderUserInfo(userDataBody);
      return userDataBody.repos_url;
    })
    .then(url => fetchUserRepos(url))
    .then(repoList => {
      hideSpinner();
      renderUserRepos(repoList);
    })
    .catch(err => {
      hideSpinner();
      alert(err.message);
    });
};
showButtonElem.addEventListener('click', onSearch);
