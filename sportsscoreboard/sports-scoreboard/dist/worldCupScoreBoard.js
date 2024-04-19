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
}
exports.WorldCupScoreBoard = WorldCupScoreBoard;
