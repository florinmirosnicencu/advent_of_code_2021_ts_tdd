interface BingoBoardElement {
    value: number,
    selected: boolean
}

interface BingoBoardRow {
    [index: number]: BingoBoardElement;
}

interface BingoBoard {
    [index: number]: BingoBoardRow;
}

function prepareDrawNumbers(numbers: string): number[] {
    return numbers.split(',').map((num) => {
        return parseInt(num, 10);
    });
}

function prepareBoards(data: string[]): BingoBoard[] {
    let i = 0;
    let bingoBoards: BingoBoard[] = [];
    let currentBoard: BingoBoard = [];
    while (i < data.length) {
        const currentRow = data[i].split(' ').map((num) => {
            return parseInt(num, 10)
        });

        currentBoard[i % 5] = currentRow.map((val) => {
            return {
                value: val,
                selected: false
            }
        });
        if (i % 5 === 4) {
            bingoBoards.push(currentBoard);
        }
        i++;
    }
    return bingoBoards;
}

export function parseInput(input: string): {
    drawNumbers: number[],
    boards: BingoBoard[]
} {
    const data = input.split('\n');

    const drawNumbers = prepareDrawNumbers(data[0]);
    let boards = prepareBoards(data.filter((val, index) => {
        return index > 1;
    }));

    drawNumbers.forEach((currentNumber) => {
        boards.forEach((board, boardIndex) => {
            board.forEach((row, rowIndex) => {
                row.forEach((rowValue, rowIndex) => {

                });
            };
        });
    };

    return {
        drawNumbers: drawNumbers,
        boards: []
    };
}

export function bingo(input: string): number {
    let {drawNumbers, boards} = parseInput(input);
    return 0;
}