"use client";
import React, { useRef, useState, useEffect } from "react";

export default function BuilderGame() {
  const canvasRef = useRef(null);
  const [isRunning, setIsRunning] = useState(false);
  const [grid, setGrid] = useState({});
  const [lastTime, setLastTime] = useState(performance.now());
  const cellSize = 5; // Size of each cell
  let rows, cols;
  const targetFrameDelay = 10; // Target delay between frames in milliseconds

  // Constant pattern (hardcoded example pattern)
  const patternInput = `
  ! c/2 wickstretcher
! A c/2 orthogonal wickstretcher that stretches a period 6 wick
...............................................................OOO.............OOO....OOO.....OOO....OOO.............OOO..
..............................................................O..O.....OOO....O..O....O..O...O..O....O..O....OOO.....O..O.
.................................................................O....O..O.......O....O..O...O..O....O.......O..O....O....
.............................................................O...O....O...O..O...O...O.O.OO.OO.O.O...O...O..O...O....O...O
.................................................................O..O...O.O......O..OOO..O...O..OOO..O......O.O...O..O....
.................................................................O.O........OO..O...OOO.OOO.OOO.OOO...O..OO........O.O....
...................................................................O........OOOOO........OO.OO........OOOOO........O......
...............................................................OOO...O......OO...........................OO......O...OOO..
...............................................................................OO........O...O........OO..................
..........................................................................................................................
.......................................................................................OOO...OOO..........................
....................................................................................OO...........OO.......................
....................................................................................O...O.....O...O.......................
.....................................................................................O.OO.....OO.O........................
...................................................................................O.O.O.......O.O.O......................
..................................................................................O.O..OOOO.OOOO..O.O.....................
..................................................................................O.O.O...O.O...O.O.O.....................
.................................................................................OO.O.O.OOO.OOO.O.O.OO....................
..OOO.............OOO....OOO.....OOO....OOO.............OOO.........................O.....O.O.....O.......................
.O..O.....OOO....O..O....O..O...O..O....O..O....OOO.....O..O........................O.OOOOO.OOOOO.O.......................
....O....O..O.......O....O..O...O..O....O.......O..O....O............................O...O...O...O........................
O...O....O...O..O...O...O.O.OO.OO.O.O...O...O..O...O....O...O.........................OO.O...O.OO.........................
....O..O...O.O......O..OOO..O...O..OOO..O......O.O...O..O..........................OOO..O.....O..OOO......................
....O.O........OO..O...OOO.OOO.OOO.OOO...O..OO........O.O..........................O..O.O.....O.O..O......................
......O........OOOOO........OO.OO........OOOOO........O.............................O.O.........O.O.......................
..OOO...O......OO...........................OO......O...OOO........................OO.O.OO...OO.O.OO......................
..................OO........O...O........OO.......................................O...O.OO...OO.O...O.....................
...................................................................................O.OO.OO...OO.OO.O......................
..........................OOO...OOO...............................................OO.O.O.......O.O.OO.....................
.......................OO...........OO...............................................O.O.......O.O........................
.......................O...O.....O...O...............................................O.OO.....OO.O........................
........................O.OO.....OO.O..............................................OO.O.O.....O.O.OO......................
......................O.O.O.......O.O.O.............................................O..O.......O..O.......................
.....................O.O..OOOO.OOOO..O.O............................................O.O.OO...OO.O.O.......................
.....................O.O.O...O.O...O.O.O.............................................O.OO.....OO.O........................
....................OO.O.O.OOO.OOO.O.O.OO..........................................O.O....O.O....O.O......................
.......................O.....O.O.....O............................................O.O.OO.OO.OO.OO.O.O.....................
.......................O.OOOOO.OOOOO.O............................................O.O.O...O.O...O.O.O.....................
........................O...O...O...O..............................................O..O.O.O.O.O.O..O......................
.........................OO.O...O.OO................................................OOOOO.O.O.OOOOO.......................
......................OOO..O.....O..OOO..................................................O...O............................
......................O..O.O.....O.O..O............................................O.OOOO.....OOOO.O......................
.......................O.O.........O.O.............................................OO.O.........O.OO......................
......................OO.O.OO...OO.O.OO......................
.....................O...O.OO...OO.O...O.....................
......................O.OO.OO...OO.OO.O......................
.....................OO.O.O.......O.O.OO.....................
........................O.O.......O.O........................
........................O.OO.....OO.O........................
......................OO.O.O.....O.O.OO......................
.......................O..O.......O..O.......................
.......................O.O.OO...OO.O.O.......................
........................O.OO.....OO.O........................
......................O.O....O.O....O.O......................
.....................O.O.OO.OO.OO.OO.O.O.....................
.....................O.O.O...O.O...O.O.O.....................
......................O..O.O.O.O.O.O..O......................
.......................OOOOO.O.O.OOOOO.......................
............................O...O............................
......................O.OOOO.....OOOO.O......................
......................OO.O.........O.OO......................
`;

  useEffect(() => {
    setLastTime(performance.now());
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function initializeGrid() {
      rows = Math.floor(window.innerHeight / cellSize);
      cols = Math.floor(window.innerWidth / cellSize);
      canvas.width = cols * cellSize;
      canvas.height = rows * cellSize;
      setGrid({});
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw live cells
      for (const key in grid) {
        const [r, c] = key.split(",").map(Number);
        ctx.fillStyle = "#FBAB30"; // Live cell color
        ctx.fillRect(c * cellSize, r * cellSize, cellSize, cellSize);
      }

      // Draw grid lines
      ctx.strokeStyle = "#FFFFFF"; // Grid line color
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          ctx.strokeRect(c * cellSize, r * cellSize, cellSize, cellSize);
        }
      }
    }

    function update() {
      const newGrid = {};
      const cellsToCheck = new Set();

      for (const key in grid) {
        const [r, c] = key.split(",").map(Number);
        cellsToCheck.add(`${r},${c}`);

        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            if (i === 0 && j === 0) continue; // Skip self
            cellsToCheck.add(`${r + i},${c + j}`);
          }
        }
      }

      for (const key of cellsToCheck) {
        const [r, c] = key.split(",").map(Number);
        const neighbors = countNeighbors(r, c);

        if (grid[key]) {
          if (neighbors === 2 || neighbors === 3) newGrid[key] = true; // Survives
        } else {
          if (neighbors === 3) newGrid[key] = true; // Becomes alive
        }
      }

      setGrid(newGrid);
    }

    function countNeighbors(row, col) {
      let count = 0;

      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (i === 0 && j === 0) continue; // Skip self
          const neighborKey = `${row + i},${col + j}`;
          if (grid[neighborKey]) {
            count++;
          }
        }
      }

      return count;
    }

    function setPatternFromInput(input) {
      const lines = input.trim().split("\n");

      // Skip the first three lines which contain metadata
      const patternLines = lines.slice(3);

      const patternWidth = Math.max(...patternLines.map((line) => line.length));
      const patternHeight = patternLines.length;

      // Correctly center the pattern based on the screen size
      const xOffset = Math.floor((cols - patternWidth) / 1);
      const yOffset = Math.floor((rows - patternHeight) / 2);

      const newGrid = {};
      patternLines.forEach((line, index) => {
        for (let i = 0; i < line.length; i++) {
          if (line[i] === "O") {
            const rowIndex = yOffset + index;
            const colIndex = xOffset + i;
            newGrid[`${rowIndex},${colIndex}`] = true;
          }
        }
      });

      setGrid(newGrid);
    }

    function gameLoop(currentTime) {
      const elapsedTime = currentTime - lastTime;

      if (isRunning && elapsedTime >= targetFrameDelay) {
        setLastTime(currentTime);
        update();
        draw();
      }

      requestAnimationFrame(gameLoop);
    }

    // Initialize grid and set pattern on load
    initializeGrid();
    setPatternFromInput(patternInput);
    draw();
    setIsRunning(true);
    requestAnimationFrame(gameLoop);

    window.addEventListener("resize", initializeGrid);

    return () => {
      window.removeEventListener("resize", initializeGrid);
    };
  }, [grid, isRunning, lastTime]);

  return (
    <div className="game-container">
      <canvas ref={canvasRef} style={{ display: "block" }}></canvas>
    </div>
  );
}
