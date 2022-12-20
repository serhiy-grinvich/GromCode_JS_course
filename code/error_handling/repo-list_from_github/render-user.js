const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');
const reposListElem = document.querySelector('.repo-list');

export const clearRepoList = () => {
  reposListElem.innerHTML = '';
};

export const renderUserInfo = userData => {
  const { avatar_url, name, location } = userData;
  userAvatarElem.src = avatar_url;
  userNameElem.textContent = name;
  userLocationElem.textContent = location ? `from ${location}` : '';
};

export const renderUserRepos = repoList => {
  const repoElems = repoList.map(({ name }) => {
    const repo = document.createElement('li');
    repo.classList.add('repo-list__item');
    repo.textContent = name;
    return repo;
  });
  reposListElem.append(...repoElems);
};
