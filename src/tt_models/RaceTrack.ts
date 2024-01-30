export interface Track {
  class: string;
  type: string;
  length: number;
  index: number;
  name: string;
  wr: {
    name: string;
    time: number;
    vehicle: string;
  };
}

export interface RacingMapCoords {
  z: number;
  x: number;
  blip: number;
  y: number;
  h: number;
}

export interface RacingMapData {
  checkpoints: RacingMapCoords[];
  start: RacingMapCoords;
  name: string;
  finish: RacingMapCoords;
}
