const fs = require('fs');
let content = fs.readFileSync('app/services/maternal-care/page.tsx', 'utf8');

const regex = /const maternalCareCSS = `([\s\S]*?)`;\n\nexport default function MaternalCarePage/;
const match = content.match(regex);
if (match) {
  const css = match[1];
  content = content.replace(regex, 'export default function MaternalCarePage');
  content = content.replace('<style dangerouslySetInnerHTML={{ __html: maternalCareCSS }} />', '<style dangerouslySetInnerHTML={{ __html: `' + css + '` }} />');
  fs.writeFileSync('app/services/maternal-care/page.tsx', content);
  console.log('Reverted patch!');
} else {
  console.log('Not found');
}
