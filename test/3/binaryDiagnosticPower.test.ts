import {binaryDiagnosticPower} from '../../src/3/binaryDiagnosticPower';
import * as fs from "fs";

test('for no input it returns gamma 0 and epsilon 0', () => {
    const input = ``;

    expect(binaryDiagnosticPower(input)).toStrictEqual({
        gamma: "",
        epsilon: ""
    })
});

test('for input 1 it returns gamma 1 and epsilon 0', () => {
    const input = `1`;

    expect(binaryDiagnosticPower(input)).toStrictEqual({
        gamma: "1",
        epsilon: "0"
    })
});

test('for input 11 00 it returns gamma 11 and epsilon 00', () => {
    const input = `11
00`;

    expect(binaryDiagnosticPower(input)).toStrictEqual({
        gamma: "11",
        epsilon: "00"
    })
});

test('simplified sample input', () => {

    let input = "";
    try {
        input = fs.readFileSync(process.cwd() + '/test/3/simplifiedSampleOutput.txt', 'utf8');
    } catch (err) {
        throw err;
    }
    let expected = binaryDiagnosticPower(input);
    expect(expected).toStrictEqual({
        gamma: "10",
        epsilon: "01"
    });

    console.log(parseInt(expected.gamma, 2));
    console.log(parseInt(expected.epsilon, 2));
});

test('sample input', () => {

    let input = "";
    try {
        input = fs.readFileSync(process.cwd() + '/test/3/sampleInput.txt', 'utf8');
    } catch (err) {
        throw err;
    }
    let expected = binaryDiagnosticPower(input);
    expect(expected).toStrictEqual({
        gamma: "10110",
        epsilon: "01001"
    });

    console.log(parseInt(expected.gamma, 2));
    console.log(parseInt(expected.epsilon, 2));
});

test('puzzle input', () => {

    let input = "";
    try {
        input = fs.readFileSync(process.cwd() + '/test/3/testInput.txt', 'utf8');
    } catch (err) {
        throw err;
    }
    let expected = binaryDiagnosticPower(input);
    expect(expected).toStrictEqual({
        gamma: "100111100011",
        epsilon: "011000011100"
    });

    console.log(parseInt(expected.gamma, 2));
    console.log(parseInt(expected.epsilon, 2));
});