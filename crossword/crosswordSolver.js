const paths = []
const solutions = []
let puzzle2D = []

// this is the main function 
function crosswordSolver(puzzle, words) {

  let err = dataParser(puzzle, words)
  if (!err) return console.log('Error')
  puzzle = puzzle.split('\n')

  const vertical = puzzle.length;
  const horizontal = puzzle[0].length

  err = getCoordinates(vertical, horizontal, puzzle)
  if (!err) return console.log('Error')

  puzzle2D = puzzle.map(row => row.split(''))

  solve(0, new Array(words.length).fill(false), words)

  if (solutions.length != 1) {
    console.log('Error')
    return
  }

  err = solutionCHecker(solutions)
  if (!err) return console.log('Error')


  console.log(solutions[0])
}
// dataparser : this function parse the inputs and return the errors
function dataParser(puzzle, words) {
  if (typeof puzzle !== 'string' || !Array.isArray(words)) return false

  const checkWords = new Set(words)
  if (checkWords.size !== words.length) return false

  for (let word of words) {
    if (/[^a-z]/i.test(word)) return false
  }

  puzzle = puzzle.split('\n')
  if (puzzle.length === 0) return false

  for (let y = 0; y < puzzle.length; y++) {
    if (puzzle[y].length !== puzzle[0].length) return false
    for (let x = 0; x < puzzle[y].length; x++) {
      if (!/^[012.]$/.test(puzzle[y][x])) return false
    }
  }
  return true
}
// this petit function check if the result is not valid 
function solutionCHecker() {
  for (let currentPlace of solutions[0]) {
    if (currentPlace == '0') return false
  }
  return true
}
// function get coordinates : this function get the data from puzzle & words list
function getCoordinates(vertical, horizontal, puzzle) {
  for (let y = 0; y < vertical; y++) {
    for (let x = 0; x < horizontal; x++) {
      if (puzzle[y][x] === '.' || puzzle[y][x] === '0') continue;

      const expectedStarts = +puzzle[y][x]
      let actualStarts = 0


      // Horizontal Start
      if (x === 0 || puzzle[y][x - 1] === '.') {
        let len = 0;
        for (let k = x; k < horizontal; k++) {
          if (puzzle[y][k] === '.') break
          len++
        }
        if (len > 1) {
          actualStarts++
          paths.push({ y, x, len, direction: 'H' })
        }
      }


      // Vertical Start
      if (y === 0 || puzzle[y - 1][x] === '.') {
        let len = 0
        for (let k = y; k < vertical; k++) {
          if (puzzle[k][x] === '.') break
          len++
        }
        if (len > 1) {
          actualStarts++
          paths.push({ y, x, len, direction: 'V' })

        }
      }

      if (actualStarts !== expectedStarts) {
        return false
      }
    }
  }

  if (paths.length !== words.length) {
    return false
  }
  return true
}

// function solve : this function use the backtraking algorithme to check the puzzle
function solve(currentPath, wordArray, words) {

  if (solutions.length > 1) return

  if (currentPath === paths.length) {
    solutions.push(puzzle2D.map(row => row.join('')).join('\n'));
    return
  }

  const coordinates = paths[currentPath]

  for (let i = 0; i < words.length; i++) {
    if (wordArray[i]) continue
    const word = words[i]
    if (word.length !== coordinates.len) continue
    let valid = true
    for (let k = 0; k < word.length; k++) {
      let row
      let col
      if (coordinates.direction === 'H') {
        row = coordinates.y
        col = coordinates.x + k
      } else {
        row = coordinates.y + k
        col = coordinates.x
      }

      const currentCell = puzzle2D[row][col]      

      if (/[^012]/.test(currentCell) && currentCell !== word[k]) {
        valid = false
        break
      }


    }

    if (valid) {
      const backup = []
      for (let k = 0; k < word.length; k++) {
        let row
        let col
        if (coordinates.direction === 'H') {
          row = coordinates.y
          col = coordinates.x + k
        } else {
          col = coordinates.x
          row = coordinates.y + k
        }
        backup.push({ y: row, x: col, val: puzzle2D[row][col] })
        puzzle2D[row][col] = word[k];
      }
      wordArray[i] = true
      solve(currentPath + 1, wordArray, words)
      // backup all placed flag [0,1,2]
      for (const path of backup) {
        puzzle2D[path.y][path.x] = path.val
      }

    }
    wordArray[i] = false
  }
}

