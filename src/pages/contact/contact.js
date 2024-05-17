import { element } from 'utils/dom.js';
import { Menu, HeaderMenu } from 'pages/shared.js';

export default function ContactPage() {
  return (
    element('div', {className: 'page'},
      element('div', {},
        HeaderMenu(),
        element('h1', {className: 'title', textContent: 'Contact'}),
        element('p', {className: 'text', textContent: 'Feel free to reach me at '},
          element('span', {textContent: 'm.schumaker235@gmail.com'}),
          element('span', {textContent: ' 📫'})
        ),
      )
    )
  )
}
