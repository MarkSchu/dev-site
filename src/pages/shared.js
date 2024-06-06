import { element, repeat } from 'utils/dom.js';

function Option(item) {
  return (
    element('div', {className: 'option'},
      element('a', {
        textContent: `-- ${item.name}`,
        href: item.href
      })
    )
  )
}

export function Menu(options) {
  return (
    element('div', {className: 'menu'},
      repeat(options, Option)
    )
  )
}

export function HeaderMenu() {

    const handleMouseOver = (e) => {
        document.getElementById('item-name').innerText = e.target.name;
    }

    const handleMouseOut = () => {
        document.getElementById('item-name').innerText = '';
    }

    return (
        element('div', {className: 'header-menu'},
            element('a', {
                onmouseover: handleMouseOver, 
                onmouseout: handleMouseOut,
                textContent: '👋',
                href: '/',
                name: 'home'
            }),
            element('a', {
                onmouseover: handleMouseOver, 
                onmouseout: handleMouseOut,
                textContent: '🙂',
                href: '/about',
                name: 'about'
            }),
            element('a', {
                onmouseover: handleMouseOver, 
                onmouseout: handleMouseOut,
                textContent: '📫',
                href: '/contact',
                name: 'contact'
            }),
            element('a', {
                onmouseover: handleMouseOver, 
                onmouseout: handleMouseOut,
                textContent: '🧪',
                href: '/experiments',
                name: 'experiments'
            }),
            element('span', {
                id: 'item-name'
            })
        )
    )
}
