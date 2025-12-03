function crosswordSolver(puzzle, words) {
  // 1. Basic Type Checks
  if (typeof puzzle !== 'string' || !Array.isArray(words)) {
    console.log('Error');
    return;
  }

  // 2. Check for duplicate words in the input list
  const uniqueWords = new Set(words);
  if (uniqueWords.size !== words.length) {
    console.log('Error');
    return;
  }

  // 3. Parse Puzzle Grid
  const gridRows = puzzle.trim().split('\n');
  if (gridRows.length === 0) {
    console.log('Error');
    return;
  }

  const height = gridRows.length;
  const width = gridRows[0].length;

  // 4. Validate Grid Consistency and Characters
  for (let r = 0; r < height; r++) {
    if (gridRows[r].length !== width) {
      console.log('Error');
      return;
    }
    for (let c = 0; c < width; c++) {
      // Allowed chars: '0', '1', '2', or '.'
      if (!/^[0-2.]$/.test(gridRows[r][c])) {
        console.log('Error');
        return;
      }
    }
  }

  // 5. Identify Slots and Validate Word Counts
  const slots = [];
  
  for (let r = 0; r < height; r++) {
    for (let c = 0; c < width; c++) {
      const char = gridRows[r][c];
      if (char === '.') continue;

      const expectedStarts = parseInt(char, 10);
      let actualStarts = 0;

      // Check Horizontal Start
      // A word starts if it's the beginning of a row or preceded by '.', AND has length > 1
      if (c === 0 || gridRows[r][c - 1] === '.') {
        let len = 0;
        for (let k = c; k < width && gridRows[r][k] !== '.'; k++) {
          len++;
        }
        // Assuming crossword words must be at least length 2 to allow for intersections
        // and to match the logic where '0' allows single letters without counting as a start.
        if (len > 1) {
          actualStarts++;
          slots.push({ r, c, len, dir: 'H' });
        }
      }

      // Check Vertical Start
      if (r === 0 || gridRows[r - 1][c] === '.') {
        let len = 0;
        for (let k = r; k < height && gridRows[k][c] !== '.'; k++) {
          len++;
        }
        if (len > 1) {
          actualStarts++;
          slots.push({ r, c, len, dir: 'V' });
        }
      }

      if (actualStarts !== expectedStarts) {
        console.log('Error');
        return;
      }
    }
  }

  // 6. Validate Word Count Matches Slot Count
  if (slots.length !== words.length) {
    console.log('Error');
    return;
  }

  // 7. Solve (Backtracking)
  const grid = gridRows.map(row => row.split(''));
  const solutions = [];

  function solve(slotIdx, usedWordsMask) {
    // Optimization: If we found more than 1 solution, we can stop (it's an error condition)
    if (solutions.length > 1) return ;

    if (slotIdx === slots.length) {
      solutions.push(grid.map(row => row.join('')).join('\n'));
      return;
    }

    const slot = slots[slotIdx];

    for (let i = 0; i < words.length; i++) {
      if (usedWordsMask[i]) continue;
      
      const word = words[i];
      if (word.length !== slot.len) continue;

      // Check if word fits in the current grid state
      let fits = true;
      for (let k = 0; k < word.length; k++) {
        const r = slot.dir === 'H' ? slot.r : slot.r + k;
        const c = slot.dir === 'H' ? slot.c + k : slot.c;
        const currentCell = grid[r][c];
        
        // The cell is either a number (unfilled) or a character (filled by another word)
        // Note: Using regex to check if it's a digit 0-9
        if (!/^[0-9]$/.test(currentCell) && currentCell !== word[k]) {
          fits = false;
          break;
        }
      }

      if (fits) {
        // Place word and recurse
        const backup = [];
        for (let k = 0; k < word.length; k++) {
          const r = slot.dir === 'H' ? slot.r : slot.r + k;
          const c = slot.dir === 'H' ? slot.c + k : slot.c;
          // Save current state for backtracking
          backup.push({ r, c, val: grid[r][c] });
          grid[r][c] = word[k];
        }

        usedWordsMask[i] = true;
        solve(slotIdx + 1, usedWordsMask);
          if (solutions.length > 1) return ;
        usedWordsMask[i] = false;

        for (const item of backup) {
          grid[item.r][item.c] = item.val;
        }
      }
    }
  }

  solve(0, new Array(words.length).fill(false));
  if (solutions.length === 1) {
    console.log(solutions[0]);
  } else {
    console.log('Error');
  }
}
const puzzle = '2001\n0..0\n1000\n0..0'
const words = ['aaab', 'aaac', 'aaad', 'aaae']
crosswordSolver(puzzle, words)