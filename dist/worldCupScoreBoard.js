"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorldCupScoreBoard = void 0;
class WorldCupScoreBoard {
    constructor() {
        this.matches = {};
    }
    startMatch(homeTeam, awayTeam) {
        this.matches[`${homeTeam} - ${awayTeam}`] = { home: 0, away: 0 };
    }
    updateScore(homeTeam, awayTeam, homeScore, awayScore) {
        const key = `${homeTeam} - ${awayTeam}`;
        if (this.matches.hasOwnProperty(key)) {
            this.matches[key] = { home: homeScore, away: awayScore };
        }
        else {
            throw new Error(`No ongoing match between ${homeTeam} and ${awayTeam}`);
        }
    }
    getSummary() {
        const sortedMatches = Object.keys(this.matches)
            .sort((a, b) => {
            const scoreA = this.matches[a].home + this.matches[a].away;
            const scoreB = this.matches[b].home + this.matches[b].away;
            return scoreB - scoreA || Object.keys(this.matches).indexOf(b) - Object.keys(this.matches).indexOf(a);
        });
        return sortedMatches.map(match => {
            const [homeTeam, awayTeam] = match.split(' - ');
            const { home, away } = this.matches[match];
            return `${homeTeam} - ${awayTeam} ${home} - ${away}`;
        });
    }
}
exports.WorldCupScoreBoard = WorldCupScoreBoard;
