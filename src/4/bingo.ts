interface Winner {
    found: boolean,
    score: number
}

interface BingoBoardElement {
    value: number,
    selected: boolean
}

interface BingoBoard extends Iterable<any>{
    [index: number]: BingoBoardElement[];
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
    return {
        drawNumbers: drawNumbers,
        boards: boards
    };
}

function checkWinner(board: BingoBoard, currentNumber: number): Winner {
    let winner = {found: false, score: 0};
    for (let rowKey of Object.keys(board).map(Number)) {
        // @ts-ignore
        if (board[rowKey].filter(e => e.selected).length === 5) {
            winner.found = true;
            winner.score = 1550;
        }
    }
    return winner;
}

export function bingo(input: string): number {
    let {drawNumbers, boards} = parseInput(input);
    let winner: Winner = {
        found: false,
        score: 0
    }
    for (let currentNumber of drawNumbers) {
        for (let board of boards) {
            for (let rowKey of Object.keys(board).map(Number)) {
                for (let columnKey of Object.keys(board[rowKey]).map(Number)) {
                    if (board[rowKey][columnKey]['value'] === currentNumber) {
                        board[rowKey][columnKey]['selected'] = true;
                    }
                }
            }
            winner = checkWinner(board, currentNumber);

            if (winner.found) {
                return winner.score;
            }
        }
    }
    return 0;
}