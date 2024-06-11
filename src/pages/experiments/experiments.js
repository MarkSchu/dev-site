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
        
            element('div', {className: 'experiment-list'},

                element('div', {},
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
                ),

                element('div', {},
                    element('h4', {textContent: 'Dropshadow Tool'}),
                    element('p', {textContent: 'A tool made with Vanilla JS that allows you to play around with the drop shadow effect on an svg.'}),
                    element('a', {
                        textContent: 'see',
                        href: 'https://dropshadowtool.netlify.app/'
                    }),
                    element('a', {
                        textContent: 'code',
                        href: 'https://github.com/MarkSchu/drop-shadow-tool'
                    })
                ),

                element('div', {},
                    element('h4', {textContent: 'JavaScript Date Reference'}),
                    element('p', {textContent: 'Ever want to see what each JavaScript Date method returns in one place? Here it is!'}),
                    element('a', {
                        textContent: 'see',
                        href: 'https://javascript-date-tool.netlify.app/'
                    }),
                    element('a', {
                        textContent: 'code',
                        href: 'https://github.com/MarkSchu/javascript-date-tool'
                    })
                )
            )
        )
      )
    )
  )
}

