export function getItemsList() {
  const elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList);
  return elementsList;
}
export function getItemsArray() {
  const elementsList = document.querySelectorAll('.tool');
  const elementsArr = Array.from(elementsList);
  console.dir(elementsArr);
  return elementsArr;
}
