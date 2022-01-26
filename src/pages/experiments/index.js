import { element } from 'utils/dom';
import { Menu } from 'pages/shared';
import { experimentList } from 'utils/experiments/list';


export default function ExperimentsPage() {
  return (
    element('div', {className: 'page'},
      element('div', {},
        element('h1', {textContent: 'Experiments'}),
        element('p', {textContent: 'These are some of my experiments. I mostly play around with vanilla JavaScript and CSS.'}),
        Menu(experimentList)
      )
    )
  )
}
