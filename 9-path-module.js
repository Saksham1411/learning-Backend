// Built-in Path module;
const path = require('path');

console.log(path.sep);

const absolute = path.resolve(__dirname);
console.log(absolute);

const base = path.basename(absolute);
console.log(base);