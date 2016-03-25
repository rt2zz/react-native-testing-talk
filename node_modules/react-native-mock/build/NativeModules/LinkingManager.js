"use strict";

var _test = function _test(url) {
  return true;
};
var LinkingManger = {
  openUrl: function () {
    function openUrl(url) {
      return Promise.resolve(true);
    }

    return openUrl;
  }(),
  canOpenUrl: function () {
    function canOpenUrl(url) {
      return Promise.resolve(_test(url));
    }

    return canOpenUrl;
  }(),
  __setCanOpenURLTest: function () {
    function __setCanOpenURLTest(test) {
      _test = test;
    }

    return __setCanOpenURLTest;
  }()
};

module.exports = LinkingManger;