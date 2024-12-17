"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidPropertyType = isValidPropertyType;
exports.isValidStatusType = isValidStatusType;
var fieldUtils_1 = require("../fieldUtils");
function isValidPropertyType(value) {
    return fieldUtils_1.propertyTypeOptions.includes(value);
}
function isValidStatusType(value) {
    return fieldUtils_1.statusTypes.includes(value);
}
//# sourceMappingURL=validations.js.map