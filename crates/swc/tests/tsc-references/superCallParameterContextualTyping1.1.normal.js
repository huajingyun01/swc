//// [superCallParameterContextualTyping1.ts]
import { _ as _class_call_check } from "@swc/helpers/_/_class_call_check";
import { _ as _inherits } from "@swc/helpers/_/_inherits";
import { _ as _create_super } from "@swc/helpers/_/_create_super";
var A = function A(map) {
    "use strict";
    _class_call_check(this, A);
    this.map = map;
};
var B = /*#__PURE__*/ function(A) {
    "use strict";
    _inherits(B, A);
    var _super = _create_super(B);
    function B() {
        _class_call_check(this, B);
        return _super.call(this, function(value) {
            return String(value.toExponential());
        });
    }
    return B;
}(A);
