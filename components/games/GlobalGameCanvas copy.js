"use client";
import React, { useRef, useState, useEffect } from "react";

export default function GlobalGameCanvas({ indicator }) {
  const canvasRef = useRef(null);
  const [isRunning, setIsRunning] = useState(false);
  const [grid, setGrid] = useState({});
  const [lastTime, setLastTime] = useState(performance.now());
  const cellSize = 10; // Size of each cell
  let rows, cols;
  const targetFrameDelay = 100; // Target delay between frames in milliseconds

  // Example patterns
  const PatternsArray = [
    {
      patterns: [
        {
          pattern: `
#N Glider
#C A small spaceship
#C 
O..
.O.
OOO`,
          x: (cols) => {
            return Math.floor(cols / 4);
          },
          y: (rows) => {
            return Math.floor(rows / 4);
          },
        },
      ],
    },
  ];

  useEffect(() => {
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

    function setPatternAtPosition(input, xOffset, yOffset) {
      const lines = input.trim().split("\n");
      const patternLines = lines.slice(3); // Skip metadata lines
      const newGrid = { ...grid }; // Start with the current grid

      patternLines.forEach((line, index) => {
        for (let i = 0; i < line.length; i++) {
          if (line[i] === "O") {
            const rowIndex = yOffset + index;
            const colIndex = xOffset + i;
            newGrid[`${rowIndex},${colIndex}`] = true;
          }
        }
      });

      return newGrid; // Return updated grid
    }

    function setMultiplePatterns(patterns) {
      let updatedGrid = { ...grid }; // Start with the current grid

      patterns.forEach(({ pattern, xOffset, yOffset }) => {
        updatedGrid = setPatternAtPosition(pattern, xOffset, yOffset);
      });

      setGrid(updatedGrid); // Update grid with all patterns
    }

    function resetGrid() {
      setGrid({});
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

    // Initialize grid and set default pattern on load
    initializeGrid();
    // console.log(
    //   PatternsArray[0]?.patterns?.[0]?.pattern,
    //   PatternsArray[0]?.patterns?.[0]?.x(cols),
    //   PatternsArray[0]?.patterns?.[0]?.y(rows)
    // );
    setPatternAtPosition(
      PatternsArray[0]?.patterns?.[0]?.pattern,
      PatternsArray[0]?.patterns?.[0]?.x(cols),
      PatternsArray[0]?.patterns?.[0]?.y(rows)
    ); // Start with default pattern
    draw();
    setIsRunning(true);
    requestAnimationFrame(gameLoop);

    window.addEventListener("resize", initializeGrid);

    return () => {
      window.removeEventListener("resize", initializeGrid);
    };
  }, [indicator, grid, isRunning, lastTime]);

  return (
    <div className="am-game-container">
      <canvas ref={canvasRef} style={{ display: "block" }}></canvas>
    </div>
  );
}
