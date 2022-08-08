import { configureStore } from "@reduxjs/toolkit";
import plantsReducer from "./features/plants/plantsSlice";
import searchReducer from "./features/search/searchSlice";

export default configureStore({
  reducer: {
    plants: plantsReducer,
    search: searchReducer,
  },
});
