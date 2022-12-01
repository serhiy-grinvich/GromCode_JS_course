// first way draft solution:
//
// const studentsBirthDays = students => {
//   const months = [
//     'Jan',
//     'Feb',
//     'Mar',
//     'Apr',
//     'May',
//     'Jun',
//     'Jul',
//     'Aug',
//     'Sep',
//     'Oct',
//     'Nov',
//     'Dec',
//   ];
//   return (
//     students
//       .slice()
//       .sort(
//         (a, b) =>
//           new Date(Date.parse(a.birthDate)).getDate() - new Date(Date.parse(b.birthDate)).getDate(),
//       )
//       .sort(
//         (a, b) =>
//           new Date(Date.parse(a.birthDate)).getMonth() -
//           new Date(Date.parse(b.birthDate)).getMonth(),
//       )
//       // .map(student => {
//       //   return [[months[new Date(Date.parse(student.birthDate)).getMonth()]], [student.name]];
//       // })
//       .reduce((acc, student) => {
//         const month = months[new Date(Date.parse(student.birthDate)).getMonth()];
//         acc[month] = [];
//         acc = {
//           ...acc,
//           [month]: students
//             .filter(person => {
//               return (
//                 new Date(Date.parse(person.birthDate)).getMonth() ===
//                 new Date(Date.parse(student.birthDate)).getMonth()
//               );
//             })
//             .sort(
//               (a, b) =>
//                 new Date(Date.parse(a.birthDate)).getDate() -
//                 new Date(Date.parse(b.birthDate)).getDate(),
//             )
//             .sort(
//               (a, b) =>
//                 new Date(Date.parse(a.birthDate)).getMonth() -
//                 new Date(Date.parse(b.birthDate)).getMonth(),
//             )
//             .map(el => el.name),
//         };
//         return acc;
//       }, {})
//   );
// };

//
//
// second way draft solution:
//
// const studentsBirthDays = students => {
//   const formatterMonth = new Intl.DateTimeFormat('en', {
//     month: 'short',
//   });
//   const res = {
//     Jan: [],
//     Feb: [],
//     Mar: [],
//     Apr: [],
//     May: [],
//     Jun: [],
//     Jul: [],
//     Aug: [],
//     Sep: [],
//     Oct: [],
//     Nov: [],
//     Dec: [],
//   };
//   const studArr = students
//     .slice()
//     .sort(
//       (a, b) =>
//         new Date(Date.parse(a.birthDate)).getDate() - new Date(Date.parse(b.birthDate)).getDate(),
//     )
//     .sort(
//       (a, b) =>
//         new Date(Date.parse(a.birthDate)).getMonth() - new Date(Date.parse(b.birthDate)).getMonth(),
//     )
//     .forEach(person => {
//       res[formatterMonth.format(new Date(Date.parse(person.birthDate)))].push(person.name);
//     });
//   return Object.fromEntries(Object.entries(res).filter(el => el[1].length !== 0));
// };

// one more way solution:
//
// const formatter = new Intl.DateTimeFormat('en', { month: 'short' });

// const studentsBirthDays = students => {
//   const bdayObj = students.reduce((acc, student) => {
//     const month = formatter.format(new Date(student.birthDate));

//     return {
//       ...acc,
//       [month]: acc[month] ? acc[month].concat(student) : [student],
//     };
//   }, {});

//   return Object.entries(bdayObj).reduce(
//     (acc, [month, studentsList]) => ({
//       ...acc,
//       [month]: studentsList
//         .sort((a, b) => new Date(a.birthDate).getDate() - new Date(b.birthDate).getDate())
//         .map(({ name }) => name),
//     }),
//     {},
//   );
// };
//
// доработанное первоначальное решение
//
const studentsBirthDays = students => {
  const formatterMonth = new Intl.DateTimeFormat('en', {
    month: 'short',
  });
  return students
    .slice()
    .sort((a, b) => new Date(a.birthDate).getDate() - new Date(b.birthDate).getDate())
    .reduce((birthDayObj, student) => {
      const month = formatterMonth.format(new Date(student.birthDate));
      return {
        ...birthDayObj,
        [month]: birthDayObj[month] ? birthDayObj[month].concat(student.name) : [student.name],
      };
    }, {});
};

// data tests
const students = [
  { name: 'Inna', birthDate: '07/03/2011' },
  { name: 'Daniil', birthDate: '08/17/2013' },
  { name: 'Oles', birthDate: '08/15/1993' },
  { name: 'Sveta', birthDate: '02/8/2022' },
  { name: 'Lada', birthDate: '07/19/2033' },
  { name: 'Mary', birthDate: '11/9/2010' },
  { name: 'Jenya', birthDate: '02/23/2080' },
  { name: 'Ira', birthDate: '02/20/2010' },
];
const stud1 = { name: 'Ira', birthDate: '02/20/2010' };
const dateIra = new Date(Date.parse(stud1.birthDate));
// function
// algo
// itterate students arr
// parse birth date
//  create res obj w months
// push to arr for each month
//  sort by day
