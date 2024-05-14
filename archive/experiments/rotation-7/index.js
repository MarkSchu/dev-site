import { element, repeatfor } from 'utils/dom';
import './style.css';

// #2d728f #3B8EA5
function Box(i, props) {
  const el = element('div', {className: 'box'});
  const location = (50 + i) + 'px';
  const length = (i * 25) + 'px';
  el.style.top = props.top;
  el.style.left = props.left;
  el.style.width = length;
  el.style.height = length;
  el.style.border = `1px solid ${props.color}`;
  el.style.opacity = 1/i;
  el.style['animation'] = props.animation;
  el.style['animation-duration'] = '10s';
  el.style['timing-function'] = 'linear';
  el.style['animation-delay'] = i/30 + 's';
  el.style['animation-iteration-count'] = 'infinite';
  return el;
}

function Circles() {
  return (
    element('div', {className: 'outer'},
      element('div', {className: 'inner'},
        repeatfor(20, (i) =>
          Box(i, {top: '25%', left: '25%', color: '#FF499E', animation: 'rotation7-1'})
        ),
        repeatfor(20, (i) =>
          Box(i, {top: '15%', left: '15%', color: '#D264B6', animation: 'rotation7-2'})
        ),
        repeatfor(20, (i) =>
          Box(i, {top: '20%', left: '20%', color: '#779BE7', animation: 'rotation7-3'})
        ),
        repeatfor(20, (i) =>
          Box(i, {top: '15%', left: '20%', color: '#49B6FF', animation: 'rotation7-4'})
        ),
      )
    )
  )
}

export default function Rotation7() {
  return (
    element('div', {className: 'rotation7'},
      Circles()
    )
  )
}
