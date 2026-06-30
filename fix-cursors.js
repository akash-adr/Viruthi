const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = [...walk('app'), ...walk('components')];
let changedFiles = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const regex = /cursor:\s*['"]none['"],?/g;
  if (regex.test(content)) {
    content = content.replace(regex, "cursor: 'pointer',");
    fs.writeFileSync(file, content);
    console.log('Fixed', file);
    changedFiles++;
  }
});

console.log('Total files changed:', changedFiles);
