interface MatchScore {
    home: number;
    away: number;
}

export class WorldCupScoreBoard {
    private matches: { [key: string]: MatchScore } = {};

    startMatch(homeTeam: string, awayTeam: string): void {
        this.matches[`${homeTeam} - ${awayTeam}`] = { home: 0, away: 0 };
    }

    updateScore(homeTeam: string, awayTeam: string, homeScore: number, awayScore: number): void {
        const key = `${homeTeam} - ${awayTeam}`;
        if (this.matches.hasOwnProperty(key)) {
            this.matches[key] = { home: homeScore, away: awayScore };
        } else {
            throw new Error(`No ongoing match between ${homeTeam} and ${awayTeam}`);
        }
    }

    getSummary(): string[] {
        const sortedMatches = Object.keys(this.matches)
            .sort((a, b) => {
                const scoreA = this.matches[a].home + this.matches[a].away;
                const scoreB = this.matches[b].home + this.matches[b].away;
                return scoreB - scoreA || Object.keys(this.matches).indexOf(b) - Object.keys(this.matches).indexOf(a);
            });
        return sortedMatches.map(match => {
            const [homeTeam, awayTeam] = match.split(' - ');
            const { home, away } = this.matches[match];
            return `${homeTeam} - ${awayTeam} ${home} - ${away}`;
        });
    }

    getMatchScore(homeTeam: string, awayTeam: string): MatchScore {
        const key = `${homeTeam} - ${awayTeam}`;
        if (this.matches.hasOwnProperty(key)) {
            return this.matches[key];
        } else {
            throw new Error(`No ongoing match between ${homeTeam} and ${awayTeam}`);
        }
    }
}
