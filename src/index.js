const basePostUrl = 'https://raw.githubusercontent.com/MarkSchu/writing-on-software/main';
const skills = [
  'Frontend', 'Full Stack', 'JavaScript', 'React', 'TypeScript', 'Node', 'Jest', 'Express', 'Hapi', 'Redux', 
  'Sass', 'Less', 'Webpack', 'GraphQL', 'MongoDB', 'SQL', 'CSS/HTML', 'Design Patterns', 
  'RESTful APIs', 'Responsive Design', 'A11y'
];

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

function repeat(tag, attrs, list, createEl) {
  const el = element(tag, attrs);
  list.map(item => 
    el.appendChild(createEl(item))
  );
  return el;
}

function Nav() {

  const { pathname } = window.location;
  
  if (pathname !== '/') {
    return (
      element('nav', {},
        element('a', {textContent: '< Mark Schumaker',href: '/'})
      )
    )
  }

  return (
    element('nav', {},
      element('a', {
        textContent: 'About',
        href: '#about',
      }),
      element('a', {
        textContent: 'Work',
        href: '#work',
      }),
      element('a', {
        textContent: 'Skills',
        href: '#skills',
      }),
      element('a', {
        textContent: 'Contact',
        href: '#contact',
      }),
      element('a', {
        className: 'resume',
        textContent: 'Resume',
        href: '/mark-schumaker-resume.pdf',
      })
    )
  )
}

function Footer() {
 return (
  element('footer', {innerHTML: 'created by mark | in vanilla js | deployed on netlify'})
 )
}

function HeaderPost() {
  return (
    element('header', {})
  )
}

function Post() {

  let article;

  const onPostLoad = (html) => {
    article.innerHTML = html;
  }

  const fetchPost = () => {
    fetch(`${basePostUrl}/${location.pathname}/post.html`)
    .then((response) => response.text())
    .then(onPostLoad)
    .catch((err) => {
      console.log(err)
      alert('Oops, something went wrong!')
    });
  }
  
  fetchPost();

  return (
    element('div', {className: 'post'},
      Nav(),
      element('main', {},
        article = element('article', {}),
      ),
      Footer()
    )
  )
}

function App() {

  let listWrapper;

  const onPostsLoad = (posts) => {
    listWrapper.appendChild(
      repeat('ol', {}, posts, ({name, slug}) =>
        element('li', {},
          element('a', {
            innerHTML: name,
            href: slug,
          })
        )
      )
    )
  }

  const fetchRecentPosts = () => {
    return fetch(`${basePostUrl}/published.json`)
    .then(response => response.json())
    .then(onPostsLoad)
    .catch((e) => alert('something went wrong fetching posts'))
  }

  fetchRecentPosts();
  
  return (
    element('div', {className: 'home'},
      Nav(),
      element('main', {},
        element('header', {},
          element('h1', {innerHTML: 'Mark <br/>Schumaker'}),
          element('h2', {textContent: 'Frontend Engineer'}),
          element('p', {textContent: 'I build apps and websites with JavaScript'}),
          element('div', {className: 'links-email'},
            element('a', {href: 'https://github.com/markschu'},
              element('img', {
                src: './assets/github-mark.png'
              })
            ),
            element('a', {href: 'https://www.linkedin.com/in/mark-schumaker-5980a0a2/'},
              element('img', {
                src: './assets/LI-in-Bug.png'
              })
            ),
            element('div', {className: 'email', textContent: 'm.schumaker235@gmail.com'})
          )
        ),
        element('section', {id: 'about'},
          element('h2', {textContent: 'ABOUT'}),
          element('p', {textContent: `I started coding through Philosophy. Back when I was working on my 
            Masters, I thought a lot about logic and computation and picked up programming as 
            a way to play around with the ideas. Eventually the hobby turned into a profession and I've 
            been doing it for 10 years.`}
          ),
          element('p', {textContent: `When I'm away from my computer, I like to spend time with my family and friends, 
            read philosophy books, and hike.`}),
            element('p', {textContent: `I live in Richmond, VA.`})
        ),

        element('section', {id: 'work'},
          element('h2', {textContent: 'WORK'}),
          element('p', {innerHTML: `My main focus these days is building Node apps with React, TypeScript,
            and other tools in the JavaScript Ecosystem. I've been doing that for 8 years. 
            Even though I prefer the frontend, I have loads of <b>Full-Stack</b> experience and really enjoy those roles too. I'm passionate
            about simple solutions, avoiding complexity, and writing code that is both readable and adaptable.`}
          ),
          element('p', {innerHTML: `I'm also passionate about learning and have experience with loads of other
            technologies from Python to Haskell to WebGL. I spend a lot of time mulling over more abstract topics like
            software architecture, design, and programming paradigms. Right now, I'm reading through 
            "A Philosophy of Software Design" by John Ousterhout.`}
          )
        ),

        element('section', {id: 'skills'}, 
          element('h2', {textContent: 'SKILLS'}),
          repeat('div', {className: 'skill-list'}, skills, (skill) =>
            element('div', {className: 'pill', textContent: skill})
          ),
          element('p', {innerHTML: `On the <b>soft skill</b> side of things, I'm a good communicator, a strong creative problem solver, 
            I love to teach and explain ideas to others, I'm adaptable, and I can provide leadership to 
            junior developers. I think my greatest strength is knowing how to learn. 
            I feel like I can learn pretty much anything.`}),
        ),

        element('section', {id: 'contact'}, 
          element('h2', {textContent: 'Contact'}),
          element('p', {textContent: `m.schumaker235@gmail.com`}),
          element('p', {textContent: `248-933-1738`}),
        ),

        element('section', {id: 'writing'},
          element('h2', {textContent: 'Writing'}),
          element('p', {textContent: `I really like to think about software design, so I decided to start writing as a way 
            think through ideas and clarify my thoughts. Currently, I'm reading though a book called "The Philosophy of 
            Software Design" by John Ousterhout and responding to it.
          `}),
          listWrapper = element('div', {})
        )
      ),
      Footer()
    )
  )
}

function router() {
  const {pathname} = window.location;
  if (pathname === '/') {
    return App()
  }
  if (pathname.startsWith('/posts/')) {
    return Post();
  }
  // TODO
  // if (pathname === '/posts') {
  //   return Posts();
  // }
}
document.body.appendChild(
  window.location.pathname === '/'
  ? App()
  : Post()
);
