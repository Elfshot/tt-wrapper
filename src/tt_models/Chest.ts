export interface Chest {
  data_type: string;
  data: {
    [item: string]: {
      amount: number
      weight?: number
      name?: string
    }
  };
  code: string;
  chest: string;
}

export interface Storages {
  code: string;
  user_id: number;
  storages: {
    name: string;
    inventory: {
      [item: string]: {
        amount: number
      }
    };
  }[];
}

export interface Trunks {
  code: string;
  user_id: string;
  trunks: [{
    type: string;
    vehicle: string;
    inventory: {
      [item: string]: {
        amount: number
      }
    }
  }]
}