import getFile from './index.js';
//executar usando node cli.js ./files/post.md
const path = process.argv;
console.log(getFile(path[2]));