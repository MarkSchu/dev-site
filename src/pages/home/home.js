import { element } from 'utils/dom.js';
import { Menu, HeaderMenu } from 'pages/shared.js';

const options = [
  {
    name: 'about',
    href: '/about'
  },
  {
    name: 'contact',
    href: '/contact'
  },
  {
    name: 'github',
    href: 'https://github.com/markschu'
  },
  {
    name: 'linkedin',
    href: 'https://www.linkedin.com/in/mark-schumaker-5980a0a2'
  }
];

export default function HomePage() {
  return (
    element('div', {className: 'page'},
      element('div', {},
        HeaderMenu(),
        element('h1', {className: 'title', textContent: 'Mark Schumaker'}),
        element('p', {className: 'text', innerHTML: "I'm a <b>full-stack</b> engineer with a preference for the <b>front-end</b>. 👋"}),
        element('p', {
            className: 'text', 
            innerHTML: `<b>10 years</b> of experience. Work mostly with React, TypeScript, and Node.`
        }),
        Menu(options)
      )
    )
  )
}
