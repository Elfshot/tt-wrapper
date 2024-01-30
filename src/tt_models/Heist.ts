export interface Heist {
    master: {
        cut: number;
        source: number;
        ready: boolean;
    },
    slaves: [{
        cut: number;
        source: number;
        ready: boolean;
    }],
    take: number;
    limit: number;
    kills: number;
}