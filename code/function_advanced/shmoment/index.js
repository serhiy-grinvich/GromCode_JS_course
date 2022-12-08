const shmoment = initValue => {
  const resultDate = new Date(initValue);
  const setNewDateObj = {
    years(value) {
      resultDate.setFullYear(resultDate.getFullYear() + value);
    },
    months(value) {
      resultDate.setMonth(resultDate.getMonth() + value);
    },
    days(value) {
      resultDate.setDate(resultDate.getDate() + value);
    },
    hours(value) {
      resultDate.setHours(resultDate.getHours() + value);
    },
    minutes(value) {
      resultDate.setMinutes(resultDate.getMinutes() + value);
    },
    seconds(value) {
      resultDate.setSeconds(resultDate.getSeconds() + value);
    },
    milliseconds(value) {
      resultDate.setMilliseconds(resultDate.getMilliseconds() + value);
    },

    add(timeUnit, value) {
      this[timeUnit](value);
      return this;
    },
    subtract(timeUnit, value) {
      this[timeUnit](-value);
      return this;
    },
    result() {
      return resultDate;
    },
  };
  return setNewDateObj;
};

// algo
// create function
// create result Date obj
// create obj which return from function
// create methods
// const someDate = new Date('2020', ' 0', '1');
// shmoment(someDate).subtract('months', 3).result();
