import {dive} from "../../src/2/dive";
import * as fs from 'fs';

test('it returns hor 0 and depth 0 for empty input', () => {
    const input = ``;

    expect(dive(input)).toStrictEqual({
        horizontal: 0,
        depth: 0
    });
});

test('it can go forward 1', () => {
    const input = `forward 1`;

    expect(dive(input)).toStrictEqual({
        horizontal: 1,
        depth: 0
    });
});

test('it can go down 1 when aim is 1 and it moves 1 unit', () => {
    const input = `down 1
forward 1`;

    expect(dive(input)).toStrictEqual({
        horizontal: 1,
        depth: 1
    });
});

test('it can go down 1 and up 1 and be depth 0', () => {
    const input = `down 1
up 1`;

    expect(dive(input)).toStrictEqual({
        horizontal: 0,
        depth: 0
    });
});

test('min depth is 0', () => {
    const input = `up 1
forward 1`;

    expect(dive(input)).toStrictEqual({
        horizontal: 1,
        depth: 0
    });
});

test('for down 2 and forward 2 depth should be 4', () =>{
    const input = `down 2
forward 2`;

    expect(dive(input)).toStrictEqual({
        horizontal: 2,
        depth: 4
    });
})
test('puzzle input', () => {

    let input = "";
    try {
        input = fs.readFileSync(process.cwd() + '/test/2/testInput.txt', 'utf8');
    } catch (err) {
        throw err;
    }

    expect(dive(input)).toStrictEqual({
        horizontal: 2083,
        depth: 1002964
    });
});
