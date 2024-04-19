const { WorldCupScoreBoard } = require("./WorldCupScoreBoard");

const scoreboard = new WorldCupScoreBoard();

// Start matches
scoreboard.startMatch("Mexico", "Canada");
scoreboard.startMatch("Spain", "Brazil");
scoreboard.startMatch("Germany", "France");

// Update scores
scoreboard.updateScore("Mexico", "Canada", 2, 1);
scoreboard.updateScore("Spain", "Brazil", 3, 2);
scoreboard.updateScore("Germany", "France", 1, 1);

// Finish matches
scoreboard.finishMatch("Mexico", "Canada");

// Get and print summary
const summary = scoreboard.getSummary();
console.log(summary);
