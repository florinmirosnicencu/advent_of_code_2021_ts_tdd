import {sonarSweep} from '../../src/1/index';

test('it returns 1 when 1,2 are given', () => {
    const input = `1
2`;

    expect(sonarSweep(input)).toBe(1);
});

test('it returns 2 when 1,2,3 are given', () => {
    const input = `1
2
3`;

    expect(sonarSweep(input)).toBe(2);
});
test('it returns 2 when 1,2,1 are given', () => {
    const input = `1
2
1`;

    expect(sonarSweep(input)).toBe(1);
});