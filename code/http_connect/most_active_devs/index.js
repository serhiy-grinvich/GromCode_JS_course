// algo
// send request with IDs from arguments
// filter by date
// in filtered result find the biggest amount of etries
// return in objs arr
//
// https://api.github.com/repos/USERID/REPOID/commits?per_page=100

const getMostActiveDevs = options => {
  const { days, userId, repoId } = options;
  const startSearchDate = new Date().setDate(new Date().getUTCDate() - days);
  return fetch(`https://api.github.com/repos/${userId}/${repoId}/commits?per_page=100`)
    .then(response => response.json())
    .then(commitsArray =>
      commitsArray
        .filter(commitOBJ => new Date(commitOBJ.commit.author.date) >= new Date(startSearchDate))
        .reduce((acc, current) => {
          if (acc.some(el => el.email === current.commit.author.email)) {
            acc.find(el => el.email === current.commit.author.email).count += 1;
          } else {
            acc.push({
              count: 1,
              name: current.commit.author.name,
              email: current.commit.author.email,
            });
          }
          return acc;
        }, [])
        .sort((a, b) => b.count - a.count)
        .filter((el, _, arr) => el.count >= arr[0].count),
    );
  // .then(res => res);
};
// test data
const someOptObj = { days: 50, userId: 'serhiy-grinvich', repoId: 'GromCode_JS_course' };
const someOptObj2 = { days: 50, userId: 'andrii142', repoId: 'translated-content' };
const someOptObj3 = { days: 650, userId: 'andrii142', repoId: 'Awesome-JavaScript-Interviews' };

getMostActiveDevs(someOptObj3);

// const sortRes = obj =>
//   Promise.resolve(obj)
//     .then(res => {
//       return res
//         .reduce((acc, current) => {
//           if (acc.some(el => el.email === current.commit.author.email)) {
//             acc.find(el => el.email === current.commit.author.email).count += 1;
//           } else {
//             acc.push({
//               count: 1,
//               name: current.commit.author.name,
//               email: current.commit.author.email,
//             });
//           }
//           return acc;
//         }, [])
//         .sort((a, b) => b.count - a.count)
//         .filter((el, _, arr) => el.count >= arr[0].count);
//     })
//     .then(res => console.log(res));
// const testObj1 = [
//   {
//     sha: '53a244397ca2a657a3106588c2c038497bad2ec1',
//     node_id: 'C_kwDOIOc0wNoAKDUzYTI0NDM5N2NhMmE2NTdhMzEwNjU4OGMyYzAzODQ5N2JhZDJlYzE',
//     commit: {
//       author: {
//         name: 'serhiy-grinvich',
//         email: '113624514+serhiy-grinvich@users.noreply.github.com',
//         date: '2022-12-14T21:34:09Z',
//       },
//     },
//   },
//   {
//     sha: 'f7bb4bff74282417f325d14ac08b78de0daf938d',
//     node_id: 'C_kwDOIOc0wNoAKGY3YmI0YmZmNzQyODI0MTdmMzI1ZDE0YWMwOGI3OGRlMGRhZjkzOGQ',
//     commit: {
//       author: {
//         name: 'serhiy-grinvich',
//         email: '113624514+serhiy-grinvich@users.noreply.github.com',
//         date: '2022-12-14T21:22:38Z',
//       },
//     },
//   },
//   {
//     sha: 'f7bb4bff74282417f325d14ac08b78de0daf938d',
//     node_id: 'C_kwDOIOc0wNoAKGY3YmI0YmZmNzQyODI0MTdmMzI1ZDE0YWMwOGI3OGRlMGRhZjkzOGQ',
//     commit: {
//       author: {
//         name: 'serhiy-grinvich',
//         email: '113624514+serhiy-grinvich@users.noreply.github.com',
//         date: '2022-12-14T21:22:38Z',
//       },
//     },
//   },
//   {
//     sha: '9c29af04bef18e9590c18ffb1f6cf4a923d9eb29',
//     node_id: 'C_kwDOIOc0wNoAKDljMjlhZjA0YmVmMThlOTU5MGMxOGZmYjFmNmNmNGE5MjNkOWViMjk',
//     commit: {
//       author: {
//         name: 'serhiy-grinvich',
//         email: '113624514+serhiy-grinvich@users.noreply.github.com',
//         date: '2022-12-14T19:25:20Z',
//       },
//     },
//   },
//   {
//     sha: '9c29af04bef18e9590c18ffb1f6cf4a923d9eb29',
//     node_id: 'C_kwDOIOc0wNoAKDljMjlhZjA0YmVmMThlOTU5MGMxOGZmYjFmNmNmNGE5MjNkOWViMjk',
//     commit: {
//       author: {
//         name: 'vasya_pupkin',
//         email: '113624514+pupkin@users.noreply.github.com',
//         date: '2022-12-14T19:25:20Z',
//       },
//     },
//   },
//   {
//     sha: '9c29af04bef18e9590c18ffb1f6cf4a923d9eb29',
//     node_id: 'C_kwDOIOc0wNoAKDljMjlhZjA0YmVmMThlOTU5MGMxOGZmYjFmNmNmNGE5MjNkOWViMjk',
//     commit: {
//       author: {
//         name: 'vasya_pupkin',
//         email: '113624514+pupkin@users.noreply.github.com',
//         date: '2022-12-14T19:25:20Z',
//       },
//     },
//   },
//   {
//     sha: '9c29af04bef18e9590c18ffb1f6cf4a923d9eb29',
//     node_id: 'C_kwDOIOc0wNoAKDljMjlhZjA0YmVmMThlOTU5MGMxOGZmYjFmNmNmNGE5MjNkOWViMjk',
//     commit: {
//       author: {
//         name: 'vasya_pupkin',
//         email: '113624514+pupkin@users.noreply.github.com',
//         date: '2022-12-14T19:25:20Z',
//       },
//     },
//   },
//   {
//     sha: '9c29af04bef18e9590c18ffb1f6cf4a923d9eb29',
//     node_id: 'C_kwDOIOc0wNoAKDljMjlhZjA0YmVmMThlOTU5MGMxOGZmYjFmNmNmNGE5MjNkOWViMjk',
//     commit: {
//       author: {
//         name: 'vasya_pupkin',
//         email: '113624514+pupkin@users.noreply.github.com',
//         date: '2022-12-14T19:25:20Z',
//       },
//     },
//   },
// ];
// sortRes(testObj1);
