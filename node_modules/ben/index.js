var ben = module.exports = function (times, cb) {
    if (typeof times === 'function') {
        cb = times;
        times = 10000;
    }
    
    var t0 = Date.now();
    for (var i = 0; i < times; i++) {
        cb();
    }
    var elapsed = Date.now() - t0;
    
    return elapsed / times;
};
ben.sync = ben;

ben.async = function (times, cb, resultCb) {
    if (typeof times === 'function') {
        resultCb = cb;
        cb = times;
        times = 100;
    }
    
    var pending = times;
    var t = Date.now();
    var elapsed = 0;
    
    cb(function fn () {
        elapsed += Date.now() - t;
        
        if (--pending === 0) {
            resultCb(elapsed / times);
        }
        else {
            t = Date.now();
            cb(fn);
        }
    });
};
