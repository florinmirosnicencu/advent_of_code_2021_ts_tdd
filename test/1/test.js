"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../src/1/index");
const fs = require('fs');
test('it returns 1 when 1,2 are given', () => {
    const input = `1
2`;
    expect((0, index_1.sonarSweep)(input)).toBe(1);
});
test('it returns 2 when 1,2,3 are given', () => {
    const input = `1
2
3`;
    expect((0, index_1.sonarSweep)(input)).toBe(2);
});
test('it returns 2 when 1,2,1 are given', () => {
    const input = `1
2
1`;
    expect((0, index_1.sonarSweep)(input)).toBe(1);
});
test('it returns the correct value for the final value', () => {
    let input = "";
    try {
        input = fs.readFileSync(process.cwd() + '/test/1/testInput.txt', 'utf8');
    }
    catch (err) {
        throw err;
    }
    expect((0, index_1.sonarSweep)(input)).toBe(12);
});
