import {sonarSweep3Rows} from '../../src/1/sonarSweep3Rows';

const fs = require('fs');
test('it returns 1 when 1,1,1,2 are given', () => {
    const input = `1
1
1
2`;
    expect(sonarSweep3Rows(input)).toBe(1);
});

test('it returns 1 when 1,2,3,3,2,1 are given', () => {
    const input = `1
2
3
3
2
1`;
    expect(sonarSweep3Rows(input)).toBe(1);
});


test('it returns the correct value for the final value', () => {
    let input = "";

    try {
        input = fs.readFileSync(process.cwd() + '/test/1/testInput.txt', 'utf8');
    } catch (err) {
        throw err;
    }

    expect(sonarSweep3Rows(input)).toBe(1162);
});