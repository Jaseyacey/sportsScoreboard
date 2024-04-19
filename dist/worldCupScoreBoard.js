"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorldCupScoreBoard = void 0;
class WorldCupScoreBoard {
    constructor() {
        this.matches = {};
    }
    // Start a match between two teams
    startMatch(homeTeam, awayTeam) {
        this.matches[`${homeTeam} - ${awayTeam}`] = { home: 0, away: 0 };
        if (homeTeam === '' || awayTeam === '') {
            throw new Error('The team name is required');
        }
    }
    // Update the score of a match
    updateScore(homeTeam, awayTeam, homeGoals, awayGoals) {
        const key = `${homeTeam} - ${awayTeam}`;
        if (this.matches.hasOwnProperty(key)) {
            this.matches[key].home += homeGoals;
            this.matches[key].away += awayGoals;
        }
        else {
            throw new Error(`No ongoing match between ${homeTeam} and ${awayTeam}`);
        }
    }
    // Finish a match
    finishMatch(homeTeam, awayTeam) {
        const key = `${homeTeam} - ${awayTeam}`;
        if (this.matches.hasOwnProperty(key)) {
            delete this.matches[key];
        }
        else {
            throw new Error(`No ongoing match between ${homeTeam} and ${awayTeam}`);
        }
    }
    // Get the summary of all matches
    getSummary() {
        const sortedMatches = Object.keys(this.matches)
            // Sort the matches by the difference in scores
            .sort((a, b) => {
            const scoreDiffA = this.matches[a].home - this.matches[a].away;
            const scoreDiffB = this.matches[b].home - this.matches[b].away;
            // If the difference in scores is different, sort by the difference in scores
            if (scoreDiffA !== scoreDiffB) {
                return scoreDiffB - scoreDiffA;
            }
            // If the difference in scores is the same, sort by the total score
            const totalScoreA = this.matches[a].home + this.matches[a].away;
            const totalScoreB = this.matches[b].home + this.matches[b].away;
            return totalScoreB - totalScoreA;
        });
        // Return the summary of the matches
        return sortedMatches.map(match => {
            const [homeTeam, awayTeam] = match.split(' - ');
            const { home, away } = this.matches[match];
            return `${homeTeam} - ${awayTeam} ${home} - ${away}`;
        });
    }
}
exports.WorldCupScoreBoard = WorldCupScoreBoard;
