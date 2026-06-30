const postcss = require('postcss');
const cssnano = require('cssnano');
const fs = require('fs');

const css = fs.readFileSync('/tmp/rel.css', 'utf8');
postcss([cssnano])
  .process(css, { from: '/tmp/rel.css', to: '/tmp/rel.min.css' })
  .then(result => {
    console.log('Success rel!');
  })
  .catch(err => {
    console.error('Error during cssnano processing rel:');
    console.error(err.message);
  });
