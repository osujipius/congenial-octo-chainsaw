import { StateCreator } from "zustand";
import { BearSlice, FishSlice } from "@/shared/store/types";

const createFishSlice: StateCreator<
  BearSlice & FishSlice,
  [],
  [],
  FishSlice
> = (set) => ({
  fishes: 0,
  addFish: () => set((state) => ({ fishes: state.fishes + 1 })),
});

export default createFishSlice;
