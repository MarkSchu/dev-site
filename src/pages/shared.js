import { element, repeat } from 'utils/dom';

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
  return (
    element('div', {className: 'header-menu'},
      element('a', {
        textContent: '๐ฎ',
        href: '/'
      }),
      element('a', {
        textContent: '๐',
        href: '/about'
      }),
      element('a', {
        textContent: '๐ซ',
        href: '/contact'
      }),
      element('a', {
        textContent: '๐งช',
        href: '/experiments'
      })
    )
  )
}
