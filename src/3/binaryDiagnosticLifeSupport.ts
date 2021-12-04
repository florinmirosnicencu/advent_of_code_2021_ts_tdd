import {BinaryValueCounter, countDigit, parseInput} from "./binaryDigitHelper";

interface LifeSupportReport {
    o2: string,
    co2: string
}

export function binaryDiagnosticLifeSupport(input: string): LifeSupportReport {
    let result = {
        o2: "",
        co2: ""
    }

    let digitAppearances: BinaryValueCounter[] = [];

    const RowList = parseInput(input);
    RowList.map((row, index) => {
        const digit = parseInt(row);
        if (isNaN(digit)) {
            return;
        }

        digitAppearances = countDigit(digitAppearances, digit, 1);
    });

    digitAppearances.map((value) => {
        if (value["1"] == undefined && value["0"] == undefined) {
            return;
        }

        if (value["1"] >= value["0"]) {
            result.o2 += "1";
            result.co2 += "0"
            return
        }

        result.o2 += "0";
        result.co2 += "1"
        return
    })

    return result;
}