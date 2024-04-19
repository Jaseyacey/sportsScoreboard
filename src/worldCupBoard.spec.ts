import { WorldCupScoreBoard } from './worldCupScoreBoard';

describe('worldCupScoreBoard', () => {
  it('should start a match', () => {
    const worldCupScoreBoard = new WorldCupScoreBoard();
    worldCupScoreBoard.startMatch('Brazil', 'Germany');
    expect(worldCupScoreBoard['matches']).toEqual({ 'Brazil - Germany': { home: 0, away: 0 } });
  });

  it('should update the score of a match', () => {
    const worldCupScoreBoard = new WorldCupScoreBoard();
    worldCupScoreBoard.startMatch('Brazil', 'Germany');
    worldCupScoreBoard.updateScore('Brazil', 'Germany', 2, 1);
    expect(worldCupScoreBoard['matches']).toEqual({ 'Brazil - Germany': { home: 2, away: 1 } });
  });
});

