import { element } from 'utils/dom.js';
import { Menu, HeaderMenu } from 'pages/shared.js';

const options = [
  {
    name: 'JavaScript',
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
  },
  {
    name: 'Node',
    href: 'https://nodejs.org/en/'
  },
  {
    name: 'React',
    href: 'https://reactjs.org/'
  },
  {
    name: 'TypeScript',
    href: 'https://www.typescriptlang.org/'
  },
  {
    name: 'HTML',
    href: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
  },
  {
    name: 'CSS',
    href: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
  },
  {
    name: 'Redux',
    href: 'https://redux.js.org/'
  },
  {
    name: 'Sass',
    href: 'https://sass-lang.com/'
  },
  {
    name: 'Webpack',
    href: 'https://webpack.js.org/'
  },
  {
    name: 'ESLint',
    href: 'https://eslint.org/'
  },
  {
    name: 'Electron',
    href: 'https://www.electronjs.org/'
  },
  {
    name: 'SQL',
    href: 'https://en.wikipedia.org/wiki/SQL'
  },
  {
    name: 'MongoDB',
    href: 'https://www.mongodb.com/'
  },
  {
    name: 'Python',
    href: 'https://www.python.org/'
  },
  {
    name: 'GraphQL',
    href: 'https://graphql.org/'
  },
  {
    name: 'npm',
    href: 'https://www.npmjs.com/'
  },
  {
    name: 'git',
    href: 'https://git-scm.com/'
  },
  {
    name: 'Design Patterns',
    href: 'https://en.wikipedia.org/wiki/Software_design_pattern'
  },
  {
    name: 'Agile',
    href: 'https://en.wikipedia.org/wiki/Agile_software_development'
  },
];

export default function AboutPage() {
  return (
    element('div', {className: 'page'},
      element('div', {},
        HeaderMenu(),
        element('h1', {
            className: 'title',
            textContent: 'About'}),
        element('p', {
            className: 'text',
            textContent: 'Hi, my name is Mark Schumaker. 🙂'}),
        element('p', {
            className: 'text', 
            innerHTML: `I'm a <b>full-stack</b> developer with over <b>10 years</b> of experience.`
        }),
        element('p', {
            className: 'text', 
            innerHTML: `I pivoted to a career in software engineering after working on my Masters in Philosophy.`
        }),
        element('p', {
            className: 'text', 
            innerHTML: `I'm proficient at front-end and back-end code, with a preference for the <b>front-end</b>.`
        }),
        element('p', {
            className: 'text', 
            innerHTML: `Most of the code I write is from the world of JavaScript - mainly <b>TypeScript</b>, <b>React</b>, and <b>Node</b> - but I've got plenty of experience with other languages and frameworks.`
        }),
        element('p', {
            className: 'text', 
            innerHTML: `Here are some of the tools I use:`
        }),
        Menu(options)
      )
    )
  )
}