"use client";
import React, { useRef, useState, useEffect } from "react";

export default function GlobalGameCanvas({ indicator }) {
  const PatternsArray = [
    {
      patterns: [
        {
          pattern: `!Name: Gliders by the dozen
  !A methuselah with lifespan 184 that emits exactly 12 gliders over the course of its evolution.
  !www.conwaylife.com/wiki/index.php?title=Gliders_by_the_dozen
  OOO
  ..O
  ...
  O..
  OOO`,
          x: (cols, w) => {
            return Math.floor((cols - w) / 2);
          },
          y: (rows, w) => {
            return Math.floor((rows - w) / 2);
          },
        },
      ],
      cellSize: 5,
      targetFrameDelay: 1,
    }, // hero
    {
      patterns: [
        {
          pattern: `! Inline inverter-! A reaction in which the Gosper glider gun can be used to invert the
!  presence or absence of a glider in a period 30 glider stream.
! www.conwaylife.com/wiki/index.php?title=Gosper_glider_gun
.........O..........................
.......O.O..........................
........OO..........................
....................................
....................................
....................................
....................................
................O...................
.................O..................
...............OOO..................
....................................
.......................O.O..........
.....................O...O..........
.............O.......O..............
............OOOO....O....O........OO
...........OO.O.O....O............OO
OO........OOO.O..O...O...O..........
OO.........OO.O.O......O.O..........
............OOOO....................
.............O......................`,
          x: (cols, w) => {
            return (cols - w) * 0 + 20;
          },
          y: (rows, w) => {
            return rows - w - 90;
          },
        },
        {
          pattern: `! Inline inverter-! A reaction in which the Gosper glider gun can be used to invert the
!  presence or absence of a glider in a period 30 glider stream.
! www.conwaylife.com/wiki/index.php?title=Gosper_glider_gun
.........O..........................
.......O.O..........................
........OO..........................
....................................
....................................
....................................
....................................
................O...................
.................O..................
...............OOO..................
....................................
.......................O.O..........
.....................O...O..........
.............O.......O..............
............OOOO....O....O........OO
...........OO.O.O....O............OO
OO........OOO.O..O...O...O..........
OO.........OO.O.O......O.O..........
............OOOO....................
.............O......................`,
          x: (cols, w) => {
            return (cols - w) * 0 + 30;
          },
          y: (rows, w) => {
            return rows - w - 65;
          },
        },
        {
          pattern: `! Inline inverter-! A reaction in which the Gosper glider gun can be used to invert the
!  presence or absence of a glider in a period 30 glider stream.
! www.conwaylife.com/wiki/index.php?title=Gosper_glider_gun
.........O..........................
.......O.O..........................
........OO..........................
....................................
....................................
....................................
....................................
................O...................
.................O..................
...............OOO..................
....................................
.......................O.O..........
.....................O...O..........
.............O.......O..............
............OOOO....O....O........OO
...........OO.O.O....O............OO
OO........OOO.O..O...O...O..........
OO.........OO.O.O......O.O..........
............OOOO....................
.............O......................`,
          x: (cols, w) => {
            return (cols - w) * 0 + 40;
          },
          y: (rows, w) => {
            return rows - w - 40;
          },
        },
        {
          pattern: `! Inline inverter-! A reaction in which the Gosper glider gun can be used to invert the
!  presence or absence of a glider in a period 30 glider stream.
! www.conwaylife.com/wiki/index.php?title=Gosper_glider_gun
.........O..........................
.......O.O..........................
........OO..........................
....................................
....................................
....................................
....................................
................O...................
.................O..................
...............OOO..................
....................................
.......................O.O..........
.....................O...O..........
.............O.......O..............
............OOOO....O....O........OO
...........OO.O.O....O............OO
OO........OOO.O..O...O...O..........
OO.........OO.O.O......O.O..........
............OOOO....................
.............O......................`,
          x: (cols, w) => {
            return (cols - w) * 0 + 50;
          },
          y: (rows, w) => {
            return rows - w - 15;
          },
        },
      ],
      cellSize: 5,
      targetFrameDelay: 1,
    }, // metrics
    {
      patterns: [
        {
          pattern: `! P26 dependent reflector loop-! Matthias Merzenich
! The smallest known period 26 oscillator in terms of population-! as of August 2014, discovered in April 2013.
! www.conwaylife.com/wiki/P26_dependent_reflector_loop
..........OO
..........O
....OO.OO.O....OO
..O..O.O.O.....O
..OO....O........O
................OO

................OO
O..........O...O.O
OOO.......OOO...O
...O......O.O....OOO
..O.O..............O
..OO

..OO
..O........O....OO
....O.....O.O.O..O
...OO....O.OO.OO
.........O
........OO













..........OO
..........O
....OO.OO.O....OO
..O..O.O.O.....O
..OO....O........O
................OO

................OO
O..........O...O.O
OOO.......OOO...O
...O......O.O....OOO
..O.O..............O
..OO

 ..OO
 ..O........O....OO
 ....O.....O.O.O..O
 ...OO....O.OO.OO
 .........O
 ........OO`,
          x: (cols, w) => {
            return Math.floor(((cols * 3) / 2 - w) / 2) - 50;
          },
          y: (rows, w) => {
            return Math.floor((rows - w) / 2);
          },
        },
        {
          pattern: `! P26 dependent reflector loop-! Matthias Merzenich
! The smallest known period 26 oscillator in terms of population-! as of August 2014, discovered in April 2013.
! www.conwaylife.com/wiki/P26_dependent_reflector_loop
...................OO................................
...................O.O...............................
......................O..OO..........................
....................OO.O..O..........................
...................O.O.OO............................
....................O................................
.....................................................
.....................................................
.....................................................
......................OO.............................
.....................O..O............................
.....................O.O.............................
.....................O.O.............................
................OO....O..............................
...............O.O..................O................
...............O....................OOO..............
..............OO.......................O.............
......................................OO.............
...................O.O...............................
...................OO............OO.............O..OO
....................O...........OO.............O.O..O
..................................O.....OOO.....OO.O.
.......................................O...O......O..
........................................OO.O....OO...
..........................................O.....O....
..................................................O..
..OO.............................................OO..
..O..................................................
....O.....O..........................................
...OO....O.OO........................................
..O......O...O.......................................
.O.OO.....OOO.....O..................................
O..O.O.............OO...........O....................
OO..O.............OO............OO...................
...............................O.O...................
.............OO......................................
.............O.......................OO..............
..............OOO....................O...............
................O..................O.O...............
..............................O....OO................
.............................O.O.....................
.............................O.O.....................
............................O..O.....................
.............................OO......................
.....................................................
.....................................................
.....................................................
................................O....................
............................OO.O.O...................
..........................O..O.OO....................
..........................OO..O......................
...............................O.O...................
................................OO...................`,
          x: (cols, w) => {
            return Math.floor(((cols * 3) / 2 - w) / 2) - 5;
          },
          y: (rows, w) => {
            return Math.floor((rows - w) / 2);
          },
        },
        {
          pattern: `! P26 dependent reflector loop-! Matthias Merzenich
! The smallest known period 26 oscillator in terms of population-! as of August 2014, discovered in April 2013.
! www.conwaylife.com/wiki/P26_dependent_reflector_loop
..........OO
..........O
....OO.OO.O....OO
..O..O.O.O.....O
..OO....O........O
................OO

................OO
O..........O...O.O
OOO.......OOO...O
...O......O.O....OOO
..O.O..............O
..OO

..OO
..O........O....OO
....O.....O.O.O..O
...OO....O.OO.OO
.........O
........OO














..........OO
..........O
....OO.OO.O....OO
..O..O.O.O.....O
..OO....O........O
................OO

................OO
O..........O...O.O
OOO.......OOO...O
...O......O.O....OOO
..O.O..............O
..OO

..OO
..O........O....OO
....O.....O.O.O..O
...OO....O.OO.OO
.........O
........OO`,
          x: (cols, w) => {
            return Math.floor(((cols * 3) / 2 - w) / 2) + 40;
          },
          y: (rows, w) => {
            return Math.floor((rows - w) / 2);
          },
        },
      ],
      cellSize: 5,
      targetFrameDelay: 1,
    }, // business
    {
      patterns: [
        {
          pattern: `


..OOO.............OOO....OOO.....OOO....OOO.............OOO..
.O..O.....OOO....O..O....O..O...O..O....O..O....OOO.....O..O.
....O....O..O.......O....O..O...O..O....O.......O..O....O....
O...O....O...O..O...O...O.O.OO.OO.O.O...O...O..O...O....O...O
....O..O...O.O......O..OOO..O...O..OOO..O......O.O...O..O....
....O.O........OO..O...OOO.OOO.OOO.OOO...O..OO........O.O....
......O........OOOOO........OO.OO........OOOOO........O......
..OOO...O......OO...........................OO......O...OOO..
..................OO........O...O........OO..................
.............................................................
..........................OOO...OOO..........................
.......................OO...........OO.......................
.......................O...O.....O...O.......................
........................O.OO.....OO.O........................
......................O.O.O.......O.O.O......................
.....................O.O..OOOO.OOOO..O.O.....................
.....................O.O.O...O.O...O.O.O.....................
....................OO.O.O.OOO.OOO.O.O.OO....................
.......................O.....O.O.....O.......................
.......................O.OOOOO.OOOOO.O.......................
........................O...O...O...O........................
.........................OO.O...O.OO.........................
......................OOO..O.....O..OOO......................
......................O..O.O.....O.O..O......................
.......................O.O.........O.O.......................
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
......................OO.O.........O.OO......................`,
          x: (cols, w) => {
            return Math.floor(cols - w - 5);
          },
          y: (rows, w) => {
            return Math.floor(rows - w - w / 2 - 5);
          },
        },
        {
          pattern: `


..OOO.............OOO....OOO.....OOO....OOO.............OOO..
.O..O.....OOO....O..O....O..O...O..O....O..O....OOO.....O..O.
....O....O..O.......O....O..O...O..O....O.......O..O....O....
O...O....O...O..O...O...O.O.OO.OO.O.O...O...O..O...O....O...O
....O..O...O.O......O..OOO..O...O..OOO..O......O.O...O..O....
....O.O........OO..O...OOO.OOO.OOO.OOO...O..OO........O.O....
......O........OOOOO........OO.OO........OOOOO........O......
..OOO...O......OO...........................OO......O...OOO..
..................OO........O...O........OO..................
.............................................................
..........................OOO...OOO..........................
.......................OO...........OO.......................
.......................O...O.....O...O.......................
........................O.OO.....OO.O........................
......................O.O.O.......O.O.O......................
.....................O.O..OOOO.OOOO..O.O.....................
.....................O.O.O...O.O...O.O.O.....................
....................OO.O.O.OOO.OOO.O.O.OO....................
.......................O.....O.O.....O.......................
.......................O.OOOOO.OOOOO.O.......................
........................O...O...O...O........................
.........................OO.O...O.OO.........................
......................OOO..O.....O..OOO......................
......................O..O.O.....O.O..O......................
.......................O.O.........O.O.......................
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
......................OO.O.........O.OO......................`,
          x: (cols, w) => {
            return Math.floor(cols - w - w / 1.2);
          },
          y: (rows, w) => {
            return Math.floor(rows - w);
          },
        },
      ],
      cellSize: 5,
      targetFrameDelay: 1,
    }, // builder
    {
      patterns: [
        {
          pattern: `!Name: Centinal-!Author: Bill Gosper
!A period 100 oscillator based on the p54 shuttle and the twin bees shuttle.
!www.conwaylife.com/wiki/index.php?title=Centinal
          ..O..O.O
          OO.O.OOO
          .O......O
          OO.....O

          .O.....OO
          O......O
          .OOO.O.OO
          .O.O..O




..O..O.O           ..O..O.O
OO.O.OOO           OO.O.OOO
.O......O          .O......O
OO.....O           OO.....O

.O.....OO          .O.....OO
O......O           O......O
.OOO.O.OO          .OOO.O.OO
.O.O..O            .O.O..O



          ..O..O.O
          OO.O.OOO
          .O......O
          OO.....O

          .O.....OO
          O......O
          .OOO.O.OO
          .O.O..O





      O......   ......O
      OOO....   ....OOO
      ...O...   ...O...
      ..OO...   ...OO..
      .......   .......
      .......   .......
      .......   .......
      .......   .......
      .......   .......
      .......   .......
      .....O.   .O.....
      ....OOO   OOO....
      ...OO.O   O.OO...
      .......   .......
      .......   .......
      ......O   O......
      ......O   O......
      .......   .......
      .......   .......
      .......   .......
      .......   .......
      .......   .......
      .......   .......
      .......   .......
      .......   .......
      ..OO...   ...OO..
      ..OO...   ...OO..
      .......   .......
      .......   .......
      .......   .......
      .......   .......
      .......   .......
      .......   .......
      .......   .......
      .......   .......
      .......   .......
      .......   .......
      .......   .......
      .......   .......
      ...OO.O   O.OO...
      ...O..O   O..O...
      ....OOO   OOO....
      ....         ....
      ....         ....
      ....         ....
      ....         ....
      ....         ....
      ....         ....
      ..OO         OO..
      ...O         O...
      OOO           OOO
      O               O




          ..O..O.O
          OO.O.OOO
          .O......O
          OO.....O

          .O.....OO
          O......O
          .OOO.O.OO
          .O.O..O




..O..O.O           ..O..O.O
OO.O.OOO           OO.O.OOO
.O......O          .O......O
OO.....O           OO.....O

.O.....OO          .O.....OO
O......O           O......O
.OOO.O.OO          .OOO.O.OO
.O.O..O            .O.O..O



          ..O..O.O
          OO.O.OOO
          .O......O
          OO.....O

          .O.....OO
          O......O
          .OOO.O.OO
          .O.O..O`,
          x: (cols, w) => {
            return Math.floor(cols - w * 3);
          },
          y: (rows, w) => {
            return Math.floor((rows - w) / 2);
          },
        },
        {
          pattern: `!Name: Centinal-!Author: Bill Gosper
!A period 100 oscillator based on the p54 shuttle and the twin bees shuttle.
!www.conwaylife.com/wiki/index.php?title=Centinal
      O......   ......O
      OOO....   ....OOO
      ...O...   ...O...
      ..OO...   ...OO..
      .......   .......
      .......   .......
      .......   .......
      .......   .......
      .......   .......
      .......   .......
      .....O.   .O.....
      ....OOO   OOO....
      ...OO.O   O.OO...
      .......   .......
      .......   .......
      ......O   O......
      ......O   O......
      .......   .......
      .......   .......
      .......   .......
      .......   .......
      .......   .......
      .......   .......
      .......   .......
      .......   .......
      ..OO...   ...OO..
      ..OO...   ...OO..
      .......   .......
      .......   .......
      .......   .......
      .......   .......
      .......   .......
      .......   .......
      .......   .......
      .......   .......
      .......   .......
      .......   .......
      .......   .......
      .......   .......
      ...OO.O   O.OO...
      ...O..O   O..O...
      ....OOO   OOO....
      ....         ....
      ....         ....
      ....         ....
      ....         ....
      ....         ....
      ....         ....
      ..OO         OO..
      ...O         O...
      OOO           OOO
      O               O




          ..O..O.O
          OO.O.OOO
          .O......O
          OO.....O

          .O.....OO
          O......O
          .OOO.O.OO
          .O.O..O




..O..O.O           ..O..O.O
OO.O.OOO           OO.O.OOO
.O......O          .O......O
OO.....O           OO.....O

.O.....OO          .O.....OO
O......O           O......O
.OOO.O.OO          .OOO.O.OO
.O.O..O            .O.O..O




          ..O..O.O
          OO.O.OOO
          .O......O
          OO.....O

          .O.....OO
          O......O
          .OOO.O.OO
          .O.O..O
          
          
          
          
          
      O......   ......O
      OOO....   ....OOO
      ...O...   ...O...
      ..OO...   ...OO..
      .......   .......
      .......   .......
      .......   .......
      .......   .......
      .......   .......
      .......   .......
      .....O.   .O.....
      ....OOO   OOO....
      ...OO.O   O.OO...
      .......   .......
      .......   .......
      ......O   O......
      ......O   O......
      .......   .......
      .......   .......
      .......   .......
      .......   .......
      .......   .......
      .......   .......
      .......   .......
      .......   .......
      ..OO...   ...OO..
      ..OO...   ...OO..
      .......   .......
      .......   .......
      .......   .......
      .......   .......
      .......   .......
      .......   .......
      .......   .......
      .......   .......
      .......   .......
      .......   .......
      .......   .......
      .......   .......
      ...OO.O   O.OO...
      ...O..O   O..O...
      ....OOO   OOO....
      ....         ....
      ....         ....
      ....         ....
      ....         ....
      ....         ....
      ....         ....
      ..OO         OO..
      ...O         O...
      OOO           OOO
      O               O`,
          x: (cols, w) => {
            return Math.floor(cols - w * 1.4);
          },
          y: (rows, w) => {
            return Math.floor((rows - w) / 2);
          },
        },
      ],
      cellSize: 5,
      targetFrameDelay: 1,
    }, // user
    {
      patterns: [
        {
          pattern: `!Name: Newshuttle-!Author: David Buckingham
!The first known period-28 oscillator-!Discovered in 1973
!https://www.conwaylife.com/wiki/Newshuttle
.....O...O.....
.....O...O.....
.....O...O.....
....OO...OO....
...O.O...O.O...
OOOOO.....OOOOO
...............
...............
...............
OOOOO.....OOOOO
...O.O...O.O...
....OO...OO....
.....O...O.....
.....O...O.....
.....O...O.....





.....O...O.....
.....O...O.....
.....O...O.....
....OO...OO....
...O.O...O.O...
OOOOO.....OOOOO
...............
...............
...............
OOOOO.....OOOOO
...O.O...O.O...
....OO...OO....
.....O...O.....
.....O...O.....
.....O...O.....`,
          x: (cols, w) => {
            return Math.floor((cols - w) / 2) - 40;
          },
          y: (rows, w) => {
            return Math.floor((rows - w) / 2);
          },
        },
        {
          pattern: `!Name: Newshuttle-!Author: David Buckingham
!The first known period-28 oscillator-!Discovered in 1973
!https://www.conwaylife.com/wiki/Newshuttle
                  .....O...O.....
                  .....O...O.....
                  .....O...O.....
                  ....OO...OO....
                  ...O.O...O.O...
                  OOOOO.....OOOOO
                  ...............
                  ...............
                  ...............
                  OOOOO.....OOOOO
                  ...O.O...O.O...
                  ....OO...OO....
                  .....O...O.....
                  .....O...O.....
                  .....O...O.....





..........................OO
....................O...O..O..O
..................OOO...OOO...OOO
........OO.......O...............O.......OO
.........O.......OO.....OOO.....OO.......O
.........O.O...........O...O...........O.O
..........OO...........OO.OO...........OO

...O..........OOO.................OOO..........O
...OOO.........O...................O.........OOO
......O.............OOO.....OOO.............O
.....OO..............O.......O..............OO


........O.................................O
........OO...............................OO
........O.................................O
...OO..................OO.OO..................OO
..O.O..................O...O..................O.O
..O.....................OOO.....................O
.OO.......O...............O.O...........O.......OO
..........OO...............OO..........OO
..........O.........OO..................O
OO...OO..........OO..O..........OO..........OO..
O.O.O.O..........O.OO..........O.O..........O.O.OO
..O.O..............O...........O..............O.O
.OO.O.O..........O.O..........OO.O..........O.O.O.O
.....OO..........OO..........O..OO..........OO...OO
..........O..................OO.........O
..........OO..........OO...............OO
.OO.......O...........O.O...............O.......OO
..O.....................OOO.....................O
..O.O..................O...O..................O.O
...OO..................OO.OO..................OO
........O.................................O
........OO...............................OO
........O.................................O


.....OO..............O.......O..............OO
......O.............OOO.....OOO.............O
...OOO.........O...................O.........OOO
...O..........OOO.................OOO..........O

..........OO...........OO.OO...........OO
.........O.O...........O...O...........O.O
.........O.......OO.....OOO.....OO.......O
........OO.......O...............O.......OO
..................OOO...OOO...OOO
....................O..O..O...O
.......................OO





                  .....O...O.....
                  .....O...O.....
                  .....O...O.....
                  ....OO...OO....
                  ...O.O...O.O...
                  OOOOO.....OOOOO
                  ...............
                  ...............
                  ...............
                  OOOOO.....OOOOO
                  ...O.O...O.O...
                  ....OO...OO....
                  .....O...O.....
                  .....O...O.....
                  .....O...O.....`,
          x: (cols, w) => {
            return Math.floor((cols - w) / 2) + 5;
          },
          y: (rows, w) => {
            return Math.floor((rows - w) / 2);
          },
        },
        {
          pattern: `!Name: Newshuttle-!Author: David Buckingham
!The first known period-28 oscillator-!Discovered in 1973
!https://www.conwaylife.com/wiki/Newshuttle
.....O...O.....
.....O...O.....
.....O...O.....
....OO...OO....
...O.O...O.O...
OOOOO.....OOOOO
...............
...............
...............
OOOOO.....OOOOO
...O.O...O.O...
....OO...OO....
.....O...O.....
.....O...O.....
.....O...O.....
  
  
  
  
  
.....O...O.....
.....O...O.....
.....O...O.....
....OO...OO....
...O.O...O.O...
OOOOO.....OOOOO
...............
...............
...............
OOOOO.....OOOOO
...O.O...O.O...
....OO...OO....
.....O...O.....
.....O...O.....
.....O...O.....`,
          x: (cols, w) => {
            return Math.floor((cols - w) / 2) + 50;
          },
          y: (rows, w) => {
            return Math.floor((rows - w) / 2);
          },
        },
      ],
      cellSize: 5,
      targetFrameDelay: 1,
    }, // ecosystem
  ];

  const canvasRef = useRef(null);
  const [isRunning, setIsRunning] = useState(false);
  const [grid, setGrid] = useState({});
  const [Here, setHere] = useState(indicator);
  const [lastTime, setLastTime] = useState(performance.now());
  var rows, cols;

  useEffect(() => {
    setHere(indicator);
    if (indicator === Here) {
      setGrid({});
    }
    setLastTime(performance.now());
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function initializeGrid() {
      rows = Math.floor(
        canvas.offsetHeight / PatternsArray[indicator]?.cellSize
      );
      cols = Math.floor(
        canvas.offsetWidth / PatternsArray[indicator]?.cellSize
      );
      canvas.width = cols * PatternsArray[indicator]?.cellSize;
      canvas.height = rows * PatternsArray[indicator]?.cellSize;
      setGrid({});
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw live cells
      for (const key in grid) {
        const [r, c] = key.split(",").map(Number);
        ctx.fillStyle = "#FBAB30"; // Live cell color
        ctx.fillRect(
          c * PatternsArray[indicator]?.cellSize,
          r * PatternsArray[indicator]?.cellSize,
          PatternsArray[indicator]?.cellSize,
          PatternsArray[indicator]?.cellSize
        );
      }

      // Draw grid lines
      ctx.strokeStyle = "#FFFFFF"; // Grid line color
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          ctx.strokeRect(
            c * PatternsArray[indicator]?.cellSize,
            r * PatternsArray[indicator]?.cellSize,
            PatternsArray[indicator]?.cellSize,
            PatternsArray[indicator]?.cellSize
          );
        }
      }
    }

    function setPatternFromInput(input, x, y) {
      const lines = input.trim().split("\n");

      // Skip the first three lines which contain metadata
      const patternLines = lines.slice(3);

      const patternWidth = Math.max(...patternLines.map((line) => line.length));
      const patternHeight = patternLines.length;

      const xOffset = x(cols, patternWidth);
      const yOffset = y(rows, patternHeight);

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

      setGrid((prevGrid) => ({ ...prevGrid, ...newGrid }));
    }

    initializeGrid();

    PatternsArray[indicator]?.patterns?.forEach((patternObj) => {
      setPatternFromInput(patternObj.pattern, patternObj.x, patternObj.y);
    });

    draw();
    setIsRunning(true);

    window.addEventListener("resize", initializeGrid);
    return () => {
      window.removeEventListener("resize", initializeGrid);
    };
  }, [indicator, grid]);

  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   const ctx = canvas.getContext("2d");

  //   function initializeGrid() {
  //     rows = Math.floor(
  //       window.innerHeight / PatternsArray[indicator]?.cellSize
  //     );
  //     cols = Math.floor(window.innerWidth / PatternsArray[indicator]?.cellSize);
  //     canvas.width = cols * PatternsArray[indicator]?.cellSize;
  //     canvas.height = rows * PatternsArray[indicator]?.cellSize;
  //     setGrid({});
  //   }

  //   function draw() {
  //     ctx.clearRect(0, 0, canvas.width, canvas.height);

  //     // Draw live cells
  //     for (const key in grid) {
  //       const [r, c] = key.split(",").map(Number);
  //       ctx.fillStyle = "#FBAB30"; // Live cell color
  //       ctx.fillRect(
  //         c * PatternsArray[indicator]?.cellSize,
  //         r * PatternsArray[indicator]?.cellSize,
  //         PatternsArray[indicator]?.cellSize,
  //         PatternsArray[indicator]?.cellSize
  //       );
  //     }

  //     // Draw grid lines
  //     ctx.strokeStyle = "#FFFFFF"; // Grid line color
  //     for (let r = 0; r < rows; r++) {
  //       for (let c = 0; c < cols; c++) {
  //         ctx.strokeRect(
  //           c * PatternsArray[indicator]?.cellSize,
  //           r * PatternsArray[indicator]?.cellSize,
  //           PatternsArray[indicator]?.cellSize,
  //           PatternsArray[indicator]?.cellSize
  //         );
  //       }
  //     }
  //   }

  //   function update() {
  //     const newGrid = {};
  //     const cellsToCheck = new Set();

  //     for (const key in grid) {
  //       const [r, c] = key.split(",").map(Number);
  //       cellsToCheck.add(`${r},${c}`);

  //       for (let i = -1; i <= 1; i++) {
  //         for (let j = -1; j <= 1; j++) {
  //           if (i === 0 && j === 0) continue; // Skip self
  //           cellsToCheck.add(`${r + i},${c + j}`);
  //         }
  //       }
  //     }

  //     for (const key of cellsToCheck) {
  //       const [r, c] = key.split(",").map(Number);
  //       const neighbors = countNeighbors(r, c);

  //       if (grid[key]) {
  //         if (neighbors === 2 || neighbors === 3) newGrid[key] = true; // Survives
  //       } else {
  //         if (neighbors === 3) newGrid[key] = true; // Becomes alive
  //       }
  //     }

  //     setGrid(newGrid);
  //   }

  //   function countNeighbors(row, col) {
  //     let count = 0;

  //     for (let i = -1; i <= 1; i++) {
  //       for (let j = -1; j <= 1; j++) {
  //         if (i === 0 && j === 0) continue; // Skip self
  //         const neighborKey = `${row + i},${col + j}`;
  //         if (grid[neighborKey]) {
  //           count++;
  //         }
  //       }
  //     }

  //     return count;
  //   }

  //   function gameLoop(currentTime) {
  //     const elapsedTime = currentTime - lastTime;

  //     if (
  //       isRunning &&
  //       elapsedTime >= PatternsArray[indicator]?.targetFrameDelay
  //     ) {
  //       setLastTime(currentTime);
  //       update();
  //       draw();
  //     }

  //     requestAnimationFrame(gameLoop);
  //   }

  //   setIsRunning(true);
  //   requestAnimationFrame(gameLoop);

  //   window.addEventListener("resize", initializeGrid);
  //   return () => {
  //     window.removeEventListener("resize", initializeGrid);
  //   };
  // }, [grid, isRunning, lastTime]);

  return (
    <div className="am-game-container" style={{ display: "flex" }}>
      <canvas
        ref={canvasRef}
        style={{
          width: "min(1440px,100%)",
          display: "block",
          margin: "0 auto",
        }}
      ></canvas>
    </div>
  );
}
