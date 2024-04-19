import { WorldCupScoreBoard } from './worldCupScoreBoard';

describe('worldCupScoreBoard', () => {
  it('should show the greeting', () => {
    expect(new WorldCupScoreBoard().greeting).toBe('Hello, TypeScript!');
  });
});
