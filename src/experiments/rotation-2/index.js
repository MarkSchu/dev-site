import { element } from 'utils/dom';
import './style.css';

function Boxes() {
  return (
    element('div', {className: 'outer'},
      element('div', {className: 'inner'},
        element('div', {className: 'box box1'}),
        element('div', {className: 'box box2'}),
        element('div', {className: 'box box3'}),
        element('div', {className: 'box box4'})
      )
    )
  )
}

export default function Rotation2() {
  return (
    element('div', {className: 'rotation2'},
      Boxes()
    )
  )
}
