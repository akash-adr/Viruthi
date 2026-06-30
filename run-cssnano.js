const postcss = require('postcss');
const cssnano = require('cssnano');
const fs = require('fs');

const css = fs.readFileSync('/tmp/mat.css', 'utf8');
postcss([cssnano])
  .process(css, { from: '/tmp/mat.css', to: '/tmp/mat.min.css' })
  .then(result => {
    console.log('Success!');
  })
  .catch(err => {
    console.error('Error during cssnano processing:');
    console.error(err.message);
  });
