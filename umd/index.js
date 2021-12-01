(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.index = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;

  /*****************************************************************
                    时间工具的一些积累  (qc)       
  *****************************************************************/
  function pad(n) {
    return n < 10 ? '0' + n : n;
  }

  function get_date(grid) {
    if (!grid) grid = "";
    var date = new Date();
    return date.getFullYear().toString() + grid + pad(date.getMonth() + 1) + grid + pad(date.getDate());
  }

  function get_time(grid) {
    if (!grid) grid = "";
    var date = new Date();
    return pad(date.getHours()).toString() + grid + pad(date.getMinutes()) + grid + pad(date.getSeconds());
  }

  function get_week() {
    var date = new Date();
    var weekNum = date.getDay();
    var weekValue = {
      0: "星期天",
      1: "星期一",
      2: "星期二",
      3: "星期三",
      4: "星期四",
      5: "星期五",
      6: "星期六"
    }[weekNum];
    return weekValue;
  }

  function get_stamp13() {
    var timestamp = Date.parse(new Date());
    return timestamp;
  }

  function get_stamp10() {
    var tmp = Date.parse(new Date()).toString();
    tmp = tmp.substr(0, 10);
    return Number(tmp); //perse之后返回是一个数字，这里还原
  }

  var _default = {
    get_date: get_date,
    get_time: get_time,
    get_week: get_week,
    get_stamp13: get_stamp13,
    get_stamp10: get_stamp10
  };
  _exports["default"] = _default;
});