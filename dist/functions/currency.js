"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dollarsToCents = exports.centsToDollars = void 0;
// eg. 1000 -> 10.00
var centsToDollars = function (value) {
    return value / 100;
};
exports.centsToDollars = centsToDollars;
// eg. 10.00 => 1000
var dollarsToCents = function (value) {
    return Math.round(value * 100);
};
exports.dollarsToCents = dollarsToCents;
//# sourceMappingURL=currency.js.map