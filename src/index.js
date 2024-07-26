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

  return (
    element('nav', {className: 'nav'},
      (pathname === '/'
        ? element('span', {})
        : element('a', {
          textContent: 'Home',
          href: '/',
        })
      ),
      element('a', {
        textContent: 'Writing',
        href: '/writing',
      }),
      (pathname !== '/'
        ? element('span', {})
        : element('a', {
          textContent: 'Resume',
          href: '/mark-schumaker-resume.pdf',
        })
      )
    )
  )
}

function Footer() {
 return (
  element('footer', {
    className: 'footer',
    textContent: 'created by mark | vanilla js & css | netlify'})
 )
}

// pages
function Post() {

  function NoteHeader(postdata) {
    return (
      element('header', {},
        element('h2', {innerHTML: `Notes on <i>${postdata.noteTitle}</i> <span>by ${postdata.author}</span>`}),
        element('h3', {textContent: postdata.postTitle})
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
      alert('Oops, something went wrong!')
    });
  } 

  fetchPublished(onPublishedLoad);
  fetchPost()

  return (
    element('div', {className: 'layout'},
      Nav(),
      element('main', {className: 'main'},
        element('header', {}),
        element('article', {className: 'article'}),
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
      repeat('div', {}, notes, note => 
        element('div', {},
          element('h2', {innerHTML: `Notes on <i>${note.title}</i>, by ${note.author}`}),
          repeat('ul', {}, note.posts, post =>
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
    element('div', {className: 'layout'},
      Nav(),
      element('main', {className: 'main'},
        element('header', {},
          element('h1', {textContent: 'Writing'}),
          element('p', {innerHTML: `I really like to think about software design, so I decided to start writing as a way to
            think through ideas and clarify my thoughts. Currently, I'm reading a book called <i>The Philosophy of 
            Software Design</i> by John Ousterhout and responding to it.`
          }),
        ),
        element('section', {id: 'notes', className: 'section'}),
        // element('section', {id: 'posts'},
        //   element('h2', {textContent: 'Misc Posts'})
        // )
      ),
      Footer()
    )
  )
}

function Home() {
  return (
    element('div', {className: 'layout'},
      Nav(),
      element('main', {className: 'main'},

        // header
        element('header', {className: 'hero'},
          element('h1', {innerHTML: 'Mark <br/>Schumaker'}),
          element('h2', {textContent: 'Frontend Engineer'}),
          element('p', {textContent: 'I build apps and websites with JavaScript'}),
          element('div', {className: 'hero-links'},
            element('a', {href: 'https://github.com/markschu'},
              element('img', { 
                className: 'icon',
                src: './assets/github-mark.png',
              })
            ),
            element('a', {href: 'https://www.linkedin.com/in/mark-schumaker-5980a0a2/'},
              element('img', { 
                className: 'icon',
                src: './assets/LI-in-Bug.png' 
              })
            )
          )
        ),

        // about
        element('section', {className: 'section'},
          element('h2', {textContent: 'About'}),
          element('p', {textContent: `I started coding through Philosophy. Back when I was working on my 
            Masters, I thought a lot about logic and computation and picked up programming as 
            a way to play around with the ideas. Eventually the hobby turned into a profession and I've 
            been doing it for 10 years.`}
          ),
          element('p', {textContent: `I live in Richmond, VA. When I'm away from my computer, I like to spend time with my family and friends, 
            read philosophy books, and hike.`}),
            element('p', {innerHTML: `<b>m.schumaker235@gmail.com</b> | <b>248-933-1738</b>`}),
        ),

        // work
        element('section', {className: 'section'},
          element('h2', {textContent: 'Work'}),
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
            <i>A Philosophy of Software Design</i> by John Ousterhout.`}
          )
        ),

        // skills 
        element('section', {className: 'section'}, 
          element('h2', {textContent: 'Skills'}),
          repeat('div', {className: 'skill-list'}, skills, (skill) =>
            element('div', {className: 'pill', textContent: skill})
          ),
          element('p', {innerHTML: `On the <b>soft skill</b> side of things, I'm a good communicator, a strong creative problem solver, 
            I love to teach and explain ideas to others, I'm adaptable, and I can provide leadership to 
            junior developers. I think my greatest strength is knowing how to learn. 
            I feel like I can learn pretty much anything.`}),
        ),

        // writing
        element('section', {className: 'section'},
          element('a', {href: '/writing'},
            element('h2', {textContent: 'Writing'})
          ),
          element('p', {innerHTML: `I really like to think about software design, so I decided to start writing as a way to
            think through ideas and clarify my thoughts. Currently, I'm reading a book called <i>The Philosophy of 
            Software Design</i> by John Ousterhout and responding to it.`
          }),
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
