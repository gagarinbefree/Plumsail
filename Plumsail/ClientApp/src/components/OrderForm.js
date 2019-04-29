"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var OrderForm = /** @class */ (function (_super) {
    __extends(OrderForm, _super);
    function OrderForm(props) {
        return _super.call(this, props) || this;
    }
    OrderForm.prototype.render = function () {
        return (React.createElement("div", { id: "orderForm", className: "modal", tabIndex: -1, role: "dialog" },
            React.createElement("div", { className: "modal-dialog", role: "document" },
                React.createElement("div", { className: "modal-content" },
                    React.createElement("div", { className: "modal-header" },
                        React.createElement("h5", { className: "modal-title" }, "Modal title"),
                        React.createElement("button", { type: "button", className: "close", "data-dismiss": "modal", "aria-label": "Close" },
                            React.createElement("span", { "aria-hidden": "true" }, "\u00D7"))),
                    React.createElement("div", { className: "modal-body" },
                        React.createElement("p", null, "Modal body text goes here.")),
                    React.createElement("div", { className: "modal-footer" },
                        React.createElement("button", { type: "button", className: "btn btn-secondary", "data-dismiss": "modal" }, "Close"),
                        React.createElement("button", { type: "button", className: "btn btn-primary" }, "Save changes"))))));
    };
    return OrderForm;
}(React.Component));
exports.default = OrderForm;
//# sourceMappingURL=OrderForm.js.map