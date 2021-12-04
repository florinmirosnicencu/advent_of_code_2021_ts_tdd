export interface BinaryValueCounter {
    0: number,
    1: number
}

export function parseInput(input: string): string[] {
    return input.split('\n');
}

export function countDigit(digitAppearances: BinaryValueCounter[], digit: number, index: number) {
    if (digitAppearances[index] == undefined) {
        digitAppearances[index] = {
            0: +(digit === 0),
            1: +(digit === 1),
        }
    }

    // @ts-ignore
    digitAppearances[index][digit]++;

    return digitAppearances;
}