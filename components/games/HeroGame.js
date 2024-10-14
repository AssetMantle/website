"use client";
import React, { useRef, useState, useEffect } from "react";

export default function HeroGame() {
  const canvasRef = useRef(null);
  const [isRunning, setIsRunning] = useState(false);
  const [grid, setGrid] = useState({});
  const [lastTime, setLastTime] = useState(performance.now());
  const cellSize = 10; // Size of each cell
  let rows, cols;
  const targetFrameDelay = 1; // Target delay between frames in milliseconds

  //   Constant pattern (hardcoded example pattern)
  const patternInput = `!Name: Gliders by the dozen
  !A methuselah with lifespan 184 that emits exactly 12 gliders over the course of its evolution.
  !www.conwaylife.com/wiki/index.php?title=Gliders_by_the_dozen
  OOO
  ..O
  ...
  O..
  OOO`;

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
      const xOffset = Math.floor((cols - patternWidth) / 2);
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
