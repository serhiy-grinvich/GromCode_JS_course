const getTotalRevenue = transactions => {
  return transactions.reduce((sum, obj) => sum + obj.amount, 0);
};

// examples
const dayTransactions = [
  { userId: 22, amount: 60, operation: 'sell' },
  { userId: 22, amount: 160, operation: 'buy' },
  { userId: 44, amount: 90, operation: 'sell' },
];

const result = getTotalRevenue(dayTransactions); // ==> 310

//get amount from  obj
//sum & return
