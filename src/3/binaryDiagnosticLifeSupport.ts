import {BinaryValueCounter, parseInput} from "./binaryDigitHelper";

interface LifeSupportReport {
    o2: string,
    co2: string
}

function resetDigitAppearances(): BinaryValueCounter {
    return {
        0: 0,
        1: 0
    };
}

function calculateDigitCount(filteredRows: string[], digitPosition: number) {
    let digitAppearances = resetDigitAppearances();
    filteredRows.map((row) => {
        const digitArray = row.split("");
        const digit = parseInt(digitArray[digitPosition]);

        // @ts-ignore
        digitAppearances[digit]++;
    });
    return digitAppearances;
}

function processDigitCountForCo2(digitAppearances: BinaryValueCounter) {
    if (digitAppearances["1"] >= digitAppearances["0"]) {
        return "0";
    }
    return "1";
}

function processDigitCountForO2(digitAppearances: BinaryValueCounter) {
    if (digitAppearances["1"] >= digitAppearances["0"]) {
        return "1";
    }
    return "0";
}

function processRows(RowList: string[], digitCountProcessor: (digitAppearances: BinaryValueCounter) => string): string {
    let binaryString = "";
    let filteredRows = RowList;
    const maxDigitCount = RowList[0].split('').length;
    let digitPosition = 0;

    while (digitPosition < maxDigitCount) {
        const digitAppearances = calculateDigitCount(filteredRows, digitPosition);
        const calculatedDigit = digitCountProcessor(digitAppearances);
        binaryString += calculatedDigit;
        filteredRows = filteredRows.filter(element => {
            return element[digitPosition] === calculatedDigit;
        })

        if (filteredRows.length === 1) {
            return filteredRows[0];
        }

        digitPosition++;
    }

    return binaryString;
}

export function binaryDiagnosticLifeSupport(input: string): LifeSupportReport {
    let result = {
        o2: "",
        co2: ""
    }
    const RowList = parseInput(input);

    result.o2 = processRows(RowList, processDigitCountForO2);
    result.co2 = processRows(RowList, processDigitCountForCo2);

    return result;
}