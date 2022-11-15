/* eslint-disable */

/* Начальный код для этой задачи написан с плохими практиками, такими как использования var, 
переопределение переменной и тд. Это сделано намерено чтобы разобрать работу var.
Чтобы eslint не ругался на ошибки, для этой задачи он отключен аннотацией eslint-disable */

var foo = 1;

function bar() {
  if (!foo) {
    let foo = 10;
  }

  return foo;
}

var foo = bar();

function mergeArrays(arr1, arr2) {
  if (!arr1.length && !arr2.length) return [];
  return arr1.concat(arr2.filter(el => !arr1.includes(el))).sort((a, b) => a - b);
}
