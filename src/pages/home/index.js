import { element } from 'utils/dom';
import { Menu, HeaderMenu } from 'pages/shared';

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
        element('p', {className: 'text', textContent: "I'm a front-end developer living in Richmond, VA. 👋"}),
        Menu(options)
      )
    )
  )
}
