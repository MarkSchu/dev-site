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

const skills = [
  'JavaScript', 'React', 'TypeScript', 'Node', 'Jest', 'Express', 'Hapi', 'Redux', 
  'Sass', 'Less', 'Webpack', 'GraphQL', 'MongoDB', 'SQL', 'CSS/HTML', 'Design Patterns', 
  'RESTful APIs'
];

function App() {
  return (
    element('main', {},
      element('header', {},
        element('h1', {innerHTML: 'Mark Schumaker'}),
        element('h2', {textContent: 'Frontend Engineer'}),
        element('p', {textContent: 'I build apps and websites with JavaScript'})
      ),
      element('section', {},
        element('h2', {textContent: 'ABOUT'}),
        element('p', {textContent: `I started coding through Philosophy. Back when I was working on my 
          Masters, I thought a lot about logic and computation and picked up programming as 
          a way to play around with the ideas. Eventually the hobby turned into a profession and I've 
          been doing it for 10 years.`}
        ),
        element('p', {textContent: `When I'm away from my computer, I like to spend time with my family and friends, 
          read philosophy books, and hike outside.`})
      ),

      element('section', {},
        element('h2', {textContent: 'WORK'}),
        element('p', {innerHTML: `My main focus these days is building Node apps with React, TypeScript,
          and other tools in the JavaScript Ecosystem. I've been doing that for 8 years. I'm passionate
          about simple solutions, avoiding complexity, and writing code that is both readable and adaptable.`}
        ),
        element('p', {innerHTML: `I'm also passionate about learning and have experience with loads of other
          technologies from Python to Haskell to WebGL. And I've spent a lot of time mulling over more abstract topics like
          software architecture, design, and programming paradigms.`}
        )
      ),

      element('section', {}, 
        element('h2', {textContent: 'SKILLS'}),
        element('p', {textContent: `Here are a few technologies I know how to use.`}),
        repeat(skills, (skill) =>
          element('div', {className: 'pill', textContent: skill})
        ),
        element('p', {innerHTML: `On the <b>soft skill</b> side of things, I'm a good communicator, love to teach and 
          explain ideas to others, strong in creative problem solving, adaptable, and can provide leadership to 
          junior developers. I think my greatest strength, however, is that: <blockquote>I can learn anything.</blockquote>`}),
      ),

      element('section', {}, 
        element('h2', {textContent: 'EXPERIENCE'}),
      )
    )
  )
}

document.body.appendChild(
  App()
);

// https://v4.brittanychiang.com/