import { element } from 'utils/dom';
import './style.css';


export default function DropShadow1() {
  return (
    element('div', {className: 'drop-shadow-1'},
      element('div', {className: 'circle-1'})
    )
  )
}