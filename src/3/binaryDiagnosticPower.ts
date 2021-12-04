import {BinaryValueCounter, countDigit, parseInput} from "./binaryDigitHelper";

interface DiagnosticReportPower {
    gamma: string,
    epsilon: string
}

function calculatePowerConsumption(digitAppearances: BinaryValueCounter[], report: { epsilon: string; gamma: string }) {
    digitAppearances.map((value) => {
        if (value[0] > value[1]) {
            report.gamma += 0;
            report.epsilon += 1;
            return;
        }
        report.gamma += 1;
        report.epsilon += 0;
    })
    return report;
}

export function binaryDiagnosticPower(input: string): DiagnosticReportPower {
    let report = {
        gamma: "",
        epsilon: ""
    }

    let digitAppearances: BinaryValueCounter[] = [];

    const list = parseInput(input);
    list.map((row) => {
        let binaryDigits = row.split('');
        binaryDigits.map((value, index) => {
            const digit = parseInt(value);
            digitAppearances = countDigit(digitAppearances, digit, index);
        })
    });

    report = calculatePowerConsumption(digitAppearances, report);

    return report;
}