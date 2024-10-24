"use client";
import React, { useRef, useEffect } from "react";

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
            return Math.floor((cols - w) / 2) + 4;
          },
          y: (rows, w) => {
            return Math.floor((rows - w) / 2);
          },
        },
      ],
      cellSize: 5,
      targetFrameDelay: 70,
    }, // hero
    {
      patterns: [
        {
          pattern: `! Inline inverter-! A reaction in which the Gosper glider gun can be used to invert the
!  presence or absence of a glider in a period 30 glider stream.
! www.conwaylife.com/wiki/index.php?title=Gosper_glider_gun
.............O......................
............OOOO....................
OO.........OO.O.O......O.O..........
OO........OOO.O..O...O...O..........
...........OO.O.O....O............OO
............OOOO....O....O........OO
.............O.......O..............
.....................O...O..........
.......................O.O..........
....................................
...............OOO..................
.................O..................
................O...................
....................................
....................................
....................................
....................................
........OO..........................
.......O.O..........................
.........O..........................
………………..………………...............O......................
………………..………………..............OOOO....................
………………..………………..OO.........OO.O.O......O.O..........
………………..………………..OO........OOO.O..O...O...O..........
………………..……………….............OO.O.O....O............OO
………………..………………..............OOOO....O....O........OO
………………..………………...............O.......O..............
………………..……………….......................O...O..........
………………..……………….........................O.O..........
………………..………………......................................
………………..……………….................OOO..................
………………..………………...................O..................
………………..………………..................O...................
………………..………………......................................
………………..………………......................................
………………..………………......................................
………………..………………......................................
………………..………………..........OO..........................
………………..……………….........O.O..........................
………………..………………...........O..........................
……….……….………………..…………………………………..............O......................
……….……….………………..………………………………….............OOOO....................
……….……….………………..………………………………….OO.........OO.O.O......O.O..........
……….……….………………..………………………………….OO........OOO.O..O...O...O..........
……….……….………………..…………………………………............OO.O.O....O............OO
……….……….………………..………………………………….............OOOO....O....O........OO
……….……….………………..…………………………………..............O.......O..............
……….……….………………..…………………………………......................O...O..........
……….……….………………..…………………………………........................O.O..........
……….……….………………..………………………………….....................................
……….……….………………..…………………………………................OOO..................
……….……….………………..…………………………………..................O..................
……….……….………………..………………………………….................O...................
……….……….………………..………………………………….....................................
……….……….………………..………………………………….....................................
……….……….………………..………………………………….....................................
……….……….………………..………………………………….....................................
……….……….………………..………………………………….........OO..........................
……….……….………………..…………………………………........O.O..........................
……….……….………………..…………………………………..........O..........................
……….………………………………………………………………………………………………………….............O......................
……….…………………………………………………………………………………………………………............OOOO....................
……….…………………………………………………………………………………………………………OO.........OO.O.O......O.O..........
……….…………………………………………………………………………………………………………OO........OOO.O..O...O...O..........
……….…………………………………………………………………………………………………………...........OO.O.O....O............OO
……….…………………………………………………………………………………………………………............OOOO....O....O........OO
……….………………………………………………………………………………………………………….............O.......O..............
……….………………………………………………………………………………………………………….....................O...O..........
……….………………………………………………………………………………………………………….......................O.O..........
……….…………………………………………………………………………………………………………....................................
……….…………………………………………………………………………………………………………...............OOO..................
……….………………………………………………………………………………………………………….................O..................
……….…………………………………………………………………………………………………………................O...................
……….…………………………………………………………………………………………………………....................................
……….…………………………………………………………………………………………………………....................................
……….…………………………………………………………………………………………………………....................................
……….…………………………………………………………………………………………………………....................................
……….…………………………………………………………………………………………………………........OO..........................
……….………………………………………………………………………………………………………….......O.O..........................
……….………………………………………………………………………………………………………….........O..........................`,
          x: (cols, w) => {
            return (cols - w) * 0 + 30;
          },
          y: (rows, w) => {
            return rows - w - 5;
          },
        },
      ],
      cellSize: 5,
      targetFrameDelay: 70,
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
      targetFrameDelay: 70,
    }, // business
    {
      patterns: [
        {
          pattern: `! p6 diagonal wickstretcher 1
! Paul Tooke, Jason Summers and Matthias Merzenich 
! The first known p6 diagonal wickstretcher; partially constructed in September 2004 and finished in January 2013
......................................OO.....................
.....................................OO......................
.......................................O.....................
.........................................OO..................
........................................O....................
................................OO...........................
................................O..OO..O..O..................
................................O.OOO..O.....................
.................................O....O..O...................
...........................O.....O......O....................
..........................OO.....O..O........................
..........................O.O................................
.................................O...........................
.......................O.....O.OOO.O.........................
......................OO....OO...O.......................OO..
......................O.O..OO..O.O.O.....OOOO...........OOOO.
..........................O......O.O....O....O.........O..O.O
.........................OO.OO..........O...O.O.......O.O..OO
..........................O..............O...O.O.....O.O.....
...............................................O....OO.......
..........................O....................O....OOO......
........................OO..................O..O.....O.O.....
..............OO.......O.O...................OO.......OO.....
.............OO.......O...........................O..........
...............O.....O..OO.O.....................OOO.........
.................O...OO.O...O....................OOO.........
..........OO....OOO.O............................OOO.........
.........OO....O........O..OO.O..........OO......OOO.........
...........O..OO.O.......O.O...O........OOOO......O..........
.............OO..O.....................O.O..O................
...........................O..OO.O.....OO..O.O...............
.............O.O............O.O...O.........O.O..OO..........
.....OOO.....O................................OO..OO.........
.....O..OOO.OOOOO.............O..OO.O........OOO.OOO.........
.......O.......................O.O...O......O.O..OOO.........
......OO.....O.OO...........................OO...OOO.........
......OO..O......................O..OO.O..........O..........
.O................................O.O...O....................
OO......O....................................................
O.O...OO.....................OO.....O..OO.O..................
....O....O......OO..........O.O......O.O...O...OOOOO.........
...O....O......O..O........OOO...............................
...O..O........O...........OO..........O..OO.OO.OO...........
...............O............O.O.........O.O.....O............
...............O.O...O.......O.O..OO..........O..............
................O.O...O.......O..O.O......O..O...............
.................O....O........OOOO.......O.O................
..................OOOO..........OO......O....................
........................................O.OO.................
........................OOOO...O.OOO....O.O..................
.......................OOOOOO..OOOOOO...O....................
........................OOOO....OOOO....O....................
...................OO........................................
..................OOOO.......................................
.................O..O.O......................................
................O.O..OO......................................
...............O.O...........................................
..............OO.............................................
..............OOO............................................
...............O.O...........................................
................OO...........................................`,
          x: (cols, w) => {
            return Math.floor(cols - w - 5);
          },
          y: (rows, w) => {
            return Math.floor(rows - w - 15);
          },
        },
      ],
      cellSize: 5,
      targetFrameDelay: 70,
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




..O..O.O               ..O..O.O
OO.O.OOO               OO.O.OOO
.O......O              .O......O
OO.....O               OO.....O

.O.....OO              .O.....OO
O......O               O......O
.OOO.O.OO              .OOO.O.OO
.O.O..O                .O.O..O



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




..O..O.O               ..O..O.O
OO.O.OOO               OO.O.OOO
.O......O              .O......O
OO.....O               OO.....O

.O.....OO              .O.....OO
O......O               O......O
.OOO.O.OO              .OOO.O.OO
.O.O..O                .O.O..O



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




..O..O.O               ..O..O.O
OO.O.OOO               OO.O.OOO
.O......O              .O......O
OO.....O               OO.....O

.O.....OO              .O.....OO
O......O               O......O
.OOO.O.OO              .OOO.O.OO
.O.O..O                .O.O..O




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
      targetFrameDelay: 70,
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
            return Math.floor((cols - w) / 2) - 44;
          },
          y: (rows, w) => {
            return Math.floor((rows - w) / 2) + 8;
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
            return Math.floor((cols - w) / 2) + 1;
          },
          y: (rows, w) => {
            return Math.floor((rows - w) / 2) + 8;
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
            return Math.floor((cols - w) / 2) + 44;
          },
          y: (rows, w) => {
            return Math.floor((rows - w) / 2) + 8;
          },
        },
      ],
      cellSize: 5,
      targetFrameDelay: 70,
    }, // ecosystem
  ];

  const canvasRef = useRef(null);
  const gridRef = useRef({});
  const isRunningRef = useRef(true);
  const lastTimeRef = useRef(performance.now());

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let rows, cols;

    const initializeGrid = () => {
      rows = Math.floor(
        canvas.offsetHeight / PatternsArray[indicator]?.cellSize
      );
      cols = Math.floor(
        canvas.offsetWidth / PatternsArray[indicator]?.cellSize
      );
      canvas.width = cols * PatternsArray[indicator]?.cellSize;
      canvas.height = rows * PatternsArray[indicator]?.cellSize;
      gridRef.current = {};
    };

    const setPatternFromInput = (input, x, y) => {
      const lines = input.trim().split("\n").slice(3); // Ignore metadata
      const patternWidth = Math.max(...lines.map((line) => line.length));
      const xOffset = x(cols, patternWidth);
      const yOffset = y(rows, lines.length);

      lines.forEach((line, rIndex) => {
        [...line].forEach((char, cIndex) => {
          if (char === "O") {
            const row = yOffset + rIndex;
            const col = xOffset + cIndex;
            gridRef.current[`${row},${col}`] = true;
          }
        });
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const grid = gridRef.current;

      Object.keys(grid).forEach((key) => {
        const [r, c] = key.split(",").map(Number);
        ctx.fillStyle = "#FBAB30";
        ctx.fillRect(
          c * PatternsArray[indicator]?.cellSize,
          r * PatternsArray[indicator]?.cellSize,
          PatternsArray[indicator]?.cellSize,
          PatternsArray[indicator]?.cellSize
        );
      });

      ctx.strokeStyle = "#fcfbf9";
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
    };

    const countNeighbors = (r, c) => {
      let count = 0;
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (i === 0 && j === 0) continue;
          if (gridRef.current[`${r + i},${c + j}`]) count++;
        }
      }
      return count;
    };

    const update = () => {
      const newGrid = {};
      const cellsToCheck = new Set();

      Object.keys(gridRef.current).forEach((key) => {
        const [r, c] = key.split(",").map(Number);
        cellsToCheck.add(`${r},${c}`);
        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            cellsToCheck.add(`${r + i},${c + j}`);
          }
        }
      });

      cellsToCheck.forEach((key) => {
        const [r, c] = key.split(",").map(Number);
        const neighbors = countNeighbors(r, c);
        if (gridRef.current[key]) {
          if (neighbors === 2 || neighbors === 3) newGrid[key] = true;
        } else if (neighbors === 3) newGrid[key] = true;
      });

      gridRef.current = newGrid;
    };

    const gameLoop = (currentTime) => {
      if (!isRunningRef.current) return;
      const elapsedTime = currentTime - lastTimeRef.current;

      if (elapsedTime >= PatternsArray[indicator]?.targetFrameDelay) {
        lastTimeRef.current = currentTime;
        update();
        draw();
      }

      requestAnimationFrame(gameLoop);
    };

    initializeGrid();
    PatternsArray[indicator]?.patterns?.forEach((patternObj) => {
      setPatternFromInput(patternObj.pattern, patternObj.x, patternObj.y);
    });

    draw();
    isRunningRef.current = true;
    requestAnimationFrame(gameLoop);

    const resizeHandler = () => {
      initializeGrid();
      draw();
    };

    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
      isRunningRef.current = false;
    };
  }, [indicator]);

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
