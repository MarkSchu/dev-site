import { element, repeatfor } from 'utils/dom';
import './style.css';

// #2d728f #3B8EA5
function Box(i) {
  const el = element('div', {className: 'box'});
  const location = (50 + i) + 'px';
  const length = (i * 25) + 'px';
  el.style.top = '20%';
  el.style.left = '25%';
  el.style.width = length;
  el.style.height = length;
  el.style.borderTop = '1px solid #61E8E1';
  el.style.borderRight = '1px solid #F25757';
  el.style.borderBottom = '1px solid #F2E863';
  el.style.borderLeft = '1px solid #F2CD60';
  el.style['animation'] = 'rotation5';
  el.style['animation-duration'] = '10s';
  el.style['timing-function'] = 'ease-in-out';
  el.style['animation-delay'] = i/30 + 's';
  el.style['animation-iteration-count'] = 'infinite';
  return el;
}

function Boxes() {
  return (
    element('div', {className: 'outer'},
      element('div', {className: 'inner'},
        repeatfor(20, Box)
      )
    )
  )
}

export default function Rotation5() {
  return (
    element('div', {className: 'rotation5'},
      Boxes()
    )
  )
}
