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
    name: 'experiments',
    href: '/experiments'
  },
  {
    name: 'github',
    href: 'https://github.com/markschu'
  },
  {
    name: 'linkedin',
    href: 'https://www.linkedin.com/in/mark-schumaker-5980a0a2'
  },
  {
    name: 'resume',
    href: 'resume.pdf'
  },
];

export default function HomePage() {
  return (
    element('div', {className: 'page'},
      element('div', {},
        HeaderMenu(),
        element('h1', {className: 'title', textContent: 'Mark Schumaker'}),
        element('p', {className: 'text', textContent: "I'm full-stack engineer living in Richmond, VA. 👋"}),
        Menu(options)
      )
    )
  )
}
