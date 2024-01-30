interface Top {
  user_id: number;
  username: string;
  amount: number;
}

export interface Top10 {
  stat: string;
  top: Top[];
  code: string;
}

interface statsData {
  name: string;
  stat: string;
  amount: number;
}

export interface Stats {
  used_id: number;
  code: string;
  data: statsData[];
}

