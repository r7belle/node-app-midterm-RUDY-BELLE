const fs = require ('fs');

const write = function(data="Nothing") {
    fs.writeFileSync('Note.txt', data);
}
module.exports = write;