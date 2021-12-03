export function sonarSweep3Rows(input: string): number {
    let numberOfIncreases = 0;
    let sweeps = input.split('\n').map(num => parseInt(num, 10));

    let a = sweeps[0];
    let b = sweeps[1];
    let c = sweeps[2];
    let prevSum = a + b + c;

    sweeps.forEach((val, index) => {
            if (index < 3) {
                return;
            }
            let currentSum = b + c + val;
            if (currentSum > prevSum) {
                numberOfIncreases++;
            }

            a = b;
            b = c;
            c = val;
            prevSum = currentSum;
        }
    )

    return numberOfIncreases;
}

