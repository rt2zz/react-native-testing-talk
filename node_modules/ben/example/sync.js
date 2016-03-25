var ben = require('ben');

var ms = ben(function () {
    JSON.parse('[1,2,3]')
});

console.log(ms + ' milliseconds per iteration');
