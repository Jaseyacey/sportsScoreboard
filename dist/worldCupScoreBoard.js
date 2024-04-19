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
    finishMatch(homeTeam, awayTeam) {
        const key = `${homeTeam} - ${awayTeam}`;
        if (this.matches.hasOwnProperty(key)) {
            delete this.matches[key];
        }
        else {
            throw new Error(`No ongoing match between ${homeTeam} and ${awayTeam}`);
        }
    }
    getSummary() {
        const sortedMatches = Object.keys(this.matches)
            .sort((a, b) => {
            const scoreDiffA = this.matches[a].home - this.matches[a].away;
            const scoreDiffB = this.matches[b].home - this.matches[b].away;
            if (scoreDiffA !== scoreDiffB) {
                return scoreDiffB - scoreDiffA;
            }
            const totalScoreA = this.matches[a].home + this.matches[a].away;
            const totalScoreB = this.matches[b].home + this.matches[b].away;
            return totalScoreB - totalScoreA;
        });
        return sortedMatches.map(match => {
            const [homeTeam, awayTeam] = match.split(' - ');
            const { home, away } = this.matches[match];
            return `${homeTeam} - ${awayTeam} ${home} - ${away}`;
        });
    }
}
exports.WorldCupScoreBoard = WorldCupScoreBoard;
