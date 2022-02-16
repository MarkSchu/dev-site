const fs = require('fs');
const path = require('path');

function getName(filename) {
  return filename.replace('-', ' ');
}

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1)
}

function getComponent(filename) {
  const words = filename.split('-');
  return words.map(capitalize).join('');
}

function getPath(filename) {
  return `experiments/${filename}`;
}

const experimentsDirectory = path.resolve(__dirname, 'src/experiments');
const outputDirectory = path.resolve(__dirname, 'src/utils/experiments');
const filenames = fs.readdirSync(experimentsDirectory);
let importStatements = '';
let conditionalStatements = '';
let objectExpressions = '';

filenames.forEach((filename) => {
  const name = getName(filename);
  if (name.includes('DS_Store')) {
    return;
  }
  const component = getComponent(filename);
  const path = getPath(filename);
  importStatements += `import ${component} from '${path}';\n`;
  conditionalStatements += (`
  if (path === '/${path}') {
    return ${component}();
  }`);
  objectExpressions += (`
    {
      name: '${name}',
      href: '${path}'
    },\n`);
});

const getFileStr = (
`${importStatements}

export function getExperiment(path) {
  ${conditionalStatements}
}`);

const listFileStr = (
`export const experimentList = [
  ${objectExpressions}
]`);

fs.writeFileSync(`${outputDirectory}/get-experiment.js`, getFileStr);
fs.writeFileSync(`${outputDirectory}/list.js`, listFileStr);
