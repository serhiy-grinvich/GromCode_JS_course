function getSection(num) {
  return document.querySelector(`span[data-number= "${num}"]`).closest('.box').dataset.section;
}
