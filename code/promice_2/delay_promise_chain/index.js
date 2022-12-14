const delay = ms =>
  new Promise(resolve => {
    setTimeout(() => resolve(), ms);
  });

// data test
// delay(3000).then(() => console.log(6));
