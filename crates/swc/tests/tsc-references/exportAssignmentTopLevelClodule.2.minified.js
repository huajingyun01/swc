//// [foo_0.ts]
define([
    "require",
    "@swc/helpers/_/_class_call_check"
], function(require, _class_call_check) {
    "use strict";
    var Foo = function Foo() {
        "use strict";
        _class_call_check._(this, Foo), this.test = "test";
    };
    return (Foo || (Foo = {})).answer = 42, Foo;
});
//// [foo_1.ts]
define([
    "require",
    "exports",
    "./foo_0"
], function(require, exports, _foo_0) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), 42 === _foo_0.answer && new _foo_0();
});
