import { element } from 'utils/dom.js';
import { HeaderMenu } from 'pages/shared.js';


export default function ExperimentsPage() {
  return (
    element('div', {className: 'page'},
      element('div', {},
        HeaderMenu(),
        element('h1', {className: 'title', textContent: 'Experiments'}),
        element('p', {className: 'text', textContent: 'These are some of my experiments. I mostly play around with vanilla JavaScript and CSS. 🧪'}),
        element('div', {},
            // element('div', {},
            //     element('h4', {textContent: 'Todo App'}),
            //     element('p', {textContent: "A todo app written in Vanilla JS. I wanted to build something that didn't use modern front-end frameworks."}),
            //     element('a', {textContent: 'try here'})
            // ),
            element('div', {className: 'experiment-list'},
                element('h4', {textContent: 'Dot Game'}),
                element('p', {textContent: 'A game made with Vanilla JS, using svg animation.'}),
                element('a', {
                    textContent: 'play',
                    href: 'https://cranky-williams-0031ff.netlify.app/'
                }),
                element('a', {
                    textContent: 'code',
                    href: 'https://github.com/MarkSchu/dot-game/tree/master'
                })
            )
        )
      )
    )
  )
}
