"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sonarSweep = void 0;
function sonarSweep(input) {
    let maxStreak = 0;
    let prevValue;
    let streak = 0;
    let sweeps = input.split('\n').map(num => parseInt(num, 10));
    sweeps.forEach((val) => {
        if (prevValue == undefined) {
            prevValue = val;
            return;
        }
        if (val <= prevValue) {
            streak = 0;
            prevValue = val;
            return;
        }
        streak++;
        if (streak > maxStreak) {
            maxStreak = streak;
        }
        prevValue = val;
    });
    return maxStreak;
}
exports.sonarSweep = sonarSweep;
