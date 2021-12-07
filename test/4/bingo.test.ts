import {bingo} from "../../src/4/bingo";

test("For a random board and no input it returns 0", () => {
    const input = `

22 13 17 11  0
 8  2 23  4 24
21  9 14 16  7
 6 10  3 18  5
 1 12 20 15 19`
    const result = bingo(input);
    expect(result).toStrictEqual(0);
})

test("For a board that has 12345 on a row and input of 12345 it returns 1550", () => {
    const input = `1,2,3,4,5

1 2 3 4 5
6 7 8 9 10
11 12 13 14 15
16 17 18 19 20
21 22 23 24 25`
    //the sum of all unselected numbers on the board is 310 and the winning number is 5
    //so returned score should be 310 * 5
    const result = bingo(input);
    expect(result).toStrictEqual(1550);
})