const postcss = require('postcss');
const cssnano = require('cssnano');
const fs = require('fs');

const css = fs.readFileSync('app/globals.css', 'utf8');
postcss([cssnano])
  .process(css, { from: 'app/globals.css', to: '/tmp/globals.min.css' })
  .catch(err => {
    console.error(`Error at line ${err.line}, column ${err.column}:`);
    console.error(err.message);
  });
