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
require("bootstrap/dist/js/bootstrap");
require("bootstrap/dist/css/bootstrap.css");
var OrderForm_1 = require("../containers/OrderForm");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        return _super.call(this, props) || this;
    }
    App.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement("div", { className: "container-fluid" },
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "ml-3 mt-3" },
                        React.createElement("button", { type: "button", className: "btn btn-primary", onClick: function () { return _this.props.onShowOrderForm(); }, "data-toggle": "modal", "data-target": "#orderForm" }, "Create order"),
                        React.createElement(OrderForm_1.default, null))))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=App.js.map