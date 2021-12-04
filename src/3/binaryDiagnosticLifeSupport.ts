import {BinaryValueCounter, countDigit, parseInput} from "./binaryDigitHelper";

interface LifeSupportReport {
    o2: string,
    co2: string
}

function calculateO2(digitPosition: number, maxDigitCount: number, digitAppearances: BinaryValueCounter[], RowList: string[]): string {
    let binaryString = "";
    let filteredRows = RowList;
    while (digitPosition < maxDigitCount) {
        digitAppearances = [];
        filteredRows.map((row, index) => {
            const digitArray = row.split("");

            const digit = parseInt(digitArray[digitPosition]);
            if (isNaN(digit)) {
                return;
            }

            digitAppearances = countDigit(digitAppearances, digit, digitPosition);
        });

        digitAppearances.map((value) => {
            if (value["1"] == undefined && value["0"] == undefined) {
                return;
            }

            if (value["1"] >= value["0"]) {
                binaryString += "1";
                return;
            }

            binaryString += "0";
            return;
        })
        const mostCommonValueForCurrentPosition = digitAppearances[digitPosition][1] >= digitAppearances[digitPosition][0] ? "1" : "0";
        filteredRows = filteredRows.filter(element => {
            return element[digitPosition] === mostCommonValueForCurrentPosition;
        })

        if (filteredRows.length === 1) {
            return filteredRows[0];
        }

        digitPosition++;
    }

    return binaryString;
}

function calculateCo2(digitPosition: number, maxDigitCount: number, digitAppearances: BinaryValueCounter[], RowList: string[]): string {
    let binaryString = "";
    let filteredRows = RowList;
    while (digitPosition < maxDigitCount) {
        digitAppearances = [];
        filteredRows.map((row, index) => {
            const digitArray = row.split("");

            const digit = parseInt(digitArray[digitPosition]);
            if (isNaN(digit)) {
                return;
            }

            digitAppearances = countDigit(digitAppearances, digit, digitPosition);
        });

        digitAppearances.map((value) => {
            if (value["1"] == undefined && value["0"] == undefined) {
                return;
            }

            if (value["0"] <= value["1"]) {
                binaryString += "0";
                return;
            }

            binaryString += "1";
            return;
        })

        const mostCommonValueForCurrentPosition = digitAppearances[digitPosition][0] <= digitAppearances[digitPosition][1] ? "0" : "1";
        filteredRows = filteredRows.filter(element => {
            return element[digitPosition] === mostCommonValueForCurrentPosition;
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

    let digitAppearances: BinaryValueCounter[] = [];

    const RowList = parseInput(input);
    const maxDigitCount = RowList[0].split('').length;
    let digitPosition = 0;
    result.o2 = calculateO2(digitPosition, maxDigitCount, digitAppearances, RowList);
    result.co2 = calculateCo2(digitPosition, maxDigitCount, digitAppearances, RowList);

    return result;
}