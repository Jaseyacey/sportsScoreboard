"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const worldCupScoreBoard_1 = require("./worldCupScoreBoard");
describe('worldCupScoreBoard', () => {
    it('should start a match', () => {
        const worldCupScoreBoard = new worldCupScoreBoard_1.WorldCupScoreBoard();
        worldCupScoreBoard.startMatch('Brazil', 'Germany');
        expect(worldCupScoreBoard['matches']).toEqual({ 'Brazil - Germany': { home: 0, away: 0 } });
    });
    it('should update the score of a match', () => {
        const worldCupScoreBoard = new worldCupScoreBoard_1.WorldCupScoreBoard();
        worldCupScoreBoard.startMatch('Brazil', 'Germany');
        worldCupScoreBoard.updateScore('Brazil', 'Germany', 2, 1);
        expect(worldCupScoreBoard['matches']).toEqual({ 'Brazil - Germany': { home: 2, away: 1 } });
    });
});
