"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const worldCupScoreBoard_1 = require("./worldCupScoreBoard");
describe('worldCupScoreBoard', () => {
    it('should show the greeting', () => {
        expect(new worldCupScoreBoard_1.WorldCupScoreBoard().greeting).toBe('Hello, TypeScript!');
    });
});
