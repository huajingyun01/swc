//// [index.js]
import { _ as _class_call_check } from "@swc/helpers/_/_class_call_check";
module.exports = function _class(p) {
    "use strict";
    _class_call_check(this, _class);
    this.t = 12 + p;
};
module.exports.Sub = function _class() {
    "use strict";
    _class_call_check(this, _class);
    this.instance = new module.exports(10);
};
