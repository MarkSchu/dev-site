import { 
  element,
  repeat,
  bind 
} from 'utils/dom';
import { Observable } from 'utils/observable';
import './style.css';

const dayNames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

function getMonthName(state) {
  return monthNames[state.data.currentMonth];
}

function EmptyDateCell() {
  return element('div', {className: 'DateCell'})
}

function DateCell(reservationState, date) {

  const selectDate = () => {
    
  }

  return (
    element('div', {
      className: 'DateCell', 
      onclick: selectDate
    },
      element('div', {className: 'highlight'}),
      element('div', {
        textContent:date.getDate()
      })
    )
  );
}

function getDatesInMonth(month, year) {
  var date = new Date(year, month, 1);
  var days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
}

function createCellList() {
  const cells = [];
  for (var i=0; i<35; i++) { 
    cells.push(i)
  }
  return cells;
}

function MonthCalendar(reservationState) {
  const { currentMonth, currentYear } = reservationState.data;
  const cells = createCellList();
  const dates = getDatesInMonth(currentMonth, currentYear);
  const firstDayOfMonth = dates[0].getDay();
  return (
    element('div', {className: 'MonthCalendar'},
      element('div', {className: 'DayHeader'},
        repeat(dayNames, (dayName) => 
          element('div', {textContent: dayName})
        )
      ),
      element('div', {className: 'DayGrid'}, 
        repeat(cells, (_, i) =>
          dates[i - firstDayOfMonth]
          ? DateCell(reservationState, dates[i - firstDayOfMonth])
          : EmptyDateCell()
        )
      )
    )
  )
}

function MonthSelect(reservationState) {

  const selectMonth = (e) => {
    const currentMonth = parseInt(e.target.value);
    reservationState.set({currentMonth})
  }

  return (
    element('span', {},
      element('select', {
          onchange: selectMonth
        }, 
        repeat(monthNames, (monthName, i) => 
          element('option', {
            selected: (reservationState.data.currentMonth === i),
            textContent: monthName,
            value: i
          })
        )
      )
    )
  )
}

function getYears(k) {
  const currentYear = new Date().getFullYear();
  const years = [currentYear];
  for (var i=0; i<k; i++) {
    years.push(currentYear + i);
  }
  return years;
}

function YearSelect(reservationState) {
  
  const selectYear = (e) => {
    const currentYear = parseInt(e.target.value);
    reservationState.set({currentYear});
  }

  return (
    element('span', {},
      element('select', {onchange: selectYear}, 
        repeat(getYears(10), (year) => 
          element('option', {
            textContent: year,
            value: year
          })
        )
      )
    )
  )
}

function ReservationCalendar() {
  const today = new Date();
  const reservationState = new Observable({
    currentMonth: today.getMonth(),
    currentYear: today.getFullYear()
  });
  
  return (
    element('div', {},
      MonthSelect(reservationState),
      YearSelect(reservationState),
      bind(reservationState, MonthCalendar)
    )
  )
}

export default function ReservationSelect() {
  return (
    element('div', {},
      ReservationCalendar()
    )
  )
}

