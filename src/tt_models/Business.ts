export interface Business {
  user_id: number;
  code: string;
  businesses: {
    [business: string]: number;
  };
}

export interface LiveBusinessStacks {
  stackLimit: number;
  businesses: {
    [business: string]: {
      stacks: number;
      earnings: number;
    }
  };
  totalStacks: number;
}