import { create, StateCreator } from "zustand";
import createFishSlice from "@/shared/store/fishSlice";
import createBearSlice from "@/shared/store/bearSlice";
import { createSharedSlice } from "@/shared/store/sharedSlice";
import { BearSlice, FishSlice, SharedSlice } from "@/shared/store/types";

const useBoundStore = create<BearSlice & FishSlice & SharedSlice>()((...a) => ({
  ...createBearSlice(...a),
  ...createFishSlice(...a),
  ...createSharedSlice(...a),
}));

export default useBoundStore;
