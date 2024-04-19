import { WorldCupScoreBoard } from './worldCupScoreBoard';

describe('worldCupScoreBoard', () => {
  it('should start a match', () => {
    const worldCupScoreBoard = new WorldCupScoreBoard();
    worldCupScoreBoard.startMatch('Brazil', 'Germany');
    expect(worldCupScoreBoard['matches']).toEqual({ 'Brazil - Germany': { home: 0, away: 0 } });
  });
});
