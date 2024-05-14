import { element, repeatfor } from 'utils/dom';
import './style.css';

// #2d728f #3B8EA5
function Box(i) {
  const el = element('div', {className: 'box'});
  const location = (50 * i) + 'px';
  const length = (i * 5) + 'px';
  el.style.top = '20%';
  el.style.left = '30%';
  el.style.width = length;
  el.style.height = length;
  el.style.border = '1px solid #3B8EA5';
  el.style['animation'] = 'rotation3';
  el.style['animation-duration'] = '10s';
  el.style['timing-function'] = 'linear';
  el.style['animation-delay'] = i/30 + 's';
  el.style['animation-iteration-count'] = 'infinite';
  return el;
}

function Boxes() {
  return (
    element('div', {className: 'outer'},
      element('div', {className: 'inner'},
        repeatfor(100, Box)
      )
    )
  )
}

export default function Rotation3() {
  return (
    element('div', {className: 'rotation3'},
      Boxes()
    )
  )
}
