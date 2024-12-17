"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCoords = void 0;
var validateCoords = function (coords) {
    var lat = coords.lat, lng = coords.lng;
    var latIsValid = false;
    var lngIsValid = false;
    if (typeof lat === 'number' && typeof lng === 'number') {
        if (lat >= -90 && lat <= 90)
            latIsValid = true;
        if (lng >= -180 && lng <= 180)
            lngIsValid = true;
    }
    return (latIsValid && lngIsValid);
};
exports.validateCoords = validateCoords;
//# sourceMappingURL=validateCoords.js.map