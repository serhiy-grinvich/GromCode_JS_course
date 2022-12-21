const parseUser = jsonString => {
  try {
    return JSON.parse(jsonString);
  } catch (err) {
    return null;
  }
};

// // test data
// const str = '{"name":"venya", "age" : 18}';
// const str1 = '{"name":venya, "age" : 18}';
// parseUser(str);
