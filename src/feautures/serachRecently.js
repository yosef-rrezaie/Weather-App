import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchRecentlyObject: [],
};

const searchRecentlySlice = createSlice({
  name: "serachRecentlyComponent",
  initialState,
  reducers: {
    addserachRecently: (state, action) => {
      state.searchRecentlyObject.push(action.payload);
    },
    removeserachRecently: (state, action) => {
      if (state.searchRecentlyObject.length <= 1) {
        return;
      }
      state.searchRecentlyObject = state.searchRecentlyObject.filter(
        (item) => item.lon !== action.payload
      );
    },
  },
});

export default searchRecentlySlice.reducer;
export const { addserachRecently, removeserachRecently } =
  searchRecentlySlice.actions;
