function removeChildren(parent, children) {
  children.forEach((child) => {
    parent.removeChild(child);
  });
}

function addChildren(parent, children) {
  children.forEach(child => parent.appendChild(child));
}

function toListOfChildren(children) {
  return [children].flat();
}

function addAttrs(el, attrs) {
  for (const attr in attrs) {
    el[attr] = attrs[attr];
  }
}

export function element(tag, attrs) {
  const el = document.createElement(tag);
  addAttrs(el, attrs);
  const children = Array.from(arguments).slice(2).flat();
  children.forEach((child) => {
    el.appendChild(child);
  });
  return el;
}

export function repeat(list, createElement) {
  return list.map((item) => {
    return createElement(item);
  })
}

export function repeatfor(n, createElement) {
  let children = [];
  for (var i=0; i < n; i++) {
    children.push(createElement(i));
  }
  return children;
}

export function bind(state, callback) {
  let oldChildren = toListOfChildren(callback(state, state.data));
  state.on('*', () => {
    let newChildren = toListOfChildren(callback(state, state.data));
    let parent = oldChildren[0].parentElement;
    if (parent) {
      removeChildren(parent, oldChildren);
      addChildren(parent, newChildren);
    }
    oldChildren = newChildren;
  });
  return oldChildren;
}

export function onpathchange(callback) {
  let oldEl = callback(window.location.pathname);
  window.addEventListener('popstate', () => {
    let newEl = callback(window.location.pathname);
    oldEl.parentElement.replaceChild(newEl, oldEl);
    oldEl = newEl;
  });
  window.addEventListener('navigate', () => {
    let newEl = callback(window.location.pathname);
    oldEl.parentElement.replaceChild(newEl, oldEl);
    oldEl = newEl;
  });

  return oldEl;
}
