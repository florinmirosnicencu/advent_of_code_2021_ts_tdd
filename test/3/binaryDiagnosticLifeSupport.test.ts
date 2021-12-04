import {binaryDiagnosticLifeSupport} from '../../src/3/binaryDiagnosticLifeSupport';
import * as fs from "fs";

test('for no input it returns o2 "" and co2 ""', () => {
    const input = ``;

    expect(binaryDiagnosticLifeSupport(input)).toStrictEqual({
        o2: "",
        co2: ""
    })
});

test('for 1 0 it returns o2 "1" and co2 "0"', () => {
    const input = `1
0`;

    expect(binaryDiagnosticLifeSupport(input)).toStrictEqual({
        o2: "1",
        co2: "0"
    })
});

test('for 11 00 it returns o2 "11" and co2 "00"', () => {
    const input = `11
00`;

    expect(binaryDiagnosticLifeSupport(input)).toStrictEqual({
        o2: "11",
        co2: "00"
    })
});