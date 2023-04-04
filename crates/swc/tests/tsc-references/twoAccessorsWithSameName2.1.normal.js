//// [twoAccessorsWithSameName2.ts]
import { _ as _class_call_check } from "@swc/helpers/_/_class_call_check";
import { _ as _create_class } from "@swc/helpers/_/_create_class";
var C = /*#__PURE__*/ function() {
    "use strict";
    function C() {
        _class_call_check(this, C);
    }
    _create_class(C, null, [
        {
            key: "x",
            get: function get() {
                return 1;
            } // error
        }
    ]);
    return C;
}();
var D = /*#__PURE__*/ function() {
    "use strict";
    function D() {
        _class_call_check(this, D);
    }
    _create_class(D, null, [
        {
            key: "x",
            set: function set(v) {} // error
        }
    ]);
    return D;
}();
var E = /*#__PURE__*/ function() {
    "use strict";
    function E() {
        _class_call_check(this, E);
    }
    _create_class(E, null, [
        {
            key: "x",
            get: function get() {
                return 1;
            },
            set: function set(v) {}
        }
    ]);
    return E;
}();
