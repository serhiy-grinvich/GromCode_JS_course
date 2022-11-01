//обьекты копируються поверхностно!!!!

const getCustomersList = obj => {
  const arr = [];
  for (let key in obj) {
    arr.push({ ...obj[key], id: key });
  }
  return arr.sort((a, b) => a.age - b.age);
};

//data tests :
const custList = {
  'customer#1': {
    name: 'vasya',
    age: 34,
  },
  'customer#2': {
    name: 'alina',
    age: 15,
  },
  'customer#3': {
    name: 'kirill',
    age: 78,
  },
  'customer#4': {
    name: 'tatiana',
    age: 50,
  },
};

// console.log(custList);

// getCustomersList(custList);
//turn obj to arr
//add customers id
//sort by age

// const getCustomersList = obj => {
//   // const newObj = { ...obj };
//   Object.keys(obj).map(key => {
//     newObj[key].id = key;
//   });
//   return newObj;
// };
