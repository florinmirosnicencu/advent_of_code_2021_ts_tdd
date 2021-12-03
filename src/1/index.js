"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sonarSweep = void 0;
function sonarSweep(input) {
    const sweeps = input.split('\n');
    let largerMeasurementsMax = 0;
    sweeps.reduce((previousValue, currentValue) => {
        largerMeasurementsMax++;
    });
    return largerMeasurementsMax;
}
exports.sonarSweep = sonarSweep;
