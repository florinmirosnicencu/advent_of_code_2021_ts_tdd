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

test('for 10 01 11 01 10 it returns o2 "10" and co2 "01"', () => {
    const input = `10
01
11
01
10`;

    expect(binaryDiagnosticLifeSupport(input)).toStrictEqual({
        o2: "10",
        co2: "00"
    })
});

test('sample output', () => {
    let input = "";
    try {
        input = fs.readFileSync(process.cwd() + '/test/3/sampleInput.txt', 'utf8');
    } catch (err) {
        throw err;
    }

    expect(binaryDiagnosticLifeSupport(input)).toStrictEqual({
        o2: "10111",
        co2: "01010"
    })
});

test('puzzle input', () => {
    let input = "";
    try {
        input = fs.readFileSync(process.cwd() + '/test/3/testInput.txt', 'utf8');
    } catch (err) {
        throw err;
    }
    let result = binaryDiagnosticLifeSupport(input)

    expect(result).toStrictEqual({
        o2: "100101011101",
        co2: "001010100001"
    });
    console.log(parseInt(result.o2, 2) * parseInt(result.co2, 2));
});