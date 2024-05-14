import { element } from 'utils/dom';
import { svg } from 'utils/svg';
import './style.css';


function Background() {
  return (
    element('div', {className: 'background'},
      svg('svg', {},
        svg('circle', {cx: 200, cy: 200, r: 10, fill: 'white'})
      )
    )
  )
}

export default function AmbientShapes1() {
  return (
    element('div', {className: 'ambient-shapes-1'},
      Background()
    )
  )
}