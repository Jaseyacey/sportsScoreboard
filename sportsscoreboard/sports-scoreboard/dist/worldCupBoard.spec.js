"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const worldCupScoreBoard_1 = require("./worldCupScoreBoard");
describe('worldCupScoreBoard', () => {
    it('should start a match', () => {
        const worldCupScoreBoard = new worldCupScoreBoard_1.WorldCupScoreBoard();
        worldCupScoreBoard.startMatch('Brazil', 'Germany');
        expect(worldCupScoreBoard['matches']).toEqual({ 'Brazil - Germany': { home: 0, away: 0 } });
    });
});
