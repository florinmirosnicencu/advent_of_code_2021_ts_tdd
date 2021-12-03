export function sonarSweep(input: string): number {
    let numberOfIncreases = 0;
    let prevValue: number
    let sweeps = input.split('\n').map(num => parseInt(num, 10));
    console.log(sweeps);
    sweeps.forEach((val) => {
            if (prevValue == undefined) {
                prevValue = val;
                return;
            }

            if (val > prevValue) {
                numberOfIncreases++;
            }

            prevValue = val;
        }
    )

    return numberOfIncreases;
}

