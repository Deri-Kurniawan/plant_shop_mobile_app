import { createSlice } from "@reduxjs/toolkit";
import { PLANTS } from "../../../constants";

export const plantsSlice = createSlice({
  name: "plants",
  initialState: {
    all: [...PLANTS],
    single: [],
  },
  reducers: {
    setPlants: (state, action) => {
      state.all = action.payload;
    },
    getPlant: (state, action) => {
      state.single = state.all.find((p) => p.id === action.payload);
    },
  },
});

export const { setPlants, getPlant } = plantsSlice.actions;

export default plantsSlice.reducer;
