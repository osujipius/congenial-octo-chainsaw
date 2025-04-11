import { StateCreator } from "zustand";
import { BearSlice, FishSlice, SharedSlice } from "@/shared/store/types";

export const createSharedSlice: StateCreator<
  BearSlice & FishSlice,
  [],
  [],
  SharedSlice
> = (set, get) => ({
  addBoth: () => {
    get().addBear();
    get().addFish();
  },
  getBoth: () => get().bears + get().fishes,
});
