const sum = num => {
  return num === 1 ? num : num + sum(num - 1);
};
