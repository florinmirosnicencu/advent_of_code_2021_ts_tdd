export function sonarSweep(input: string): number {
    const sweeps = input.split('\n');
    let largerMeasurementsMax = 0;
    sweeps.reduce(
        (previousValue: number,
         currentValue: number) => {
            largerMeasurementsMax++;
        }
    )

    return largerMeasurementsMax;
}

