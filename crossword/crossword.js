// const puzzle = '2001\n0..0\n1000\n0..0'
const words = ['casa', 'alan', 'ciao', 'anta']
const puzzle = "...1...........\n..1000001000...\n...0....0......\n.1......0...1..\n.0....100000000\n100000..0...0..\n.0.....1001000.\n.0.1....0.0....\n.10000000.0....\n.0.0......0....\n.0.0.....100...\n...0......0....\n..........0...."

function crosswordSolver(puzzle, words) {

    var puzzle = puzzle.split('\n')
    for (let index in puzzle) {
        puzzle[index] = puzzle[index].split('')
    }

    /*---------- Get the coordinates ----------*/

    let coordinates = {}
    let paths = []
    let lengthH = puzzle[0].length

    

    for (let y = 0; y < puzzle.length; y++) {
        for (let x = 0; x < lengthH; x++) {
            console.log(puzzle[y]);
            
            coordinates[y + ':' + x] = { type: +puzzle[y][x] }
            if (coordinates[y + ':' + x].type == 1 && puzzle[y][x + 1] == '0' && puzzle[y][x - 1] != '0') {
                coordinates[y + ':' + x].direction = 'H'
                coordinates[y + ':' + x].path = puzzle[y].slice(x)
            } else if (coordinates[y + ':' + x].type == 1) {
                coordinates[y + ':' + x].direction = 'V'
                coordinates[y + ':' + x].path = []
                console.log(coordinates,'-----');
                for (let index = y ; index < puzzle.length;index++) {
                    coordinates[y + ':' + x].path.push(puzzle[index][x])
                }
                
            }
        }

    }
    let keys = Object.keys(coordinates)
    for (let key of keys) {
        if (coordinates[key].path) {
            paths.push(coordinates[key].path)
        }
    }
    console.log(paths);
}

crosswordSolver(puzzle, words)

