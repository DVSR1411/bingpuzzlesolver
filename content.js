/*!
* Bing Puzzle Solver
* (c) 2025 D.V.Sathwik Reddy
* License: MIT
*/
(async function() {
  const wait = ms => new Promise(res => setTimeout(res, ms));
  await wait(3000);
  const size = 3;
  const board = Array(size).fill().map(() => Array(size).fill(0));
  const tiles = document.querySelectorAll("#tiles .tile");
  tiles.forEach(tile => {
    try {
      const x = parseInt(tile.getAttribute("x")); 
      const y = parseInt(tile.getAttribute("y"));
      const img = tile.querySelector("img");
      const num = img ? parseInt(img.id.replace("img","")) + 1 : 0;
      board[x][y] = num;
    } catch {
    }
  });
  const goal = [
    [1, 2, 3],
    [4, 5, 6], 
    [7, 8, 0]
  ];
  const path = aStar(board, goal);
  if (path) {
    console.log(`Auto-solve: ${path.length} moves`);
    for (let val of path) {
      const el = Array.from(document.querySelectorAll(".tile"))
        .find(tile => {
          const img = tile.querySelector("img");
          const num = img ? parseInt(img.id.replace("img","")) + 1 : 0;
          return num === val;
        });
      if (el) {
        el.click();
        await wait(350);
      }
    }
  } else {
    console.log("Auto-solver: No solution found.");
  }
})();
