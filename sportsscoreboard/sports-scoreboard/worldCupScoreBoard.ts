interface MatchScore {
    home: number;
    away: number;
}

export class WorldCupScoreBoard {
    private matches: { [key: string]: MatchScore } = {};

    startMatch(homeTeam: string, awayTeam: string): void {
        this.matches[`${homeTeam} - ${awayTeam}`] = { home: 0, away: 0 };
    }
}