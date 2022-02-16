import { element, repeatfor } from 'utils/dom';
import './style.css';

// #2d728f #3B8EA5
function Box(i) {
  const el = element('div', {className: 'box'});
  const location = (50 + i) + 'px';
  const length = (i * 5) + 'px';
  el.style.top = '40%';
  el.style.left = '40%';
  el.style.width = length;
  el.style.height = length;
  el.style.border = '1px solid #61E8E1';
  el.style.opacity = 2/i;
  el.style['animation'] = 'rotation6';
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
        repeatfor(50, Box)
      )
    )
  )
}

export default function Rotation6() {
  return (
    element('div', {className: 'rotation6'},
      Boxes()
    )
  )
}
