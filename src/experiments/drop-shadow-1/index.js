import { element } from 'utils/dom';
import './style.css';


export default function DropShadow1() {
  return (
    element('div', {className: 'drop-shadow-1'},
      element('div', {className: 'glow-stick-1'}),
      element('div', {className: 'glow-stick-2'}),
      element('div', {className: 'glow-stick-3'}),
    )
  )
}