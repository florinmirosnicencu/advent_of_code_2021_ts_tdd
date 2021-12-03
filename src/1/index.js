"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sonarSweep = void 0;
function sonarSweep(input) {
    let numberOfIncreases = 0;
    let prevValue;
    let sweeps = input.split('\n').map(num => parseInt(num, 10));
    console.log(sweeps);
    sweeps.forEach((val) => {
        if (prevValue == undefined) {
            prevValue = val;
            return;
        }
        if (val > prevValue) {
            numberOfIncreases++;
        }
        prevValue = val;
    });
    return numberOfIncreases;
}
exports.sonarSweep = sonarSweep;
