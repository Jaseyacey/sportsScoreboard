const { WorldCupScoreBoard } = require('./WorldCupScoreBoard');

const scoreboard = new WorldCupScoreBoard();

// Start matches
scoreboard.startMatch('Mexico', 'Canada');
scoreboard.startMatch('Spain', 'Brazil');
scoreboard.startMatch('Germany', 'France');


// Get and print summary
const summary = scoreboard.getSummary();
console.log(summary);
