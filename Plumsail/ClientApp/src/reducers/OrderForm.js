"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var immer_1 = require("immer");
var initalState = {
    type: "",
    payload: {
        showOrderForm: false
    }
};
var OrderFormReducer = function (state, action) {
    if (state === void 0) { state = initalState; }
    return immer_1.default(state, function (draft) {
        if (action.type === "ORDER_FORM_SEND") {
        }
    });
};
exports.default = OrderFormReducer;
//# sourceMappingURL=OrderForm.js.map