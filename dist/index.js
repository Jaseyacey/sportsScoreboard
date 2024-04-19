"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const worldCupScoreBoard_1 = require("./worldCupScoreBoard");
const scoreboard = new worldCupScoreBoard_1.WorldCupScoreBoard();
// Start matches
scoreboard.startMatch('Mexico', 'Canada');
scoreboard.startMatch('Spain', 'Brazil');
scoreboard.startMatch('Germany', 'France');
// Get and print summary
const summary = scoreboard.getSummary();
console.log(summary);
