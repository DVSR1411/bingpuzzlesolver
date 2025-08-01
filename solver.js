/*!
* Bing Puzzle Solver
* (c) 2025 D.V.Sathwik Reddy
* License: MIT
*/
class State {
  constructor(board, goal, moves = 0, prev = null) {
    this.board = board.map(row => [...row]);
    this.goal = goal;
    this.moves = moves;
    this.prev = prev;
    this.dimension = board.length;
    this.emptyTile = this.findEmpty();
    this.cost = this.calculateCost();
  }
  findEmpty() {
    for (let i = 0; i < this.dimension; i++) {
      for (let j = 0; j < this.dimension; j++) {
        if (this.board[i][j] === 0) return [i, j];
      }
    }
    return null;
  }
  calculateCost() {
    let cost = this.moves;
    for (let i = 0; i < this.dimension; i++) {
      for (let j = 0; j < this.dimension; j++) {
        const val = this.board[i][j];
        if (val !== 0) {
          const [gx, gy] = this.findInGoal(val);
          cost += Math.abs(i - gx) + Math.abs(j - gy);
        }
      }
    }
    return cost;
  }
  findInGoal(value) {
    for (let i = 0; i < this.dimension; i++) {
      for (let j = 0; j < this.dimension; j++) {
        if (this.goal[i][j] === value) return [i, j];
      }
    }
    return null;
  }
  generateSuccessors() {
    const successors = [];
    const [x, y] = this.emptyTile;
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    for (let [dx, dy] of dirs) {
      const newX = x + dx;
      const newY = y + dy;
      if (newX >= 0 && newX < this.dimension && newY >= 0 && newY < this.dimension) {
        const newBoard = this.board.map(row => [...row]);
        [newBoard[x][y], newBoard[newX][newY]] = [newBoard[newX][newY], newBoard[x][y]];
        successors.push(new State(newBoard, this.goal, this.moves + 1, this));
      }
    }
    return successors;
  }
  isGoal() {
    for (let i = 0; i < this.dimension; i++) {
      for (let j = 0; j < this.dimension; j++) {
        if (this.board[i][j] !== this.goal[i][j]) return false;
      }
    }
    return true;
  }
  boardKey() {
    return this.board.flat().join(",");
  }
}
function reconstructPath(state) {
  const path = [];
  while (state.prev) {
    const [ex, ey] = state.prev.emptyTile;
    const [cx, cy] = state.emptyTile;
    path.push(state.prev.board[cx][cy]);
    state = state.prev;
  }
  return path.reverse();
}
function aStar(initial, goal) {
  const open = [new State(initial, goal)];
  const closed = new Set();
  while (open.length) {
    open.sort((a, b) => a.cost - b.cost);
    const current = open.shift();
    if (current.isGoal()) return reconstructPath(current);
    closed.add(current.boardKey());
    for (let next of current.generateSuccessors()) {
      if (!closed.has(next.boardKey())) {
        open.push(next);
      }
    }
  }
  return null;
}