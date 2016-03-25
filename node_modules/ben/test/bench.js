var test = require('tap').test;
var ben = require('../');

test('parse', function (t) {
    var a = ben(1000, function () {
        JSON.parse('[1,2,3]')
    });
    t.ok(a < 1);
    t.ok(a > 0);
    
    var b = ben(function () {
        JSON.parse('[ 1 , 2 , 3 ]')
    });
    t.ok(b < 1);
    t.ok(b > 0);
    
    t.ok(Math.abs(a - b) < 0.01);
    
    var c = ben(function () {
        eval('[1,2,3]')
    });
    t.ok(c < 1);
    t.ok(c > 0);
    
    t.ok(Math.abs(a - c) < 0.1);
    
    t.end();
});
