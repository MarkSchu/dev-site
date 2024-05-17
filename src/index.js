import { element, onpathchange } from 'utils/dom.js';
import HomePage from 'pages/home/home.js';
import AboutPage from 'pages/about/about.js';
import ContactPage from 'pages/contact/contact.js';
import ExperimentsPage from 'pages/experiments/experiments.js';

function NotFound() {
  return (
    element('div', {textContent: 'Not found!!!'})
  )
}

function App() {
  return (
    element('div', {},
      onpathchange((path) => {

        if (path === '/') {
          return HomePage();
        }

        if (path === '/about') {
          return AboutPage();
        }

        if (path === '/contact') {
          return ContactPage();
        }

        if (path === '/experiments') {
          return ExperimentsPage();
        }

        if (path.startsWith('/experiments')) {
          return getExperiment(path);
        }

        return NotFound();
      })
    )
  )
}

document.body.appendChild(
  App()
);
