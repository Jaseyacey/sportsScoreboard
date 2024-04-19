import { WorldCupScoreBoard } from './worldCupScoreBoard';

describe('FootballWorldCupScoreboard', () => {
  let scoreboard: WorldCupScoreBoard;

  beforeEach(() => {
      scoreboard = new WorldCupScoreBoard();
  });

  it('should start a match', () => {
      scoreboard.startMatch('Mexico', 'Canada');
      expect(scoreboard['matches']).toHaveProperty('Mexico - Canada');
  });

  it('should update score', () => {
      scoreboard.startMatch('Spain', 'Brazil');
      scoreboard.updateScore('Spain', 'Brazil', 10, 2);
      expect(scoreboard['matches']['Spain - Brazil']).toEqual({ home: 10, away: 2 });
  });

  it('should finish match', () => {
      scoreboard.startMatch('Germany', 'France');
      scoreboard.finishMatch('Germany', 'France');
      expect(scoreboard['matches']).not.toHaveProperty('Germany - France');
  });

  it('should get summary', () => {
      scoreboard.startMatch('Mexico', 'Canada');
      scoreboard.startMatch('Spain', 'Brazil');
      scoreboard.startMatch('Germany', 'France');
      scoreboard.updateScore('Mexico', 'Canada', 0, 5);
      scoreboard.updateScore('Spain', 'Brazil', 10, 2);
      scoreboard.updateScore('Germany', 'France', 2, 2);

      const summary = scoreboard.getSummary();
      const expectedSummary = [
          'Spain - Brazil 10 - 2',
          'Germany - France 2 - 2',
          'Mexico - Canada 0 - 5',
      ];

      expect(summary).toEqual(expectedSummary);
  });
});
