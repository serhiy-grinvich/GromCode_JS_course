const randomDelay = () => {
  return Math.trunc(Math.random() * (3e3 - 1e3) + 1e3);
};

const request = url =>
  new Promise(resolve => {
    const delay = randomDelay();
    setTimeout(
      () =>
        resolve({
          userData: {
            name: 'Tom',
            age: 17,
          },
          source: url,
          // delay: `${delay} ms`,
        }),
      delay,
    );
  });

// data tests
const servers = ['https://server.com/us', 'https://server.com/au', 'https://server.com/eu'];
//
const getUserASAP = userId => {
  // const ms = randomDelay();
  const userUrls = servers.map(url => `${url}/${userId}`);
  const requests = userUrls.map(userUrl => request(userUrl));
  // console.log(requests);
  return Promise.race(requests);
};

// algo
// create random delay func
// iterate servers array
// - - map it to array of promises
// find firt resolve
// return userOBJ

// getUserASAP('someUserID-777').then(result => console.log(result));
