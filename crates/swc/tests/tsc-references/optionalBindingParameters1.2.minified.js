//// [optionalBindingParameters1.ts]
import { _ as _sliced_to_array } from "@swc/helpers/_/_sliced_to_array";
function foo(param) {
    var _param = _sliced_to_array(param, 3);
    _param[0], _param[1], _param[2];
}
foo([
    "",
    0,
    !1
]), foo([
    !1,
    0,
    ""
]);
