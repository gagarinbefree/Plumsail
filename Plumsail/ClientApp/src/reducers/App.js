"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var immer_1 = require("immer");
var initalState = {
    type: "",
    payload: {
        showOrderForm: false
    }
};
var AppReducer = function (state, action) {
    if (state === void 0) { state = initalState; }
    return immer_1.default(state, function (draft) {
        if (action.type === "APP_SHOW_CREATE_ORDER_FORM") {
            draft.payload.showOrderForm = action.showOrderForm;
            console.log(action.showOrderForm.toString());
        }
    });
};
exports.default = AppReducer;
//# sourceMappingURL=App.js.map