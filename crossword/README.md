# Crossword Solver

## Overview

The game challenges players to fill a crossword grid using a set of clues. The goal is to correctly guess all the words horizontally and vertically.

---

## Features

* Interactive crossword game logic.
* Validation of user input against the correct crossword solution.
* Clear grid representation.
* Clue-based word filling.
* Error handling and clean game flow.

---

##  Project Structure

```
project/
├── crosswordSolver.js
├── diagram.excalidraw
└── README.md
```

---

##  Game Rules

### 1.  Objective

Fill all the empty cells in the crossword with correct words based on the provided clues.

### 3. ✔️ Valid Moves

* Letters must match both horizontally and vertically.
* Words must fit the grid size.
* Conflicting letters are not allowed.

### 4. ❌ Invalid Moves

* Wrong word length.
* Letters that contradict another valid crossing word.
* Non-alphabetic characters.

---

##  Installation

```bash
git clone https://learn.zone01oujda.ma/git/iabid/crossword.git
cd crossword
go run .
```

⚠️ Note: The command will not work unless you copy the test into it.
### default test

```js
const emptyPuzzle = `2001
0..0
1000
0..0`
const words = ['casa', 'alan', 'ciao', 'anta']
crosswordSolver(emptyPuzzle, words)
```


## Tech Stack
These are the main language used to build this project:

<a href="https://skillicons.dev">
  <img src="https://skillicons.dev/icons?i=js" />
</a>

## Contributors
This project is a **Crossword Game** implemented by the team:

| Member | Role / Contribution |
|---------|--------------|
| **Yassine Bourazza** | Solved the word choices using backtracking | 
| **Ilyas Abid** | Retrieved and handled the grid coordinates | 
| **Mohamed Rhouibi** | Parsed the puzzle data and returned detailed errors 

Thanks to the team.
