const fs = require('fs');
let content = fs.readFileSync('components/LenisProvider.tsx', 'utf8');
content = content.replace(/\/\/ @ts-expect-error - extending window\n/g, '');
fs.writeFileSync('components/LenisProvider.tsx', content);
console.log('Removed all @ts-expect-error comments');
