export const fetchUserData = userName =>
  fetch(`https://api.github.com/users/${userName}`).then(response => {
    if (response.ok) {
      response.json();
    } else {
      throw new Error('Failed to load data');
    }
  });

export const fetchUserRepos = url =>
  fetch(url).then(response => {
    if (response.ok) {
      response.json();
    } else {
      throw new Error('Failed to load data');
    }
  });
