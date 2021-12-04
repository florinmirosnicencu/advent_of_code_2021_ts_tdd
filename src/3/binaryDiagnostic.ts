interface DiagnosticReport {
    gamma: string,
    epsilon: string
}

interface BinaryValueCounter {
    0: number,
    1: number
}

function countDigit(digitAppearances: BinaryValueCounter[], digit: number, index: number) {
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

export function binaryDiagnostic(input: string): DiagnosticReport {
    let report = {
        gamma: "",
        epsilon: ""
    }

    let digitAppearances: BinaryValueCounter[] = [];

    const list = input.split('\n');
    list.map((row) => {
        let binaryDigits = row.split('');
        binaryDigits.map((value, index) => {
            const digit = parseInt(value);
            digitAppearances = countDigit(digitAppearances, digit, index);
        })
    });

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