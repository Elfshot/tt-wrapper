export interface Streak {
    code: string;
    user_id: number;
    data: Data;
}

interface Data {
    record: number;
    days: number;
    streak: number;
}