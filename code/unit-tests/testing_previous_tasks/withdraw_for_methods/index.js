'use strict';

export const withdraw = (clients, balances, client, amount) => {
  const i = clients.indexOf(client);
  if (balances[i] - amount < 0) return -1;
  balances.splice(i, 1, balances[i] - amount);
  return balances[i];
};
// const withdraw = (clients, balances, client, amount) => {
//   const i = clients.indexOf(client);
//   if (balances[i] - amount < 0) return -1;
//   balances[i] -= amount;
//   return balances[i];
// };

// example 1:

// input
withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);

// output
// 37
// и массив balances должен быть [1400, 37, -6]

// example 2:

// input
withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);

// output
// -1
// и массив balances должен быть [1400, 87, -6]
