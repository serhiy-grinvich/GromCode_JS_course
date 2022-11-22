// algo
// create sectors
// - - create sectorElements
// - - numbering it(data atrribute)
// - - add to arena elem
// create seat rows
// - - rows elem
// - - numbering
// - - add to sectors elem
// create seats
// - - seats elem
// - - numbering
// - - add to row elem
// create event for arena
// find number of selected seat
// return number of seat to board
const arena = document.querySelector('.arena');

function generateNumbers(from, to) {
  const resultArr = [];
  // eslint-disable-next-line no-plusplus
  for (let i = from; i <= to; i++) {
    resultArr.push(i);
  }
  return resultArr;
}

const createSectorSeats = () => {
  const seats = generateNumbers(1, 10)
    .map(seatNumber => {
      const seatElem = document.createElement('div');
      seatElem.dataset.seatNumber = seatNumber;
      seatElem.classList.add('sector__seat');
      // seatElem.textContent = seatNumber;

      return seatElem.outerHTML;
    })
    .join('');
  return seats;
};
const createSectorRows = () => {
  const seatsString = createSectorSeats();
  const rows = generateNumbers(1, 10)
    .map(rowNumber => {
      const rowElem = document.createElement('div');
      rowElem.dataset.lineNumber = rowNumber;
      rowElem.classList.add('sector__line');
      rowElem.innerHTML = seatsString;
      return rowElem.outerHTML;
    })
    .join('');
  return rows;
};

function createSectors() {
  const linesString = createSectorRows();
  const sectors = generateNumbers(1, 3)
    .map(sectorNumber => {
      const sector = document.createElement('div');
      sector.dataset.sectorNumber = sectorNumber;
      sector.classList.add('sector');
      sector.innerHTML = linesString;
      return sector.outerHTML;
    })
    .join('');
  arena.innerHTML = sectors;
}
function onSeatSelected(event) {
  const isSeat = event.target.classList.contains('sector__seat');
  if (!isSeat) return;
  const seatNum = event.target.dataset.seatNumber;
  const lineNum = event.target.closest('.sector__line').dataset.lineNumber;
  const sectorNum = event.target.closest('.sector').dataset.sectorNumber;
  const selectedSeatElem = document.querySelector('.board');
  selectedSeatElem.textContent = `S ${sectorNum} - L ${lineNum} - S ${seatNum}`;
}
arena.addEventListener('click', onSeatSelected);
