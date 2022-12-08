function markFavorites(tree, favorites) {
  const isFavorite = favorites.includes(tree.id);
  return {
    ...tree,
    isFavorite,
    nodes: tree.nodes.map(innerObj => markFavorites(innerObj, favorites)),
  };
}

// algo
// check isFavorite
// go one level deeper
// repeat
//
// test data
// const favIDs = ['id-21', 'id-221', 'id-32'];
// const tree = {
//   id: 'id-1',
//   name: 'products',
//   nodes: [
//     {
//       id: 'id-2',
//       name: 'food',
//       nodes: [
//         {
//           id: 'id-21',
//           name: 'milks',
//           nodes: [
//             {
//               id: 'id-211',
//               name: 'yohurt',
//               nodes: [
//                 { id: 'id-2111', name: 'vanilla', nodes: [] },
//                 { id: 'id-2112', name: 'cherry', nodes: [] },
//               ],
//             },
//             { id: 'id-212', name: 'cheese', nodes: [] },
//           ],
//         },
//         {
//           id: 'id-22',
//           name: 'fruits',
//           nodes: [
//             { id: 'id-221', name: 'pineaple', nodes: [] },
//             { id: 'id-222', name: 'kiwi', nodes: [] },
//           ],
//         },
//         { id: 'id-23', name: 'vegetables', nodes: [] },
//       ],
//     },
//     {
//       id: 'id-3',
//       name: 'drinks',
//       nodes: [
//         { id: 'id-31', name: 'tea', nodes: [] },
//         { id: 'id-32', name: 'vine', nodes: [] },

//         { id: 'id-33', name: 'coffee', nodes: [] },
//       ],
//     },
//     {
//       id: 'id-4',
//       name: 'toys',
//       nodes: [
//         { id: 'id-41', name: 'vehicles', nodes: [] },
//         { id: 'id-42', name: 'lego', nodes: [] },
//       ],
//     },
//   ],
// };
