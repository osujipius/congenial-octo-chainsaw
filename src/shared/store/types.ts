export type BearSlice = {
  bears: number;
  addBear: () => void;
  eatFish: () => void;
};

export type FishSlice = {
  fishes: number;
  addFish: () => void;
};

export type SharedSlice = {
  addBoth: () => void;
  getBoth: () => void;
};
