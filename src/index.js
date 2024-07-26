const basePostUrl = 'https://raw.githubusercontent.com/MarkSchu/writing-on-software/main';
const skills = [
  'Frontend', 'Full Stack', 'JavaScript', 'React', 'TypeScript', 'Node', 'Jest', 'Express', 'Hapi', 'Redux', 
  'Sass', 'Less', 'Webpack', 'GraphQL', 'MongoDB', 'SQL', 'CSS/HTML', 'Design Patterns', 
  'RESTful APIs', 'Responsive Design', 'A11y'
];

// utils

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

// api calls 

const fetchPublished = (onPublishedLoad) => {
  return fetch(`${basePostUrl}/published-v2.json`)
  .then(response => response.json())
  .then(obj => {
    obj.slugs = {};
    obj.notes.forEach(note => {
      note.posts.forEach(post => {
        obj.slugs[`notes/${note.slug}/${post.slug}`] = {
          noteTitle: note.title,
          postTitle: post.title,
          author: note.author,
          type: 'note'
        }
      })
    });
    obj.posts.forEach(post => {
      obj.slugs[`posts/${post.slug}`] = {
        postTitle: post.title,
        postSubtitle: post.subtitle,
        type: 'post'
      };
    });
    return obj;
  })
  .catch((e) => alert('something went wrong fetching posts'))
  .then(onPublishedLoad || (() => {}))
}

// shared components

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

// pages


function Post() {

  function NoteHeader(postdata) {
    return (
      element('header', {},
        element('h1', {innerHTML: `Notes on <br>${postdata.noteTitle}<br> <span>by ${postdata.author}</span>`}),
        element('h2', {textContent: postdata.postTitle})
      )
    )
  }

  function PostHeader(postdata) {
    return (
      element('header', {},
        element('header', {},
          element('h1', {innerHTML: postdata.postTitle}),
          element('h2', {textContent: postdata.postSubtitle}),
        )
      )
    )
  }

  const onPublishedLoad = (published) => {
    const path = location.pathname.replace('/writing/', '');
    const postdata = published.slugs[path];
    const headerEl = document.querySelector('header');
    if (postdata.type === 'note') {
      headerEl.appendChild(NoteHeader(postdata))
    }
    if (postdata.type === 'post') {
      headerEl.appendChild(PostHeader(postdata))
    }
  }

  const fetchPost = () => {
    const path = location.pathname.replace('/writing/', '');
    fetch(`${basePostUrl}/${path}.html`)
    .then(response => response.text())
    .then(html => { document.querySelector('article').innerHTML = html; })
    .catch((err) => {
      console.log(err)
      alert('Oops, something went wrong!')
    });
  } 

  fetchPublished(onPublishedLoad);
  fetchPost()

  return (
    element('div', {className: 'post'},
      Nav(),
      element('main', {},
        element('header', {}),
        element('article', {}),
      ),
      Footer()
    )
  )
}

function Writing() {

  const renderNotes = (published) => {
    const el = document.getElementById('notes');
    const { notes } = published;
    el.appendChild(
      repeat('ol', {}, notes, note => 
        element('li', {},
          element('div', {textContent: `${note.title}, by ${note.author}`}),
          repeat('ol', {}, note.posts, post =>
            element('li', {},
              element('a', {
                textContent: `${post.title}`,
                href: `writing/notes/${note.slug}/${post.slug}`
              }),
            )  
          )
        )
      )
    )
  }

  const renderPosts = (published) => {
    const el = document.getElementById('posts');
    const { posts } = published;
    el.appendChild(
      repeat('ol', {}, posts, (post) =>
        element('li', {},
          element('a', {
            textContent: `${post.title}, by ${post.author}`,
            href: `writing/posts/${post.slug}`
          })
        )
      )
    )
  }
  
  const onPublishedLoad = (published) => {
    renderNotes(published);
    renderPosts(published);
  }

  fetchPublished(onPublishedLoad);

  return (
    element('div', {className: 'writing'},
      Nav(),
      element('main', {},
        element('h1', {textContent: 'Writing'}),
        element('section', {id: 'notes'},
          element('h2', {textContent: 'Notes'}),
        ),
        element('section', {id: 'posts'},
          element('h2', {textContent: 'Posts'})
        )
      ),
      Footer()
    )
  )
}

function Home() {
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
              element('img', { src: './assets/github-mark.png' })
            ),
            element('a', {href: 'https://www.linkedin.com/in/mark-schumaker-5980a0a2/'},
              element('img', { src: './assets/LI-in-Bug.png' })
            ),
            element('div', {className: 'email', textContent: 'm.schumaker235@gmail.com'})
          )
        ),

        // about
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

        // work
        element('section', {id: 'work'},
          element('h2', {textContent: 'WORK'}),
          element('p', {innerHTML: `My main focus these days is building Node apps with React, TypeScript,
            and other tools in the JavaScript Ecosystem. I've been doing that for 8 years. 
            Even though I prefer the frontend, I have loads of <b>Full-Stack</b> experience and really enjoy those roles too. I'm passionate
            about simple solutions, avoiding complexity, and writing code that is both readable and adaptable.`}
          ),
          element('p', {textContent: `I'm currently working on a Next.js app for exchanging native plants.`}
          ),
          element('p', {innerHTML: `I'm also passionate about learning and have experience with loads of other
            technologies from Python to Haskell to WebGL. I spend a lot of time mulling over more abstract topics like
            software architecture, design, and programming paradigms. Right now, I'm reading through 
            "A Philosophy of Software Design" by John Ousterhout.`}
          )
        ),

        // skills 
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

        // contact
        element('section', {id: 'contact'}, 
          element('h2', {textContent: 'Contact'}),
          element('p', {textContent: `m.schumaker235@gmail.com`}),
          element('p', {textContent: `248-933-1738`}),
        ),

        // writing
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

// router
function route() {
  const {pathname} = window.location;

  if (pathname === '/') {
    return Home();
  }

  if (pathname.startsWith('/writing/posts/')) {
    return Post();
  }

  if (pathname.startsWith('/writing/notes/')) {
    return Post();
  }

  if (pathname.startsWith('/writing')) {
    return Writing();
  }
}

document.body.appendChild(
  route()
);
