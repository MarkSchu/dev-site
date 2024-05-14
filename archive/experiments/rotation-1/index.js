import { element } from 'utils/dom';
import './style.css';

function Boxes() {
  return (
    element('div', {className: 'outer'},
      element('div', {className: 'inner'},
        element('div', {className: 'box1'}),
        element('div', {className: 'box2'}),
        element('div', {className: 'box3'}),
        element('div', {className: 'box4'})
      )
    )
  )
}

export default function Rotation1() {
  return (
    element('div', {className: 'rotation1'},
      Boxes()
    )
  )
}
