import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    plantText: "",
    test: "",
  },
  reducers: {
    setSearchPlantText: (state, action) => {
      state.plantText = action.payload;
    },
  },
});

export const { setSearchPlantText } = searchSlice.actions;

export default searchSlice;
