const postcss = require('postcss');
const cssnano = require('cssnano');
const fs = require('fs');

const css = fs.readFileSync('app/globals.css', 'utf8');
postcss([cssnano])
  .process(css, { from: 'app/globals.css', to: '/tmp/globals.min.css' })
  .then(result => {
    console.log('Success globals!');
  })
  .catch(err => {
    console.error('Error during cssnano processing globals:');
    console.error(err.message);
  });
