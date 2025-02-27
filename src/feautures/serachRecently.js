import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchRecentlyObject: [],
};

const searchRecentlySlice = createSlice({
  name: "serachRecentlyComponent",
  initialState,
  reducers: {
    addserachRecently: (state, action) => {
      state.favoriteObject.push(action.payload);
    },
    removeserachRecently: (state, action) => {
      state.favoriteObject = state.favoriteObject.filter(
        (item) => item.lon !== action.payload
      );
    },
  },
});

export default searchRecentlySlice.reducer;
export const { addserachRecently , removeserachRecently } = searchRecentlySlice.actions;
