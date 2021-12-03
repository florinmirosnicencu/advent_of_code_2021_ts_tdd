interface Position {
    horizontal: number,
    depth: number
}

enum Commands {
    Forward = 'forward',
    Down = 'down',
    Up = 'up',
}

export function dive(input: string): Position {
    let aim = 0;
    let position = {
        horizontal: 0,
        depth: 0
    }

    const list = input.split('\n');
    list.map((row) => {
        let command = row.split(' ')[0];
        let units = parseInt(row.split(' ')[1]);

        switch (command) {
            case Commands.Forward: {
                position.horizontal += units;

                if (aim != 0) {
                    position.depth += units * aim;
                }

                if (position.depth < 0) {
                    position.depth = 0;
                }

                break;
            }
            case Commands.Down: {
                aim += units;
                break;
            }
            case Commands.Up: {
                aim -= units;
                break;
            }

        }
    })

    return position;
}