var ben = require('ben');

var test = function (done) {
    setTimeout(done, 10);
};

ben.async(test, function (ms) {
    console.log(ms + ' milliseconds per iteration');
});
