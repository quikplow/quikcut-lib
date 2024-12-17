"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateRequestCost = exports.calculateServiceCostAsCents = void 0;
var currency_1 = require("./currency");
var calculateServiceCostAsCents = function (service, totalSquareFeet) {
    var serviceCost = (0, currency_1.dollarsToCents)(service.basePrice || 0);
    if (service.pricingPlan === 'pricedPerSquareFoot') {
        var totalSquareFeetCost = (totalSquareFeet / 500) * service.pricePer500SquareFeet;
        serviceCost += (0, currency_1.dollarsToCents)(totalSquareFeetCost);
    }
    return serviceCost;
};
exports.calculateServiceCostAsCents = calculateServiceCostAsCents;
var calculateRequestCost = function (_a) {
    var pricingConfig = _a.pricingConfig, additionalServicesRequested = _a.additionalServicesRequested, totalSquareFeet = _a.totalSquareFeet, _b = _a.asDollars, asDollars = _b === void 0 ? true : _b;
    if (!pricingConfig)
        throw new Error('Pricing config not found');
    var mowing = pricingConfig.mowing, additionalServicesPricing = pricingConfig.additionalServices;
    var mowingCost = (0, exports.calculateServiceCostAsCents)(mowing, totalSquareFeet);
    var additionalServicesCost = additionalServicesRequested.reduce(function (acc, service) {
        var additionalService = additionalServicesPricing[service];
        if (!additionalService)
            throw new Error("Additional service ".concat(service, " not found"));
        if (!additionalService.enableService)
            return acc;
        return acc + (0, exports.calculateServiceCostAsCents)(additionalService, totalSquareFeet);
    }, 0);
    var totalCost = mowingCost + additionalServicesCost;
    return asDollars ? {
        totalCost: (0, currency_1.centsToDollars)(totalCost),
        mowingCost: (0, currency_1.centsToDollars)(mowingCost),
        additionalServicesCost: (0, currency_1.centsToDollars)(additionalServicesCost),
    } : {
        totalCost: totalCost,
        mowingCost: mowingCost,
        additionalServicesCost: additionalServicesCost,
    };
};
exports.calculateRequestCost = calculateRequestCost;
//# sourceMappingURL=calculateRequestCost.js.map