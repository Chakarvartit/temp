const path = require('path');

console.log(path.sep);

const joinedPath = path.join('/content','subfolder','tex.txt'); // Joining with the current directory
console.log('Joined Path:', joinedPath);

const basename = path.basename(joinedPath);
console.log('Base Name:', basename);

const absolute = path.resolve(__dirname, 'content','subfolder','tex.txt');
console.log(absolute)