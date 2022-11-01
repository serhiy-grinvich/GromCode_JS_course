function getAdults(obj) {
  const adultPersons = Object.entries(obj)
    .filter(person => person[1] >= 18)
    .map(person => person[0]);
  return adultPersons;
}

//get a array of persons
// filter who of them is adult
//get array of their names
const objOfPersons = {
  kolya: 7,
  vasya: 177,
  gnida: 45,
  sereja: 18,
  oleg: 9,
  lida: 65,
};
