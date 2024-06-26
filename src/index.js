function setStyles(el, attrs) {
  const styles = attrs['style'];
  for (var style in styles) {
      el.style[style] = styles[style];
  }
}


function setAttributes(el, attrs) {
  for (const attr in attrs) {
    if (attr === 'style') {
      setStyles(el, attrs);
    }
    else {
      el[attr] = attrs[attr];
    }
  }
}

function element(tag, attrs) {
  const el = document.createElement(tag);
  const children = Array.from(arguments).slice(2).flat();
  setAttributes(el, attrs);
  children.forEach(child => el.appendChild(child));
  return el;
}

function repeat(list, createEl) {
  return list.map(item => createEl(item));
}

function App() {
  return (
    element('main', {},
      element('header', {},
        element('h1', {textContent: 'Mark Schumaker'}),
        element('h2', {textContent: 'Frontend Engineer'}),
        element('p', {textContent: 'I build apps and websites with JavaScript.'})
      ),
      element('section', {},
        element('h2', {textContent: 'ABOUT'}),
        element('p', {textContent: `I started coding through Philosophy. Back when I was working on my 
          Masters, I thought a lot about logic and computation and picked up programming as 
          a way to play around with the ideas. Eventually the hobby turned into a profession and I've 
          been doing it for 10 years.`}
        ),
        element('p', {textContent: `My main focus is working on frontends in the JavaScript, particularly
          with Node, React, Typescript`})
      ),

      element('section', {}, 
        element('h2', {textContent: 'SKILLS'}),
        element('p', {textContent: `JavaScript, React, TypeScript, Node, Jest, Express, Hapi, Redux, Sass, Less, Webpack, GraphQL, MongoDB, SQL, CSS/HTML, Design Patterns, RESTful APIS`})
      )
    )
  )
}

document.body.appendChild(
  App()
);

// https://v4.brittanychiang.com/