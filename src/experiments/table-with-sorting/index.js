import { element, repeat, bind } from 'utils/dom';
import { Observable } from 'utils/Observable';
import 'pages/experiments/table-with-sorting/style.css';

const rows = [
  ['Marmot CWM'],
  ['Mountain Hardwear Bishop Pass 0'],
  ['Nemo Sonic 0 (old)'],
  ['Nemo Sonic 0 (new)'],
  ['Nemo Sonic -20'],
  ['Mountain Equipment Glacier 1000'],
]

const sortLowToHigh = (index, list) => {
  const sorted = list.slice().sort((rowA, rowB) => {
    return rowA[index] > rowB[index]
    ? 1
    : -1
  });
  return sorted;
}

const sortHighToLow = (index, list) => {
  const sorted = list.slice().sort((rowA, rowB) => {
    return rowA[index] > rowB[index]
    ? -1
    : 1
  });
  return sorted;
}

const sortedLowToHigh = (index, rows) => {
  for (var i=0; i<rows.length; i++) {
    if (!(rows[i][index] < rows[i][index])) {
      return false;
    }
  }
  return true;
}

const sortByColumn = (index, oldRows) => {
  console.log(sortedLowToHigh(index, oldRows) )
  return sortedLowToHigh(index, oldRows) 
  ? sortHighToLow(index, oldRows) 
  : sortLowToHigh(index, oldRows);
}

function Table(rows, columnNames) {

  const state = new Observable({rows});

  const sortColumn = (index) => () => {
    const oldRows = state.data.rows;
    const newRows = sortByColumn(index, oldRows);
    state.set({rows: newRows});
  }
  
  return (
    element('table', {},
      element('tr', {},
        repeat(columnNames, (columnName, i) => 
          element('th', {textContent: columnName, onclick: sortColumn(i)})
        )
      ),
      bind(state, () =>
        repeat(state.data.rows, (row) => 
          element('tr', {},
            repeat(row, (value) =>
              element('td', {textContent: value})
            )
          )
        )
      )
    )
  )
}

export default function TableWithSorting() {
  return (
    element('div', {},
      Table(rows, ['Sleeping Bag', 'Temperature', 'Stuff Sack Size', 'Stuff Sack Volume', 'Compressed Volume'])
    )
  )
}